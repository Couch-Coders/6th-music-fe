import { RNav, RnItem, RnLi, RnList } from './FunctionsBtn.style';
import { useContext } from 'react';
import { UserContext } from '../../../../Server/UseAuth';

function FunctionsBtn() {
  const { user } = useContext(UserContext);
  console.log(
    '1. Header의 FunctionBtn로 접근함, 로그인 버튼이 클릭되기 전, user의 값은?',
    user
  );

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
