import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 8rem;
  margin: 0;
  color: #222;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  margin: 16px 0 32px;
  color: #555;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 28px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
