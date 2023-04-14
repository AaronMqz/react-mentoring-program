import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 160px;
  justify-content: center;
  cursor: pointer;
  position: relative;
  align-items: flex-start;
  padding-bottom: 15px;
  border-bottom: 3px solid #232323;
  bottom: -3px;
  &:hover {
    border-bottom: 3px solid #f64261;
  }
`;

const SelectedText = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-around;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  position: absolute;
  top: 22px;
  left: 0px;
  z-index: 10;
  background-color: #232323;
`;

const Item = styled.div`
  display: flex;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
  color: white;
  &:hover {
    background: #f64261;
  }
`;

const SortConatiner = styled.div`
  display: flex;
  padding-top: 15px;
  align-items: flex-end;
  background-color: #232323;
  border-bottom: solid 3px #232323;
  padding: 15px 10px 0 10px;
`;

const LabelSort = styled.label`
  color: lightgray;
  padding-bottom: 15px;
`;

export default {
  Container,
  SelectedText,
  List,
  Item,
  LabelSort,
  SortConatiner,
};
