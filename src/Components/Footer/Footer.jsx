import React, {useEffect}  from 'react'
import "./footer.scss"
import video from "../../assets/video.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { TbBrandTripadvisor } from "react-icons/tb";
import Aos from 'aos' 
import 'aos/dist/aos.css'


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
<section className='footer'>
  <div className="videoDiv">
    <video src={video} loop autoPlay muted type="video/mp4" ></video>
  </div>
  <div className="secContent conteiner">
    <div className="contactDiv flex">
      <div data-aos="fade-up" className="text">
        <small>KEEP IN TOUCH</small>
        <h2>Travel with us</h2>
      </div>
      <div className="inputDiv flex">
        <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
        <button data-aos="fade-up" className='btn flex' type='submit'> SEND <FiSend className="icon"/></button>
      </div>
    </div>

    <div className="footerCard flex">
      <div className="footerIntro flex">
        <div className="logoDiv">
          <a href="/" className='logo flex'>
            <MdOutlineTravelExplore className="icon" /> Travel
          </a>
        </div>

        <div data-aos="fade-up" className="footerParagraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quos tempora maiores hic, natus sequi fugit nobis qui eos rem suscipit alias neque doloribus, veniam enim dignissimos iusto! Delectus, veniam!
          Quis ducimus ab, nisi, ad magnam fugiat beatae voluptates deleniti ipsum, quidem cumque doloremque mollitia commodi saepe laboriosam. Mollitia iste eveniet possimus vero autem praesentium iusto quasi harum veniam eum?

        </div>

        <div data-aos="fade-up" className='footerSocials flex'>
          <AiOutlineTwitter className='icon' />
          <AiFillYoutube className='icon' />
          <AiFillInstagram className='icon' />
          <TbBrandTripadvisor className='icon' />
        </div>

      </div>
      <div className="footerLinks grid">
        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
          <span className="groupTitle">
            OUR AGENCY
          </span>

          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Services
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Insurance
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Agency
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Tourism
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Payment
          </li>
        </div>
        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
          <span className="groupTitle">
           PARTNERS
          </span>

          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Bookings
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Rentcars
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
           Hotelworld
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Trivago
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Tripadvisor
          </li>
        </div>
        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
          <span className="groupTitle">
          LAST MINUTE
          </span>

          <li className="footerList flex">
            <FiChevronRight className='icon' />
           London
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
            California
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
           Indonisia
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Europe
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon' />
            Oceania
          </li>
        </div>
      </div>
      <div className="footerDiv flex">
        <small>BEST TRAVEL WEBSITE</small>
        <small>COPYRIGHTS RESERVED -ISRATECH 2022 </small>
      </div>
    </div>
  </div>

</section>
  )
}

export default Footer
