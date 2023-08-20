import Link from "next/link";
import React from "react";
export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};
const Footer = () => {
  return (
    <>
      {" "}
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h5>
                {" "}
                <i class="fas fa-tools"></i> Handyman Service
              </h5>
              <p class="text-justify">
                "Reliable Handyman Services in Singapore - Your Trusted Partner
                for Quality Repairs and Maintenance.{" "}
              </p>{" "}
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Contacts</h6>
              <ul class="footer-links">
                <li>
                  {" "}
                  <i className="fas fa-home mb-2"></i>{" "}
                  <a href="#">Singapore 209560</a>
                </li>
                <li>
                  {" "}
                  <i className="fas fa-envelope mb-2"></i>{" "}
                  <a href="mailto:kazi2630mt@gmail.com">
                    {" "}
                    kazi2630mt@gmail.com
                  </a>
                </li>
                <li>
                  {" "}
                  <i className="fas fa-phone mb-2"></i>{" "}
                  <a href="tel:+65 8596 6244">+65 8596 6244</a>
                </li>
                <li>
                  {" "}
                  <i className="fas fa-phone mb-2"></i>{" "}
                  <Link
                    class="facebook"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100072178856281"
                  >
                    facebook
                  </Link>
                </li>
                <li>
                  {" "}
                  <i className="fas fa-phone mb-2"></i>{" "}
                  <Link
                    class="dribbble"
                    target="_blank"
                    href="https://wa.link/xqqjco"
                  >
                    whatsapp
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <small class="copyright-text">
                Copyright &copy; 20123 All Rights Reserved by
                <Link href="/"> HandymanAHM</Link>.
              </small>{" "}
              <br />
              <small class="copyright-text">
                Developed By
                <Link href="https://www.linkedin.com/in/fkr-uddin/"> FKR</Link>.
              </small>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12"></div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
