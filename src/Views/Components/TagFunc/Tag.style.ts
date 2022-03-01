import styled from 'styled-components';
import { TagRemove } from '../../../Core/Config/AssetPath';

export const TagComp = styled.div`
  margin-top: -2px;
  padding: 0 10px 10px 10px;
`;

export const TagCompList = styled.li`
  display: inline-block;
  vertical-align: top;
  margin: 10px 12px 0 0;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const TagCompItem = styled.button`
  display: inline-block;
  vertical-align: top;
  width: 105px;
  padding: 7px 18px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 100px;
  background: #fafafa;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  &:hover {
    background: url(${TagRemove.info.src}) no-repeat top 9px right 10px;
    background-size: 10px;
  }
`;
