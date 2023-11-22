import SignUp from '../../component/sign-up-form/sign-up-form.component';
import SignIn from '../../component/sign-in-form/sign-in-form.component';

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignUp />
      <SignIn />
    </div>
  );
};

export default Authentication;