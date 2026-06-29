import Image from 'next/image'

export default function AboutMore() {
  return (
    <section className="bg-white py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side - Image with Decorative Elements */}
          <div className="relative">
            {/* Orange Background Shape */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-[#C4A462] -z-10"></div>

            {/* Main Image Container with Border */}
            <div className="relative border-2 p-3 ">
              <Image
                src="/assets/images/about/about_img20.png" // Replace with your image path
                alt="Relxtower Building"
                width={100}
                height={100}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Subtitle */}
            <p className="text-[#C4A462] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              ABOUT US
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Welcome To  <br /> Green Acres Delta
            </h2>


            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              At Green Acres Delta, we specialize in the sale of residential plots, land properties, houses, apartments, and commercial spaces. Our mission is to deliver reliable and transparent real estate solutions tailored to each client’s unique needs. Backed by extensive market expertise and a strong commitment to customer satisfaction, we have successfully facilitated numerous property transactions and built enduring relationships founded on trust and professionalism.
              <br /><br />
              Whether you are searching for your dream home or exploring strategic investment opportunities, Green Acres Delta is dedicated to guiding you through every step of the process with integrity and excellence.            </p>

            {/* CTA Button */}
            <button className="bg-[#C4A462] hover:bg-[#b39452] text-black p-3 font-semibold px-10 py-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
