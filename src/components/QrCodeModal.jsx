import React from "react";

export default function QrCodeModal({ open, onClose, qrCodeUrl }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-opacity-30"
        onClick={onClose}
      />
      {/* Modal */}
      <div
        className="relative w-[90%] h-[60vh] bg-[#B8A5F2] rounded-t-2xl shadow-xl flex flex-col items-center pt-8"
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute left-4 top-4 bg-[#F4E7DB] text-xs rounded px-2 py-1 font-bold"
        >
          ×
        </button>
        {/* Titre */}
        <h2 className="mb-6 text-2xl font-bold text-center">
          Scannez le QR code
        </h2>
        {/* QR code */}
        <div className="bg-[#F4E7DB] rounded-lg p-6 flex items-center justify-center">
          <img
            src={qrCodeUrl}
            alt="QR Code"
            className="w-36 h-36"
          />
        </div>
      </div>
    </div>
  );
}
