import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:nth-child(2) {
    width: 400px;
    margin-left: 20px;
  }
  position: relative;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.label`
  font-size: 40px;
  color: white;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: 0;
  border-radius: 4px;
  height: 40px;
  padding: 2px 10px;
  font-size: 16px;
  background: #424242;
  color: #ffffff;
`;

const Label = styled.label`
  font-size: 16px;
  color: #f64261;
  margin-bottom: 10px;
`;

const Message = styled(Label)`
  color: white;
  margin-bottom: 30px;
`;

const TextArea = styled.textarea`
  border: 0;
  background: #424242;
  border-radius: 4px;
  height: 200px;
  padding: 2px 10px;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
`;

const Icon = styled.span`
  display: flex;
  position: absolute;
  right: 10px;
  align-items: center;
  right: 13px;
  bottom: 15px;
`;

const ButtonPrimary = styled.div`
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f64261;
  color: white;
  font-size: 16px;
  padding: 10px;
  margin-left: 10px;
  width: 150px;
`;

const ButtonSecondary = styled(ButtonPrimary)`
  background: #232323;
  border: solid 1px #f64261;
  color: #f64261;
`;

export default {
  Content,
  Row,
  RowItem,
  Footer,
  Title,
  Input,
  Label,
  TextArea,
  Message,
  Icon,
  ButtonPrimary,
  ButtonSecondary,
};
