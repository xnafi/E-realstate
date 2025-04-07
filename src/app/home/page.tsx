import Banner from "@/components/view/Banner";
import ExploreCities from "@/components/view/ExploreCities";
import InquiryForm from "@/components/view/InquiryForm";
import Lifestyles from "@/components/view/Lifestyles";
import NewsLetter from "@/components/view/NewsLetter";
import PartnerLogo from "@/components/view/PartnerLogo";
import Welcome from "@/components/view/Welcome";

export default function HomePage() {
    return (
      <div className="">
      <Banner />
      <Welcome />
      <InquiryForm />
      <Lifestyles />
      <ExploreCities />
      <PartnerLogo />
      <NewsLetter />
      </div>
    );
  }