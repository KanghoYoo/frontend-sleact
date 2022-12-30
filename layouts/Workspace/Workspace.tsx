import React, { useCallback, FC } from 'react';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';
import axios from 'axios';
import gravatar from 'gravatar';
import { Navigate, Route, Routes } from 'react-router';
import {
  Header,
  ProfileImg,
  RightMenu,
  WorkspaceWrapper,
  Workspaces,
  Channels,
  WorkspaceName,
  MenuScroll,
  Chats,
} from './WorkspaceStyles';
import { IUser } from '@typings/db';
import loadable from '@loadable/component';

const Channel = loadable(() => import('@pages/Channel/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage/DirectMessage'));

const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { data, error, mutate } = useSWR<IUser | false>('http://localhost:3095/api/users', fetcher, {
    dedupingInterval: 2000,
  });

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        window.alert('로그아웃 되었습니다.');
        mutate(false, false);
      });
  }, []);

  if (!data) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span>
            <ProfileImg src={gravatar.url(data.email, { s: '28px', d: 'retro' })} alt={data.nickname} />
          </span>
        </RightMenu>
      </Header>
      <button onClick={onLogout}>로그아웃</button>
      <WorkspaceWrapper>
        <Workspaces>test</Workspaces>
        <Channels>
          <WorkspaceName>Sleact</WorkspaceName>
          <MenuScroll>menu scroll</MenuScroll>
        </Channels>
        <Chats>
          <Routes>
            <Route path="/channel" element={<Channel></Channel>} />
            <Route path="/dm" element={<DirectMessage></DirectMessage>} />
          </Routes>
        </Chats>
      </WorkspaceWrapper>
    </div>
  );
};

export default Workspace;
