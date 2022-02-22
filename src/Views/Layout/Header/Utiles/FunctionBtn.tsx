import { RNav, RnItem, RnLi, RnList } from './FunctionsBtn.style';
import { useContext } from 'react';
import { UserContext } from '../../../../Server/UseAuth';

function FunctionsBtn() {
  const { user } = useContext(UserContext);
  console.log('뾰로롱~', user);
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
