import React from "react";
import { Link } from "react-router-dom";

const MessageFromFounder = () => {
  return (
    <div className="font-poppins px-10 xl:px-36">
      <p className="flex justify-center text-xl lg:text-3xl font-semibold text-[#00B8A2] xl:my-10">
        Message From Founder
      </p>
      <div className="md:flex w-full">
        {/* founder image */}
        <div className="flex flex-col items-center justify-center my-6 md:w-1/3">
          <img alt="image"
            src="/images/founder.jpeg"
            className="rounded-full w-36 h-36 lg:w-48 lg:h-48 xl:w-60 xl:h-60 object-cover bg-[#EAFFFD] p-5"
          ></img>
          <p className="text-green-800 font-semibold text-xl">Anju Dinesh</p>
          <p className="text-green-800 text-base">Founder & Principal Consultant</p>
          <p className="text-green-800 text-base">Phenomenal HR</p>
          <div className="flex justify-between gap-6 mt-4">
            <Link to={'https://www.instagram.com/anjuphenomenal/'}>
            <img src="/images/icons/instagram-logo.png" className="md:w-10 w-7"></img>
            </Link>
            <Link to={'https://www.linkedin.com/in/anju-dinesh-08252422/'}>
            <img src="/images/icons/linkedin-logo.png" className="md:w-10 w-7"></img>
            </Link>
          </div>
        </div>
        {/* founder message */}
        <div className="my-4 md:w-2/3">
          <p className="text-xs md:text-sm xl:text-[17px] text-green-700 font-light text-center">"
            At Phenomenal HR, we firmly believe that
            people are the driving force behind organizational success. With my
            background spanning both startups and multinational corporations,
            I've witnessed firsthand the transformative impact that HR teams can
            have on cultivating high-performance work cultures.</p> <p className="mt-3 text-xs md:text-sm xl:text-[17px]  text-green-700 font-light text-center">We also understand that many
            founders genuinely care about their employees but lack the expertise
            in HR to truly optimize their workforce. That's where we come in.
            Our team of HR functional experts are here to provide tailored
            solutions and guidance, empowering founders to harness the full
            potential of their teams.</p> <p className="mt-3 text-xs md:text-sm xl:text-[17px] text-green-700 font-light text-center">As the founder of this company, my mission is clear: I want to level
            the playing field for all organizations, ensuring everyone has
            access to the same caliber of HR expertise as larger corporations.
            Too often, businesses rely on a single HR person or junior
            staff members, simply because that's what they can afford. But at
            Phenomenal HR, we believe that every organization, regardless of
            size, deserves top-tier HR support. </p> <p className="mt-3 text-xs md:text-sm xl:text-[17px]  text-green-700 font-light text-center"> Whether you're a
            startup navigating the complexities of HR for the first time or an
            established organization seeking to elevate your people strategy,
            we're here to drive the change you seek. Welcome to a new era of HR
            consultancy, where expertise meets passion, and success is measured
            by the growth and fulfillment of every individual within an
            organization.</p> <p className="mt-3 text-xs md:text-sm xl:text-[17px]  text-green-700 font-light text-center"> Together, let's unlock the full potential of your
            workforce and pave the way for a brighter, more prosperous future." 
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageFromFounder;
