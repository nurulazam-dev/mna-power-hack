import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const TopBillHolder = () => {
  return (
    <section className="shadow-xl p-2 bg-white rounded-md mb-4">
      <h2 className="font-bold text-2xl text-violet-600 mb-2">
        Top Bill Holder
      </h2>
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr className="border-none">
            <td className="p-0">
              <div className="flex items-center gap-2">
                <div className="avatar p-1">
                  <div className="mask rounded-full mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Kamal Uddin</div>
                  <div className="text-sm opacity-50">Anderkilla, Ctg.</div>
                </div>
              </div>
            </td>

            <th className="flex justify-center items-center">
              <FaUserCircle className="h-6 w-6 text-blue-600 mr-2" />
              <MdEmail className="h-6 w-6 text-indigo-600 mr-2" />
              <FaPhone className="h-5 w-5 text-green-600" />
            </th>
          </tr>
          {/* row 2 */}
          <tr className="border-none">
            <td className="p-0">
              <div className="flex items-center gap-2">
                <div className="avatar p-1">
                  <div className="mask rounded-full mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">Oxygen, Ctg.</div>
                </div>
              </div>
            </td>

            <th className="flex justify-center items-center">
              <FaUserCircle className="h-6 w-6 text-blue-600 mr-2" />
              <MdEmail className="h-6 w-6 text-indigo-600 mr-2" />
              <FaPhone className="h-5 w-5 text-green-600" />
            </th>
          </tr>
          {/* row 3 */}
          <tr className="border-none">
            <td className="p-0">
              <div className="flex items-center gap-2">
                <div className="avatar p-1">
                  <div className="mask rounded-full mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Hathazary, Ctg.</div>
                </div>
              </div>
            </td>

            <th className="flex justify-center items-center">
              <FaUserCircle className="h-6 w-6 text-blue-600 mr-2" />
              <MdEmail className="h-6 w-6 text-indigo-600 mr-2" />
              <FaPhone className="h-5 w-5 text-green-600" />
            </th>
          </tr>
          {/* row 4 */}
          <tr className="border-none">
            <td className="p-0">
              <div className="flex items-center gap-2">
                <div className="avatar p-1">
                  <div className="mask rounded-full mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Raozan, Ctg.</div>
                </div>
              </div>
            </td>

            <th className="flex justify-center items-center">
              <FaUserCircle className="h-6 w-6 text-blue-600 mr-2" />
              <MdEmail className="h-6 w-6 text-indigo-600 mr-2" />
              <FaPhone className="h-5 w-5 text-green-600" />
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TopBillHolder;
