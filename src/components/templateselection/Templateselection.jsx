import { useEffect, useState } from "react";

export const Templateselection = ({
  currentStep,
  nextStep,
  previousStep,
  setStepNumber,
  setTemplateName,
}) => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedTemplateUrl, setSelectedTemplateUrl] = useState(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVERURL}template`
        );
        const data = await response.json();
        console.log("Templates from API:", data);
        setTemplates(data.slice(0, 3)); // Limit to 3 templates
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };
    fetchTemplates();
  }, []);

  const showNext = () => {
    if (selectedTemplate) {
      nextStep(true);
      setStepNumber(4);
      currentStep(false);
    }
  };

  const showPrevious = () => {
    previousStep(true);
    setStepNumber(2);
    currentStep(false);
  };

  const selectTemplate = (template) => {
    setSelectedTemplate(template.id);
    setSelectedTemplateUrl(template.template_location);
    setTemplateName(template.template_name);
  };

  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Choose Your Template
        </h2>
        <p className="text-gray-600 mb-8">
          Select a professional template that suits your style
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => {
            const isSelected = selectedTemplate === template.id;

            return (
              <div
                key={template.id}
                className={`template-card border-2 rounded-lg cursor-pointer transition-all ${
                  isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-500"
                }`}
                onClick={() => selectTemplate(template)}
              >
                {/* Image Preview */}
                <div className="h-64 bg-white overflow-hidden rounded-t-lg">
                  <img
                    src={template.image_location}
                    alt="Template Preview"
                    className="object-contain w-full h-full"
                    style={{ width: "100%", height: "109%" }}
                  />
                </div>

                {/* Text Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {template.template_name || "Unnamed Template"}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {template.template_description ||
                      "No description available."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={showPrevious}
            className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
          >
            ← Previous
          </button>
          <button
            onClick={showNext}
            disabled={!selectedTemplate}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              selectedTemplate
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
};
