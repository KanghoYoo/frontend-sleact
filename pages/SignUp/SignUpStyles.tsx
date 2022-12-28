import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;
export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 48px 0 40px;
  width: 100%;

  & > a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 28px;
    text-decoration: none;

    & > img {
      width: 28px;
      height: 28px;
      margin-right: 5px;
    }

    & > span {
      font-size: 28px;
      font-weight: 700;
      color: black;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  & > h1 {
    margin: 0px 0px 10px 0px;
    font-size: 46px;
  }
  & > div {
    margin-bottom: 15px;
    font-size: 18px;
  }
`;

export const Form = styled.form`
  max-width: 400px;
  width: 100%;
  & > div {
    position: relative;
    display: flex;
    flex-direction: row;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 11px 12px 13px;
  width: 100%;
  height: 44px;
  font-size: 18px;
`;

export const StateDiv = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 600;
  color: #ff0000;
`;

export const DuplicationButton = styled.button`
  position: absolute;
  top: 0px;
  right: -100px;
  width: 90px;
  color: rgb(255, 255, 255);
  background-color: rgb(74, 21, 75);
  border: none;
  font-size: 14px;
  font-weight: 600;
  height: 44px;
  padding: 0px 16px 3px;
  transition: all 80ms linear 0s;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px;
`;

export const Button = styled.button`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: rgb(255, 255, 255);
  background-color: rgb(74, 21, 75);
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0px 16px 3px;
  transition: all 80ms linear 0s;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px;
`;

export const LoginMoveDiv = styled.p`
  display: flex;
  width: 400px;
  max-width: 400px;
  font-size: 13px;
  color: rgb(97, 96, 97);
  & > a {
    margin-left: 10px;
    color: rgb(18, 100, 163);
    text-decoration: none;
    font-weight: 700;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 32px 0;
  width: 100%;
  max-width: 300px;
  color: #9a9a9a;
  font-size: 14px;
`;
