
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"

function Socials() {

    return(
        <div className="social-section">
             <h1 >Social Media <hr/></h1>
            <div className="socials">
                
                <a href="https://www.linkedin.com/in/justakline/" target="_blank" alt="linkedin"rel="noopener noreferrer" >
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://github.com/justakline/" target="_blank" rel="noopener noreferrer"alt="github" >
                    <img src={github}  alt="github"/>
                </a>
                <a href="https://www.instagram.com/justakline1/" target="_blank" alt="instagram" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram" />
                </a>
    
            </div>
    
        </div>




    )



}


export default Socials;