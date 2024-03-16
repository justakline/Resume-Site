
import laptop from '../../assets/coding-on-laptop.jpg'
import headshot from '../../assets/headshot.jpg'

function IntroSection() {

    return (
        <div className='intro-section'>
          <img src={laptop} alt="Laptop" className='intro-image' />
          <img src={headshot} alt="Headshot" className='headshot' />
          <div className='content'>
            <h1>Justin Kline</h1>
            <h2>Software Developer</h2>
            {/* <p>Contact Me</p> */}
            <p>justakline@gmail.com</p>
            <p>(443)-977-0607</p>
            <button> <span><b>See portfolio</b></span></button>
          </div>
        </div>
      );
    }



export default IntroSection;