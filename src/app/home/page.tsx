import Banner from "@/components/view/Banner";
import ExploreCities from "@/components/view/ExploreCities";
import InquiryForm from "@/components/view/InquiryForm";
import NewsLetter from "@/components/view/NewsLetter";
import Welcome from "@/components/view/Welcome";

export default function HomePage() {
    return (
      <div className="">
      <Banner />
      <Welcome />
      <InquiryForm />
      <ExploreCities />
      <NewsLetter />
      </div>
    );
  }