import React from "react";
import { event } from "../page";

const Evcon = ({ ev, rmv }: { ev: event; rmv: (n: number) => void }) => {
  return (
    <div className="el">
      <p className="hd">{ev.name}</p>
      <p>{ev.date}</p>
      <button
        className="sbtn"
        onClick={() => {
          rmv(ev.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Evcon;
