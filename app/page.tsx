import HeroSlider from "@/components/Banner";
import BestSeller from "@/components/BestSeller";
import BrandSlider from "@/components/BrandSlider";
import SimpleFAQComponent from "@/components/FAQComponent";
import AboutSection from "@/components/AboutSection";
import HappyCustomersGallery from "@/components/HappyCustomerGallery";
import ProductSwiper from "@/components/ProductSwiper";
import LiveGoogleReviews from "@/components/LiveGoogleReviews";
import ProductSwiper2 from "@/components/ProductSwiper2";
import ProductSwiper3 from "@/components/ProductSwiper3";

export default function Home() {
  return (
    <div className='w-full bg-zinc-50 font-sans dark:bg-black'>
      <HeroSlider />
      <BestSeller />
      <BrandSlider />
      <ProductSwiper />
      <ProductSwiper2 />
      <ProductSwiper3 />
      <LiveGoogleReviews />
      <HappyCustomersGallery />
      <AboutSection />
      <SimpleFAQComponent />
    </div>
  );
}
