import Image from "next/image";
import Link from "next/link";
import ac from "../components/images/ac.jpg";
import { Navber } from "../components/Layout/Navber";
const Plumbing = () => {
  return (
    <>
      <section className="p-5">
        <div className="container">
          <Image src={ac} class="w-75 h-25" alt="..." />

          <div class="card-body p-5">
            <h5 class="card-title">Furniture</h5>
            <p class="card-text text_justify">
              Comprehensive air conditioning services, including installation,
              repair, and maintenance, ensuring efficient cooling and optimal
              comfort in residential and commercial environments.
            </p>

            <Link href="aircon" class="card-link text-info">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plumbing;
