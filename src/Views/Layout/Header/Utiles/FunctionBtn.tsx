import { RNav, RnItem, RnLi, RnList } from './FunctionsBtn.style';
import useAuth from '../../../../Server/useAuth';

function FunctionsBtn() {
  const { user } = useAuth();
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
