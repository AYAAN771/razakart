interface SearchHeaderProps {
  searchQuery: string;
  filteredCount: number;
  availableCount: number;
}

export default function SearchHeader({
  searchQuery,
  filteredCount,
  availableCount,
}: SearchHeaderProps) {
  return (
    <div className='mb-0 sm:mb-6'>
      {searchQuery ? (
        <>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>
            Search results for &quot;{searchQuery}&quot;
          </h1>
        </>
      ) : (
        <>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>
            All Laptops
          </h1>
          <p className='text-gray-500 mt-1'>{filteredCount} Laptops found</p>
        </>
      )}
    </div>
  );
}
