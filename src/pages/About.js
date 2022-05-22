import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-5 items-end gap-20">
        <div className="grid md:col-span-3 bg-color-def/10 h-96 backdrop-blur-sm">
          <div className="place-self-center md:ml-[65%] whitespace-nowrap">
            <div className="flex gap-3 items-center">
              <span className="w-10 h-0.5 bg-color-def" />
              <span>ABOUT US</span>
            </div>
            <h1 className="md:ml-[20%]">
              Built for SaaS <br /> and E-commerce
            </h1>
          </div>
        </div>
        <div className="md:col-span-2 px-20 md:px-0">
          Our tools are easy to set uo and use with a user <br />
          friendly dashboard that enables you to set up, <br />
          launch, automate and manage multi-affililate <br />
          campaigns in 5 minutes.
        </div>
      </div>

      <h2 className="m-24">
        Metricks was developed because just like you, we needed a product that
        could give us <span className="font-bold">good value</span>.
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-5 items-center gap-20">
        <div className="col-span-2 p-16">
          <div className="flex gap-3 items-center">
            <span className="w-10 h-0.5 bg-color-def" />
            <span>WHY US</span>
          </div>
          <p className="py-5">
            Our tools are easy to set up and use with a user <br />
            friendly dashboard that enables you to set up, <br />
            launch, automate and manage multi-affililate <br />
            campaigns in 5 minutes.
          </p>
        </div>
        <div className="grid col-span-3 bg-color-def/10 backdrop-blur-sm p-12">
          <div className="flex gap-3 items-center">
            <span className="w-10 h-0.5 bg-color-def" />
            <span>GROWING WITH YOU</span>
          </div>
          <p className="py-5">
            Our tools are easy to set up and use with a user <br />
            friendly dashboard that enables you to set up, <br />
            launch, automate and manage multi-affililate <br />
            campaigns in 5 minutes.
          </p>
          <p>
            Our tools are easy to set up and use with a user <br />
            friendly dashboard that enables you to set up, <br />
            launch, automate and manage multi-affililate <br />
            campaigns in 5 minutes.
          </p>
        </div>
      </div>

      <div className="p-10 bg-color-def/10 backdrop-blur-sm mt-24">
        <h2>Got a Question?</h2>
        <p className="pt-5 pb-3">
          See how Metrick can help your business grow with best affiliate
          marketing tracking software.
        </p>
        <Link to="contact-us">Contact Us</Link>
      </div>
    </>
  );
};

export default About;
