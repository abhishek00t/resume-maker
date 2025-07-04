export const Experience=({currentStep,nextStep,previousStep,setStepNumber})=>{
    setStepNumber(2)  
    const showPrevious=()=>{
        previousStep(true)
        currentStep(false)

        
      } 
      const showNext=()=>{
        
        nextStep(true)
        currentStep(false)

      }  
    
    return(
    <div >
         
            <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Experience  Skills</h2>
                <p className="text-gray-600 mb-8">Add your work experience and key skills</p>
                
                
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h3>
                    <div id="experienceContainer">
                        <div className="experience-item border border-gray-200 rounded-lg p-6 mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" className="job-title w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Job Title"/>
                                <input type="text" className="company w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Company Name"/>
                                <input type="text" className="duration w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="2020 - Present"/>
                                <input type="text" className="job-location w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Location"/>
                            </div>
                            <textarea className="job-description w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="3" placeholder="Describe your key responsibilities and achievements..."></textarea>
                        </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">+ Add Another Experience</button>
                </div>

            
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" id="degree" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Degree"/>
                        <input type="text" id="school" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="School/University"/>
                        <input type="text" id="graduation" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Graduation Year"/>
                        <input type="text" id="gpa" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="GPA (Optional)"/>
                    </div>
                </div>

               
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
                    <textarea id="skills" rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="List your key skills separated by commas (e.g., JavaScript, React, Node.js, Python...)"></textarea>
                </div>
                
                <div className="flex justify-between mt-8">
                    <button onClick={showPrevious} className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                        ← Previous
                    </button>
                    <button onClick={showNext} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                        Next Step →
                    </button>
                </div>
            </div>
        </div>

    )

}