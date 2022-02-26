import { useContext } from 'react';
import { RNav, RnItem, RnLi, RnList } from './FunctionsBtn.style';
import { UserContext } from '../../../../Server/UseAuth';

function FunctionsBtn() {
  const { user } = useContext(UserContext);
  console.log('FunctionBtn.tsx', user);

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
