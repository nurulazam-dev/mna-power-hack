import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const MyDayPicker = () => {
  const [selected, setSelected] = useState();
  return (
    <section>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={
          selected
            ? `Selected: ${selected.toLocaleDateString()}`
            : "Pick a day."
        }
      />
    </section>
  );
};

export default MyDayPicker;
