import "./index.scss";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react'

export default function Carrosel() {
  const images = [
    {
      name: "Dora",
      img: "assets/images/userverde.png",
      review: "Podologia",
    },
    {
      name: "Cida",
      img: "assets/images/userverde.png",
      review: "Podologia",
    },
    {
      name: "Celina",
      img: "assets/images/userverde.png",
      review: "Podologia",
    },
    {
      name: "Edgar",
      img: "assets/images/userverde.png",
      review: "Podologia",
    },
    {
      name: "Lucilene",
      img: "assets/images/userverde.png",
      review: "Podologia",
    },
    {
      name: "Luis",
      img: "assets/images/userverde.png",
      review: "Podologia",
    },
    {
      name: "Maria",
      img: "assets/images/userverde.png",
      review: "Podologia",
    },
    {
      name: "Michele",
      img: "assets/images/userverde.png",
      review: "Podologia",
    },
  ];

  const carrol = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carrol.current?.scrollWidth, carrol.current?.offsetWidth)
    setWidth(carrol.current?.scrollWidth - carrol.current?.offsetWidth)

  },[])

  return (
    <div className="app_carrosel">

      <motion.div ref={carrol} className="carousel" whileTap={{ cursor: "grabbing"}}>
        <motion.div 
        className="inner"
        drag="x"
        dragConstraints={{right: 0, left: -width}}
        >

          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image.img} alt={`${image.name} review`} />
              <p>{image.name}</p>
              <p>{image.review}</p>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>

    </div>
  );
}
