export const Progressbar=()=>{
 
    return(
        <div class="bg-white border-b">
        <div class="max-w-4xl mx-auto px-4 py-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="step-indicator step-active w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold">1</div>
                    <div class="w-16 h-1 bg-gray-200 rounded"></div>
                    <div class="step-indicator w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">2</div>
                    <div class="w-16 h-1 bg-gray-200 rounded"></div>
                    <div class="step-indicator w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">3</div>
                    <div class="w-16 h-1 bg-gray-200 rounded"></div>
                    <div class="step-indicator w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">4</div>
                </div>
                <div class="text-sm text-gray-600">
                    Step <span id="currentStep">1</span> of 4
                </div>
            </div>
            <div class="mt-4 flex justify-between text-sm text-gray-600">
                <span>Personal Info</span>
                <span>Experience</span>
                <span>Template</span>
                <span>Download</span>
            </div>
        </div>
    </div>
    )

}