import styled from 'styled-components';

export const SectionStyled = styled.section`
  width: 375px;
  margin: 25px auto 0;
`;
export const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0;
  text-align: center;
  font-weight: normal;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const OptionBtn = styled.button`
  text-transform: capitalize;
  background-color: white;
  border-radius: 5px;
  font-size: 18px;
  border: 1px solid #dcdcdc;
  box-shadow: 10px 5px 5px #dcdcdc;
  padding: 5px 15px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: blue;
  }
`;
export const NotificationMsg = styled.p`
  text-align: center;
  font-weight: normal;
`;
