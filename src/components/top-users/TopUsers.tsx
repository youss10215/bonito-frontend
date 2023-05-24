import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  background-color: red;
  border-radius: 5px;
  margin-right: 10px;
`;

const TopUsers = () => {
  return (
    <Container>Top user</Container>
  );
};

export default TopUsers;