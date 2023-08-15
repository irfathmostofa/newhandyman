import Link from "next/link";
import React from "react";
export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};
export const Footer = () => {
  return (
    <>
      {" "}
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>
                {" "}
                <i class="fas fa-tools"></i> Handyman Service
              </h6>
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
                  <a href="http://scanfcode.com/category/c-language/">
                    Singapore 209560
                  </a>
                </li>
                <li>
                  {" "}
                  <i className="fas fa-envelope mb-2"></i>{" "}
                  <a href="http://scanfcode.com/category/front-end-development/">
                    {" "}
                    kazi2630mt@gmail.com
                  </a>
                </li>
                <li>
                  {" "}
                  <i className="fas fa-phone mb-2"></i>{" "}
                  <a href="http://scanfcode.com/category/back-end-development/">
                    +65 8596 6244
                  </a>
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

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <Link
                    class="facebook"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100072178856281"
                  >
                    <i class="fab fa-facebook"></i>
                  </Link>
                </li>

                <li>
                  <Link
                    class="dribbble"
                    target="_blank"
                    href="https://wa.link/xqqjco"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
