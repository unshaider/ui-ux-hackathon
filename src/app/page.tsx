import BrandList from "@/components/layout/BrandsList";
import BrowseByDressStyle from "@/components/layout/BrowseSection";
import Hero from "@/components/layout/Hero";
import ProductSections from "@/components/layout/ProductSections";
import Testimonial from "@/components/layout/Testimonial";
import TopRatings from "@/components/layout/TopRatings";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Hero />
      <BrandList />
      <ProductSections />
      <TopRatings />
      <BrowseByDressStyle />
      <Testimonial />
    </main>
  );
}
