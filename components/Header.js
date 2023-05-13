/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className="grotesk mt-0 mb-0 flex items-center justify-between py-2 px-4 sm:mx-0 sm:mb-0 sm:px-0 md:px-6 header-background">
        <div className="mt-4 inline-block pb-4 pl-8">
          <a href="/" className="align-middle text-3xl font-bold text-black">
            <Image src="/images/genie-logo.png" alt="Genie Logo" width={100} height={75} />
          </a>
        </div>
        <div className="flex items-center">
          <button className="pr-12 pl-4">
            <svg
              className="mr-auto inline-block text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
