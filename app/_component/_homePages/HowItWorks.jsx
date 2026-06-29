'use client'
import Image from 'next/image'
import { ChevronUp } from 'lucide-react'

export default function HowItWorks() {
  

  return (
    <section className="relative bg-white py-12 px-4 md:py-16 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-900">
            <span className="text-[#EF4444] text-lg">»</span>
            <span className="h-[2px] w-10 bg-[#EF4444]"></span>
            <span>Launch, Success and Scale</span>
          </div>
          
          <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="text-[#EF4444]">How</span>{' '}
            <span className="text-[#2F4FEA]">It Works</span>
          </h2>
        </div>

        {/* Desktop - Un numbers only */}
        <div className="relative  hidden h-[483px] lg:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 500" fill="none">
            <path
              d="M120 420C200 420 280 380 360 300C440 220 500 160 600 140C700 130 760 160 820 220C880 280 920 360 1000 420C1060 450 1100 440 1150 420"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
            <circle cx="120" cy="420" r="5" fill="#2F4FEA" stroke="#DBEAFE" strokeWidth="6"/>
            <circle cx="393" cy="265" r="5" fill="#2F4FEA" stroke="#DBEAFE" strokeWidth="6"/>
            <circle cx="820" cy="226" r="5" fill="#2F4FEA" stroke="#DBEAFE" strokeWidth="6"/>
            <circle cx="1150" cy="420" r="5" fill="#2F4FEA" stroke="#DBEAFE" strokeWidth="6"/>
          </svg>

          {/* Launch - left-[60px] top-[370px] */}
          <div className="absolute left-[60px] top-[370px] flex flex-col items-center">
            <Image
              src="/assets/images/howitworks/launch.jpg"
              alt="Launch"
              width={100}
              height={70}
              className="h-auto w-[100px]"
            />
            <h3 className="mt-2 text-[28px] font-bold text-black">Enquire</h3>
          </div>

          {/* Core - left: 360px; top: 175px; */}
          <div className="absolute  flex  flex-col items-center text-center" style={{ width: 'auto', left: '390px', top: '245px'}}>
            <Image
              src="/assets/images/howitworks/core.jpg"
              alt="Core"
              width={110}
              height={85}
              className="h-auto w-[110px]"
            />
            <h3 className="mt-2 text-[28px] font-bold text-black">response </h3>
            {/* <p className="mt-1 text-[14px] text-gray-900 leading-snug">
              Strengthen business using reliable systems for consistent performance.
            </p> */}
          </div>

          {/* Grow - top: 255px; */}
          <div className="absolute left-[750px] top-[255px] flex flex-col items-center">
            <Image
              src="/assets/images/howitworks/grow.jpg"
              alt="Grow"
              width={130}
              height={80}
              className="h-auto w-[130px]"
            />
            <h3 className="mt-2 text-[28px] font-bold text-black">action</h3>
          </div>

          {/* Advance - top: 250px; left: 929px; */}
          <div className="absolute left-[929px] top-[250px] flex w-[280px] flex-col items-center text-center">
            <Image
              src="/assets/images/howitworks/advance.jpg"
              alt="Advance"
              width={140}
              height={90}
              className="h-auto w-[140px]"
            />
            <h3 className="mt-2 text-[28px] font-bold text-black">resolve</h3>
            {/* <p className="mt-1 text-[14px] text-gray-900 leading-snug">
              Elevate your success <br />and scale with innovative solutions.
            </p> */}
          </div>
        </div>

        {/* Mobile Response - Stack layout */}
        <div className="mt-10 space-y-12 lg:hidden">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/images/howitworks/launch.jpg"
              alt="Launch"
              width={100}
              height={70}
              className="h-auto w-24"
            />
            <h3 className="mt-3 text-xl font-bold text-black">Launch</h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/images/howitworks/core.jpg"
              alt="Core"
              width={110}
              height={85}
              className="h-auto w-28"
            />
            <h3 className="mt-3 text-xl font-bold text-black">Core</h3>
            <p className="mt-2 max-w-xs text-xs text-gray-900 leading-relaxed">
              Strengthen business using reliable systems for consistent performance.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/images/howitworks/grow.jpg"
              alt="Grow"
              width={130}
              height={80}
              className="h-auto w-32"
            />
            <h3 className="mt-3 text-xl font-bold text-black">Grow</h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/images/howitworks/advance.jpg"
              alt="Advance"
              width={140}
              height={90}
              className="h-auto w-36"
            />
            <h3 className="mt-3 text-xl font-bold text-black">Advance</h3>
            <p className="mt-2 max-w-xs text-xs text-gray-900 leading-relaxed">
              Elevate your success 
            </p>
          </div>
        </div>
      </div>


    </section>
  )
}
