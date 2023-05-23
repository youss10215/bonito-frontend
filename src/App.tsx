import { fetchAPI } from '@/lib/api';
import Home from '@/structure/Home';
import { useAppDispatch } from '@/store/hooks';
import { setUsers } from '@/store/users/usersSlice';
import { useEffect } from 'react';

const Index = () => {

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    fetchAPI('/users/?populate=meetings')
      .then(response => dispatch(setUsers({ users: response})));
  }, []);

  return (
    <Home />
  );
};
export default Index;
