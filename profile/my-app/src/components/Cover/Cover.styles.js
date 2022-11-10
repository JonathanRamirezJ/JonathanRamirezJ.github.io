import styled from 'styled-components';
import Background from '../../assets/images/background.jpg';
import BackgroundSm from '../../assets/images/background-sm.jpg';


export const BackgroundCover = styled.div `
  background-image: url(${Background});
  height: 100vh;
  width: 100%;
  background-size: cover;
  position: relative;
  @media (max-width: 767px) {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${BackgroundSm});
  }
  `;

export const TextCaption = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;