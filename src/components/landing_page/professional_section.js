
import resume from '../../assets/Resume.jpg'
function ProfessionalSection() {

    return(
        <div>
            
            <img src={resume} className='Section-Images'/>
            <h4>Professional Experience</h4>
            <text>Crafting efficient solutions and streamlining user experiences on the Ethereum blockchain, 
                I’m a full-stack developer with a knack for revitalizing learning in computer science. 
                At Towson University, I rejuvenated tutoring methods, enhancing student understanding of key programming concepts. 
                My hands-on development role at Stake Game led to a 45% surge in user engagement, thanks to my integration of user-friendly features and smart contract expertise. 
                Committed to robust and secure DeFi operations, I employ test-driven development and CI/CD practices to consistently deliver quality and adapt to feedback.
            </text>
            <button>Learn more</button>
        </div>




    )



}


export default ProfessionalSection;