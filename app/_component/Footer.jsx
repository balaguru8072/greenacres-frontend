"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { withRandomPath } from "@/lib/randomPath";

export default function Footer() {
  // Base paths only - no random stuff here
  const baseServices = [
    { name: "About Us", href: "/aboutPages" },
    { name: "Listing", href: "/preparatoryPages" },
    { name: "Our Services", href: "/aboutPages" },
    { name: "Contact Us", href: "/ContactPages" },
  ];

  const [services, setServices] = useState(baseServices);

  // Generate random paths only on client to avoid hydration mismatch
  useEffect(() => {
    setServices(
      baseServices.map((item) => ({
       ...item,
        href: withRandomPath(item.href),
      }))
    );
  }, []);

  return (
    <footer className="w-full">
      {/* Footer Top */}
      <div className="bg-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* About */}
            <div>
              <h3 className="mb-5 text-2xl font-semibold text-gray-900">About</h3>
              <div className="space-y-4 text-gray-600 leading-7">
                <p>
                  <span><b>Green Acres Delta</b></span> is your trusted partner in real estate, helping you buy, sell, and invest with confidence.
                </p>
                <p>
                  We are dedicated to delivering quality service, transparency, and value in every transaction, ensuring a seamless experience for every client.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className = "text-center">
              <h3 className="mb-5 text-2xl font-semibold text-gray-900">Services</h3>
              <ul className="space-y-3">
                {services.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-600 transition hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="mb-5 text-2xl font-semibold text-gray-900">Contacts</h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <span className="font-medium text-gray-900">Phone: </span>
                  <a href="tel:919843990686" className="hover:text-primary">
                    +91 98439 90686
                  </a>
                </li>
                <li>
                  <span className="font-medium text-gray-900">Email: </span>
                  <a href="mailto:info@example.com" className="hover:text-primary">
                    info@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src={"/logo-greenacresdelta-removebg.png"}
                alt="Footer Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600">
              <Link href="/" className="font-semibold text-gray-900 hover:text-primary">
                Green Acres Delta
              </Link>{" "}
              &copy; 2026 All Right Reserved
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <li>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
