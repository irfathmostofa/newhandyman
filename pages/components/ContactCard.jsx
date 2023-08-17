export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};

const ContactCard = () => {
  return (
    <>
      <div className="container p-lg-5">
        <div className="contact-card p-5">
          <div className="d-lg-flex flex-n gap-5 text-center justify-content-evenly">
            <small className="m-0 text-center px-lg-0 px-1">
              {" "}
              <i class="fa-solid fa-earth-asia mb-3"></i> <br></br> Singapore{" "}
            </small>
            <small className="m-0 text-center px-lg-0 px-1">
              {" "}
              <i class="fa-solid fa-location-dot mb-3"></i> <br></br> Singapore
              209560{" "}
            </small>
            <small className="m-0 text-center px-lg-0 px-1">
              {" "}
              <i className="fa fa-phone mb-3"></i> <br></br> +65 8596 6244{" "}
            </small>
            <small className="m-0 text-center px-lg-0 px-1">
              {" "}
              <i className="fab fa-google mb-3"></i> <br></br>{" "}
              kazi2630mt@gmail.com{" "}
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
