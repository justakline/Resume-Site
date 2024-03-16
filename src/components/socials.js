
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"

function Socials() {

    return(
        
        <div className="Socials">
            <hr></hr>
            <a href="https://www.linkedin.com/in/justakline/" target="_blank">
                <img src={linkedin} />
            </a>
            <a href="https://github.com/justakline/" target="_blank">
                <img src={github} />
            </a>
            <a href="https://www.instagram.com/justakline1/" target="_blank">
                <img src={instagram} />
            </a>
   
        </div>
    




    )



}


export default Socials;