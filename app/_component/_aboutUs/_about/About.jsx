import Image from "next/image";
import Link from "next/link";
import { withRandomPath } from "@/lib/randomPath";

export default function AboutSection() {
  return (
    <section className="relative py-[70px] md:py-[120px]">

      {/* Container */}
      <div className="container mx-auto px-4">

        <div className="relative pb-[70px] md:pb-[120px] border-b border-[#e5e7ec]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

            {/* Image Section */}
            <div>
              <div className="relative block pl-0 lg:pl-[130px]">

                {/* Image */}
                <div className="relative overflow-hidden rounded-[10px] group">
                  <Image
                    src="/assets/images/banner/about_part.jpg"
                    alt="About"
                    width={600}
                    height={700}
                    className="w-full rounded-[10px]"
                  />

                  {/* Shine Effect */}
                  <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent to-white/30 skew-x-[-25deg] group-hover:animate-shine" />
                </div>

                {/* Experience Box */}
                {/* <div className="relative lg:absolute lg:left-0 lg:bottom-[75px] w-full lg:w-[250px] text-center bg-[#1b1d21] rounded-[10px] px-[15px] py-[60px] mt-[30px] lg:mt-0 z-10">
                  <h2 className="text-[55px] leading-[60px] font-bold text-[#2dbe6c] mb-2">
                    20
                  </h2>
                  <h4 className="text-[20px] leading-[30px] text-white font-medium">
                    Years of <br /> Experience
                  </h4>
                </div> */}

              </div>
            </div>

            {/* Content Section */}
            <div>
              <div>
                <div className="mb-4">
                  <h5 className="text-primary font-semibold">About</h5>
                  <h2 className="text-2xl md:text-4xl font-bold">
                    Find Your Perfect Space
                  </h2>
                </div>

                <div className="text-gray-600 space-y-4">
                  <p>
                    At Green Acres Delta, we help individuals, families, and investors discover the right property with confidence.
                    Whether buying your dream home, selling a property, or exploring investment opportunities, our experienced team delivers reliable guidance and exceptional service.
                  </p>
                  <p>
                    Our goal is to build lasting relationships through transparency, integrity, and value in every transaction                  </p>
                </div>

                <ul className="mt-4 space-y-2">
                  <li>✔ Trusted Real Estate Professionals</li>
                  <li>✔ Quality Property Solutions</li>
                  <li>✔ Transparent Transactions</li>
                  <li>✔ Exceptional Customer Service</li>
                </ul>

                <div className="mt-6">
                  <Link
                    href={withRandomPath("/ContactPages")}
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
                  >
                    Contact With Me
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}