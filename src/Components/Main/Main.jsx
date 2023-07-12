import React, {useEffect} from "react";
import "./main.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from "../../assets/bora.jpg";
import rio from "../../assets/rio.jpg";
import barca from "../../assets/barca.jpg";
import londres from "../../assets/londres.jpg";
import bruxelle from "../../assets/bruxelle.jpg";
import quebec from "../../assets/quebec.jpg";
import paris from "../../assets/paris.jpg";
import rome from "../../assets/rome.jpg";
import Aos from 'aos' 
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zaland",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitone of romance, Bora Bora is one of the best travel destination in the world . This place is know for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: paris,
    destTitle: "PARIS",
    location: "FRANCE",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitone of romance, Bora Bora is one of the best travel destination in the world . This place is know for its luxurious stays and adventurous activities.",
  },
  {
    id: 3,
    imgSrc: barca,
    destTitle: "ESPAGNE",
    location: "ESPAGNE",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitone of romance, Bora Bora is one of the best travel destination in the world . This place is know for its luxurious stays and adventurous activities.",
  },
  {
    id: 4,
    imgSrc: bruxelle,
    destTitle: "Bruxelle",
    location: "BELGIQUE",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitone of romance, Bora Bora is one of the best travel destination in the world . This place is know for its luxurious stays and adventurous activities.",
  },
  {
    id: 5,
    imgSrc: rio,
    destTitle: "rio",
    location: "BRESIL",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitone of romance, Bora Bora is one of the best travel destination in the world . This place is know for its luxurious stays and adventurous activities.",
  },
  {
    id: 6,
    imgSrc: quebec,
    destTitle: "quebec",
    location: "CANADA",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitone of romance, Bora Bora is one of the best travel destination in the world . This place is know for its luxurious stays and adventurous activities.",
  },
  {
    id: 7,
    imgSrc: rome,
    destTitle: "rome",
    location: "ITALIE",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitone of romance, Bora Bora is one of the best travel destination in the world . This place is know for its luxurious stays and adventurous activities.",
  },
  {
    id: 8,
    imgSrc: londres,
    destTitle: "england",
    location: "ANGLETERRE",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitone of romance, Bora Bora is one of the best travel destination in the world . This place is know for its luxurious stays and adventurous activities.",
  },

];

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                </div>
                <div className="cardInfo">
                  <h4 className="destTiltle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
              
                  </div>
                  <button className="btn flex">
                    Details <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Main;
