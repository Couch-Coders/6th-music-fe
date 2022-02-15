// import useAuth from '../../Server/useAuth';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../Server/UseAuth';
import Dim from '../Components/Modal/Dim';
import Modal from '../Components/Modal/Modal';
import {
  PageContentWrapper,
  PageTitle,
  PageContent,
  PageSubtitle,
} from '../Layout/Layout.style';
import { TextHidden } from '../Assets/Styles/Common.style';
import {
  InputFull,
  InputWrapper,
  TagInput,
  VideoInput,
} from '../Components/Input.style';
import {
  Youtube,
  VideoArea,
  TagGroup,
  VideoText,
  Genre,
  TagContent,
  FireBtnArea,
} from '../Assets/Styles/Register.style';
import { RegisterBtn, UrlBtn } from '../Components/Button.style';
import Radio from '../Components/Radio';
import Tag from '../Components/Tag/Tag';
import TextArea from '../Components/TextArea';

function Register() {
  // const { user } = useContext(UserContext);
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');
    if (authToken) {
      navigate('/');
    }

    if (!authToken) {
      navigate('/test');
    }
  });

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();
  const redirect = () => {
    navigate('/completed');
  };

  const RegisterStyle = {
    InputWithBtn: 408,
    InputFull: 100,
    fromAbove: 10,
    fromRight: 16,
  };

  return (
    <PageContentWrapper>
      {/* {user && <h1>로그인되면 ㅇ</h1>} */}
      <PageTitle>제목을 입력하세요 </PageTitle>
      <PageContent fromAbove={RegisterStyle.fromAbove}>
        <form>
          <Youtube>
            <TextHidden>
              <legend>영상주소를 입력하는 공간입니다.</legend>
            </TextHidden>
            <InputWrapper
              inputWithBtn={RegisterStyle.InputWithBtn}
              fromRight={RegisterStyle.fromRight}
            >
              <VideoInput />
            </InputWrapper>
            <UrlBtn>입력</UrlBtn>
          </Youtube>
          <VideoArea />
          <Genre>
            <PageSubtitle>장르</PageSubtitle>
            <Radio />
          </Genre>
          <TagGroup>
            <PageSubtitle>태그</PageSubtitle>
            <TagContent>
              <InputFull inputFull={RegisterStyle.InputFull}>
                <TagInput />
              </InputFull>
              <Tag />
            </TagContent>
          </TagGroup>
          <VideoText>
            <PageSubtitle>음악링크에 대한 소개를 적어주세요</PageSubtitle>
            <TextArea />
          </VideoText>
          <FireBtnArea>
            <RegisterBtn onClick={openModal}>취소</RegisterBtn>
            <RegisterBtn
              type="submit"
              bgColor="#10239E"
              textColor="#fff"
              onClick={redirect}
            >
              작성
            </RegisterBtn>
          </FireBtnArea>
        </form>
      </PageContent>

      <Link to="/">홈으로</Link>
      <div>
        {modalOpen && <Dim />}
        {modalOpen && (
          <Modal close={closeModal}>정말 등록을 취소하시겠습니까?</Modal>
        )}
      </div>
      {/* {user ? (
        <h1>유저의 이름은 {user.displayName}입니다</h1>
      ) : (
        <p>로그인 해주세요!</p>
      )} */}
    </PageContentWrapper>
  );
}

export default Register;
