import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Image from 'next/image';

export default function Contact(){
    return(
        <>
        <Head>
        <title>Contact Us</title>
        <meta name="description" content="Genie Homecare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <div className="mx-auto px-5 pt-0 pb-0 lg:px-24">
        <div className="my-3 flex w-full flex-col text-left lg:text-center">
        <h1 className="text-3xl font-bold mb-5">Contact Us</h1>

        </div>
        <div className="flex w-full flex-col text-left lg:text-center">
          <h3 className="text-2xl text-black">
          If you have any questions about our services or would like to schedule a consultation, please don't hesitate to contact us. Our team is always happy to assist you.
          </h3>
        </div>
        <div className="flex w-full flex-row justify-center py-10 text-center">
            <p style={{marginRight: 20, fontSize: 20}}>(800) 123-4567</p>
            <p style={{fontSize: 20}} >email@email.com</p>      
        </div>
        {/* <div className="w-full lg:w-1/2 p-4">
          <img src="/images/image-5.png" alt="Hero" className="w-full" />
        </div> */}
      </div>
      <Footer />
      </>
    )
}
