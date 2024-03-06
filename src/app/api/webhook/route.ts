import {
  createMemberSubscription,
  updateMemberSubscription,
} from "@/graphql/mutations";
import { listMemberSubscriptions } from "@/graphql/queries";
import { stripe } from "@/lib/stripe";
import { generateClient } from "aws-amplify/api";
import { setEngine } from "crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
export async function POST(req: Request) {
  await Amplify.configure(config);
  const client = generateClient();
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    return new NextResponse("Webhook error", { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    if (!session?.metadata?.orgId) {
      return new NextResponse("Org ID is required", { status: 400 });
    }

    await client.graphql({
      query: createMemberSubscription,
      variables: {
        input: {
          orgId: session.metadata?.orgId,
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ).toISOString(),
        },
      },
    });
  }

  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    const memberInfoData = await client.graphql({
      query: listMemberSubscriptions,
      variables: {
        filter: {
          stripeSubscriptionId: { eq: subscription.id },
        },
      },
    });
    const memberInfo = memberInfoData.data.listMemberSubscriptions?.items[0];

    if (memberInfo) {
      await client.graphql({
        query: updateMemberSubscription,
        variables: {
          input: {
            id: memberInfo.id,
            _version: memberInfo._version,
            stripePriceId: subscription.items.data[0].price.id,
            stripeCurrentPeriodEnd: new Date(
              subscription.current_period_end * 1000
            ).toISOString(),
          },
        },
      });
    }
  }

  return new NextResponse(null, { status: 200 });
}
