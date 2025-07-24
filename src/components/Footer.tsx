import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold mb-4 md:mb-0">
          Ago - Foundation
        </div>
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/arin-chaudhary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-blue-500 transition-colors" />
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 dark:text-gray-500 mt-6">
        © {new Date().getFullYear()} Ago. All rights reserved. Arin Chaudhary.
      </div>
    </footer>
  );
}
