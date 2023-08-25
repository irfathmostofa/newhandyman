import Image from "next/image";
import Link from "next/link";
import ac from "../components/images/professional-plumbeing-service.jpg";
import Head from "next/head";
import Navber from "../components/Layout/Navber";
import Sidebar from "../components/Sidebar";
import ContactForm from "../components/ContactForm";

const Plumbing = () => {
  return (
    <>
      <Head>
        <title>
          Leading Professional Plumbing Service in Singapore - Expert Plumbers
          at Your Service
        </title>
        <meta
          name="description"
          content="Experience excellence with the top professional plumbing service in Singapore. Our expert plumbers provide a range of services from repairs to installations, ensuring efficient plumbing solutions for both residential and commercial needs. Contact us for reliable plumbing services today."
        />
        <meta
          name="keywords"
          content="handyman service in Singapore, Best handyman service in Singapore, Aircon Services, Water Leakage Repair, Sliding Door Repair, Plumbing, Kitchen Sink Installation, Furniture Assembling, Electrical Repairs, Cabinet Installation, Aircon Maintenance, House Wiring, Home Renovation"
        />
      </Head>
      <Navber />
      <div className="container-fluid">
        <div class="position-relative overflow-hidden p-3 p-md-5 text-center bg-body-tertiary">
          <div class="col-md-6 mx-auto my-5">
            <h1 class="display-3 fw-bold">Expert Plumbing Solutions</h1>
            <p class="fw-normal text-muted mb-3 fs-5">
              Comprehensive plumbing services, including repairs, installations,
              and maintenance, ensuring efficient water flow and optimal
              functionality in residential and commercial spaces.
            </p>
            <div class="d-flex gap-3 justify-content-center lead fw-normal">
              <Link
                href="https://wa.link/your-link-here"
                target="_blank"
                className="btn btn-secondary fw-bold text-white rounded-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </div>

      <div className="row container-fluid">
        <div className="col-lg-8 p-5">
          <p className="text_justify">
            Introducing ProPlumb Experts, the leading name in professional
            plumbing services in Singapore. As a division of the renowned
            Handyman AHM family, we uphold the same commitment to excellence
            that has made us a household favorite. Our specialized Plumbing
            Services embody the quality and customer satisfaction that Handyman
            AHM is known for, assuring you of unmatched expertise and a seamless
            home maintenance experience. Choose ProPlumb Experts for all your
            plumbing needs and discover the trusted synergy of Handyman AHM`s
            legacy and top-tier service.
          </p>
          <Image src={ac} className="blog-img mb-3" alt="..." />

          <h2>Advantages of Opting for Our Professional Plumbing Services</h2>
          <p className="text_justify">
            Just like in air conditioning, maintaining your plumbing system is
            crucial to ensure smooth functioning, water efficiency, and a
            stress-free living space. Our team of experienced plumbers,
            operating under the umbrella of Handyman AHM, understands the
            intricacies of plumbing systems, enabling us to deliver exceptional
            services that surpass ordinary handyman solutions.
          </p>
          <h2>Our Professional Plumbing Services:</h2>
          <p className="text_justify">
            <strong>Expert Plumbing Solutions:</strong> Whether you require
            plumbing repairs, installations, or replacements, our skilled
            professionals deliver reliable solutions. From leaky faucets to
            complex pipe installations, we ensure top-notch service to keep your
            plumbing systems functioning flawlessly.
          </p>
          <p className="text_justify">
            <strong>Comprehensive Plumbing Care:</strong> Beyond quick fixes,
            our services encompass routine maintenance to prevent potential
            plumbing issues. Our skilled team conducts thorough inspections,
            performs drain cleaning, checks for leaks, and ensures optimal water
            pressure, keeping your plumbing system in top condition.
          </p>
          <p className="text_justify">
            <strong>Professional Plumbing Repairs:</strong> When plumbing issues
            arise, our experienced plumbers diagnose problems accurately and
            perform efficient repairs. From dripping faucets to clogged drains,
            we address a wide range of plumbing concerns to restore proper
            functionality.
          </p>
          <p className="text_justify">
            <strong>Leak Detection and Pipe Repairs:</strong> Leaks can lead to
            water wastage and property damage. Our skilled team excels in
            detecting leaks and promptly fixing them, ensuring your plumbing
            system remains leak-free and efficient.
          </p>

          <h2>What Sets Us Apart:</h2>
          <p className="text_justify">
            <strong>Expert Technicians:</strong> As a leading plumbing service,
            our technicians possess not only plumbing expertise but also a
            comprehensive understanding of home maintenance, guaranteeing a
            holistic approach to your plumbing needs.
          </p>
          <p className="text_justify">
            <strong>Dependable Service:</strong> We prioritize delivering
            dependable plumbing solutions, ensuring that your plumbing works
            flawlessly to meet your everyday needs.
          </p>
          <p className="text_justify">
            <strong>Tailored Plumbing:</strong> Every household has unique
            plumbing requirements. Our services are tailored to suit your
            specific needs, guaranteeing that your plumbing receives
            personalized attention and care.
          </p>
          <p className="text_justify">
            <strong>Affordable Excellence:</strong> Our commitment to providing
            outstanding plumbing service extends to our pricing. We offer
            transparent quotes and cost-effective solutions without compromising
            on the quality of our work.
          </p>

          <p className="text_justify">
            At Handyman AHM, we understand that proper plumbing is an essential
            part of maintaining a functional home. Experience the difference of
            working with a top-notch plumbing service by entrusting your
            plumbing repairs and maintenance to us. Contact us today to schedule
            an appointment and ensure your home`s plumbing operates seamlessly.
          </p>
        </div>
        <div className="col-lg-4 mt-5">
          <Sidebar />
        </div>
      </div>

      <div style={{ background: " rgba(237, 250, 254, 0.2)" }}>
        <ContactForm />
      </div>
    </>
  );
};

export default Plumbing;
