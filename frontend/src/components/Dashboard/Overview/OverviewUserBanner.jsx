import dataImg from "../../../assets/images/data-trends.svg";
import { MdArrowOutward } from "react-icons/md";
import useFetchData from "../../../hooks/useFetchData";
import { BASE_URL } from "../../../../config";
import Loading from "../../../shared/Loading";
import Error from "../../../shared/Error";

const OverviewUserBanner = () => {
  const { data: user, loading, error } = useFetchData(`${BASE_URL}/users`);
  console.log(user._id);

  return (
    <section className="bg-gradient-to-r from-violet-800 to-violet-300 text-white rounded-md mb-6">
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="flex justify-between items-center p-2 pb-0">
          {/* info part */}
          <div className="px-4">
            <h2 className="font-bold text-2xl mb-2">
              {/* Hello! Nurul Azam{" "} */}
              Hello! {user?.name}{" "}
              <span className="text-sm font-normal">({user?.role})</span>
            </h2>
            <p className="opacity-85 font-thin text-[15px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis quae consequuntur accusantium praesentium architec
            </p>
            <button className="bg-black hover:bg-white py-[7px] rounded font-normal text-[17px] mt-4 mb-2 text-white hover:text-black flex justify-center items-center px-5">
              Profile <MdArrowOutward className="h-5 w-5 ml-1" />
            </button>
          </div>
          {/* img part */}
          <div className="mt-4">
            <img src={dataImg} alt="" className="max-w-64" />
          </div>
        </div>
      )}
    </section>
  );
};

export default OverviewUserBanner;
