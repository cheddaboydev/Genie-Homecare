
import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Image from 'next/image';

export default function Terms() {
return (
<>
<Head>
<title>Terms of Service</title>
<meta name="description" content="Geneie Homecare - Terms of Service" />
<link rel="icon" href="/favicon.ico" />
</Head>
<Header />
<div className="mx-auto px-5 pt-0 pb-24 lg:px-24">
<div className="my-3 flex w-full flex-col text-left lg:text-center">
<h1 className="text-3xl font-bold mb-5">Terms of Service</h1>
<p className="text-lg leading-7 mb-8">
Welcome to Geneie Homecare! These Terms of Service govern your use of our website and the services we provide. By accessing or using our website and services, you agree to comply with these terms. Please read them carefully.
</p>
<h2 className="text-2xl font-bold mb-4">1. Use of Our Website</h2>
<p className="text-lg leading-7 mb-6">
Our website is intended for informational purposes only. The content provided on the website is not a substitute for professional medical advice or treatment. Always consult a qualified healthcare professional for personalized advice and assistance.
</p>
<h2 className="text-2xl font-bold mb-4">2. Privacy Policy</h2>
<p className="text-lg leading-7 mb-6">
We respect your privacy and handle your personal information in accordance with our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
</p>
<h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
<p className="text-lg leading-7 mb-6">
The content on our website, including text, images, logos, and trademarks, is protected by intellectual property rights owned by Geneie Homecare. You may not use, reproduce, or distribute our content without prior written permission.
</p>
<h2 className="text-2xl font-bold mb-4">4. Disclaimer of Liability</h2>
<p className="text-lg leading-7 mb-6">
Geneie Homecare strives to provide accurate and up-to-date information on our website. However, we do not guarantee the completeness, accuracy, or reliability of the content. We are not liable for any damages or losses resulting from your use of the website or reliance on the information provided.
</p>
<h2 className="text-2xl font-bold mb-4">5. Links to Third-Party Websites</h2>
<p className="text-lg leading-7 mb-6">
Our website may contain links to third-party websites for your convenience. We do not endorse or have control over the content, privacy policies, or practices of these websites. Your use of third-party websites is at your own risk.
</p>
<h2 className="text-2xl font-bold mb-4">6. Modifications to the Terms</h2>
<p className="text-lg leading-7 mb-6">
We reserve the right to modify these Terms of Service at any time. Any changes will be effective upon posting the updated terms on our website. It is your responsibility to review the terms periodically. By continuing to use our website after the modifications, you agree to the updated

terms.
</p>
<p className="text-lg leading-7">
If you have any questions or concerns regarding these terms, please contact us. Thank you for choosing Geneie Homecare!
</p>
</div>
</div>
<Footer />
</>
)
}