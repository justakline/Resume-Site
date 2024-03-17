
import towson from '../../assets/towson-university.png'

function EducationSection() {

    return(
        <div className='education'>
            
            <img src={towson} className='section-images-school'/>
            <div >
                {/* <h3>Education</h3> */}
                <text>I graduated from Towson University with a B.S.in Computer Science with a Minor in Mathematics in December 2023.
                        I took courses in Artificial Intellegence, Web3/Blockchain, Object Oriented Design!
                </text>
            </div>
            
        </div>




    )



}


export default EducationSection;