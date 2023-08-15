import React from "react";

export const ContactForm = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 p-5">
          <h4 className="mb-4 fw-bold"> Contact Us</h4>
          <div class="mb-3">
            <input
              type="email"
              placeholder="Email"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <input type="text" placeholder="Name" class="form-control" />
          </div>

          <div class="mb-3">
            <textarea type="text" placeholder="Message" class="form-control" />
          </div>

          <button type="submit" class="btn btn-col4 fw-bold rounded-0 w-100">
            Submit
          </button>
        </div>

        <div className="col-lg-6 col-12 mb-lg-0 mb-5 text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.106902008953!2d103.854608!3d1.309242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c7b95bc097%3A0xfcc85fcf948131fc!2s26%20Desker%20Rd%2C%20Singapore%20209560!5e0!3m2!1sen!2sbd!4v1691606877798!5m2!1sen!2sbd"
            className="w-100"
            height={300}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
