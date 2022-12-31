// import useSocket from '@hooks/useSocket';
import { CollapseButton } from '@components/DMList/DMListStyles';
import { IUser, IUserWithOnline } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useSWR from 'swr';
import { IoTriangle } from 'react-icons/io5';
import { GoPrimitiveDot } from 'react-icons/go';
import gravatar from 'gravatar';

const DMList: FC = () => {
  const { workspace } = useParams<{ workspace?: string }>();
  const {
    data: userData,
    error,
    mutate,
  } = useSWR<IUser>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const { data: memberData } = useSWR<IUserWithOnline[]>(
    userData ? `/api/workspaces/${workspace}/members` : null,
    fetcher,
  );
  // const [socket] = useSocket(workspace);
  const [channelCollapse, setChannelCollapse] = useState(false);
  const [onlineList, setOnlineList] = useState<number[]>([]);

  const toggleChannelCollapse = useCallback(() => {
    setChannelCollapse((prev) => !prev);
  }, []);

  useEffect(() => {
    console.log('DMList: workspace 바꼈다', workspace);
    setOnlineList([]);
  }, [workspace]);

  // useEffect(() => {
  //   socket?.on('onlineList', (data: number[]) => {
  //     setOnlineList(data);
  //   });
  //   // socket?.on('dm', onMessage);
  //   // console.log('socket on dm', socket?.hasListeners('dm'), socket);
  //   return () => {
  //     // socket?.off('dm', onMessage);
  //     // console.log('socket off dm', socket?.hasListeners('dm'));
  //     socket?.off('onlineList');
  //   };
  // }, [socket]);

  return (
    <>
      <h2>
        <CollapseButton collapse={channelCollapse} onClick={toggleChannelCollapse}>
          {channelCollapse ? (
            <IoTriangle style={{ transform: 'rotate(90deg)' }} size="10" />
          ) : (
            <IoTriangle style={{ transform: 'rotate(180deg)' }} size="10" />
          )}
        </CollapseButton>
        <span>Direct Messages</span>
      </h2>
      <div>
        {!channelCollapse &&
          memberData?.map((member) => {
            const isOnline = onlineList.includes(member.id);
            return (
              <NavLink
                key={member.id}
                className={({ isActive }) => '' + (isActive ? 'selected' : '')}
                to={`/workspace/${workspace}/dm/${member.id}`}
              >
                <img src={gravatar.url(member.nickname, { s: '18px', d: 'retro' })} alt={member.nickname} />
                <GoPrimitiveDot color={isOnline ? 'green' : 'gray'}></GoPrimitiveDot>
                <span style={{ marginLeft: '5px' }}>{member.nickname}</span>
                {member.id === userData?.id && <span> (나)</span>}
              </NavLink>
            );
          })}
      </div>
    </>
  );
};

export default DMList;
