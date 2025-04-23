import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import FeatherIcon from "feather-icons-react";
import CustomButton from "./CustomButton";

export default function SignatureBox() {
  const [showPad, setShowPad] = useState(false);
  const signatureRef = useRef(null);
  const [signatureURL, setSignatureURL] = useState(null);

  const handleSave = () => {
    if (signatureRef.current) {
        setSignatureURL(signatureRef.current.getCanvas().toDataURL("image/png"));
      setShowPad(false);
    }
  };

  const handleClear = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };

  return (
    <div className="w-[900px] min-h-[260px] bg-white rounded-2xl border border-[var(--secondary)] flex flex-col justify-between p-6 relative shadow-sm">
      {/* Titre en haut à gauche */}
      <span className="absolute left-6 top-4 text-[var(--placeholder)] text-lg font-semibold font-['Poppins']">
        Veuillez signer ci-dessous :
      </span>

      {/* Zone de signature */}
      <div className="w-full flex-1 flex items-center justify-center relative mt-10 mb-6">
        {/* Avant signature */}
        {!showPad && !signatureURL && (
          <div
            className="w-full h-40 rounded-xl border-2 border-dashed border-[var(--primary)] flex items-center justify-center cursor-pointer relative"
            onClick={() => setShowPad(true)}
          >
            <span className="text-[var(--primary)] opacity-60">Cliquez pour signer</span>
            {/* Icône crayon en bas à droite */}
            <span className="absolute bottom-3 right-4">
              <FeatherIcon icon="edit-2" size={24} color="var(--primary)" />
            </span>
          </div>
        )}
        {/* Pad de signature */}
        {showPad && (
          <div className="w-full relative">
            <SignatureCanvas
              ref={signatureRef}
              penColor="#9381FF"
              canvasProps={{
                width: 800,
                height: 160,
                className: "rounded-xl border border-[var(--primary)] bg-white"
              }}
            />
            {/* Icône crayon en bas à droite */}
            <span className="absolute bottom-3 right-4">
              <FeatherIcon icon="edit-2" size={24} color="var(--primary)" />
            </span>
          </div>
        )}
        {/* Affichage de la signature */}
        {signatureURL && !showPad && (
          <div className="w-full h-40 rounded-xl border border-[var(--secondary)] bg-white flex items-center justify-center relative">
            <img
              src={signatureURL}
              alt="Signature"
              className="max-h-full max-w-full object-contain"
            />
            {/* Icône crayon en bas à droite */}
            <span className="absolute bottom-3 right-4 cursor-pointer" onClick={() => { setSignatureURL(null); setShowPad(true); }}>
              <FeatherIcon icon="edit-2" size={24} color="var(--primary)" />
            </span>
          </div>
        )}
      </div>

      {/* Boutons en bas à droite */}
      {(showPad || signatureURL) && (
  <div className="flex gap-4 justify-end mt-2">
    {showPad && (
      <>
        <CustomButton 
          icon="x"
          variant="secondary" 
          onClick={handleClear}
        >
          Effacer
        </CustomButton>
        
        <CustomButton 
          icon="check"
          variant="primary"
          onClick={handleSave}
        >
          Valider
        </CustomButton>
      </>
    )}
    
    {signatureURL && !showPad && (
      <CustomButton 
        icon="edit-2"
        variant="primary"
        onClick={() => { setSignatureURL(null); setShowPad(true); }}
      >
        Modifier
      </CustomButton>
    )}
  </div>
)}

    </div>
  );
}
