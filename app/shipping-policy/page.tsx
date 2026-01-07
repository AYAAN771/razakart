import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ShippingPolicyPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Breadcrumb */}
      <div className='border-b border-gray-200 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center gap-2 text-xs sm:text-sm text-gray-600'>
            <Link href='/' className='hover:text-blue-600 transition-colors'>
              Home
            </Link>
            <ChevronRight className='h-4 w-4' />
            <span className='text-blue-600 font-medium'>Shipping Policy</span>
          </div>
        </div>
      </div>

      {/* Single Consistent Content Rail */}
      <div className='bg-gray-50 py-8 sm:py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-12'>
            {/* Heading */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600'>
              Shipping Policy
            </h1>

            {/* Intro */}
            <p className='mt-4 text-sm sm:text-base text-gray-600 leading-relaxed'>
              Thank you for choosing Raza Computers. Our shipping policy is
              designed to ensure that your purchase arrives in a timely and
              secure manner. Please read this policy carefully before placing
              your order.
            </p>

            {/* Policy Points */}
            <ol className='mt-10 list-decimal pl-5 space-y-6 text-sm sm:text-base text-gray-700 leading-7 sm:leading-8'>
              <li>
                <strong className='text-gray-900'>Shipping Costs:</strong>{" "}
                Shipping charges are calculated based on the weight, dimensions,
                and destination of the package. The final shipping cost will be
                displayed during checkout and must be paid by the customer.
              </li>

              <li>
                <strong className='text-gray-900'>Shipping Methods:</strong> We
                offer multiple shipping options, including standard ground,
                express, and overnight shipping. Delivery times and rates vary
                depending on the method selected.
              </li>

              <li>
                <strong className='text-gray-900'>Processing Time:</strong>{" "}
                Orders are typically processed within 24–48 hours of order
                confirmation. Processing time may vary based on order volume and
                product availability.
              </li>

              <li>
                <strong className='text-gray-900'>Tracking Information:</strong>{" "}
                Once your order has been shipped, a tracking number will be sent
                to your registered email address. This allows you to monitor the
                delivery status of your package.
              </li>

              <li>
                <strong className='text-gray-900'>
                  Damaged or Lost Packages:
                </strong>{" "}
                If your package is damaged during transit or lost, please
                contact us immediately. We will coordinate with the shipping
                carrier to investigate and resolve the issue as quickly as
                possible.
              </li>

              <li>
                <strong className='text-gray-900'>Contact Us:</strong> For any
                questions or concerns regarding shipping, our customer support
                team is available Monday to Friday, from 10:00 AM to 10:00 PM.
              </li>
            </ol>

            <p className='mt-10 font-medium text-gray-900'>
              Thank you for choosing Raza Computers. We truly appreciate your
              trust and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
