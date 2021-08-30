function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
        placeholder = 'email'
        />
        <input
        placeholder = 'password'
        />
        <button>Login</button>
        <button>dont have an account?</button>
        <button>Forgot password</button>
      </form>
    </div>
  );
}

export default Login;
