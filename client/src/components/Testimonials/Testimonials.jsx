import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-awesome-reveal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineStar } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { db } from '../../config/firebase'; // Import Firebase configuration
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
} from 'firebase/firestore';

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
  const [testimonials, setTestimonials] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  // Fetch testimonials from Firebase
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'testimonials'),
      (snapshot) => {
        const fetchedTestimonials = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(fetchedTestimonials);
      }
    );

    return () => unsubscribe();
  }, []);

  // Add a new testimonial to Firebase
  const addTestimonial = async (name, imageFile, stars, disc) => {
    const defaultImage = null; // Placeholder for default image
    const testimonial = {
      name,
      imageFile: imageFile || defaultImage,
      stars,
      disc,
      timestamp: Date.now(),
    };

    try {
      await addDoc(collection(db, 'testimonials'), testimonial);
    } catch (error) {
      console.error('Error adding testimonial: ', error);
    }
  };

  return (
    <Container id="client">
      <Slide direction="left">
        <h1>what clients say</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {testimonials.map((item, i) => (
            <ClientSlider item={item} key={item.id} />
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
  const [name, setName] = useState('');
  const [stars, setStars] = useState(1);
  const [disc, setDisc] = useState('');
  const [imageFile, setImageFile] = useState('');

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
    setName('');
    setStars(1);
    setDisc('');
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

      <label htmlFor="image-upload">
        {imageFile ? (
          <img src={imageFile} alt="Preview" />
        ) : (
          <CgProfile size={100} color="#61DBFB" />
        )}
        <br />
        Profile Photo
      </label>
      <input
        type="file"
        id="image-upload"
        onChange={handleImageChange}
        accept="image/*"
      />

      <div className="rating">
        <label>Rating: </label>
        {[1, 2, 3, 4, 5].map((star) => (
          <AiOutlineStar
            key={star}
            onClick={() => setStars(star)}
            color={star <= stars ? '#ffcd3c' : '#ddd'}
            style={{ cursor: 'pointer' }}
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

const AddButton = styled.button`
  padding: 1rem 1rem;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #01be96;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #019d7f;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: #017f66;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  display: block;
  margin: 4rem auto;
  text-align: center;
`

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

const Form = styled.form`
  margin-top: 2rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 2rem auto;
  

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    color: #333;
  }

  input,
  textarea {
    padding: 1rem;
    font-size: 1.1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: skyblue;
      box-shadow: 0 0 5px rgba(1, 168, 190, 0.5);
      outline: none;
    }
  }

  const ImageUpload = styled.div
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  label {
    padding: 1rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
  }

  input[type="file"] {
    display: none;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
;

  .rating {
    display: flex;
    gap: 0.5rem;
    font-size:1.2rem;
    align-items: center;
    justify-content: center;

    label {
      font-size: 1rem;
      font-weight: 600;
      color: #666;
    }

    svg {
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 600;
    background-color: #01be96;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    align-self: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: #019d7f;
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }

    &:active {
      background-color: #017f66;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;

    h2 {
      font-size: 1.5rem;
    }

    button {
      font-size: 1rem;
    }
  }
`;

;

