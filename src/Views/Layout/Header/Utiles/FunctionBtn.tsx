import { RNav, RnItem, RnLi, RnList } from './FunctionsBtn.style';
import { useContext } from 'react';
import { UserContext } from '../../../../Server/UseAuth';
import { useNavigate } from 'react-router';

function FunctionsBtn() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(
    '1. Header의 FunctionBtn로 접근함, 로그인 버튼이 클릭되기 전, user의 값은?',
    user
  );
  // if (!user) {
  //   navigate('/');
  // }
  return (
    <>
      <RNav>
        <RnList>
          <RnLi>
            {!user ? (
              <RnItem to="/login" role="button">
                Login
              </RnItem>
            ) : (
              <RnItem to="/logout" role="button">
                Logout
              </RnItem>
            )}
          </RnLi>
        </RnList>
      </RNav>
    </>
  );
}

export default FunctionsBtn;
