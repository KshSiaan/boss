"use client";

import { useState } from "react";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: "01",
    number: "01",
    title: "Application",
    description: "A category expert reviews your application",
  },
  {
    id: "02",
    number: "02",
    title: "Screening",
    description: "A category expert reviews your application",
  },
  {
    id: "03",
    number: "03",
    title: "Decision",
    description: "Submit the application form",
  },
  {
    id: "04",
    number: "04",
    title: "Interview",
    description: "A category expert reviews your application",
  },
];

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Step Numbers */}
          <div className="flex justify-between items-start mb-8 mx-[10%]">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center relative"
              >
                <div
                  className={`text-3xl lg:text-5xl xl:text-7xl font-bold mb-4 cursor-pointer transition-colors duration-300 ${
                    activeStep === step.id
                      ? "text-orange-500"
                      : "text-orange-400 hover:text-orange-500"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  {step.number}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Line with Dots */}
          <div className="relative mb-12 mx-[12%]">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
            <div className="flex justify-between items-center relative">
              {processSteps.map((step) => (
                <div key={step.id} className="relative">
                  <div
                    className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
                      activeStep === step.id
                        ? "bg-orange-500"
                        : "bg-orange-400 hover:bg-orange-500"
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="flex justify-between">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`flex-1 text-center px-4 cursor-pointer transition-opacity duration-300 ${
                  activeStep === step.id
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-90"
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="space-y-8">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`border-l-4 pl-6 pb-8 cursor-pointer transition-all duration-300 ${
                activeStep === step.id
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-300 hover:border-orange-400 hover:bg-gray-50"
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`text-4xl font-bold transition-colors duration-300 ${
                    activeStep === step.id
                      ? "text-orange-500"
                      : "text-orange-400"
                  }`}
                >
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {/* Mobile Progress Dot */}
              <div className="mt-4 ml-8">
                <div
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeStep === step.id ? "bg-orange-500" : "bg-orange-400"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
