import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dim from '../Components/Modal/Dim';
import Modal from '../Components/Modal/Modal';
import { PageContentWrapper } from '../Layout/Layout.style';
import useAuth from '../../Server/useAuth';

function Register() {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();
  const redirect = () => {
    navigate('/completed');
  };
  return (
    <PageContentWrapper>
      <h1>듣고싶은음악을 넣어주세요</h1>
      <h1>등록을 취소하려면 취소버튼을 클릭해주세요</h1>
      <div>
        <input style={{ display: 'inline-block' }} />
        <button style={{ display: 'inline-block' }}>입력</button>
      </div>
      <button onClick={openModal}>취소</button>
      <button onClick={redirect}>작성</button>
      <Link to="/">홈으로</Link>
      <div>
        {modalOpen && <Dim />}
        {modalOpen && (
          <Modal close={closeModal}>정말 등록을 취소하시겠습니까?</Modal>
        )}
      </div>
      {user ? (
        <h1>유저의 이름은 {user.displayName}입니다</h1>
      ) : (
        <p>로그인 해주세요!</p>
      )}
    </PageContentWrapper>
  );
}

export default Register;
