import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/thunks'
import { RootState } from '../../redux/root-state'; // Assuming you have defined RootState type
import { AppDispatch } from '../../redux/store';

const UserComponent: React.FC<{ userId: string }> = ({ userId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, error } = useSelector((state: RootState) => state.counter);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (loading === 'loading') return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return <div>User: {user?.name}</div>;
};

export default UserComponent;