import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  {
    name: "John Michel",
    position: "Web Developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 3,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "Jane Doe",
    position: "UI/UX Designer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 4,
    disc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Facilis consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "Robert Smith",
    position: "Software Engineer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    { breakpoint: 990, settings: { slidesToShow: 2, dots: true } },
    { breakpoint: 600, settings: { slidesToShow: 2 } },
    { breakpoint: 530, settings: { slidesToShow: 1 } },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);

  return (
    <Container id="client">
      <Slide direction="left">
        <h1>what clients say</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clients.map((item, i) => (
            <ClientSlider item={item} key={i} />
          ))}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

// Styled Components
const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;
  

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  

`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
  border-radius: 10px;
  background : ;
`;

const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -3rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 2rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
