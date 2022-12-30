import useInput from '@hooks/useInput';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
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
  const { data, error, mutate } = useSWR('/api/users', fetcher);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);

  const EMAIL_REGEX =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // 영문, 숫자, 특수문자 혼합 8-20자리 이내 비밀번호
  const PASSWORDS_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!mismatchError && nickname) {
        console.log('서버로 회원가입하기');
        axios
          .post('http://localhost:3095/api/users', {
            email,
            nickname,
            password,
          })
          .then((response) => {
            console.log(response);
            console.log('회원가입 성공');
            window.alert('회원 가입에 성공하였습니다. 로그인을 해보세요!');
          })
          .catch((error) => {
            console.log(error.response);
            console.log('회원가입 실패');
            window.alert(error.response.data);
          })
          .finally(() => {});
      } else {
        window.alert('기입하신 정보를 확인 후 다시 시도 해주세요.');
      }
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );

  if (data) {
    return <Navigate replace to="/workspace/channel" />;
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
        <h1>이메일과 닉네임, 비밀번호를 입력해보세요</h1>
        <div>
          <strong>직장에서 사용하는 이메일 주소</strong>로 회원가입 하는 걸 추천드려요.
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
          <Label id="nickname-label">닉네임</Label>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname}></Input>
          </div>
          {!nickname ? <StateDiv value={nickname}>닉네임을 입력해주세요!</StateDiv> : <StateDiv />}
          <Label id="password-label">비밀번호</Label>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword}></Input>
          </div>
          {!PASSWORDS_REGEX.test(password) ? (
            <StateDiv value={password}>영문, 숫자, 특수문자를 포함하여 8자리 이상으로 해주세요!</StateDiv>
          ) : (
            <StateDiv></StateDiv>
          )}
          <Label id="password-check-label">비밀번호 확인</Label>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            ></Input>
          </div>
          {mismatchError ? (
            <StateDiv value={passwordCheck}>비밀번호가 일치하지 않습니다!</StateDiv>
          ) : (
            <StateDiv></StateDiv>
          )}
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
