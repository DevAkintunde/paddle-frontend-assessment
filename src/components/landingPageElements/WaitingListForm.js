import React from "react";

export const WaitingListForm = ({ className }) => {
  //the waiting submit form
  return (
    <form className="my-10">
      <div className="grid grid-cols-2 gap-6 w-1/2 min-w-min mx-auto">
        <input
          className="pl-3 bg-transparent border-b-2 border-b-color-def/30 text-xs"
          type="text"
          placeholder="First Name..."
        />
        <input
          className="pl-3 bg-transparent border-b-2 border-b-color-def/30 text-xs"
          type="text"
          placeholder="Last Name..."
        />
      </div>
      <div className="mt-6 inline-flex sm:w-2/3 min-w-min mx-auto">
        <input
          className="p-4 sm:pl-3 pr-12 rounded-full h-8 text-xs text-color-bla/50 -mr-5 min-w-min md:w-2/3"
          type="text"
          placeholder="Enter your email address..."
        />
        <input
          type="submit"
          className="uppercase cursor-pointer z-10 text-[0.6rem] bg-color-sec rounded-full px-5 w-fit grow -ml-5"
          value="Join our waiting list"
        />
      </div>
    </form>
  );
};
