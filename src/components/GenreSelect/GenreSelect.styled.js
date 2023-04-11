import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  border-bottom: solid 3px #555555;
`;

const Content = styled.div`
  display: flex;
  height: 40px;
  align-items: flex-end;
`;

const Label = styled.label`
  margin-right: 15px;
  bottom: -3px;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    border-bottom: solid 3px #f65261;
  }
  ${(props) =>
    props.active
      ? `border-bottom: solid 3px #f65261`
      : `border-bottom: solid 3px #555555`}
`;

export const GenreStyled = {
  Label,
  Content,
  Container,
};
