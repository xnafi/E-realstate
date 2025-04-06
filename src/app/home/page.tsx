import Banner from "@/components/view/Banner";
import ExploreCities from "@/components/view/ExploreCities";
import NewsLetter from "@/components/view/NewsLetter";
import Welcome from "@/components/view/Welcome";

export default function HomePage() {
    return (
      <div className="">
      <Banner />
      <Welcome />
      <ExploreCities />
      <NewsLetter />
      </div>
    );
  }