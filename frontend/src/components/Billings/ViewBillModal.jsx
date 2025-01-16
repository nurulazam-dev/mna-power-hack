/* eslint-disable react/prop-types */

const ViewBillModal = ({ bill }) => {
  if (!bill) return null;

  return (
    <>
      <input type="checkbox" id="bill-view-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-xl">
          <label
            htmlFor="bill-view-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-bold mb-4 text-center">Bill Details</h3>
          <div className="space-y-3">
            <p className="text-sm">
              <strong>Billing ID:</strong> {bill?.id}
            </p>
            <p className="text-sm">
              <strong>Billing Holder Name:</strong> {bill?.billingHolder}
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> {bill?.phone}
            </p>
            <p className="text-sm">
              <strong>Paid Amount:</strong> $ {bill?.amount}
            </p>
            <p className="text-sm">
              <strong>Paid Date:</strong> {bill?.date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBillModal;
