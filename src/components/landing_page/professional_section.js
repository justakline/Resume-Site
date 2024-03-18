
import resume from '../../assets/Resume.jpg'
function ProfessionalSection() {

    return(
        <div className='professional'>
            
    
            <div>
                {/* <h3>Professional Experience</h3> */}
                <text>Crafting efficient solutions and streamlining user experiences on the Ethereum blockchain, 
                    I’m a full-stack developer with a knack for revitalizing learning in computer science. 
                    At Towson University, I rejuvenated tutoring methods, enhancing student understanding of key programming concepts. 
                    My hands-on development role at Stake Game led to a 45% surge in user engagement, thanks to my integration of user-friendly features and smart contract expertise. 
                    Committed to robust and secure DeFi operations, I employ test-driven development and CI/CD practices to consistently deliver quality and adapt to feedback.
                </text>
                <a target='_blank' href={`${process.env.PUBLIC_URL}/resume.pdf`} rel="noopener noreferrer"><button>Download Resume</button></a>
                {/* <button>Download Resume</button> */}
            </div> 
            <img src={resume} alt=""  className='section-images'/>
        </div>




    )



}


export default ProfessionalSection;