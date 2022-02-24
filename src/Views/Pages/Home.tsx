import { UserContext } from '../../Server/UseAuth';
import { useContext } from 'react';
import { VideoList } from '../../Core/Config/Home';
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
  ItemContent,
  ItemInfo,
  ItemLi,
  ItemList,
  ItemTitle,
  ItemWrapper,
  SearchBar,
  Uploader,
} from '../Assets/Styles/Home.style';
import { DivLinkWrapper, Img, ImgWrapper } from '../Components/Picture.style';
import { InputWrapper } from '../Components/Input.style';
import getYouTubeID from 'get-youtube-id';
import { IconContext } from 'react-icons/lib';
import { AiFillHeart } from 'react-icons/ai';

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
          {VideoList.map((data) => {
            let YoutubeId = getYouTubeID(data.url);

            return (
              <ItemLi key={data?.id}>
                <DivLinkWrapper to={`/detail/${data?.id}`}>
                  <Item>
                    <ImgWrapper>
                      <Img
                        src={`https://img.youtube.com/vi/${YoutubeId}/maxresdefault.jpg`}
                      />
                      {/* <Img src={data?.video} /> */}
                    </ImgWrapper>
                    {/* <p>{data?.videoTitle}</p> */}
                  </Item>
                  <ItemInfo>
                    <ItemTitle>{data.title}</ItemTitle>
                    <ItemContent>
                      <Uploader>{data.uploader}</Uploader>
                    </ItemContent>
                    <div className="" style={{ position: 'relative' }}>
                      <div
                        style={{
                          display: 'flex',
                          position: 'absolute',
                          top: 0,
                          right: 0,
                        }}
                      >
                        <div>
                          <IconContext.Provider value={{ size: '10px' }}>
                            <AiFillHeart />
                          </IconContext.Provider>
                        </div>
                        <span>15</span>
                      </div>
                      <div className="">
                        <ul style={{ display: 'flex' }}>
                          <li>#LOFI</li>
                          <li>#POP</li>
                          <li>#가사가 없는</li>
                        </ul>
                      </div>
                    </div>
                  </ItemInfo>
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
