import Link from "next/link";
import React from "react";

const Yolo = () => {
  return (
    <div className="con front">
      <h1>
        Hello I am Bapiya Sadhukhan and this is my assignment for PyCray Tech. I
        hope you like it
      </h1>
      <Link href={"/events"}>Events</Link>
    </div>
  );
};

export default Yolo;
