import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-30%, -50%)",
    width: "90%",
    maxWidth: "500px",
    maxHeight: "100vh",
    overflowY: "auto",
    padding: "10px",
  },
};

Modal.setAppElement("#root");

const FormDetails = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <div className="container mx-auto text-[8px] ">
        <div className="">
          <h2 className="text-[12px] font-semibold border px-4 py-2">Customer Details</h2>
          <table className="w-full border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">Customer Name</th>
                <th className="border p-1 w-1/4 font-medium">Phone Number</th>
                <th className="border p-1 w-1/4 font-medium">Father/Husband Name</th>
                <th className="border p-1 w-1/4 font-medium">Date Of Birth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">TESTING</td>
                <td className="border p-1">7845454556</td>
                <td className="border p-1">TESTING</td>
                <td className="border p-1">2003-01-01</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">Customer Name</th>
                <th className="border p-1 w-1/4 font-medium">Phone Number</th>
                <th className="border p-1 w-1/4 font-medium">Father/Husband Name</th>
                <th className="border p-1 w-1/4 font-medium  ">Date Of Birth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">TESTING</td>
                <td className="border p-1">7845454556</td>
                <td className="border p-1">TESTING</td>
                <td className="border p-1">2003-01-01</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-full text-left px-6 font-medium" colSpan="4">Customer Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1 text-left px-6" colSpan="4">sector 33 rajiv calony near sapna hotel gurugram haryana</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="">
          <h2 className="text-[12px] font-semibold border px-4 py-2">Nominee Details</h2>
          <table className="w-full border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">Nominee Name</th>
                <th className="border p-1 w-1/4 font-medium">Nominee Relation</th>
                <th className="border p-1 w-1/4 font-medium">Nominee Gender</th>
                <th className="border p-1 w-1/4 font-medium">Nominee DOB/Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">TESTING</td>
                <td className="border p-1">TESTING</td>
                <td className="border p-1">Male</td>
                <td className="border p-1">1995-01-01</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="">
          <h2 className="text-[12px] font-semibold border px-4 py-2">Vehicle Details</h2>
          <table className="w-full border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">Nominee Name</th>
                <th className="border p-1 w-1/4 font-medium">Nominee Relation</th>
                <th className="border p-1 w-1/4 font-medium">Nominee Gender</th>
                <th className="border p-1 w-1/4 font-medium">Nominee DOB/Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">TESTING</td>
                <td className="border p-1">TESTING</td>
                <td className="border p-1">Male</td>
                <td className="border p-1">1995-01-01</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">Nominee Name</th>
                <th className="border p-1 w-1/4 font-medium">Nominee Relation</th>
                <th className="border p-1 w-1/4 font-medium">Nominee Gender</th>
                <th className="border p-1 w-1/4 font-medium">Nominee DOB/Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">TESTING</td>
                <td className="border p-1">TESTING</td>
                <td className="border p-1">Male</td>
                <td className="border p-1">1995-01-01</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-[12px] font-semibold border px-4 py-2">Policy Details</h2>
          <table className="w-full border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">OD Premium</th>
                <th className="border p-1 w-1/4 font-medium">OD Discount</th>
                <th className="border p-1 w-1/4 font-medium">Effective OD</th>
                <th className="border p-1 w-1/4 font-medium">Nd Cover</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">1226.41</td>
                <td className="border p-1">1042.45</td>
                <td className="border p-1">183.96</td>
                <td className="border p-1">153.67</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">OD Premium</th>
                <th className="border p-1 w-1/4 font-medium">OD Discount</th>
                <th className="border p-1 w-1/4 font-medium">Effective OD</th>
                <th className="border p-1 w-1/4 font-medium">Nd Cover</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">1226.41</td>
                <td className="border p-1">1042.45</td>
                <td className="border p-1">183.96</td>
                <td className="border p-1">153.67</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">OD Premium</th>
                <th className="border p-1 w-1/4 font-medium">OD Discount</th>
                <th className="border p-1 w-1/4 font-medium">Effective OD</th>
                <th className="border p-1 w-1/4 font-medium">Nd Cover</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">1226.41</td>
                <td className="border p-1">1042.45</td>
                <td className="border p-1">183.96</td>
                <td className="border p-1">153.67</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 flex justify-end">
          <button className="px-3 py-1 ml-1 bg-orange-400 text-white rounded-sm shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs">Back</button>
          <button className="px-3 py-1 ml-1 bg-orange-400 text-white rounded-sm shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs">Download</button>
          <button className="px-3 py-1 ml-1 bg-orange-400 text-white rounded-sm shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs">Create Policy</button>
        </div>
      </div>
    </Modal>
  );
};

export default FormDetails;
