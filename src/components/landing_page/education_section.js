
import towson from '../../assets/towson-university.png'

function EducationSection() {

    return(
        <div className='education'>
            
            <img src={towson} alt=""  className='section-images-school' />
            <div >
                {/* <h3>Education</h3> */}
                <text>I graduated from Towson University with a B.S.in Computer Science with a Minor in Mathematics in December 2023.
                        I took courses in Artificial Intellegence, Web3/Blockchain, Object Oriented Design!
                </text>
               <a target='_blank' href={`${process.env.PUBLIC_URL}/transcript.pdf`} rel="noopener noreferrer"><button>Download Transcript</button></a>
            </div>
        </div>




    )



}


export default EducationSection;