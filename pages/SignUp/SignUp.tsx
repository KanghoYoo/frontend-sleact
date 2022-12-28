import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  DuplicationButton,
  Footer,
  Form,
  Header,
  Input,
  Label,
  LoginMoveDiv,
  Main,
  StateDiv,
} from './SignUpStyles';

function SignUp() {
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
        <h1>이메일과 비밀번호를 입력해보세요</h1>
        <div>
          <strong>직장에서 사용하는 이메일 주소</strong>로 로그인하는 걸 추천드려요.
        </div>
        <Form>
          <Label>이메일 주소</Label>
          <div>
            <Input type="user"></Input>
            <DuplicationButton>중복 확인</DuplicationButton>
          </div>
          <StateDiv>형식이 올바르지 않습니다.</StateDiv>
          <Label>닉네임</Label>
          <div>
            <Input type="nickname"></Input>
          </div>
          <StateDiv>형식이 올바르지 않습니다.</StateDiv>
          <Label>비밀번호</Label>
          <div>
            <Input type="nickname"></Input>
          </div>
          <StateDiv>형식이 올바르지 않습니다.</StateDiv>
          <Label>비밀번호 확인</Label>
          <div>
            <Input type="nickname"></Input>
          </div>
          <StateDiv>형식이 올바르지 않습니다.</StateDiv>
          <Button type="submit">회원가입</Button>
          <hr />
          <LoginMoveDiv>
            이미 회원이신가요?
            <Link to="/login">로그인 하러가기</Link>
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

export default SignUp;
