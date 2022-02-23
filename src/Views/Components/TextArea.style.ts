import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

export const TextAreaWrapper = styled.div`
  margin-top: 10px;
`;

export const TextAreaComp = styled(Textarea)`
  display: block;
  width: 100%;
  height: 113px !important;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 4px;
  resize: none;
  padding: 19px 14px 19px 14px;
`;
