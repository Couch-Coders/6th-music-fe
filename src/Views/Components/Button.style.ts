import styled from 'styled-components';
import { Register } from '../../Core/Config/AssetPath';
import { lBoxStyle } from '../../Core/Interface/lStyle';

export const ButtonCommon = styled.button`
  display: block;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const MainSearchBtn = styled(ButtonCommon)`
  width: calc(100% - 681px);
  color: #fff;
  background: #597ef7;
`;

export const MainCategoryBtn = styled(ButtonCommon)`
  width: 88px;
  height: 28px;
  border-radius: 2px;
`;

export const ButtonModal = styled(ButtonCommon)`
  width: 84px;
  height: 32px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
  padding: 5px 16px;
`;

export const ButtonNormal = styled(ButtonCommon)`
  width: 55px;
  height: 24px;
  border-radius: 2px;
  font-size: 14px;
  color: #fff;
  background: #597ef7;
`;

export const CircleBtn = styled(ButtonCommon)`
  position: fixed;
  right: 114px;
  bottom: 65px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: url(${Register.info.src});
`;

export const ModalCancel = styled(ButtonModal)`
  background: #f0f0f0;
  color: #000;
`;

export const ModalConfirm = styled(ButtonModal)`
  background: #f5222d;
  color: #fff;
`;

export const UrlBtn = styled(ButtonCommon)`
  display: inline-block;
  vertical-align: top;
  width: 56px;
  height: 100%;
  line-height: 29px;
  background: #d9d9d9;
  border-radius: 2px;
`;

export const RegisterBtn = styled(ButtonCommon)<lBoxStyle>`
  display: inline-block;
  vertical-align: top;
  width: 58px;
  height: 32px;
  margin-right: 10px;
  color: ${({ textColor }: lBoxStyle) => textColor};
  background: ${({ bgColor }: lBoxStyle) => bgColor};
`;

export const LogoutBtn = styled(ButtonCommon)`
  width: 100%;
  line-height: 50px;
  border-radius: 3px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
  background: #fff;
  box-shadow: rgb(0 0 0 / 50%) 0px 1px 2px;
`;
