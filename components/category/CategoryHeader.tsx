interface CategoryHeaderProps {
  title: string;
  productCount: number;
}

export default function CategoryHeader({
  title,
  productCount,
}: CategoryHeaderProps) {
  return (
    <div className='mb-0 sm:mb-6'>
      <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>{title}</h1>
      {/* <p className='text-gray-500 mt-1'>
        {productCount}{" "}
        {productCount === 1 ? "product" : "products"} available
      </p> */}
    </div>
  );
}
