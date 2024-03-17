import IntroSection from "../components/landing_page/intro.js"
import EducationSection from "../components/landing_page/education_section.js"
import ProfessionalSection from "../components/landing_page/professional_section.js"
import PersonalProjects from"../components/landing_page/personal_projects.js"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';



export default function Landing () {

    return( <>
        <div className="landing-container">
            <IntroSection/>
            <h1 className="about" >About me <hr/></h1> 
            {/* <h1 className="about" >About me <hr/></h1> */}

            <div className="full-accordian">
                <Accordion>
                    <AccordionSummary  className="summary"  expandIcon={<ArrowDownwardIcon />}>
                    <h2 >Education</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <EducationSection/>  
                    </AccordionDetails>

                </Accordion >
                <Accordion>

                    <AccordionSummary  className="summary"  expandIcon={<ArrowDownwardIcon />}>
                    <h2 >Professional Experience</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                    <ProfessionalSection/>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary  className="summary"  expandIcon={<ArrowDownwardIcon />}>
                    <h2 >Personal Projects</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PersonalProjects/>
                    </AccordionDetails>

                </Accordion>
            </div>
            





            
            
           
            
            
        </div>
        
    </> 
    )
    // About Heade
    // Professional Experience Summary
    // Projects Summary




}