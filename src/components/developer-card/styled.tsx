import { FC } from 'react';
import styled from '@emotion/styled';
import CaiSprite from '../../assets/avatar/cai.png';
import { Experience } from '../../types/experience';

export const Card: FC<{backgroundColor: string, landscape?: boolean}>
= styled.div(({ backgroundColor, landscape = false }) => ({
  width: landscape ? '244rem' : '120rem',
  height: landscape ? '180rem' : '220rem',
  borderRadius: '2rem',
  border: '1rem solid var(--white)',
  outline: '3rem solid var(--grey)',
  background: backgroundColor,
  position: 'relative',
  overflow: 'hidden',
  // transition: '0.3s',
  display: 'flex',
  flexDirection: 'column',
}));

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 7fr 5fr;
  height: 100%;
`;

export const Title: FC<{small?: boolean}> = styled.div(({ small = false }) => `
  font-family: pokemondppt;
  color: var(--white);
  font-weight: bold;
  font-size: ${small ? '12rem' : '16rem'};
  text-transform: uppercase;
  letter-spacing: 0.3rem;

  margin: 4rem 4rem;

  text-shadow: 1rem 1rem rgb(0, 0, 0, 0.4);
`);

export const Watermark: FC<{experience: Experience}> = styled.div(({ experience }) => ({
  position: 'absolute',
  top: '-40rem',
  right: '-100rem',
  width: '200rem',
  height: '200rem',
  opacity: 0.3,
  backgroundImage: `url(${experience.logo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
}));

export const Avatar = styled.div`
  position: absolute;
  top: 10rem;
  right: 10rem;

  width: 80rem;
  height: 80rem;
  border-radius: 2rem;
  border-left: 1rem solid rgb(0, 0, 0, 0.2);
  border-top: 1rem solid rgb(0, 0, 0, 0.2);
  border-right: 1rem solid rgb(255, 255, 255, 0.2);
  border-bottom: 1rem solid rgb(255, 255, 255, 0.2);

  background-color: rgb(255, 255, 255, 0.1);
  background-image: url(${CaiSprite});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  image-rendering: pixelated;
`;

export const Description: FC<{small?: boolean}> = styled.div(({ small = false }) => `
  max-width: 130rem;
  min-height: ${small ? '8rem' : '10rem'};

  box-shadow:
    1rem 0rem rgb(255, 255, 255, 0.3),
    -1rem 0rem rgb(255, 255, 255, 0.3),
    0rem 1rem rgb(255, 255, 255, 0.3),
    0rem -1rem rgb(255, 255, 255, 0.3);

  padding: 0 ${small ? '2rem' : '3rem'};
  color: var(--white);

  z-index: 1;

  font-family: pokemondppt;
  font-size: ${small ? '6rem' : '8rem'};

  background: rgb(255, 255, 255, 0.3);
`);

export const RowGroup = styled.div`
  display: grid;
  row-gap: 4rem;
  margin-bottom: 9rem;
  margin-left: 4rem;
  margin-right: 4rem;
`;

export const Row = styled(Description)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-transform: uppercase;
`;

export const BadgeRow = styled.div`
  width: 100%;
  background: rgb(0, 0, 0, 0.5);

  // display: flex;
  // flex-direction: column;
  // justify-content: center;

  margin-bottom: 4rem;
`;

export const BadgesHeading = styled.span`
  text-transform: uppercase;
  font-family: eightbithud;
  font-size: 4rem;
  color: var(--white);

  padding: 1rem 15rem;
`;

export const Badges = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 2rem;
`;
