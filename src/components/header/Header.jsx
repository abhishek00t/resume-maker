export const Header=()=>{
   return (
    <header class="bg-white shadow-sm border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-lg">RM</span>
                    </div>
                    <h1 class="text-2xl font-bold text-gray-900">Resume Maker</h1>
                </div>
                <div class="text-sm text-gray-600">
                    Build your professional resume in minutes
                </div>
            </div>
        </div>
    </header>
   )
}