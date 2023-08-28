import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import  Navber  from "../../newhandyman/pages/components/Layout/Navber.jsx";
import home from "../pages/components/images/home.jpg";
import home2 from "../pages/components/images/home2.jpg";
import home4 from "../pages/components/images/home4.jpg";
import home5 from "../pages/components/images/home5.jpg";

import bca from "../pages/components/images/bca.png";
import biz from "../pages/components/images/biz.png";
import contacts from "../pages/components/images/contacts.jpg";
import iso from "../pages/components/images/iso.png";
import ContactForm from "./components/ContactForm.jsx";
// import { ContactForm } from "./components/ContactForm";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Trusted Handyman Services in Singapore for Quality Repairs and
          Maintenance
        </title>
        <meta
          name="description"
          content="Discover reliable and skilled handyman services in Singapore that you can trust for all your home repair and maintenance needs. Our experienced team of professionals is here to tackle everything from fixing leaky faucets to assembling furniture and more. With a commitment to delivering quality workmanship and exceptional customer service, we ensure your satisfaction every step of the way. Contact us today and experience efficient and affordable solutions tailored to your requirements. Trust our reliable handyman services in Singapore to keep your home in optimal condition. #handymanservices #Singapore #homerepairs"
        />
        <meta
          name="keywords"
          content="handyman service in Singapore, Best handyman service in Singapore, Aircon Services, Water Leakage Repair, Sliding Door Repair, Plumbing, Kitchen Sink Installation, Furniture Assembling, Electrical Repairs, Cabinet Installation, Aircon Maintenance, House Wiring, Home Renovation"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ahm.ico" />
      </Head>
      <main>
        <Navber />
        <div className="cover_img">
          <div className="container text-white p-5">
            <div className="mt-5 bg_main rounded-2 p-5">
              <h1>
                Best Handyman Service in <br />
                Singapore
              </h1>
              <div className="d-flex text-center mt-4">
                <button className="btn btn-light me-3 px-5 rounded-0">
                  {" "}
                  <Link className="text-dark fw-bold" href="/service">
                    {" "}
                    Explore
                  </Link>
                </button>
                <button className="btn btn-outline-light px-5 rounded-0">
                  {" "}
                  <Link className="text-warning fw-bold" href="/about">
                    {" "}
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row p-5">
              <div className="col-lg-6 col-md-12 col-12 p-lg-0 pe-lg-5 p-5 col-12">
                <h4>About Us</h4>

                <p className="text_justify">
                  Welcome to our locally owned and operated handyman service,
                  providing reliable solutions for your home repairs and
                  maintenance in Singapore. With a focus on delivering
                  exceptional workmanship and ensuring customer satisfaction,
                  our experienced team guarantees efficient and accurate project
                  completion, saving you valuable time and money. While you
                  possess handyman skills, our expertise allows us to offer
                  unique recommendations and cost-effective materials tailored
                  to your needs. We go above and beyond to exceed expectations,
                  providing valuable project planning advice for seamless
                  results. Choose our trusted handyman service in Singapore for
                  a hassle-free experience. Contact us today and experience our
                  exceptional solutions firsthand.
                </p>
              </div>

              <div className="col-lg-4 col-md-12 col-12 p-lg-0 p-5 about d-flex gap-3">
                <Image className="mt-5" src={home} alt="Contact HandymanAHM" />
                <Image src={home2} alt="Contact HandymanAHM" />
              </div>

              <div className="col-2"></div>
            </div>

            <div className="row mt-5 p-5">
              <div className="col-lg-6 col-md-12 col-12 p-lg-0 p-5 about d-flex gap-3">
                <Image src={home4} alt="Contact HandymanAHM" />
                <Image className="mt-5" src={home5} alt="Contact HandymanAHM" />
              </div>
              <div className="col-1"></div>

              <div className="col-lg-5 col-md-12 col-12">
                <h4> How do we work</h4>

                <p className="text_justify">
                  As a trusted handyman service in Singapore, we specialize in a
                  wide range of tasks, including repairs, installations,
                  maintenance, and improvements. Our skilled team of
                  professionals utilizes their expertise and a variety of tools
                  to efficiently complete projects and deliver exceptional
                  results. We prioritize customer satisfaction by working
                  diligently to assess your needs, provide detailed quotations,
                  schedule the work at a convenient time, and execute it with
                  precision and attention to detail. Clear communication,
                  professionalism, and quality craftsmanship are our core values
                  throughout the entire process. Choose our reliable handyman
                  service in Singapore for all your repair, installation, and
                  improvement needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-lg-0 p-md-0 p-3">
          <div
            class="container p-5 rounded-4"
            style={{ background: "#EFFAF7" }}
          >
            <h4 className="text-center mb-5">Our Services</h4>
            <div class="row justify-content-center">
              <div class=" col-lg-4 col-md-6 text-center p-5">
                <i class="fas fa-door-open fs-2 mb-3 text-info"></i>
                <h5>Door Repair</h5>
              </div>
              <div class=" col-lg-4 col-md-6 text-center p-5">
                <i class="fa-solid fa-screwdriver-wrench fs-2 mb-3 text-info"></i>
                <h5>Plumbing</h5>
              </div>
              <div class=" col-lg-4 col-md-6 text-center p-5">
                <i class="fa-solid fa-bolt-lightning fs-2 mb-3 text-info"></i>
                <h5>Electrical</h5>
              </div>
              <div class=" col-lg-4 col-md-6 text-center p-5">
                <i class="fa-solid fa-couch fs-2 mb-3 text-info"></i>
                <h5>Furniture Repair</h5>
              </div>
              <div class=" col-lg-4 col-md-6 text-center p-5">
                <i class="fa-solid fa-faucet-drip fs-2 mb-3 text-info"></i>
                <h5>Water Leakage</h5>
              </div>
              <div class=" col-lg-4 col-md-6 text-center p-5">
                <i class="fa-solid fa-box fs-2 mb-3 text-info"></i>
                <h5>Kitchen Cabinet</h5>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              {" "}
              <button
                type="submit"
                className="btn btn-col3 p-2 px-5 text-white fw-bold rounded-0 mt-3"
              >
                <Link className="text-white  fw-bold" href="/service">
                  {" "}
                  Explore
                </Link>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="container p-5">
            <div className="row bg-warning align-items-center">
              <div className="col-lg-6 col-md-12 p-0">
                <Image
                  className="w-100"
                  style={{
                    height: "300px",
                    width: "600px",
                    objectFit: "cover",
                  }}
                  src={contacts}
                  alt="handyman"
                />
              </div>
              <div className="col-lg-6 col-md-12 p-5 bg-dark text-white">
                <b className="fs-3">Reach us now!</b> <br />
                Contact us for top-quality handyman services. We provide skilled
                professionals, prompt solutions, and exceptional customer
                service.
                <br />
                <button className="btn btn-outline-warning mt-2 ">
                  <Link className="text-white fw-bold" href="/contact">
                    {" "}
                    Reach Us Now
                  </Link>{" "}
                  <i className="fa fa-phone"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container pb-0 p-5">
            <h4 className="text-center">We are Certified By</h4>
            <div class="d-lg-flex d-md-flex d-inline gap-lg-5 gap-md-5 gap-0 pb-0 p-5 justify-content-center align-items-center">
              <div class="">
                <Image
                  className="text-center border_certificate mb-5 d-flex mx-auto"
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                  src={iso}
                  alt="HANDYMAN"
                />{" "}
              </div>
              <div class="">
                <Image
                  className="text-center border_certificate mb-5 d-flex mx-auto"
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                  src={bca}
                  alt="HANDYMAN"
                />{" "}
              </div>
              <div class="">
                <Image
                  className="text-center border_certificate mb-5 d-flex mx-auto"
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                  src={biz}
                  alt="HANDYMAN"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
    </>
  );
}
