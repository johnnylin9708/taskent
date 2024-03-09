import { checkSubscription } from "@/lib/subscription";
import { PersonalInfo } from "../components/personalInfo";
import { Separator } from "@/components/ui/separator";

const PersonalCardsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div className="w-full">
      <PersonalInfo isPro={isPro} />
      <Separator className="my-2" />
    </div>
  );
};

export default PersonalCardsPage;
