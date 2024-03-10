import MatchingFormPage from "./MatchingFormPage";

export default function FormPage() {
   
    return (
        <div>
            <h1>Fundies Partner Matching Form</h1>
            <MatchingFormPage/>
        </div>
    )
}


// 'use-client'
// import { useRouter } from 'next/navigation';


// export default function formPage() {
//     return (
//         <div>
//             <h1>Fundies Partner Matching Form</h1>

//             <form>
//                 <h2>select your availability on the following days</h2>
//                 <div>
//                     <label htmlFor="name">Name</label>
//                     <input type = "text" id="name" />
//                 </div>
//                 <div>
//                     <label htmlFor="monday-start">Monday Start</label>
//                     <input type = "time" id="monday-start" 
//                     required/>
//                 </div>
//                 <div>
//                     <label htmlFor="monday-end">Monday End</label>
//                     <input type = "time" id="monday-end"
//                     required/>
//                 </div>
//             </form>
        
        
        
//         </div>
//     )
// }
