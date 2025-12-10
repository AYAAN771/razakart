import HeroSlider from "@/components/Banner";
import BestSeller from "@/components/BestSeller";
import BrandSlider from "@/components/BrandSlider";
import FAQComponent from "@/components/FAQComponent";
import GoogleReviewsSection from "@/components/GoogleReview";
import HappyCustomersGallery from "@/components/HappyCustomerGallery";
// import Navbar from "@/components/Navbar";
import NavbarF from "@/components/NavbarF";
import ProductSwiper from "@/components/ProductSwiper";

export default function Home() {
  return (
    <div className="flex w-full items-center flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
     {/* <Navbar/> */}
     <NavbarF/>
     <HeroSlider/>
     <BrandSlider/>
     <BestSeller/>
     <GoogleReviewsSection/>
     <ProductSwiper/>
     <HappyCustomersGallery/>
     <FAQComponent/>
    </div>
  );
}
