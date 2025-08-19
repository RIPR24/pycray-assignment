"use client";
import React, { useState } from "react";
import { event } from "../page";

const Inputs = ({ addEvent }: { addEvent: (ev: event) => void }) => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>(
    new Date().toISOString().substring(0, 10)
  );
  return (
    <div className="add-con">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        name="date"
        id="date"
      />
      <button
        onClick={() => {
          if (name && date) {
            addEvent({ name: name.trim(), date: date, id: Date.now() });
            setName("");
            setDate("");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Inputs;
