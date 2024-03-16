
import towson from '../../assets/towson-university.png'

function EducationSection() {

    return(
        <div>
            
        <img src={towson} className='Section-Images'/>
        <h4>Education</h4>
        <text>I graduated from Towson University with a <b>B.S.</b> in <b>Computer Science</b> with a Minor in <b>Mathematics</b> in December 2023.
                I took courses in Artificial Intellegence, Web3/Blockchain, Object Oriented Design!
        </text>
        </div>




    )



}


export default EducationSection;