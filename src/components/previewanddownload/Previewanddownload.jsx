import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Document, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Previewanddownload = ({
  currentStep,
  previouStep,
  setStepNumber,
  userDetail,
  stepNumber,
}) => {
  const [showResume, setShowResume] = useState(false);
  const [resumeFromServer, setresumeFromServer] = useState(" ");
  const [circularProgress, setcircularProgress] = useState(true);

  useEffect(() => {
    console.log(stepNumber, stepNumber == 4);
    if (stepNumber == 4) {
      console.log("inside if");
      fetch("http://localhost:8001/resume", {
        headers: {},
        body: JSON.stringify(userDetail),
        method: "POST",
      }).then((resp) => {
        setcircularProgress(false);
        resp.arrayBuffer().then((buffer) => {
          const blob = new Blob([buffer], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);
          setresumeFromServer(url);
          setShowResume(true);
        });
      });
    }
  }, [stepNumber]);
  console.log(userDetail);
  const showPrevious = () => {
    setresumeFromServer(" ");
    setShowResume(false);
    currentStep(false);
    setStepNumber(3);
    previouStep(true);
  };
  return (
    <div>
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">
          Preview &amp; Download
        </h2>
        <p class="text-gray-600 mb-8">Review your resume and download as PDF</p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div
              class="border rounded-lg p-6 bg-white"
              style={{ "min-height": "600px" }}
            >
              {circularProgress && <CircularProgress />}

              {showResume && (
                <iframe
                  src={resumeFromServer}
                  width="100%"
                  height="600px"
                  title="Resume Preview"
                />
              )}
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="font-semibold text-gray-900 mb-4">Download Options</h3>
              <button
                onClick="downloadPDF()"
                class="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all mb-3"
              >
                📄 Download PDF
              </button>
              <button
                onClick="editResume()"
                class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                ✏️ Edit Resume
              </button>
            </div>

            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-semibold text-blue-900 mb-2">Tips for Success</h4>
              <ul class="text-sm text-blue-800 space-y-1">
                <li>• Keep it to 1-2 pages</li>
                <li>• Use action verbs</li>
                <li>• Quantify achievements</li>
                <li>• Proofread carefully</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex justify-between mt-8">
          <button
            onClick={showPrevious}
            class="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
          >
            ← Previous
          </button>
          <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
            Create Another Resume
          </button>
        </div>
      </div>
    </div>
  );
};
