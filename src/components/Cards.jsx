import React from "react";

function Cards() {
  const features = [
    {
      title: "Comprehensive Pathology Coverage",
      description: "Detects 84 Chest X-Ray Pathologies, Enabling Accurate and Comprehensive Analysis.",
    },
    {
      title: "Extensive Multi-Site Validation",
      description: "Trained on 5M+ CXRs from varied Indian healthcare settings, capturing a wide range of demographics and equipment types.",
    },
    {
      title: "Real-World Clinical Impact",
      description: "Deployed in 17 Large healthcare systems, AI model cuts TAT, improve accuracy in underserved areas.",
    },
    {
      title: "High Diagnostic Accuracy",
      description: "Achieved 98% precision and 95% recall, ensuring reliable performance across all tested subgroups.",
    }
  ];

  return (
    <div className="w-full p-6 bg-black md:p-12">
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="relative h-full group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6B6B] via-[#9381FF] to-[#4DA8FF] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
            <div className="relative flex flex-col h-full min-h-[200px] p-8 transition-all duration-300 rounded-2xl bg-zinc-900">
              <h3 className="mb-4 text-base font-semibold text-white md:text-xl">
                {feature.title}
              </h3>
              <p className="flex-grow text-xs text-zinc-400 md:text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;