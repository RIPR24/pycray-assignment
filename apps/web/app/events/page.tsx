"use client";

import React, { useEffect, useState } from "react";
import Inputs from "./components/inputs";
import Evcon from "./components/Evcon";

export type event = {
  id: number;
  date: string;
  name: string;
};

const Events = () => {
  const [eventlist, setEventlist] = useState<event[]>([]);
  const [filteredList, setFilteredList] = useState<event[]>([]);
  const [srh, setSrh] = useState<string>("");

  const addEvent = (ev: event) => {
    setEventlist((p) => {
      const cp = [...p, ev];
      setFilteredList(cp);
      localStorage.setItem("ls", JSON.stringify(cp));
      return cp;
    });
    setSrh("");
  };

  const removeEv = (i: number) => {
    setEventlist((p) => {
      const cp = p.filter((e) => e.id !== i);
      setFilteredList(cp);
      localStorage.setItem("ls", JSON.stringify(cp));
      return cp;
    });
    setSrh("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFilteredList(
      eventlist.filter((e) => e.name.includes(val) || e.date.includes(val))
    );
    setSrh(val);
  };

  useEffect(() => {
    const ls = localStorage.getItem("ls");
    if (ls) {
      const dat = JSON.parse(ls);
      setEventlist(dat);
      setFilteredList(dat);
    }
  }, []);

  return (
    <div className="con">
      <div className="main-con">
        <Inputs addEvent={addEvent} />
        <h1>EVENTS</h1>
        <div className="con">
          <input
            value={srh}
            onChange={handleChange}
            type="text"
            name="srh"
            id="srh"
            placeholder="Search"
          />
        </div>
        <div className="grid3">
          {filteredList.map((el) => (
            <Evcon key={el.id} ev={el} rmv={removeEv} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
