
import project from '../../assets/Project.jpg'
function ProfessionalSection() {

    return(
        <div className='personal-projects'>
            <img src={project} className='Section-Images' alt="project"/>
            <div>

                {/* <h3>Personal Projects</h3> */}
                <text>I co-developed a blockchain gaming platform, enhancing gaming experiences with secure cryptocurrency transactions.
                    My proficiency in React.js and Web3.js ensures fluid front-end functionality, while my Solidity smart contracts provide a robust framework for transparent in-game economics.
                    Leveraging Agile principles, I prioritize effective collaboration and on-time delivery. 
                    From designing Java-based file systems to automating eCommerce arbitrage between Walmart and eBay, my projects stand as testaments to my versatility and dedication
                    to back-end innovation and forward-thinking development strategies.
                </text>
                <a href='https://github.com/justakline'  rel="noopener noreferrer" alt="github link"  target="_blank"><button >Examples Here</button></a>
            </div>
        </div>




    )



}


export default ProfessionalSection;