/* eslint-disable react/prop-types */
import DeleteBillModal from "./DeleteBillModal";
import UpdateBillModal from "./UpdateBillModal";

// const BillingsTable = ({ bill, setDeleteBill }) => {
const BillingsTable = (props) => {
  console.log(props.bill);
  const data = props.bill;

  return (
    <tr className="border text-left">
      <td className="border">{data.id}</td>
      {/* <td className="border">{data.billingHolder}</td> */}
      <td className="border">{data.name}</td>
      <td className="border">{data.phone}</td>
      {/* <td className="border">{data.amount}</td> */}
      <td className="border">$ 120</td>
      {/* <td className="border">{data?.date}</td> */}
      <td className="border">30-12-2024</td>
      <td className="flex justify-center">
        <div className="mx-2">
          <UpdateBillModal />
          <label
            htmlFor="bill-update-modal"
            className="btn btn-outline btn-success btn-xs"
          >
            Edit
          </label>
        </div>
        <div className="mx-2">
          <DeleteBillModal />
          <label
            // onClick={() => setDeleteBill(bill)}
            htmlFor="bill-delete-modal"
            className="btn btn-outline btn-error btn-xs"
          >
            Delete
          </label>
        </div>
      </td>
    </tr>
  );
};

export default BillingsTable;
