import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Image from 'next/image';

export default function About(){
    return(
        <>
        <Head>
        <title>Contact Us</title>
        <meta name="description" content="Genie Homecare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <div className="mx-auto px-5 pt-0 pb-24 lg:px-24">
        <div className="my-3 flex w-full flex-col text-left lg:text-center">
        <h1 className="text-3xl font-bold mb-5">About Us</h1>
        <p className="text-lg leading-7 mb-8">
            Geneie Homecare is a leading provider of home care and nursing services, dedicated to improving the lives of individuals and families in need. With a team of highly skilled and compassionate professionals, we strive to deliver exceptional care that promotes independence, enhances well-being, and fosters a sense of belonging within the comfort of one's own home.
            </p>
            <p className="text-lg leading-7 mb-8">
            At Geneie Homecare, we understand that each person's needs are unique, which is why we offer a wide range of personalized services tailored to meet the specific requirements of our clients. Our team of experienced caregivers and nurses are trained to provide comprehensive support, including assistance with daily activities, medication management, medical monitoring, specialized therapies, and more. We work closely with individuals, their families, and healthcare professionals to develop customized care plans that prioritize safety, dignity, and individual preferences.
            </p>
            <p className="text-lg leading-7 mb-8">
            Our mission is to empower individuals to live their best lives in the comfort of their own homes, fostering a sense of security, independence, and happiness. We strive to create a warm and nurturing environment where our clients can thrive, maintaining their cherished routines, connections, and lifestyle choices. Whether it's short-term assistance during recovery or long-term support for chronic conditions, Geneie Homecare is committed to providing reliable, compassionate, and professional care that exceeds expectations.
            </p>
            <p className="text-lg leading-7">
            Contact us today to learn more about how Geneie Homecare can support you and your loved ones on the journey to improved health, happiness, and well-being.
            </p>
            </div>
                </div>
      <Footer />
      </>
    )
}
