import Head from "next/head";
import Image from "next/image";
import Navber from "../../newhandyman/pages/components/Layout/Navber.jsx";
import about from "../pages/components/images/about.jpg";
import service from "../pages/components/images/service.png";
import Link from "next/link.js";
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
        <meta
          name="keywords"
          content="handyman service in Singapore, Best handyman service in Singapore, Aircon Services, Water Leakage Repair, Sliding Door Repair, Plumbing, Kitchen Sink Installation, Furniture Assembling, Electrical Repairs, Cabinet Installation, Aircon Maintenance, House Wiring, Home Renovation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ahm1.ico" />
      </Head>
      <Navber />
      <section className="p-0 pt-5 p-lg-5 p-md-5">
        <div
          style={{ background: "#EFFAF7" }}
          className="container p-0 py-3 p-lg-5 p-md-5 rounded-3"
        >
          <div className="p-3">
            <h3> About Our Trusted Handyman Services</h3>
            <h6 className="mt-3 text_justify ">
              About Our Expert Handyman Services in Singapore, Find out how our
              years of experience and expertise in various trades enable us to
              handle a wide range of projects, from plumbing and electrical
              repairs to furniture assembly and home renovations. Trust our
              reliable team to get the job done right.
            </h6>

            <button className="btn btn-col2 text-white fw-bold mt-4">
              Get Started <svg className="mb-1 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
            </button>
          </div>
        </div>
      </section>

      <section className="p-lg-0 p-md-0 p-2">
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
              className="col-lg-6 col-12 text_justify rounded-3 p-3 py-5 p-lg-5 p-md-5"
              style={{ background: "#FDD0FB" }}
            >
              <h4>About Us</h4>
              <small>
                Welcome to Handyman Ahm, your trusted provider of comprehensive
                handyman services in Singapore. With a commitment to excellence
                and customer satisfaction, we offer a wide range of services to
                meet all your household needs. At Handyman Ahm, we understand
                the importance of having a reliable and skilled handyman by your
                side. Whether it`s a small repair or a major renovation project,
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
                home you`ll love.
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
              <button className="btn btn-col3 rounded-2 ">
               <Link  className="text-white fw-bold " href="/service"> Learn More <svg className="mb-1 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg></Link> {" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    
      <section>
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="card mb-lg-0 mb-4">
                <div className="card-body  text-center p-3 ">
                <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
</svg>
                  <h5 className="card-title fs-5">24/7 Support </h5>

                  <small className="card-text">
                    `Uninterrupted assistance around the clock - our 24/7
                    support is here for you.`
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="card mb-lg-0 mb-4" style={{ background: "#00B5A3" }}>
                <div className="card-body  text-center text-white p-3">
                <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                  <h5 className="card-title fs-5">Transparency</h5>

                  <small className="card-text">
                    `Transparently fostering trust through open communication
                    and honesty.`
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="card">
                <div className="card-body  text-center p-3">
                <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
                  <h5 className="card-title fs-5">Customer Satisfaction </h5>

                  <small className="card-text">
                    `Exceeding customers with utmost satisfaction through
                    exceptional service.`
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-lg-0 p-md-0 p-2">
        <div
          className="container rounded-4 py-4 my-5"
          style={{ background: "#0060B4" }}
        >
          <div className="row text-white p-2 p-lg-5 p-md-5">
            <div className="col-lg-6 col-md-6 col-12">
              <h4>
                {" "}
                Our Mission <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-pin-angle" viewBox="0 0 16 16">
  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z"/>
</svg>
              </h4>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg> Build
                strong partnerships with clients, actively involving them
                throughout the handyman service process.
              </p>

              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg> Create a
                sense of pride, excitement, and satisfaction for clients from
                the beginning to the end of their projects.
              </p>

              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg> Focus on
                client engagement and strive for complete customer satisfaction
                in all our handyman endeavors.
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <h4>
                Our Vision <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
  <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
</svg>
              </h4>
              <p className="text_justify">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg> `To become
                the leading provider of trusted and reliable handyman services,
                revolutionizing the industry with our commitment to exceptional
                quality, customer-centric approach, and innovative solutions.`
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center text-4xl font-extrabold py-10 my-5">
          Why Choose Us?
        </h2>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-500 drop-shadow-x">
                <div className="card-body">
                  <h5 className="card-title">Experienced and Skilled Team</h5>
                  <p className="card-text text-justify text-gray-600">
                    Our handymen are a team of experienced and skilled
                    professionals who are well-equipped to handle any repair or
                    maintenance task efficiently and precisely.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-500 drop-shadow-x">
                <div className="card-body">
                  <h5 className="card-title">Comprehensive Services</h5>
                  <p className="card-text text-justify text-gray-600">
                    No matter the scale of the job, we provide a comprehensive
                    range of services to address all your home repair
                    requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-500 drop-shadow-x">
                <div className="card-body">
                  <h5 className="card-title">Reliable and Efficient</h5>
                  <p className="card-text text-justify text-gray-600">
                    We understand that a functional home is essential for your
                    comfort and peace of mind. Our team works diligently to
                    provide reliable and efficient services, ensuring that your
                    daily life is minimally disrupted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-500 drop-shadow-x">
                <div className="card-body">
                  <h5 className="card-title">Hassle-Free Experience</h5>
                  <p className="card-text text-justify text-gray-600">
                    Customer satisfaction is our priority. When you choose us,
                    expect a hassle-free experience from the moment you contact
                    us to the successful completion of the project.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-500 drop-shadow-x">
                <div className="card-body">
                  <h5 className="card-title">
                    Well-Maintained and Functional Home
                  </h5>
                  <p className="card-text text-justify text-gray-600">
                    Your home deserves the best care. With our handyman
                    services, you can be confident that your home will be
                    well-maintained and fully functional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
