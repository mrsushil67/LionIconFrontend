import React, { useEffect, useState } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import axios from 'axios';
import FormDetails from './FormDetails';


const NewPolicyForm = () => {

    const data = {
        customerName: "Sushil",
        customerEmail: "sushil@gmail.com",
        customerMobile: "82134682312",
    }
    const initialState = {
        customerName: "",
        customerEmail: "",
        customerMobile: "",
        customerF_HName: "",
        customerAge: "",
        customerDob: "",
        customerGender: "",
        customerAadhar_f: "",
        customerAadhar_b: "",
        customerPan: "",
        customerInvoice: "",
        nomineeName: "",
        nomineeRelation: "",
        nomineeGender: "",
        nomineeAge: "",
        nomineeDob: "",
        billAddL1: "",
        billAddL2: "",
        billAddState: "",
        billAddCity: "",
        billAddArea: "",
        billAddPin: "",
        shipAddL1: "",
        shipAddL2: "",
        shipAddState: "",
        shipAddCity: "",
        shipAddArea: "",
        shipAddPin: "",
        vehicleNo: "",
        engineNo: "",
        chassNo: "",
        model: "",
        subModel: "",
        mfgYear: "",
        color: "",
        vehicleType: "",
        ex_showroom_price: "",
        vehicle_ex_showroom: "",
        policy_date: "",
        hypo_policy: false,
        hypo_city: "",
        financer_name: ""
    };

    const [formData, setFormData] = useState(initialState)
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedField, setSelectedField] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(true);

    let subtitle;
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleInputChanged = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value === "true" ? true : value === "false" ? false : value,
        }));
    };

    // Handle file upload when clicking the upload icon
    const handleFileUpload = async () => {
        if (!selectedFile || !selectedField) {
            alert("Please select a file first.");
            return;
        }


        setUploading(true);
        const formdata = new FormData();
        formdata.append("pdf", selectedFile);

        try {
            console.log("sss : ", selectedFile)
            const response = await axios.post('http://192.168.192.21:2000/policy/uploadPdf', formdata, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlN1bWl0ICIsImVtYWlsIjoic3VtaXRAZ21haWwuY29tIiwibW9iaWxlIjoiODUzMzk0Mzc1MSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaXNEZWxldGVkIjpmYWxzZSwicm9sZSI6ImFkbWluIiwiYWRkZWRCeSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyNS0wMi0wMlQwODozODowNC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMi0wMlQwODozODowNC4wMDBaIiwiaWF0IjoxNzM4NDg1OTI1fQ.nmoaKzJQWrsIaJgiw1Wz6Ox8kQ10myfS--6B1zdySWQ'
                }
            });

            console.log("rr ", response)
            if (response.data?.fileUrl) {
                setFormData((prevState) => ({
                    ...prevState,
                    [selectedField]: response.data.fileUrl, // Store the file URL in formData
                }));

                alert(`${selectedField} uploaded successfully!`);
                setSelectedFile(null); // Clear the selected file
                setSelectedField(null); // Clear the field name
            }
        } catch (error) {
            console.error("File upload failed:", error);
            alert("File upload failed!");
        } finally {
            setUploading(false);
        }
    };

    // useEffect(() => {
    //     // console.log("Updated form data:", formData);
    // }, [formData]);

    // Handle file input change
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        console.log(files[0])
        if (files.length > 0) {
            setSelectedFile(files[0]); // Store only one selected file at a time
            setSelectedField(name); // Store the corresponding field name
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("user : ", formData);
        const data = formData;
        setIsOpen(true);
        setFormData(initialState)

        // try {
        //     const response = await axios.post("http://192.168.192.21:2000/policy/create", data, {
        //         headers: {
        //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlN1bWl0ICIsImVtYWlsIjoic3VtaXRAZ21haWwuY29tIiwibW9iaWxlIjoiODUzMzk0Mzc1MSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaXNEZWxldGVkIjpmYWxzZSwicm9sZSI6ImFkbWluIiwiYWRkZWRCeSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyNS0wMi0wMlQwODozODowNC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMi0wMlQwODozODowNC4wMDBaIiwiaWF0IjoxNzM4NDg1OTI1fQ.nmoaKzJQWrsIaJgiw1Wz6Ox8kQ10myfS--6B1zdySWQ'
        //         }
        //     })
        //     console.log(response.data)

        // } catch (error) {
        //     console.log(error)
        // }
    };


    return (
        <div className="font-sans p-4">
            <form
                onSubmit={handleSubmit}
            >
                <div className='border p-4 bg-white'>
                    <p className="text-base font-semibold mr-2 mb-4">CREATE NEW CORPORATE INSURANCE POLICY</p>

                    <p className="text-base">Customer Details</p>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Customer Details Fields */}
                            {[
                                { label: 'Customer Name', required: true, type: "text", name: 'customerName' },
                                { label: 'Email ID', required: true, type: "email", name: 'customerEmail' },
                                { label: 'Phone Number', required: true, type: "number", name: 'customerMobile' },
                                { label: 'Father/Husband Name', required: true, type: "text", name: 'customerF_HName' },
                                { label: 'Customer Age (In Year)', required: true, type: "number", name: 'customerAge' },
                                { label: 'Date Of Birth', required: true, type: "date", name: 'customerDob' },
                                { label: 'Customer Aadhar No', required: true, type: "number", name: 'cAdharNo' },
                                { label: 'Customer PAN', required: false, type: "text", name: 'cPan' }
                            ].map((field, index) => (
                                <div key={index}>
                                    <label className="block text-[10px] text-blue-800 mb-1">
                                        {field.label}
                                        {field.required && <span className="text-red-500">*</span>}
                                    </label>
                                    <input
                                        type={field.type
                                            // field.label.includes('Email') ? 'email' :
                                            //     field.label.includes('Age') || field.label.includes('Aadhar') ? 'number' : 'text'
                                        }
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleInputChange}
                                        className="block w-full h-7 border border-gray-600 sm:text-sm rounded-sm"
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-[10px] text-blue-900 mb-1">Gender</label>
                                <select
                                    name="customerGender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    className="block w-full h-7 border border-gray-600 sm:text-sm rounded-sm">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            {/* File Uploads */}
                            {[
                                { label: 'Aadhar Front Upload (Optional)', type: 'file', name: 'customerAadhar_f' },
                                { label: 'Aadhar Back Upload (Optional)', type: 'file', name: 'customerAadhar_b' },
                                { label: 'PAN Card Upload (Optional)', type: 'file', name: 'customerPan' },
                                { label: 'Invoice Upload (Optional)', type: 'file', name: 'customerInvoice' },
                            ].map((label, index) => (
                                <div key={index}>
                                    <label className="block text-[10px] text-blue-900 mb-1">
                                        {label.label.replace('(Optional)', '')}
                                        <span className="text-red-500">(Optional)</span>
                                    </label>
                                    <div className="flex items-center border border-gray-600 rounded-sm h-7 px-1">
                                        <input
                                            type={label.type}
                                            name={label.name}
                                            onChange={handleFileChange}
                                            className="w-full text-[9px]"
                                        />
                                        <MdOutlineFileUpload
                                            className="text-gray-600 text-lg cursor-pointer ml-2"
                                            onClick={handleFileUpload}
                                            disabled={uploading}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-base mt-5">Nominee Details</p>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Nominee Details Fields */}
                            {[
                                { level: 'Customer Nominee Name', required: true, type: "text", name: 'nomineeName' },
                                { level: 'Customer Nominee Relation', required: true, type: "text", name: 'nomineeRelation' },
                                { level: 'Nominee Age(In Year)', required: true, type: "number", name: 'nomineeAge' },
                                { level: 'Nominee Date Of Birth', required: true, type: "date", name: 'nomineeDob' },
                            ].map((label, index) => (
                                <div key={index}>
                                    <label className="block text-[10px] text-blue-800 mb-1">
                                        {label.level}
                                        {label.required && <span className="text-red-500">*</span>}
                                    </label>
                                    <input
                                        type={label.type
                                            // label.level.includes('Age') ? 'number' : 'text'
                                        }
                                        name={label.name}
                                        value={formData[label.name]}
                                        onChange={handleInputChange}
                                        className="block w-full h-7 border border-gray-600 sm:text-sm rounded-sm"
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-[10px] text-blue-900 mb-1">Customer Nominee Gender</label>
                                <select
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    name='nomineeGender'
                                    className="block w-full h-7 border border-gray-600 sm:text-sm rounded-sm">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <p className="text-base mt-5">Billing Address</p>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Customer Details Fields */}
                            {[
                                { label: 'Billing Address Line 1', required: true, name: 'billAddL1' },
                                { label: 'Billing Address Line 2', required: true, name: 'billAddL2' },
                                { label: 'State', required: true, name: 'billAddState' },
                                { label: 'City', required: true, name: 'billAddCity' },
                                { label: 'Area', required: true, name: 'billAddArea' },
                                { label: 'PinCode', required: true, name: 'billAddPin' },
                            ].map((field, index) => (
                                <div key={index}>
                                    <label className="block text-[10px] text-blue-800 mb-1">
                                        {field.label}
                                        {field.required && <span className="text-red-500">*</span>}
                                    </label>
                                    <input
                                        type={
                                            field.label.includes('Email') ? 'email' :
                                                field.label.includes('Age') || field.label.includes('Aadhar') ? 'number' : 'text'
                                        }
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleInputChange}
                                        className="block w-full h-7 border border-gray-600 sm:text-sm rounded-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-base mt-5">Shipping Address</p>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Customer Details Fields */}
                            {[
                                { label: 'Shipping Address Line 1', required: true, name: 'shipAddL1' },
                                { label: 'Shipping Address Line 2', required: true, name: 'shipAddL2' },
                                { label: 'State', required: true, name: 'shipAddState' },
                                { label: 'City', required: true, name: 'shipAddCity' },
                                { label: 'Area', required: true, name: 'shipAddArea' },
                                { label: 'PinCode', required: true, name: 'shipAddPin' },
                            ].map((field, index) => (
                                <div key={index}>
                                    <label className="block text-[10px] text-blue-800 mb-1">
                                        {field.label}
                                        {field.required && <span className="text-red-500">*</span>}
                                    </label>
                                    <input
                                        type={
                                            field.label.includes('Email') ? 'email' :
                                                field.label.includes('Age') || field.label.includes('Aadhar') ? 'number' : 'text'
                                        }
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleInputChange}
                                        className="block w-full h-7 border border-gray-600 sm:text-sm rounded-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-base mt-5">Vehicle Details</p>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Customer Details Fields */}
                            {[
                                { label: 'Vehicle Name/Registration No.', required: true, type: "text", name: 'vehicleNo' },
                                { label: 'Hypothecation Policy', required: true, type: "boolean", name: 'hypo_policy' },
                                { label: 'Financer Name', required: true, type: "text", name: 'financer_name' },
                                { label: 'Vehicle Engine No.', required: true, type: "text", name: 'engineNo' },
                                { label: 'Chassis No.', required: true, type: "text", name: 'chassNo' },
                                { label: 'Manufacture Year', required: true, type: "number", name: 'mfgYear' },
                                { label: 'Vehicle Model', required: true, type: "text", name: 'model' },
                                { label: 'Sub-Model', required: true, type: "text", name: 'subModel' },
                                { label: 'Policy start-date', required: true, type: "date", name: 'policy_date' },
                                { label: 'Ex-Showroom Price', required: true, type: "number", name: 'ex_showroom_price' },
                                { label: 'Vehicle Color', required: true, type: "text", name: 'color' },
                                { label: 'Vehicle type', required: true, type: "text", name: 'vehicleType' },
                                { label: 'Hypothecation City', required: true, type: "text", name: 'hypo_city' },
                                { label: 'Vehicle Ex-Showroom', required: true, type: "number", name: 'vehicle_ex_showroom' },
                            ].map((field, index) => (
                                <div key={index}>
                                    <label className="block text-[10px] text-blue-800 mb-1">
                                        {field.label}
                                        {field.required && <span className="text-red-500">*</span>}
                                    </label>
                                    {/* Check if the field is 'Hypothecation Policy', then render radio buttons */}
                                    {field.type === "boolean" ? (
                                        <div className="flex gap-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={field.name}
                                                    value={true}
                                                    checked={formData[field.name] === true}
                                                    onChange={() => handleInputChanged({ target: { name: field.name, value: true } })}
                                                    className="mr-1"
                                                />
                                                Yes
                                            </label>

                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={field.name}
                                                    value={false}
                                                    checked={formData[field.name] === false}
                                                    onChange={() => handleInputChanged({ target: { name: field.name, value: false } })}
                                                    className="mr-1"
                                                />
                                                No
                                            </label>
                                        </div>
                                    ) : (
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleInputChange}
                                            className="block w-full h-7 border border-gray-600 sm:text-sm rounded-sm"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 flex justify-end">
                        <div>
                            <button className="px-3 py-1 bg-orange-400 text-white rounded-sm shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500">← Back</button>
                            <button className="ml-2 px-3 py-1 bg-[#32a8a4] text-white rounded-sm shadow-sm hover:bg-[#328c89] focus:outline-none focus:ring-2 focus:ring-[#328c89]">Continue </button>

                            <FormDetails modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} closeModal={closeModal} data={data}/>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewPolicyForm;
