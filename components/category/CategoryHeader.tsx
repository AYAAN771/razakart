// interface CategoryHeaderProps {
//   title: string;
//   productCount: number;
// }

// export default function CategoryHeader({
//   title,
//   productCount,
// }: CategoryHeaderProps) {
//   return (
//     <div className='mb-0 sm:mb-6'>
//       <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>{title}</h1>
//       {/* <p className='text-gray-500 mt-1'>
//         {productCount}{" "}
//         {productCount === 1 ? "product" : "products"} available
//       </p> */}
//     </div>
//   );
// }
interface CategoryHeaderProps {
  title: string;
  productCount: number;
}

export default function CategoryHeader({
  title,
  productCount,
}: CategoryHeaderProps) {
  return (
    <section
      className='relative mb-12 rounded-xl w-full h-auto  xl:h-[50vh] xl:aspect-auto aspect-[16/10] flex items-center'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className='absolute rounded-xl inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70' />

      {/* Content */}
      <div className='relative rounded-xl z-10 w-full px-4 sm:px-8 max-w-7xl mx-auto'>
        <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight'>
          {title}
        </h1>
      </div>
    </section>
  );
}
