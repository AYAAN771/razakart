import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ReturnRefundPolicyPage() {
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
            <span className='text-blue-600 font-medium'>
              Return & Refund Policy
            </span>
          </div>
        </div>
      </div>

      {/* Content Rail */}
      <div className='bg-gray-50 py-8 sm:py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-12'>
            {/* Heading */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600'>
              Return & Replacement Policy
            </h1>

            {/* Intro */}
            <p className='mt-4 text-sm sm:text-base text-gray-600 leading-relaxed'>
              At Raza Computers, we take product quality very seriously. Every
              item is thoroughly tested before shipment. However, in rare cases
              where circumstances are beyond our control, returns or
              replacements may apply under the conditions listed below.
            </p>

            {/* Conditions */}
            <ol className='mt-10 list-decimal pl-5 space-y-6 text-sm sm:text-base text-gray-700 leading-7 sm:leading-8'>
              <li>
                <strong className='text-gray-900'>
                  Product not functioning as per specifications:
                </strong>{" "}
                The product does not work according to the published features or
                specifications.
              </li>

              <li>
                <strong className='text-gray-900'>
                  Dead on Arrival (DOA):
                </strong>{" "}
                The product is received in a non-working condition.
              </li>

              <li>
                <strong className='text-gray-900'>
                  Incorrect product delivered:
                </strong>{" "}
                The delivered item differs from the product ordered.
              </li>

              <li>
                <strong className='text-gray-900'>
                  Physically damaged product:
                </strong>{" "}
                The product is received in a visibly damaged condition.
              </li>
            </ol>

            <p className='mt-8 text-sm sm:text-base text-gray-700 leading-relaxed'>
              Any of the above issues must be reported within{" "}
              <strong className='text-gray-900'>24 hours</strong> of receiving
              the product. For physically damaged products, clear images of both
              the outer packaging and the damaged item must be provided.
            </p>

            <p className='mt-4 text-sm sm:text-base text-gray-700 leading-relaxed'>
              If the required information is not shared within 24 hours, the
              return or replacement request may not be approved. Customers are
              strongly advised to record a video while opening the package as a
              precaution.
            </p>

            <p className='mt-4 text-sm sm:text-base text-gray-700 leading-relaxed'>
              For a return or replacement to be eligible, the product must be
              sent back in its original packaging along with all tags, manuals,
              and accessories. The replacement shipment or refund will be
              initiated only after the returned product passes inspection by our
              returns department.
            </p>

            <p className='mt-4 text-sm sm:text-base text-gray-700 leading-relaxed'>
              If the returned product does not meet the stated reason for return
              or replacement, the request may be rejected.
            </p>

            <p className='mt-6 text-sm sm:text-base text-gray-700 leading-relaxed'>
              In cases where the returned product passes quality checks, the
              refund—if applicable—will be processed after deducting the return
              freight cost and an additional{" "}
              <strong className='text-gray-900'>10% of the order value</strong>{" "}
              as administrative charges.
            </p>

            {/* Refund Policy */}
            <h2 className='mt-14 text-xl sm:text-2xl font-semibold text-gray-900'>
              Refund Policy
            </h2>

            <p className='mt-4 text-sm sm:text-base text-gray-700 leading-relaxed'>
              Once an order cancellation or return request is approved, the
              refund process will be initiated within 3 working days. Depending
              on bank processing timelines, the credited amount may take 7–10
              working days to reflect in your account.
            </p>

            <p className='mt-4 text-sm sm:text-base text-gray-700 leading-relaxed'>
              Refunds are generally processed to the original payment method
              used during checkout. For Cash on Delivery (COD) orders, refunds
              will be transferred directly to the customer’s bank account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
