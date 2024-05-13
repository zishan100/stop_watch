import React, { useState } from "react";

// Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function SpellCheckApp() {
  let [spellCheck, setSpellCheck] = useState("");
  let [suggestedText, setSuggestedText] = useState("");
  // console.log(customDictionary);

  const handleInputChange = (e) => {
    const text = e.target.value;
    // console.log("text :", text);
    // console.log(spellCheck);
    setSpellCheck(text);

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    // console.log("Word :", words);
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    // console.log("Correct word :", correctedWords);

    const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );

    setSuggestedText(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={spellCheck}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default SpellCheckApp;
