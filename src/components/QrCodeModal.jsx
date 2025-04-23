import { Dialog } from "@material-tailwind/react";

export default function QrCodeModal({ open, onClose, qrCodeUrl }) {
  return (
    <Dialog
      open={open}
      handler={onClose}
      size="xl"
      animate={{
        mount: { y: 0, opacity: 1 },
        unmount: { y: 200, opacity: 0 },
      }}
      className="fixed left-1/2 transform -translate-x-1/2 opacity-100 bg-[var(--primary-bis)] flex flex-col items-center justify-start h-[60vh] w-[90vw] rounded-2xl fixed overflow-hidden bottom-0"
    >
      {/* Bouton de fermeture */}
      <button
        onClick={onClose}
        className="absolute left-8 top-6 w-9 h-7 bg-[var(--secondary-bis)] rounded flex items-center justify-center"
        aria-label="Fermer"
      >
        <span className="text-[var(--quaternary)] text-lg font-bold">×</span>
      </button>
      {/* Titre */}
      <h2 className="mt-12 mb-8 text-4xl font-bold text-black text-center font-['Poppins'] leading-none">
        Scannez le QR code
      </h2>
      {/* QR code dans un carré beige */}
      <div className="bg-[var(--secondary)] rounded-2xl p-6 flex items-center justify-center"
           style={{ width: '18rem', height: '18rem' }}>
        <img
          src={qrCodeUrl}
          alt="QR Code"
          className="w-56 h-56"
          style={{ objectFit: "contain" }}
        />
      </div>
    </Dialog>
  );
}
