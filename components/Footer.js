export default function Footer() {
  return (
    <>
      <footer className="grotesk bg-[#f9fbfb]">
        <div className="px-2">
          <div className="max-w-8xl mx-auto px-5 py-6">
            <h2 className="text-black">About Genie Homecare</h2>
            <div>
              <p className="my-4 text-sm">
                At Genie Homecare, we are dedicated to providing high-quality, personalized in-home care services that promote 
                quality of life and independence for our clients. Our team of skilled and compassionate caregivers is trained 
                to support a wide range of needs, from daily living assistance to specialized medical care.
              </p>
            </div>
            <div className="pt-12 pb-6 pr-20 text-sm text-black flex flex-col md:flex-row">
              <a href="/" className="mr-16 my-1">
                Services
              </a>
              <a href="/" className="mr-16 my-1">
                Contact Us
              </a>
              <a href="/" className="mr-16 my-1">
                Careers
              </a>
              <a href="/" className="mr-16 my-1">
                Terms & Conditions
              </a>
              <a href="/" className="mr-16 my-1">
                Privacy Policy
              </a>
              <a href="/" className="mr-16 my-1">
                Cookie Policy
              </a>
            </div>
            <div className="text-sm text-black mt-4">
              © {new Date().getFullYear()} Genie Homecare. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
