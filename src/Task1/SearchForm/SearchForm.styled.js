import styled from "styled-components";

const Content = styled.div`
  display: flex;
  width: 85%;
  align-self: center;
  flex: 1;
  justify-content: center;
  z-index: 1;
`;

const Input = styled.input`
  border: 0;
  border-radius: 4px;
  height: 40px;
  padding: 2px 10px;
  width: 100%;
  font-size: 16px;
  background: #424242;
  color: #ffffff;
`;

const Button = styled.div`
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  padding: 10px;
  margin-left: 10px;
  background: #f65261;
`;

export const SearchFormStyled = {
  Content,
  Button,
  Input,
};
