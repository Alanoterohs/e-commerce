function Login() {
  return (
    <section className="hero is-fullheight is-link">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered has-text-centered">
            <div className="column is-5-tablet is-4-desktop is-5-widescreen">
              <h3 className="title has-text-white">Form Login</h3>
                <hr className="login-hr"/>
              <form>
                <div className="field">
                  <div className="control">
                    <input className="input is-normal" type="email" placeholder="Email" autoFocus=""/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-normal" type="password" placeholder="Password"/>
                  </div>
                </div>
                <div className="field is-grouped is-justify-content-flex-start">
                  <div>
                    <a href="/login" variant="body2">
                    Dont have an account? Sign in
                    </a>
                  </div>
                </div>
                <div className="field is-grouped is-justify-content-center">
                  <div className="control">
                    <button className="button is-primary">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
