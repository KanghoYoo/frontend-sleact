import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
      <header>
        <div></div>
        <Link to="/login">Sleact</Link>
        <div></div>
      </header>
      <div>
        <h1>이메일과 비밀번호를 입력해보세요</h1>
        <div>
          <strong>직장에서 사용하는 이메일 주소</strong>로 로그인하는 걸 추천드려요.
        </div>
        <form>
          <label>이메일 주소</label>
          <div>
            <input type="user"></input>
            <i>아이콘자리</i>
            <button>아이디 중복 체크</button>
          </div>
          <div>형식이 올바르지 않습니다.</div>
          <label>닉네임</label>
          <div>
            <input type="nickname"></input>
            <i>아이콘자리</i>
          </div>
          <div>형식이 올바르지 않습니다.</div>
          <label>비밀번호</label>
          <div>
            <input type="nickname"></input>
            <i>아이콘자리</i>
          </div>
          <div>형식이 올바르지 않습니다.</div>
          <label>비밀번호 확인</label>
          <div>
            <input type="nickname"></input>
            <i>아이콘자리</i>
          </div>
          <div>형식이 올바르지 않습니다.</div>
          <button type="submit">회원가입</button>
          <div>
            <div>
              <hr />
              <div> 또는 </div>
              <hr />
            </div>
          </div>
          <div>
            <button>카카오 로그인</button>
          </div>
          <div>
            <div>아이디가 이미 존재하시나요?</div>
            <Link to="/login">로그인페이지로 이동</Link>
          </div>
        </form>
      </div>
      <div>
        <footer>
          <a></a>
          <a></a>
          <div></div>
        </footer>
      </div>
    </div>
  );
}

export default SignUp;
