import React from 'react'
import Preparatory from '../../_component/_preparatoryPages/_listing_prepartory/Prepartory'
import LatestNews from '../../_component/_homePages/LatestNews';
import ContactSection from '../../_component/_contact/_contactUs/ContactSection';
import HowItWorks from '../../_component/_homePages/HowItWorks';
import ServicesSection from '../../_component/_homePages/ServicesSection';

function page() {
  return (
    <div className='mt-[100px] md:mt-[65px]'>
        <Preparatory />
        {/* <HowItWorks />
        <ServicesSection /> */}
        {/* <LatestNews /> */}
        <ContactSection />
    </div>
  )
}

export default page