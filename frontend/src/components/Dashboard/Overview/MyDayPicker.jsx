import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const MyDayPicker = () => {
  return (
    <section className="shadow-xl pb-2 mb-5">
      <DayPicker mode="single" selected={[new Date()]} />
    </section>
  );
};

export default MyDayPicker;
