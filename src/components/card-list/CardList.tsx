import CardItem from '@/components/card-item/CardItem';
import { UserState } from '@/store/users/userType';
import { useMemo } from 'react';

const CardList = (users: UserState) => {
  const { users: players } = users;

  const Item = useMemo(() => {
    return (
      <>
        {
          players.map(({ username, meetings }, i) => {
            const count = meetings.length;
            return (
              <CardItem key={`card-${i}`} i={i} username={username} count={count} />
            );
          })
        }
      </>
    );
  }, [users]);
  
  return Item;
};

export default CardList;
