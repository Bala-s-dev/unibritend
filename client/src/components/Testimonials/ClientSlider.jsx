import React from "react";
import styled from "styled-components";
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const ClientSlider = (props) => {
  const { name, imageFile, stars, disc } = props.item;

  return (
    <Container>
      <Header>
        <span className="quote">
          <IoIosQuote />
        </span>
        <div>
          {Array(stars)
            .fill()
            .map((_, i) => (
              <span className="star" key={i}>
                <AiOutlineStar />
              </span>
            ))}
        </div>
      </Header>
      <Body>{disc}</Body>
      <Footer> 
      {typeof imageFile === 'string' ? (
        <img src={imageFile} alt={name} />
      ) : (
        imageFile
      )}
      </Footer>
    </Container>
  );
};

export default ClientSlider;

// Styled Components
const Container = styled.div`
  background: #fff;
  padding: 1.5rem 1rem;
  margin: 0 1rem;
  border: 1px solid rgb(1, 133, 190);
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .quote {
    font-size: 3rem;
    color: #01be96;
    opacity: 0.7;
  }

  .star {
    color: #ffcd3c;
    font-size: 1.3rem;
    
  }
`;

const Body = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
  margin-bottom: 1.5rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
