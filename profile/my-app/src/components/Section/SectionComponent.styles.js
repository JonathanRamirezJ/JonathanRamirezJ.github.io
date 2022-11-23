import styled from 'styled-components';
import Bgm01 from '../../assets/images/bgm-01.jpg';

export const TextColum = styled.div `
  backgound-color: #e1e6eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-contant: center;
  align-items: center;
  padding: 30% 20px;

  h2 {
    color: #1c4152;
    font-size: 45px;
    font-weight: 700;
  }

  p {
    color: #274470;
    font-weight: 300;
    text-align: justify;
  }
`;

export const ImageColum = styled.div `
  backgound-color: #e1e6eb;
  background-image: url(${Bgm01});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: 100vh;
`;
