export const Templateselection=({currentStep,nextStep,previousStep,setStepNumber})=>{
       setStepNumber(3);
       const showNext=()=>{
          nextStep(true)
          currentStep(false)
       }
       const showPrevious=()=>{
           previousStep(true)
           currentStep(false)
       }
    return(
        <div >
            <div class="bg-white rounded-xl shadow-lg p-8">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Choose Your Template</h2>
                <p class="text-gray-600 mb-8">Select a professional template that suits your style</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <div class="template-card border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500" onclick="selectTemplate('classic')">
                        <div class="bg-gray-50 rounded-lg p-4 mb-4 h-64 flex flex-col justify-between">
                            <div>
                                <div class="h-3 bg-gray-800 rounded mb-2"></div>
                                <div class="h-2 bg-gray-400 rounded mb-4 w-3/4"></div>
                                <div class="space-y-2">
                                    <div class="h-2 bg-gray-300 rounded"></div>
                                    <div class="h-2 bg-gray-300 rounded w-5/6"></div>
                                    <div class="h-2 bg-gray-300 rounded w-4/6"></div>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div class="h-2 bg-blue-400 rounded w-1/2"></div>
                                <div class="h-2 bg-gray-300 rounded"></div>
                                <div class="h-2 bg-gray-300 rounded w-3/4"></div>
                            </div>
                        </div>
                        <h3 class="font-semibold text-gray-900">Classic Professional</h3>
                        <p class="text-sm text-gray-600">Clean and traditional layout</p>
                    </div>

                    
                    <div class="template-card border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500" onclick="selectTemplate('modern')">
                        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 mb-4 h-64 flex flex-col justify-between">
                            <div>
                                <div class="h-3 bg-blue-600 rounded mb-2"></div>
                                <div class="h-2 bg-gray-400 rounded mb-4 w-3/4"></div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="space-y-2">
                                        <div class="h-2 bg-gray-300 rounded"></div>
                                        <div class="h-2 bg-gray-300 rounded w-5/6"></div>
                                    </div>
                                    <div class="space-y-2">
                                        <div class="h-2 bg-purple-400 rounded w-1/2"></div>
                                        <div class="h-2 bg-gray-300 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 class="font-semibold text-gray-900">Modern Creative</h3>
                        <p class="text-sm text-gray-600">Contemporary design with color accents</p>
                    </div>

                    
                    <div class="template-card border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500" onclick="selectTemplate('minimal')">
                        <div class="bg-white border rounded-lg p-4 mb-4 h-64 flex flex-col justify-between">
                            <div>
                                <div class="h-4 bg-gray-900 rounded mb-1 w-1/2"></div>
                                <div class="h-1 bg-gray-900 rounded mb-4 w-full"></div>
                                <div class="space-y-3">
                                    <div class="h-2 bg-gray-600 rounded w-1/3"></div>
                                    <div class="space-y-1">
                                        <div class="h-1 bg-gray-300 rounded"></div>
                                        <div class="h-1 bg-gray-300 rounded w-5/6"></div>
                                        <div class="h-1 bg-gray-300 rounded w-4/6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 class="font-semibold text-gray-900">Minimal Clean</h3>
                        <p class="text-sm text-gray-600">Simple and elegant design</p>
                    </div>
                </div>
                
                <div class="flex justify-between mt-8">
                    <button onClick={showPrevious} class="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                        ← Previous
                    </button>
                    <button onClick={showNext} id="templateNextBtn" onclick="nextStep()" class="bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold cursor-not-allowed" disabled="">
                        Next Step →
                    </button>
                </div>
            </div>
        </div>

    )

}