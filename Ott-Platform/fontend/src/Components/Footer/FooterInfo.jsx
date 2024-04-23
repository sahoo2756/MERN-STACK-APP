import { useContext } from "react"
import FooterContext from "../../Context/FooterContext"

function FooterInfo() {
    const { footerContextDetails } = useContext(FooterContext)
    let heading = footerContextDetails.heading
    let title = footerContextDetails.title

    return (
        <div className="bg-gray-900 w-full min-h-[100vh] text-white px-10 py-10">
            
            <h1 className="text-3xl hover:border-b-2 inline transition-all duration-150 cursor-pointer">{heading}</h1>
            
            <p className="mt-5 ml-8">{title}</p>
            
        </div>
    ) 
}

export {FooterInfo}