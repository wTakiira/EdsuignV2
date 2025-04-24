import ModuleInfo from "../components/ModuleInfo";
import StarRatingBox from "../components/Stars";
import Signature from "../components/Signature";
import { useState } from "react";
import FeatherIcon from "feather-icons-react";

export default function FormStagiaire() {
  const [hasFinished, setHasFinished] = useState(false);

  const moduleInfo = [
    {
      icon: "book-open",
      title: "Framework CSS",
    },
    {
      icon: "clock",
      title: "13h30 - 17h00",
    },
    {
      icon: "user",
      title: "Eric Mai",
    },
    {
      icon: "map-pin",
      title: "Salle Epicéa",
    },
  ];

  const form = [
    {
      question: "Question n°1",
      type: "star",
    },
    {
      question: "Question n°2",
      type: "input",
    },
    {
      question: "Question n°3",
      type: "star",
    },
  ];

  if (hasFinished) {
    return (
      <div className="flex items-center gap-[var(--small-space)]">
        <h1>Merci pour votre précieux retour</h1>
        <FeatherIcon icon="thumbs-up" size={64} color="var(--quaternary)" />
      </div>
    );
  }

  return (
    <div className="py-[var(--left-margin)] flex flex-col items-center gap-[var(--big-space)]">
      <h1 className="h1">Formulaire de satisfaction</h1>
      <ModuleInfo data={moduleInfo} />
      <div className="flex flex-col items-center">
        {form.map((item, index) => (
          <div key={index}>
            {item.type === "star" ? (
              <StarRatingBox question={item.question}></StarRatingBox>
            ) : (
              <>
                <h2 className="mb-2 text-xl font-bold text-black font-['Poppins'] text-center">
                  {item.question}
                </h2>
                <input
                  type="text"
                  placeholder="Saisissez votre réponse"
                  className="p-[var(--small-space)] rounded-[var(--custom-small-radius)] border border-[var(--secondary)] w-[300px]"
                />
              </>
            )}
          </div>
        ))}
      </div>
      <Signature onValidate={() => setHasFinished(true)} />
    </div>
  );
}