import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;
  padding: 15px 45px;
  top: 0;
  left: 0;
  right: 0;
  position: relative;
  background-color: #232323;
`;

const Title = styled.label`
  font-size: 40px;
  color: white;
  margin: 0;
  margin-right: 20px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  flex: 1;
  justify-content: center;
  z-index: 1;
`;

const Poster = styled.img`
  width: 320px;
  margin-bottom: 20px;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  width: 100%;
`;

const Rating = styled.div`
  color: white;
  border: solid 1px white;
  border-radius: 50%;
  padding: 10px;
  font-size: 24px;
`;

const SubTilte = styled.div`
  color: white;
  padding: 10px 0 20px 0;
  font-size: 17px;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const DateAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  color: #f64261;
  font-size: 24px;
  &:nth-child(1) {
    margin-right: 50px;
  }
`;

const Overview = styled.div`
  color: white;
  padding: 15px 0;
  font-weight: 300;
  font-size: 20px;
  opacity: 0.5;
`;

export default {
  Container,
  Content,
  Poster,
  Description,
  Rating,
  SubTilte,
  DateAndTime,
  Overview,
  Group,
  Title,
};
