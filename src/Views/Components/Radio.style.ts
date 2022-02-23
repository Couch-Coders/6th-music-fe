import styled from 'styled-components';

const NormalLabel = styled.label`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  padding: 6px 0;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  background: #fafafa;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
`;

export const RadioWrapper = styled.div``;

export const RadioList = styled.ul`
  margin-top: -15px;
  li {
    display: inline-block;
    vertical-align: top;
    width: 23%;
    margin: 18px 12px 0 0;
    &:nth-child(4n) {
      margin-right: 0px;
    }
  }
`;

export const RadioLabel = styled(NormalLabel)``;

export const RadioInput = styled.input`
  display: none;
  &:checked + ${RadioLabel} {
    background: #597ef7;
    color: #fff;
    border: 1px solid #2f54eb;
  }
`;
