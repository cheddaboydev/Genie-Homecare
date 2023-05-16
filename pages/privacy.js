import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Image from 'next/image';

export default function Privacy() {
return (
<>
<Head>
<title>Privacy Policy</title>
<meta name="description" content="Geneie Homecare - Privacy Policy" />
<link rel="icon" href="/favicon.ico" />
</Head>
<Header />

<div className="mx-auto px-5 pt-0 pb-0 lg:px-24">
<div className="my-3 flex w-full flex-col text-left lg:text-center">
<h1 className="text-3xl font-bold mb-5">Privacy Policy</h1>
<p className="text-lg leading-7 mb-8">
Your privacy is important to us at Geneie Homecare. This Privacy Policy outlines how we collect, use, and protect your personal information. By accessing or using our website and services, you agree to the terms of this policy. Please read it carefully.
</p>
<h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
<p className="text-lg leading-7 mb-6">
We may collect personal information from you when you interact with our website or use our services. This may include your name, contact details, medical history, and other relevant information necessary for providing home care and nursing services.
</p>
<h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
<p className="text-lg leading-7 mb-6">
We use the information we collect to provide and improve our services, communicate with you, and personalize your experience. We may also use your information for administrative purposes, such as billing and record-keeping, and to comply with legal obligations.
</p>
<h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
<p className="text-lg leading-7 mb-6">
We take appropriate measures to protect your personal information from unauthorized access, alteration, or disclosure. We use secure technologies and follow industry best practices to safeguard your data. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
</p>
<h2 className="text-2xl font-bold mb-4">4. Third-Party Disclosure</h2>
<p className="text-lg leading-7 mb-6">
We may share your personal information with third parties who assist us in providing our services. These third parties are contractually obligated to protect your information and use it only for the purposes specified by us. We do not sell or rent your personal information to third parties for marketing purposes.
</p>
<h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
<p className="text-lg leading-7 mb-6">
We may use cookies and similar tracking technologies to enhance your experience on our website. These technologies collect information about your browsing behavior and preferences. You can modify your browser settings to refuse cookies or notify you when cookies are being used.
</p>
<h2 className="text-2xl font-bold mb-4">6. Changes to the Privacy Policy</h2>
<p className="text-lg leading-7 mb-6">
We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective upon

posting the revised policy on our website. We encourage you to review this policy periodically for any updates.
</p>
<p className="text-lg leading-7">
If you have any questions or concerns about our Privacy Policy, please contact us. Your privacy and trust are important to us, and we are committed to protecting your personal information.
</p>
</div>
</div>
<Footer />
</>
)
}