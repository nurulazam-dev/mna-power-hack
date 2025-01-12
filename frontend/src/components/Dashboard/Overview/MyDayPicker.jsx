import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const MyDayPicker = () => {
  return (
    <section className="shadow-xl p-2 mb-5 rounded-lg bg-white">
      <h2 className="font-bold text-2xl text-violet-600 text-center">
        Calendar
      </h2>
      <DayPicker mode="single" selected={[new Date()]} />
    </section>
  );
};

export default MyDayPicker;
