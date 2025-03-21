'use client'

import React, { useState } from 'react';
import { FiAlertCircle } from "react-icons/fi";

export default function InfoWindow({ 
  title, 
  content, 
  position = "top-3", 
  icon: Icon = FiAlertCircle, 
  showSelect = false, 
  onSelectChange,
  options = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Random");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);  // Update local state when the user selects an option
    if (onSelectChange) {
      onSelectChange(value);  // Send value to parent component (if needed)
    }
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className={`side-button ${position}`}
      >
        {Icon && <Icon />} 
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-Jura">
          {/* Modal Content */}
          <div className="bg-black text-white rounded-lg px-6 pb-6 pt-3 max-w-md w-full mx-4 shadow-xl border border-indigo-700">
            <div className="flex flex-row justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{title}</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
            <div className="mb-6">
              <p className='text-[14px]'>{content}</p>
              {showSelect && (
                <div className="flex items-center justify-center mt-2">
                <select 
                  name="choice" 
                  className='text-white bg-black border-white border-[1px] mt-2 p-1 rounded mx-auto'
                  value={selectedValue}
                  onChange={handleSelectChange}
                >
                  <option value="Random">Random</option>
                  {options.map((language, index) => (
                    <option key={index} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}