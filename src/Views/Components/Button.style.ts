import styled from 'styled-components';
import { Register } from '../../Core/Config/AssetPath';

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
