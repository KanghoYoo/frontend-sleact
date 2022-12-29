import useInput from '@hooks/useinput';
import axios from 'axios';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Footer, Form, Header, Input, Label, LoginMoveDiv, Main, StateDiv } from './LogInStyles';

function LogIn() {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      email === ''
        ? window.alert('아이디를 입력해주세요!')
        : password === ''
        ? window.alert('비밀번호를 입력해주세요!')
        : axios
            .post(
              '/api/users/login',
              { email, password },
              {
                withCredentials: true,
              },
            )
            .then((response) => {
              console.log(response);
              console.log('로그인 성공');
            })
            .catch((error) => {
              window.alert(error.response.data);
            });
    },
    [email, password],
  );
  const EMAIL_REGEX =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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
        <Form onSubmit={onSubmit}>
          <Label id="email-label">이메일 주소</Label>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail}></Input>
          </div>
          {!EMAIL_REGEX.test(email) ? (
            <StateDiv value={email}>이메일 형식이 일치하지 않습니다!</StateDiv>
          ) : (
            <StateDiv />
          )}
          <Label id="password-label">비밀번호</Label>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword}></Input>
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
