import React from 'react';
import { FaFileExport } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FreshPolicy = () => {
    const navigate = useNavigate()


    const handleClick = () => {
        navigate('/policy-form')
    }
    
    return (
        <div className="font-sans p-4">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                {/* Left side */}
                <div>
                    <div className="mb-4">
                        <span className="text-sm font-semibold">INSURANCE POLICY LIST</span>
                        <div className="text-xs text-gray-600">
                            <span>DASHBOARD</span> / <span>POLICY</span> / <span>INSURANCE POLICY</span>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div style={{
                    display: 'flex',
                    border: '1px solid #008080', // Teal border
                    borderRadius: '4px',
                    width: 'auto',
                    padding: '3px'
                }}>
                    {/* Export section */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <FaFileExport style={{ color: '#008080', marginRight: '8px' }} />
                        <span style={{ color: '#008080', marginRight: '16px' }}>Export</span>
                    </div>

                    {/* Envelope and Clock icons side by side */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between', // Align icons to left and right
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaEnvelope style={{ color: '#008080', marginRight: '8px' }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaClock style={{ color: '#008080' }} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="border p-4 bg-white">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={handleClick}
                    >
                        Create New Policy
                    </button>
                </div>
                <div className="flex justify-between mb-2 text-xs">
                    <div className="flex items-center">
                        <span>Show</span>
                        <select className="border rounded mx-2 p-1">
                            <option value="10">10</option>
                            {/* Add more options as needed */}
                        </select>
                        <span>entries</span>
                    </div>
                    <div className="flex items-center">
                        <span>Search</span>
                        <input type="text" placeholder="Search..." className="border rounded ml-2 p-1" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 text-xs">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">E-Covernote</th>
                                <th className="border border-gray-300 p-2">Policy</th>
                                <th className="border border-gray-300 p-2">E-Covernote No.</th>
                                <th className="border border-gray-300 p-2">Policy No</th>
                                <th className="border border-gray-300 p-2">Policy Date</th>
                                <th className="border border-gray-300 p-2">Customer Name</th>
                                <th className="border border-gray-300 p-2">Customer Phone</th>
                                <th className="border border-gray-300 p-2">Vehicle Chassis</th>
                                <th className="border border-gray-300 p-2">VIN</th>
                                <th className="border border-gray-300 p-2">EX-Showroom Price</th>
                                <th className="border border-gray-300 p-2">Revoke</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="9" className="border border-gray-300 p-2 text-center">
                                    No data available in table
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between mt-2 text-xs">
                    <span>Showing 0 to 0 of 0 entries</span>
                    <div className="flex">
                        <button className="border rounded p-1 mr-1">Previous</button>
                        <button className="border rounded p-1">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreshPolicy;
