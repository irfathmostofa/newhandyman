import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <h3 className="px-3 text-lg-start text-center">Other Services</h3>

      <ul class="list-group list-group-flush border-0 text-lg-start text-center p-lg-0 pb-5">
        <li class="list-group-item border-0 ">
          <Link href="efficient-aircon-services" className="text-dark">
            Efficient Aircon Services
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link
            href="expert-furniture-assembling-service"
            className="text-dark"
          >
            Expert Furniture Assembling Service
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="expert-water-leakage-service" className="text-dark">
            Expert Water Leakage Service
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="modern-kitchen-sink-installation" className="text-dark">
            Modern Kitchen Sink Installation
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="professional-electrical-services" className="text-dark">
            Professional Electrical Services
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="professional-house-wiring-services" className="text-dark">
            Professional House wiring Services
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="professional-plumbing-services" className="text-dark">
            Professional Plumbing Services
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="sliding-door-repair-service" className="text-dark">
            Sliding Door Repair Service
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="stylish-Cabinet-installation" className="text-dark">
            Stylish Cabinet Installation
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Sidebar;
