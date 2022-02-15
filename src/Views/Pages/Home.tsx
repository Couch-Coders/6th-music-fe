import { UserContext } from '../../Server/UseAuth';
import { useContext } from 'react';
import { HomeData } from '../../Core/Config/Home';
import { useNavigate } from 'react-router';

import {
  CircleBtn,
  MainCategoryBtn,
  MainSearchBtn,
} from '../Components/Button.style';

import { SearchInput } from '../Components/Input.style';
import {
  Category,
  CategoryLi,
  CategoryList,
  Item,
  ItemLi,
  ItemList,
  ItemWrapper,
  SearchBar,
} from '../Assets/Styles/Home.style';

import { DivLinkWrapper, Img, ImgWrapper } from '../Components/Picture.style';
import { InputWrapper } from '../Components/Input.style';
// import { useEffect } from 'react';

function Home() {
  let navigate = useNavigate();
  const { user } = useContext(UserContext);

  const moveRegister = (): void => {
    navigate('/register');
  };

  const mainStyle = {
    SearchWidth: 681,
  };

  return (
    <>
      <SearchBar>
        <InputWrapper inputWithBtn={mainStyle.SearchWidth}>
          <SearchInput />
        </InputWrapper>
        <MainSearchBtn>Search</MainSearchBtn>
      </SearchBar>
      <Category>
        <CategoryList>
          <CategoryLi>
            <MainCategoryBtn>LOFI</MainCategoryBtn>
          </CategoryLi>
          <CategoryLi>
            <MainCategoryBtn>Pop</MainCategoryBtn>
          </CategoryLi>
          <CategoryLi>
            <MainCategoryBtn>K-POP</MainCategoryBtn>
          </CategoryLi>
          <CategoryLi>
            <MainCategoryBtn>영화음악</MainCategoryBtn>
          </CategoryLi>
          <CategoryLi>
            <MainCategoryBtn>재즈</MainCategoryBtn>
          </CategoryLi>
          <CategoryLi>
            <MainCategoryBtn>기타</MainCategoryBtn>
          </CategoryLi>
        </CategoryList>
      </Category>
      <ItemWrapper>
        <ItemList>
          {HomeData.map((data) => {
            return (
              <ItemLi key={data?.id}>
                <DivLinkWrapper to={`/detail/${data?.itemIdx}`}>
                  <Item>
                    <ImgWrapper>
                      <Img src={data?.video} />
                    </ImgWrapper>
                    <p>{data?.videoTitle}</p>
                  </Item>
                </DivLinkWrapper>
              </ItemLi>
            );
          })}
        </ItemList>
      </ItemWrapper>

      {user && <h1>로그인됨</h1>}
      <CircleBtn onClick={moveRegister} />
    </>
  );
}

export default Home;
