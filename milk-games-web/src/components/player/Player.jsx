import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Player = () => {
  const user = useLoaderData();

  return <div>{user.name}</div>;
};

export default Player;
