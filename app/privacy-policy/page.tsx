import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Breadcrumb */}
      <div className='border-b border-gray-200 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center gap-2 text-xs sm:text-sm text-gray-600'>
            <Link href='/' className='hover:text-blue-600'>
              Home
            </Link>
            <ChevronRight className='h-4 w-4' />
            <span className='text-blue-600 font-medium'>Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* SINGLE CONSISTENT CONTENT WRAPPER */}
      <div className='bg-gray-50 py-8 sm:py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-12'>
            {/* Heading */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600'>
              Privacy Policy
            </h1>

            {/* Subheading */}
            <p className='mt-4 text-sm sm:text-base text-gray-600 leading-relaxed'>
              Raza Computers takes full care to protect the privacy of our
              customers and visitors to our website. This privacy policy
              explains the types of information we collect, how we use it, and
              the steps we take to protect it.
            </p>

            {/* Policy Points – SAME WIDTH, SAME ALIGNMENT */}
            <ol className='mt-10 list-decimal pl-5 space-y-6 text-sm sm:text-base text-gray-700 leading-7 sm:leading-8'>
              <li>
                <strong className='text-gray-900'>
                  Information Collection:
                </strong>{" "}
                When customers visit Raza Computers, we may collect personal
                information such as name, email address, and phone number.
              </li>

              <li>
                <strong className='text-gray-900'>Use of Information:</strong>{" "}
                The information we collect is used to fulfill orders, provide
                customer service, improve our website and services, send
                promotional materials, advertisements, and updates about newly
                launched programs. We may also use this data for internal
                analysis and research.
              </li>

              <li>
                <strong className='text-gray-900'>Information Sharing:</strong>{" "}
                We never sell customer personal information. We may share
                information only with trusted service providers to complete
                transactions.
              </li>

              <li>
                <strong className='text-gray-900'>Cookies:</strong> Cookies help
                personalize your browsing experience. Disabling cookies may
                affect certain website features.
              </li>

              <li>
                <strong className='text-gray-900'>Security:</strong> We take
                reasonable steps to protect personal information, but no
                internet transmission is completely secure.
              </li>

              <li>
                <strong className='text-gray-900'>Access and Control:</strong>{" "}
                Customers may access, update, or delete their information and
                unsubscribe from emails at any time.
              </li>

              <li>
                <strong className='text-gray-900'>
                  Changes to This Policy:
                </strong>{" "}
                This policy may be updated periodically. Changes will be posted
                here.
              </li>
            </ol>

            <p className='mt-10 font-medium text-gray-900'>
              By using our website, you consent to the collection and use of
              information as described in this privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
