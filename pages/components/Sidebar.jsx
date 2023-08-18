import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <>
      <h3 className="px-3">Services</h3>

      <ul class="list-group list-group-flush border-0 ">
        <li class="list-group-item border-0 ">
          <Link href="" className="text-dark">
            Efficient Aircon Services
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="" className="text-dark">
            Expert Furniture Assembling Service
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="" className="text-dark">
            Modern Kitchen Sink Installation
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="" className="text-dark">
            Professional Electrical Services
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="" className="text-dark">
            Professional House wiring Services
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="" className="text-dark">
            Sliding Door Repair Service
          </Link>
        </li>
        <li class="list-group-item border-0">
          <Link href="" className="text-dark">
            Stylish Cabinet Installation
          </Link>
        </li>
      </ul>
    </>
  );
};
