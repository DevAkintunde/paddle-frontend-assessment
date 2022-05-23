import React from "react";

const Contact = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-color-def/10 h-full backdrop-blur-sm" />
        <form className="grid grid-cols-1 gap-4 m-10  max-w-[80%] py-20">
          <label className="block text-center text-2xl">
            Hey, we are still in the works,
            <br />
            but you can send us a message
          </label>
          <section>
            <label htmlFor="first_name" className="block py-5 text-xs">
              First Name
            </label>
            <input
              name="first_name"
              type="text"
              placeholder="Enter Your First Name"
              className="block w-full rounded-xl h-10 px-5"
            />
          </section>
          <section>
            <label htmlFor="last_name" className="block py-5">
              Last Name
            </label>
            <input
              name="last_name"
              type="text"
              placeholder="Enter Your Last Name"
              className="block w-full rounded-xl h-10 px-5"
            />
          </section>
          <section>
            <label htmlFor="email" className="block py-5">
              Email Address
            </label>
            <input
              name="email"
              type="text"
              placeholder="Enter Your Email Address"
              className="block w-full rounded-xl h-10 px-5"
            />
          </section>
          <section>
            <label htmlFor="message" className="block py-5">
              Tell us what you need help with:
            </label>
            <textarea
              name="message"
              placeholder='Enter A Topic, Like "Channel Problem..."'
              className="block w-full rounded-xl min-h-[100px] p-5"
            />
          </section>
          <input
            type="submit"
            value="SEND NOW"
            className="inline-block w-fit bg-color-sec rounded-full mt-10 px-8 py-4 text-color-def"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
