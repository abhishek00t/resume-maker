export const Progressbar=({stepNumber})=>{
 
    return(
        <div class="bg-white border-b">
        <div class="max-w-4xl mx-auto px-4 py-6">
            <div class="flex items-center justify-between">
                <div style={{width:"90%"}} class="flex items-center space-x-4">
                    <div className={(stepNumber===1?"step-active text-white ":"bg-gray-200 text-gray-600 ")+"step-indicator  w-10 h-10 rounded-full flex items-center justify-center  font-semibold"}>1</div>
                    <div style={{width:"33%"}} class="w-16 h-1 bg-gray-200 rounded"></div>
                    <div className={(stepNumber===2?"step-active text-white ":"bg-gray-200 text-gray-600 ")+"step-indicator  w-10 h-10 rounded-full flex items-center justify-center  font-semibold"}>2</div>
                    <div style={{width:"33%"}} class="w-16 h-1 bg-gray-200 rounded"></div>
                    <div className={(stepNumber===3?"step-active text-white ":"bg-gray-200 text-gray-600 ")+"step-indicator  w-10 h-10 rounded-full flex items-center justify-center  font-semibold"}>3</div>
                    <div style={{width:"33%"}} class="w-16 h-1 bg-gray-200 rounded"></div>
                    <div className={(stepNumber===4?"step-active text-white ":"bg-gray-200 text-gray-600 ")+"step-indicator  w-10 h-10 rounded-full flex items-center justify-center  font-semibold"}>4</div>
                    


                </div>
                <div class="text-sm text-gray-600">
                    Step <span id="currentStep">{stepNumber}</span> of 4
                </div>
            </div>
            <div style={{width:"90%"}} class="mt-4 flex justify-between text-sm text-gray-600">
                <span>Personal Info</span>
                <span>Experience</span>
                <span>Template</span>
                <span>Download</span>
            </div>
        </div>
    </div>
    )

}