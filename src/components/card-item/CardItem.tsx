import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CardItemProps, RotateType } from './types';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 500px;
  position: relative;

  &::before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    padding-bottom: 125%;
  }
`;

const Card = styled.div<{ $isHover: boolean; $rotateValue:RotateType }>`
  width: 100%;
  background-color: #FFF;
  transform: ${({ $rotateValue, $isHover }) => `rotateX(${$rotateValue.x}deg) rotateY(${$rotateValue.y}deg) scale(${$isHover ? 1.03 : 1})`};
  transition: transform 0.3s cubic-bezier(0. 175, 0.885, 0.32, 1.275);
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  position: absolute;
  inset: 0;
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Avatar = styled.div`
  display: flex;
  margin-bottom: 15px;

`;

const Image = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-position: 50% 50%;
  object-fit: cover;
`;

const Username = styled.div`
  margin-bottom: 15px;
`;

const Count = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const CardItem = ({ username, count, i }:CardItemProps ) => {
  const ref = useRef<HTMLDivElement>(null);

  const [rotateValue, setRotateValue] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  
  useEffect(() => {
    if (!ref.current) { 
      return;
    }

    setSize({ 
      width: ref.current.clientWidth,
      height: ref.current.clientHeight
    })
  }, []);
  
  const handleMouseMove = (event:any) => {
    if (!isHover || !ref.current) { return; }

    const midWidth = size.width / 2;
    const midHeight = size.height / 2;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.x;

    const mouseY = event.clientY - rect.y;

    const ratioX = (mouseY - midHeight) / midHeight;
    const ratioY = (mouseX - midWidth) / midWidth;

    setRotateValue({ x: ratioX * 7, y: ratioY * -5 });
  };

  const onMouseHover = () => {
    setIsHover(true);
  }

  const onMouseLeave = () => {
    setIsHover(false);
    setRotateValue({ x: 0, y: 0 });
  }
  return (
    <Container
      ref={ref}
      key={i}
    >
      <Card
        key={`card-${i}`}
        onMouseMove={handleMouseMove}
        onMouseOver={() => onMouseHover()}
        onMouseLeave={() => onMouseLeave()}
        $rotateValue={rotateValue}
        $isHover={isHover}
      >
        <Content>
          <Avatar>
            <Image src='../img/leo.png' alt='Avatar' />
          </Avatar>
          <Username>{username}</Username>
          <Count>
            <div>{count}</div>
            <div>15%</div>
          </Count>
        </Content>
      </Card>
    </Container>
);
};

export default CardItem;