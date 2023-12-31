import React from "react";

import ContactCard from "./components/ContactCard";
import Image from "next/image";
import baner from "../pages/components/images/contact.jpg";
import faq from "../pages/components/images/faq.png";
import Head from "next/head";
import Navber from "./components/Layout/Navber";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>
          Contact Us for Professional Handyman Services in Singapore: Expert
          Solutions for Your Home Maintenance Needs
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
      <div className="bg-contact">
        <Image src={baner} alt="Contact HandymanAHM" />
      </div>
      <ContactCard />
      <ContactForm />
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed mb-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Do you provide other all handyman services?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, we provide all kinds of handyman services as your
                      need.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed mb-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Do you provide painting services?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, we also provide painting services and we have
                      expertise to decorate your house nicely.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed mb-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Do you provide home renovation as well?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">We also do that service.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed mb-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree3"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree3"
                    >
                      Do you provide wooden floor polishing service?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample3"
                  >
                    <div className="accordion-body">We gladly do that service.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed mb-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree2"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree2"
                    >
                      Do you provide security, warenty of products and
                      quotations?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample2"
                  >
                    <div className="accordion-body">
                      Ofcourse we do that. We ensure you the best possible
                      security and good warenty of products as requirements.we
                      also provide quotations for our valuable customer.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed mb-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree1"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree1"
                    >
                      Are your company certified?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div className="accordion-body">We are certified.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-5">
              <Image src={faq} className="faq" alt="handymanahm faq" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
