import React from "react";

const Feature = () => {
  const infoItems = [
    "Food may not be refunded. If your food was made incorrectly we will remake it for you.",
    "18% service charge will be added to all checks over $100.",
    "Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness",
  ];

  return (
    <section className="menucard p-28">
      <div className="container flex flex-col md:flex-row items-center justify-center bg-[#C5A059] p-4">
        {infoItems.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            <p className="text-sm">{item}</p>
            {index !== infoItems.length - 1 && (
              <div className="md:border border-b border-dashed border-white h-9 mx-2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
