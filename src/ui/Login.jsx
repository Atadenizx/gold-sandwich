import LoginForm from "../features/authentication/LoginForm";

function Login() {
  // if there is an successfull user match, it is going to redirect us
  return (
    <div className="mt-56 flex flex-col items-center justify-center">
      <div className="mb-4 text-xl font-bold text-yellow-600">
        Login to your Gold Sandwich Account!
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
