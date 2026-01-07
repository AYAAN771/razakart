// "use client";
// import { Bot } from "lucide-react";
// export default function FloatingContacts() {
//   return (
//     <div className='fixed bottom-6 right-6 flex flex-col gap-4 z-50'>
//       <a
//         href='https://wa.me/919876543210' // Replace with your WhatsApp number
//         target='_blank'
//         rel='noopener noreferrer'
//         className='group cursor-pointer'
//       >
//         <div className='relative'>
//           <div className='absolute inset-0 max-w-16 rounded-full bg-green-500/30 animate-ping'></div>
//           <div className='relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl'>
//             <Bot className='w-7 h-7 text-white' />
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// }
// "use client";
// import { Bot } from "lucide-react";
// export default function FloatingContacts() {
//   return (
//     <div className='fixed bottom-6 right-6 flex flex-col gap-4 z-50'>
//       <a
//         href='https://wa.me/919876543210' // Replace with your WhatsApp number
//         target='_blank'
//         rel='noopener noreferrer'
//         className='group cursor-pointer'
//       >
//         <div className='relative'>
//           <div className='absolute inset-0 rounded-full bg-green-500/30 animate-ping'></div>
//           <div className='relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width='24'
//               height='24'
//               viewBox='0 0 24 24'
//               fill='none'
//               stroke='currentColor'
//               strokeWidth='2'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               class='lucide lucide-bot-icon lucide-bot'
//             >
//               <path d='M12 8V4H8' />
//               <rect width='16' height='12' x='4' y='8' rx='2' />
//               <path d='M2 14h2' />
//               <path d='M20 14h2' />
//               <path d='M15 13v2' />
//               <path d='M9 13v2' />
//             </svg>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
4; // "use client";

// export default function FloatingContacts() {
//   return (
//     <div className='fixed bottom-6 right-6 z-50'>
//       <a
//         href='https://wa.me/919876543210'
//         target='_blank'
//         rel='noopener noreferrer'
//       >
//         <div className='relative'>
//           {/* Ripple */}
//           <div className='absolute inset-0 rounded-full bg-green-500/30 animate-ping' />

//           {/* Button */}
//           <div className='relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               viewBox='0 0 24 24'
//               className='w-6 h-6 stroke-white'
//               fill='none'
//               strokeWidth='2'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//             >
//               <path d='M12 8V4H8' />
//               <rect x='4' y='8' width='16' height='12' rx='2' />
//               <path d='M2 14h2' />
//               <path d='M20 14h2' />
//               <path d='M9 13v2' />
//               <path d='M15 13v2' />
//             </svg>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// }
export default function FloatingContacts() {
  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <a
        href='https://wa.me/919876543210'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='w-14' src='/Waving.gif' alt='' />
      </a>
    </div>
  );
}
