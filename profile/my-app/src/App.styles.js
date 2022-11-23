import styled from 'styled-components';

export const ContainerScroll = styled.div `
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

export const SectionScroll = styled.div `
  height: 100vh;
  scroll-snap-align: start;
`;