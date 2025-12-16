import HeroSlider from "@/components/Banner";
import BestSeller from "@/components/BestSeller";
import BrandSlider from "@/components/BrandSlider";
import SimpleFAQComponent from "@/components/FAQComponent";


import HappyCustomersGallery from "@/components/HappyCustomerGallery";
// import Navbar from "@/components/Navbar";

import ProductSwiper from "@/components/ProductSwiper";

export default function Home() {
  return (
    <div className='flex w-full items-center flex-col justify-center bg-zinc-50 font-sans dark:bg-black'>
      {/* <Navbar/> */}
      <HeroSlider />
      <BestSeller />
      <BrandSlider />
      {/* <GoogleReviewsSection/> */}
      <ProductSwiper />
      <HappyCustomersGallery />
      {/* <FAQComponent /> */}
      <SimpleFAQComponent />
      {/* <Footer /> */}
    </div>
  );
}
