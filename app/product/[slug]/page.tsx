"use client";

import NavbarF from "@/components/NavbarF";
import ProductImageGallery from "@/components/ui/ProductImageGallery";
import ProductInfo from "@/components/ui/ProductInfo";
import ProductTabs from "@/components/ui/ProductTabs";
import RelatedProducts from "@/components/ui/RelatedProducts";
import products from "@/data/products.json";

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug) || products[0];

  const sameBrandProducts = products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);
  const topSellingProducts = products.filter((p) => p.topSelling).slice(0, 4);

  return (
    <div className='bg-zinc-50 min-h-screen'>
      <NavbarF />

      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg p-6 mb-8 shadow-sm'>
          <ProductImageGallery images={product.images} />
          <ProductInfo product={product} />
        </div>

        <ProductTabs product={product} />

        <RelatedProducts
          title={`More from ${product.brand}`}
          products={sameBrandProducts}
        />

        <RelatedProducts
          title='Top Selling Products'
          products={topSellingProducts}
        />
      </div>
    </div>
  );
}
