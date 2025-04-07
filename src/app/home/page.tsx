import Banner from "@/components/view/Banner";
import ExploreCities from "@/components/view/ExploreCities";
import FeaturedListings from "@/components/view/FeaturedListings";
import GetInTouch from "@/components/view/GetInTouch";
import InquiryForm from "@/components/view/InquiryForm";
import Lifestyles from "@/components/view/Lifestyles";
import NewsLetter from "@/components/view/NewsLetter";
import PartnerLogo from "@/components/view/PartnerLogo";
import Properties from "@/components/view/Properties";
import Welcome from "@/components/view/Welcome";

export default function HomePage() {
    return (
      <div className="">
      <Banner />
      <Welcome />
      <FeaturedListings />
      <InquiryForm />
      <Lifestyles />
      <Properties />
      <ExploreCities />
      <GetInTouch />
      <PartnerLogo />
      <NewsLetter />
      </div>
    );
  }