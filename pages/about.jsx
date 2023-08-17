import Image from "next/image";
import about from "../../handyman/pages/components/images/about.jpg";
import service from "../../handyman/pages/components/images/service.png";
import { Navber } from "./components/Layout/Navber";
import Head from "next/head";
const About = () => {
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navber />
      <section className="p-5">
        <div
          style={{ background: "#EFFAF7" }}
          className="container p-5 rounded-3"
        >
          <div className="p-3">
            <h3> About Our Trusted Handyman Services</h3>
            <h6 className="mt-3 p_col">
              About Our Expert Handyman Services in Singapore, Find out how our
              years of experience and expertise in various trades enable us to
              handle a wide range of projects, from plumbing and electrical
              repairs to furniture assembly and home renovations. Trust our
              reliable team to get the job done right.
            </h6>

            <button className="btn btn-col2 text-white fw-bold mt-4">
              Get Started <i class="fa-regular fa-circle-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="p-lg-0 p-md-0 p-3">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <Image
                src={about}
                className="w-100 pb-lg-0 pb-5"
                style={{ height: "500px", width: "500px", objectFit: "cover" }}
                alt="handyman"
              />
            </div>

            <div
              className="col-lg-6 col-12 text_justify rounded-3 p-5"
              style={{ background: "#FDD0FB" }}
            >
              <h4>About Us</h4>
              <small>
                Welcome to Handyman Ahm, your trusted provider of comprehensive
                handyman services in Singapore. With a commitment to excellence
                and customer satisfaction, we offer a wide range of services to
                meet all your household needs. At Handyman Ahm, we understand
                the importance of having a reliable and skilled handyman by your
                side. Whether it's a small repair or a major renovation project,
                our team of experienced professionals is here to help. From
                fixing a leaky faucet to installing new electrical fixtures, we
                have you covered. Our painting services are designed to
                transform your space into a masterpiece. Whether you need a
                fresh coat of paint to revitalize your walls or a complete color
                makeover, our skilled painters will deliver exceptional results
                with attention to detail and precision. When it comes to home
                renovations, Handyman Ahm is your go-to solution. From kitchen
                and bathroom upgrades to flooring installations and carpentry
                work, our dedicated team will work closely with you to bring
                your vision to life. We prioritize quality craftsmanship and
                ensure that every project is completed to your satisfaction.
                With Handyman Ahm, you can expect professionalism, reliability,
                and superior customer service. We take pride in our attention to
                detail, timely completion of projects, and transparent
                communication with our clients. No matter the size or complexity
                of the job, we strive to exceed your expectations and provide
                exceptional results. Experience the convenience and peace of
                mind that comes with choosing Handyman Ahm for all your
                handyman, painting, and home renovation needs. Contact us today
                to discuss your requirements and let us turn your house into a
                home you'll love.
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="p-lg-0 p-md-0 p-3">
        <div
          className="container rounded-3 p-5"
          style={{ background: "#F8F9FB" }}
        >
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-4">
              <Image src={service} alt="s" />
            </div>
            <div className="col-lg-4">
              <p className="text_justify">
                {" "}
                <b className="fs-5">Our Services</b> - We provide comprehensive
                handyman services that encompass a wide range of home
                improvement tasks. Our offerings include home renovations,
                painting services, and an array of other skilled handyman
                solutions.
              </p>
            </div>
            <div className="col-lg-4">
              <button className="btn text-white btn-col3 rounded-0 ">
                Learn More <i class="fa-solid fa-chevron-right"></i>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container p-5">
          <div class="row pb-5">
            <div class="col-lg-4 col-12">
              <div class="card mb-lg-0 mb-4">
                <div class="card-body  text-center p-3 ">
                  <i class="fs-1 fa-solid fa-headset"></i>
                  <h5 class="card-title fs-5">24/7 Support </h5>

                  <small class="card-text">
                    "Uninterrupted assistance around the clock - our 24/7
                    support is here for you."
                  </small>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-12">
              <div class="card mb-lg-0 mb-4" style={{ background: "#00B5A3" }}>
                <div class="card-body  text-center text-white p-3">
                  <i class="fs-1 fa-solid fa-magnifying-glass"></i>
                  <h5 class="card-title fs-5">Transparency</h5>

                  <small class="card-text">
                    "Transparently fostering trust through open communication
                    and honesty."
                  </small>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-12">
              <div class="card">
                <div class="card-body  text-center p-3">
                  <i class="fs-1 fa-regular fa-face-laugh-beam"></i>
                  <h5 class="card-title fs-5">Customer Satisfaction </h5>

                  <small class="card-text">
                    "Exceeding customers with utmost satisfaction through
                    exceptional service."
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-lg-0 p-md-0 p-3">
        <div
          className="container rounded-4 py-4 my-5"
          style={{ background: "#0060B4" }}
        >
          <div className="row text-white p-5">
            <div className="col-lg-6 col-md-6 col-12">
              <h4>
                {" "}
                Our Mission <i class="fa-solid fa-thumbtack"></i>
              </h4>
              <p>
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Build
                strong partnerships with clients, actively involving them
                throughout the handyman service process.
              </p>

              <p>
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Create a
                sense of pride, excitement, and satisfaction for clients from
                the beginning to the end of their projects.
              </p>

              <p>
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Focus on
                client engagement and strive for complete customer satisfaction
                in all our handyman endeavors.
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <h4>
                Our Vision <i class="fa-solid fa-binoculars"></i>
              </h4>
              <p className="text_justify">
                <i class="fa-solid fa-arrow-right-from-bracket"></i> "To become
                the leading provider of trusted and reliable handyman services,
                revolutionizing the industry with our commitment to exceptional
                quality, customer-centric approach, and innovative solutions."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
