import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const MyDayPicker = () => {
  const [selected, setSelected] = useState();
  return (
    <section className="shadow-xl pb-2 mb-5">
      <DayPicker mode="single" selected={selected} onSelect={setSelected} />
    </section>
  );
};

export default MyDayPicker;
