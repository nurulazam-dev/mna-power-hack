/* eslint-disable react/prop-types */

const ViewBillModal = ({ bill }) => {
  if (!bill) return null;

  console.log(bill);

  return (
    <>
      <input type="checkbox" id="bill-view-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white relative max-w-sm">
          <label
            htmlFor="bill-view-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-[22px] font-bold text-center text-violet-600">
            Bill Details
          </h3>
          <div className="divider divider-neutral my-2 opacity-40"></div>

          <div className="space-y-3">
            <p className="text-sm">
              <strong>Billing ID:</strong> {bill?._id}
            </p>
            <p className="text-sm">
              <strong>Billing Holder:</strong> {bill?.billingHolder}
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> {bill?.phone}
            </p>
            <p className="text-sm">
              <strong>Paid Amount:</strong> $ {bill?.amount}
            </p>
            <p className="text-sm">
              <strong>Status:</strong>{" "}
              <span
                className={`rounded px-3 py-[3px] text-white uppercase ${
                  bill?.status === "Unpaid" ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {bill?.status}
              </span>
            </p>
            <p className="text-sm">
              <strong>Dateline:</strong>{" "}
              {new Date(bill?.dateline).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
            <p className="text-sm">
              <strong>Bill Attacher:</strong> {bill?.billAttacher}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBillModal;
