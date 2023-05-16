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
          <button style={{backgroundColor: '#92805c', padding: 10, color: 'white'}}>Contact Us</button>
        </div>
      </div>
    </>
  );
}
