import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="  pt-16">
      <div className="container mx-auto lg:flex justify-between px-4">
        {/* Website Name */}
        <div>
          <h1 className="text-2xl font-bold">EquiSports</h1>
          <p className="mt-2">
            Your one-stop shop for all sports equipment needs.
          </p>
        </div>

        {/* Contact Info */}
        <div className="">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-2">Email: webridwan20@gmail.com
          </p>
          <p >Phone: +88 01876258020</p>
          <p>Address: Chittagong Bangladesh</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8  py-8 text-center text-sm">
        © {new Date().getFullYear()} EquiSports. All rights reserved.
      </div>

    </footer>
  );
}
