import useInput from '@hooks/useInput';
import axios from 'axios';
import React, { useCallback } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Button, Container, Footer, Form, Header, Input, Label, LoginMoveDiv, Main, StateDiv } from './LogInStyles';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';
import loadable from '@loadable/component';

function LogIn() {
  const { data, error, mutate } = useSWR('/api/users', fetcher);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const EMAIL_REGEX =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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
              window.alert('로그인 되었습니다.');
              mutate();
            })
            .catch((error) => {
              window.alert(error.response.data);
            });
    },
    [email, password],
  );

  if (data) {
    return <Navigate replace to="/workspace/sleact/channel/일반" />;
  }

  if (data === undefined) {
    return <div>로딩중...</div>;
  }

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
