import IntroSection from "../components/landing_page/intro.js"
import EducationSection from "../components/landing_page/education_section.js"
import ProfessionalSection from "../components/landing_page/professional_section.js"
import PersonalProjects from"../components/landing_page/personal_projects.js"


export default function Landing () {

    return( <>
        <div className="landing-container">
            <IntroSection/>
            <h1>About me</h1>
            <hr/>
            <EducationSection/>
            <ProfessionalSection/>
            <PersonalProjects/>
        </div>
        
    </> 
    )
    // About Heade
    // Professional Experience Summary
    // Projects Summary




}