// import useSocket from '@hooks/useSocket';
import { CollapseButton } from '@components/DMList/DMListStyles';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { FC, useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useSWR from 'swr';
import { IoTriangle } from 'react-icons/io5';
import EachChannel from '@components/EachChannel/EachChannel';

const ChannelList: FC = () => {
  const { workspace } = useParams<{ workspace?: string }>();
  // const [socket] = useSocket(workspace);
  const {
    data: userData,
    error,
    mutate,
  } = useSWR<IUser>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const { data: channelData } = useSWR<IChannel[]>(userData ? `/api/workspaces/${workspace}/channels` : null, fetcher);
  const [channelCollapse, setChannelCollapse] = useState(false);

  const toggleChannelCollapse = useCallback(() => {
    setChannelCollapse((prev) => !prev);
  }, []);

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
        <span>Channels</span>
      </h2>
      <div>
        {!channelCollapse &&
          channelData?.map((channel) => {
            return <EachChannel key={channel.id} channel={channel} />;
          })}
      </div>
    </>
  );
};

export default ChannelList;
