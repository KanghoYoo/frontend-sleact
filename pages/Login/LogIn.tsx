import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Footer, Form, Header, Input, Label, LoginMoveDiv, Main, StateDiv } from './LogInStyles';

function LogIn() {
  return (
    <Container>
      <Header>
        <div></div>
        <Link to="/login">
          <img src="https://a.slack-edge.com/cebaa/img/ico/favicon.ico" />
          <span>sleact</span>
        </Link>
        <div></div>
      </Header>
      <Main>
        <h1>이메일로 로그인 해보세요</h1>
        <div>
          <strong>직장에서 사용하는 이메일 주소</strong>로 로그인하는 걸 추천드려요.
        </div>
        <Form>
          <Label id="email-label">이메일 주소</Label>
          <div>
            <Input type="email" id="email" name="email"></Input>
          </div>
          <StateDiv />
          <Label id="password-label">비밀번호</Label>
          <div>
            <Input type="password" id="password" name="password"></Input>
          </div>
          <StateDiv></StateDiv>
          <Button type="submit">로그인</Button>
          <hr />
          <LoginMoveDiv>
            아직 회원이 아니신가요?
            <Link to="/signup">회원가입 하러가기</Link>
          </LoginMoveDiv>
        </Form>
      </Main>
      <Footer>
        <div>개인정보 보호 및 약관</div>
        <div>문의하기</div>
        <div>지역 변경</div>
      </Footer>
    </Container>
  );
}

export default LogIn;
