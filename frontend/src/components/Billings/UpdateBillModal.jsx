const UpdateBillModal = () => {
  return (
    <div>
      <input type="checkbox" id="bill-update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white relative w-full max-w-xs">
          <label
            htmlFor="bill-update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl mb-2 font-bold">Update Bill</h3>
          {/* <form onSubmit={handleBillAdd}> */}
          <form>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              // onChange={handleChange}
              // value={data.name}
              className="input outline-none border border-black w-full max-w-xs mt-4 bg-white"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              // onChange={handleChange}
              // value={data.email}
              className="input outline-none border border-black w-full max-w-xs mt-4 bg-white"
              required
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              // onChange={handleChange}
              // value={data.phone}
              className="input outline-none border border-black w-full max-w-xs mt-4 bg-white"
              required
            />
            <input
              name="amount"
              type="number"
              // onChange={handleChange}
              // value={data.amount}
              placeholder="Paid Amount"
              className="input outline-none border border-black w-full max-w-xs mt-4 bg-white"
              required
            />
            <input
              type="submit"
              value="Update Bill"
              className="btn w-full border-none text-[15px] text-white hover:text-black max-w-xs mt-3 bg-green-600 hover:bg-orange-600"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBillModal;
