// import useAuth from '../../Server/useAuth';
import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
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
import { InputWrapper, VideoInput } from '../Components/Input.style';
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
import TextArea from '../Components/TextArea';
import HolderTag from '../Components/TagFunc/HolderTag';
import { useNavigate } from 'react-router';

function Register() {
  // const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');
    if (authToken) {
      navigate('/');
    }

    // if (!authToken) {
    //   navigate('/test');
    // }
  }, [navigate]);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // const navigate = useNavigate();
  // const redirect = () => {
  //   navigate('/completed');
  // };

  const RegisterStyle = {
    InputWithBtn: 408,
    InputFull: 100,
    fromAbove: 10,
    fromRight: 16,
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <PageContentWrapper>
      <PageTitle>제목을 입력하세요 </PageTitle>
      <PageContent fromAbove={RegisterStyle.fromAbove}>
        <form onSubmit={onSubmit}>
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
              <HolderTag />
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
              // onClick={redirect}
            >
              작성
            </RegisterBtn>
          </FireBtnArea>
        </form>
      </PageContent>

      {/* <Link to="/">홈으로</Link> */}
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
