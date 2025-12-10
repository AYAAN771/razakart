"use client"
import  { useState } from 'react';
import { Search, ShoppingCart, Menu, Phone, } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import CategoryMenu from './CategoryMenu';
import CategoryMenuF from './CategoryMenuF';


export default function NavbarF() {
//   const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleCategoryToggle = (categoryId:any) => {
//     setSelectedCategories(prev =>
//       prev.includes(categoryId)
//         ? prev.filter(id => id !== categoryId)
//         : [...prev, categoryId]
//     );
//   };

//   const CategoryDropdown = ({ isMobile = false }) => (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" className="gap-2">
//           Categories
//           <ChevronDown className="h-4 w-4" />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56   p-4">
//         <div className="space-y-3">
//           {categories.map((category) => (
//             <div key={category.id} className="flex items-center space-x-2">
//               <Checkbox
//                 id={`${isMobile ? 'mobile-' : ''}${category.id}`}
//                 checked={selectedCategories.includes(category.id)}
//                 onCheckedChange={() => handleCategoryToggle(category.id)}
//               />
//               <label
//                 htmlFor={`${isMobile ? 'mobile-' : ''}${category.id}`}
//                 className="text-sm font-medium leading-none cursor-pointer"
//               >
//                 {category.label}
//               </label>
//             </div>
//           ))}
//         </div>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );

  return (
    <nav className="border-b bg-white w-full sticky top-0 z-50 py-2">
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="relative">
              <ShoppingCart className="h-8 w-8 text-blue-600" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Raza Cash</h1>
              <p className="text-xs text-blue-600">Kart</p>
            </div>
          </div>

          {/* Desktop Search Bar - Centered and Expanded */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-3xl">
              <input
                type="text"
                placeholder="Search for Laptop"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 pr-14 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-full px-6 bg-black hover:bg-gray-800 rounded-l-none"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
<div className='hidden md:flex items-center cursor-pointer hover:text-blue-600 gap-2'>
              <Phone  className="h-5 w-5"/>(+91) 9321888689 
            </div>
          {/* Desktop Category Dropdown */}
          <div className="hidden   md:block">
            
            <CategoryMenuF />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 px-4 mt-16">
                  {/* Mobile Search */}
                  <div className="relative ">
                    <input
                      type="text"
                      placeholder="Search for Laptop"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                      size="icon"
                      className="absolute right-0 top-0 h-full px-4 bg-black hover:bg-gray-800 rounded-l-none"
                    >
                      <Search className="h-8 w-8" />
                    </Button>
                  </div>

                  {/* Mobile Category Dropdown */}
                  <CategoryMenuF  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>


      </div>
    </nav>
  );
}