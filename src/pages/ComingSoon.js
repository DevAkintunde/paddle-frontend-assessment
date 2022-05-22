import React from "react";
import DateDisplayFormatter from "../components/functions/DateDisplayFormatter";
import { WaitingListForm } from "../components/landingPageElements/WaitingListForm";

const ComingSoon = () => {
  return (
    <div className="relative sm:w-2/3 text-center mx-auto">
      <h1 className="uppercase font-bold text-4xl">
        something awesome is
        <br /> coming soon
      </h1>
      <p className="text-color-def/50 py-6">
        Your all-in-one affilliate marketing tracking software
        <span className="text-color-def"> track, automate </span> and <br />
        <span className="text-color-def"> optimise </span>your campaigns.
      </p>
      <DateDisplayFormatter date="2022-05-24" />
      <WaitingListForm />
      {/*the floating bulbs */}
      <div className="absolute bg-gradient-to-b from-color-sec/50  h-14 w-14 rounded-full right-2 sm:right-5 bottom-2/4" />
      <div className="absolute bg-gradient-to-b from-fuchsia-800  h-20 w-20 rounded-full left-2 sm:left-5 bottom-3/4" />
    </div>
  );
};

export default ComingSoon;
