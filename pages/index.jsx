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
            <div className="mt-5 bg_main rounded-2 p-lg-5 p-md-5 p-2">
              <h1>
                Best Handyman Service in <br />
                Singapore
              </h1>
              <div className="d-flex text-center mt-4">
                <button className="btn btn-light me-3 px-lg-5 rounded-0">
                  {" "}
                  <Link type="button" className="text-dark fw-bold" href="/service">
                    {" "}
                    Explore
                  </Link>
                </button>
                <button className="btn btn-outline-light px-lg-5 rounded-0">
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
            className="container p-5 rounded-4"
            style={{ background: "#EFFAF7" }}
          >
            <h4 className="text-center mb-5">Our Services</h4>
            <div className="row justify-content-center">
              <div className=" col-lg-4 col-md-6 text-center p-5">
                <svg  className=" fs-2 mb-4 text-info" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
  <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
  <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
</svg>
                <h5>Door Repair</h5>
              </div>
              <div className=" col-lg-4 col-md-6 text-center p-5">
              <svg className=" fs-2 mb-4 text-info"  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
</svg>
                <h5>Plumbing</h5>
              </div>
              <div className=" col-lg-4 col-md-6 text-center p-5">
              <svg className=" fs-2 mb-4 text-info"  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-lightning" viewBox="0 0 16 16">
  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
</svg>
                <h5>Electrical</h5>
              </div>
              <div className=" col-lg-4 col-md-6 text-center p-5">
              <svg className=" fs-2 mb-4 text-info"  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg>
                <h5>Furniture Repair</h5>
              </div>
              <div className=" col-lg-4 col-md-6 text-center p-5">
              <svg className=" fs-2 mb-4 text-info"  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
</svg>
                <h5>Water Leakage</h5>
              </div>
              <div className=" col-lg-4 col-md-6 text-center p-5">
              <svg className=" fs-2 mb-4 text-info"  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-window-sidebar" viewBox="0 0 16 16">
  <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z"/>
</svg>
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
                  <svg className="ms-1 mb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-inbound" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container pb-0 p-5">
            <h4 className="text-center">We are Certified By</h4>
            <div className="d-lg-flex d-md-flex d-inline gap-lg-5 gap-md-5 gap-0 pb-0 p-5 justify-content-center align-items-center">
              <div className="">
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
              <div className="">
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
              <div className="">
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
