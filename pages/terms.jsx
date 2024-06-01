import React from "react";
import Head from "next/head";
import Navber from "./components/Layout/Navber";


const Terms = () => {
  return (
    <>
      <Head>
        <title>
      Handyman AHM T&C
        </title>
        <meta
          name="description"
          content="Contact Us for Reliable Handyman Services in Singapore: Whether you need assistance with plumbing, electrical repairs, furniture assembly, or any other home improvement task, our team is ready to help. Reach out to us today to schedule a consultation and experience professional and prompt service."
        />
        <meta
          name="keywords"
          content="handyman service in Singapore, Best handyman service in Singapore, Aircon Services, Water Leakage Repair, Sliding Door Repair, Plumbing, Kitchen Sink Installation, Furniture Assembling, Electrical Repairs, Cabinet Installation, Aircon Maintenance, House Wiring, Home Renovation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ahm1.ico" />
      </Head>
      <Navber />
   
    
      <section>
      <div className="container my-5">
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <div className="terms-header text-center p-4 mb-4 bg-light rounded">
        <h2>Terms and Conditions</h2>
      </div>
      <div className="terms-section mb-4">
        <h5>Payment Terms</h5>
        <p>50% advance payment is required before work commences. For some special work, full payment must be made upfront. Work will not start until payment is received.</p>
      </div>
      <div className="terms-section mb-4">
        <h5>Cancellation Policy</h5>
        <p>Orders cannot be canceled once payment is made. However, if a solid problem is proven, the authority may take a decision.</p>
        <p>The authority reserves the right to cancel any offer or change any decision at their discretion.</p>
      </div>
      <div className="terms-section mb-4">
        <h5>Service Cost</h5>
        <p>The cost of equipment or any instruments is not included in the service cost. Clients are responsible for paying for these items separately.</p>
      </div>
      <div className="terms-section mb-4">
        <h5>Order Policy</h5>
        <p>Orders cannot be changed or replaced with another service once confirmed.</p>
      </div>
      
    </div>
      </section>
    </>
  );
};
export default Terms;
