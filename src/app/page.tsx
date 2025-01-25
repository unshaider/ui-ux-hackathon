import BrandList from "@/components/layout/BrandsList";
import BrowseByDressStyle from "@/components/layout/BrowseSection";
import Hero from "@/components/layout/Hero";
import ProductSections from "@/components/layout/NewArrivals";
import Testimonial from "@/components/layout/Testimonial";
import TopRatings from "@/components/layout/TopRatings";
import TopSelling from "@/components/layout/TopSelling";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandList />
      <ProductSections />
      <TopSelling />
      <BrowseByDressStyle />
      <Testimonial />
    </main>
  );
}
