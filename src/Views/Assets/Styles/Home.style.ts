import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  width: 756px;
  margin: 34px auto 27px auto;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`;

export const Category = styled.div`
  width: 608px;
  margin: 0 auto 40px auto;
`;

export const CategoryList = styled.ul`
  display: flex;
  width: 100%;
`;

export const CategoryLi = styled.li`
  margin: 0 16px 0 0;
`;

export const ItemWrapper = styled.div`
  width: 1035px;
  margin: 0 auto;
`;

export const ItemList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ItemLi = styled.li`
  margin: 0 22px 10px 0;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const Item = styled.div`
  width: 242px;
`;

export const ItemInfo = styled.div`
  border: 1px solid #f0f0f0;
  padding: 15px;
  box-sizing: border-box;
`;

export const ItemTitle = styled.strong`
  display: block;
  width: 200px;
  margin-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ItemContent = styled.div`
  position: relative;
`;

export const Uploader = styled.span`
  display: block;
  margin: 0 0 10px 0;
`;
