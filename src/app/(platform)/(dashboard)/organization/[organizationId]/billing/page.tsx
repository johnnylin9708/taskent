import { checkSubscription } from "@/lib/subscription";
import { Info } from "../components/info";
import { Separator } from "@/components/ui/separator";
import { SubscriptionButton } from "./components/subscriptionButton";

const BillingPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default BillingPage;
