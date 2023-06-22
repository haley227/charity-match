import styled from 'styled-components';
import { media, containerWidth } from '../../includes/breakpoints';

const Container = styled.div.attrs((props) => {
  const className = ['container', props.className].filter(Boolean).join(' ');
  return { className };
})`
  max-width: ${containerWidth}px;
  padding: 48px 32px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  ${media.mobile`
    padding: 96px 36px;
  `}
`;

export default Container;
