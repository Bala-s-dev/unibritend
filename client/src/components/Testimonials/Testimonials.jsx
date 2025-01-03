import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineStar } from "react-icons/ai";

const clients = [
  {
    name: "John Michel",
    img: "",
    stars: 3,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "Jane Doe",
    img: "",
    stars: 4,
    disc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "Robert Smith",
    img: "",
    stars: 5,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
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
  const [testimonials, setTestimonials] = useState(clients);
  const [formVisible, setFormVisible] = useState(false);

  const addTestimonial = (name, img, stars, disc) => {
    setTestimonials([
      ...testimonials,
      { name, img, stars, disc },
    ]);
  };

  return (
    <Container id="client">
      <Slide direction="left">
        <h1>what clients say</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {testimonials.map((item, i) => (
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

      <AddButton onClick={() => setFormVisible(!formVisible)}>
        Add Testimonial
      </AddButton>

      {formVisible && <TestimonialForm addTestimonial={addTestimonial} />}
    </Container>
  );
};

const TestimonialForm = ({ addTestimonial }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [stars, setStars] = useState(1);
  const [disc, setDisc] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimonial(name, imageFile, stars, disc);
    setName("");
    setImg("");
    setStars(1);
    setDisc("");
    setImageFile(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Your Testimonial</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div className="file-upload">
        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imageFile && <img src={imageFile} alt="Uploaded Preview" />}
      </div>
      <div className="rating">
        <label>Rating: </label>
        {[1, 2, 3, 4, 5].map((star) => (
          <AiOutlineStar
            key={star}
            onClick={() => setStars(star)}
            color={star <= stars ? "#ffcd3c" : "#ddd"}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      <textarea
        placeholder="Testimonial"
        value={disc}
        onChange={(e) => setDisc(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </Form>
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

const AddButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  background-color: #01be96;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 2rem;
  display: block;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #019d7f;
  }
`;

const Form = styled.form`
  margin-top: 2rem;
  background-color: #f7f7f7;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 2rem auto;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }

  input,
  textarea {
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .file-upload {
    display: flex;
    flex-direction: column;
    align-items: center;

    input[type="file"] {
      margin: 0.5rem 0;
    }

    img {
      max-width: 100px;
      max-height: 100px;
      margin-top: 1rem;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .rating {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  button {
    padding: 1rem;
    font-size: 1rem;
    background-color: #01be96;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-self: center;
  }

  button:hover {
    background-color: #019d7f;
  }
`;
