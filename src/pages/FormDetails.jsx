import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Loader from '../components/Loader'
import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import PolicyCreatedAlert from "../components/PolicyCreatedAlert";
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

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

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
`;

const GreenButton = styled(StyledButton)`
  background-color: #00b386;
  color: white;
`;

const OrangeButton = styled(StyledButton)`
  background-color: #ff9800;
  color: white;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #8b4513;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const Checkmark = styled.span`
  color: white;
  font-size: 48px;
`;

Modal.setAppElement("#root");

const FormDetails = ({ modalIsOpen, closeModal, data }) => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const printEcovernote = () => {
    console.log("printEcovernote")
  }

  const printCertificate = () => {
    console.log("printCertificate")
  }
  const backBtn = () => {
    closeModal(true)
  }

  const handleCreatePolicy = () => {
    console.log(data);
    
    setLoading(true)
    // Swal.fire({
    //   position: "top", // Ensures it's at the top
    //   html: ReactDOMServer.renderToString(<Loader size={100} color="#fff" />), // Adjust size as needed
    //   showConfirmButton: false,
    //   allowOutsideClick: false,
    //   background: "blue", // Sets background color
    //   customClass: {
    //     popup: "custom-swal-popup",
    //   },
    // });
  };

  // useEffect(() => {
  //   loading ?
  //     Swal.fire({
  //       position: "top",
  //       html: ReactDOMServer.renderToString(<Loader size={100} color="#fff" />),
  //       showConfirmButton: false,
  //       allowOutsideClick: false,
  //       background: "blue",
  //       customClass: {
  //         popup: "custom-swal-popup",
  //       },
  //     }) :
  //     // : setTimeout(() => {
  //     Swal.fire({
  //       position: "top",
  //       allowOutsideClick : false,
  //       width: "20rem",
  //       html: `
  //              <div style="display: flex; flex-direction: column; align-items: center; text-align: center;line-height:1;">

  //             <i id="closeSwal" class="fa-sharp fa-solid fa-xmark" style="position: absolute; top: 7px; right: 10px; font-size: 13px; color: #333; cursor: pointer;"></i>

  //               <i style="font-size: 15px; margin-bottom: 10px;color:#208ceb;">Your policy has been created<br>successfully</i>
  //               <div style="width: 100px; height: 100px; border-radius: 50%; background-color: #4f2804; display: flex; align-items: center; justify-content: center; margin-bottom: 5px;">
  //                  <i class="fa-sharp fa-solid fa-check" style="color:white; font-size:60px" aria-hidden="true"></i>
  //               </div>
  //               <div>
  //               <button id="printEcovernote" style="border : 1px solid green; padding:7px;background-color:#6ad0ae; margin:2px;border-radius:3px; color:white; font-size:10px;width:100px">Print<br>E-Covernote</button>
  //               <button id="printCertificate" style="border : 1px solid #f88d3e; padding:7px;background-color:#f8a466; margin:2px;border-radius:3px; color:white; font-size:10px;width:100px">Print<br>Certificate</button>
  //               </div>
  //               </div>`
  //       ,
  //       showConfirmButton: false,
  //       didOpen: () => {
  //         document.getElementById("closeSwal").addEventListener("click", function () {
  //           Swal.close();
  //       });

  //         document.getElementById("printEcovernote").addEventListener("click", function () {
  //           printEcovernote();
  //         });

  //         document.getElementById("printCertificate").addEventListener("click", function () {
  //           printCertificate();
  //         });
  //       }
  //     });
  //   // }, 3000);
  // }, [loading]);

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
                <td className="border p-1">{data.customerName}</td>
                <td className="border p-1">{data.customerMobile}</td>
                <td className="border p-1">{data.customerF_HName}</td>
                <td className="border p-1">{data.customerDob}</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">Age</th>
                <th className="border p-1 w-1/4 font-medium">Aadhar No.</th>
                <th className="border p-1 w-1/4 font-medium">PAN</th>
                <th className="border p-1 w-1/4 font-medium ">Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">{data.customerAge}</td>
                <td className="border p-1">{data.customerAadharNumber}</td>
                <td className="border p-1">{data.customerPan}</td>
                <td className="border p-1">{data.customerGender}</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-full text-left px-6 font-medium" colSpan="4">Customer Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1 text-left px-6" colSpan="4">{`${data.billAddL1} ${data.billAddL2} ${data.billAddArea} ${data.billAddCity} ${data.billAddState}`}</td>
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
                <td className="border p-1">{data.nomineeName}</td>
                <td className="border p-1">{data.nomineeRelation}</td>
                <td className="border p-1">{data.nomineeGender}</td>
                <td className="border p-1">{data.nomineeDob}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="">
          <h2 className="text-[12px] font-semibold border px-4 py-2">Vehicle Details</h2>
          <table className="w-full border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">Engine No.</th>
                <th className="border p-1 w-1/4 font-medium">Chassis No.</th>
                <th className="border p-1 w-1/4 font-medium">vehicle Model</th>
                <th className="border p-1 w-1/4 font-medium">Sub Model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">{data.engineNo}</td>
                <td className="border p-1">{data.chassNo}</td>
                <td className="border p-1">{data.model}</td>
                <td className="border p-1">{data.subModel}</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">Manufacture Year</th>
                <th className="border p-1 w-1/4 font-medium">Color</th>
                <th className="border p-1 w-1/4 font-medium">EX-Showroom Price</th>
                <th className="border p-1 w-1/4 font-medium">IDV</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">{data.mfgYear}</td>
                <td className="border p-1">{data.color}</td>
                <td className="border p-1">{data.ex_showroom_price}</td>
                <td className="border p-1">{data.vehicle_ex_showroom}</td>
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
                <td className="border p-1">{data.color}</td>
                <td className="border p-1">{data.color}</td>
                <td className="border p-1">{data.color}</td>
                <td className="border p-1">{data.color}</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">3rd Party Premium</th>
                <th className="border p-1 w-1/4 font-medium">TPP</th>
                <th className="border p-1 w-1/4 font-medium">Gross Premium</th>
                <th className="border p-1 w-1/4 font-medium">MSPL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">{data.color}</td>
                <td className="border p-1">{data.color}</td>
                <td className="border p-1">{data.color}</td>
                <td className="border p-1">{data.color}</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-1 w-1/4 font-medium">Allied Services</th>
                <th className="border p-1 w-1/4 font-medium">MRP for Insurance</th>
                <th className="border p-1 w-1/4 font-medium">Financer Name</th>
                <th className="border p-1 w-1/4 font-medium">Finance City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">{data.color}</td>
                <td className="border p-1">{data.color}</td>
                <td className="border p-1">{data.financer_name}</td>
                <td className="border p-1">{data.hypo_city}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 flex justify-end">
          <button className="px-3 py-1 ml-1 bg-orange-400 text-white rounded-sm shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs" onClick={backBtn }>← Back</button>
          <button className="px-3 py-1 ml-1 bg-[#009E41] text-white rounded-sm shadow-sm hover:bg-[#009E41] focus:outline-none focus:ring-2 focus:ring-[#009E41] text-xs"><span style={{ fontSize: '8px' }}>🖨️</span>Download</button>
          <button className="px-3 py-1 ml-1 bg-[#04989D] text-white rounded-sm shadow-sm hover:bg-[#04989D] focus:outline-none focus:ring-2 focus:ring-[#04989D] text-xs"
            onClick={handleCreatePolicy}
            // disabled={loading}
          >
            Create Policy
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FormDetails;
