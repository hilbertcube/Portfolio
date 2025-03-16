'use client'

import React, { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";

export default function InfoWindow({ title, content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="rounded-full fixed top-14 left-3 bg-blue-700 text-white hover:bg-blue-600 p-2"
      >
        <FiAlertCircle />
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
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="mb-6">
              <p>{content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}