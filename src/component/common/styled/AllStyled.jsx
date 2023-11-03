import styled from 'styled-components';

// // css - 유지
// const flexOption = css`
//   display:flex;
//   flex-wrap:wrap;
//   flex-direction: ${props => props.$direction || 'row'};
//   justify-content : ${props => props.$justifyConent || 'flex-start'}; 
//   ${props => `
//     ${props.$gap && `gap : ${props.$gap}px`};
//     ${props.$size && `
//       &>li {width: calc((100% - ${(props.$gap * (props.$size-1))}px) / ${props.$size});}
//     `};
//   `}
// `;

export const Blind = styled.span`
  position: absolute;
  top: -99999px;
  left: -9999px;
  opacity: 0;
  text-indent: -9999px;
`;

// ♣ button - 유지
export const Button = styled.button.attrs({
  type:'button',
})`
  display:inline-block;
`;
