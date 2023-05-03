import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #232323;
  width: 200px;
  position: absolute;
  top: 0;
  right: 0;
`;

const Label = styled.div`
  padding: 10px 40px;
  &:hover {
    background: #f64261;
  }
`;

export default {
  Container,
  Label,
};
