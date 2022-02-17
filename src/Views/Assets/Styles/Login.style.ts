import styled from 'styled-components';
import { lBoxStyle } from '../../../Core/Interface/lStyle';

export const LoginWrapper = styled.div``;

export const LoginTitle = styled.h1`
  font-size: 24px;
`;

export const LoginContent = styled.div`\
  display: flex;
  width:990px;
  margin:0 auto;
  margin-top:100px;
  margin-bottom:100px;

`;

export const LoginActions = styled.div`
  margin-left: 92px;
  padding-top: 133px;
`;

export const LoginImg = styled.div`
  width: ${({ ImgWidth }: lBoxStyle) => ImgWidth}px;
`;

export const LoginBtn = styled.div``;
