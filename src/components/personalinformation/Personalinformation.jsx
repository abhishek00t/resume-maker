import { useRef, useState } from "react"
import './Personalinformation.css'
import { useNavigate } from "react-router"
export const Personalinformation=({currentStep,nextStep,setStepNumber})=>{
       setStepNumber(1);
    
    const phoneNumberRef=useRef()
    const[phoneNumberInvalid,setphoneNumberValidity]=useState(false)
    
    const emailRef=useRef()
    const [emailInvalid,setEmailValidity]=useState(false)    



    const firstNameRef=useRef()
    const [firstNameInvalid,setFirstNameValidity]=useState(false)
    const validateAndNext=()=>{
            if(phoneNumberRef.current.value===""){
                setphoneNumberValidity(true)
            }else{
                setphoneNumberValidity(false)
            }
             
            if(emailRef.current.value===""){
                setEmailValidity(true)
            }else{
                setEmailValidity(false)
            }

             if(firstNameRef.current.value===""){
                setFirstNameValidity(true)
            }else{
                setFirstNameValidity(false)
            }
            if(emailRef.current.value!=="" &&firstNameRef.current.value!=="" && phoneNumberRef.current.value!==""){
               
                currentStep(false)
                nextStep(true)
            }
            
    }
    
    return(
        <div id="step1" class="form-section active">
            <div class="bg-white rounded-xl shadow-lg p-8">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Personal Information</h2>
                <p class="text-gray-600 mb-8">Let's start with your basic details</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input ref={firstNameRef} type="text" id="fullName" className={(firstNameInvalid ? "danger ":"") + "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"} placeholder="John Doe" required=""/>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input ref={emailRef} type="email" id="email" className={(emailInvalid ? "danger ":"")+ "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"} placeholder="john@example.com" required=""/>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input ref={phoneNumberRef} type="tel" id="phone" className={(phoneNumberInvalid ? "danger ":"") + "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"} placeholder="+1 (555) 123-4567" required=""/>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <input type="text" id="location" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="New York, NY"/>
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
                        <input type="text" id="title" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Software Developer"/>
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
                        <textarea id="summary" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Brief description of your professional background and key achievements..."></textarea>
                    </div>
                </div>
                
                <div class="flex justify-end mt-8">
                    <button onClick={validateAndNext} class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                        Next Step →
                    </button>
                </div>
            </div>
        </div>
    )

}