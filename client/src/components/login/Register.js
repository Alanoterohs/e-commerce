function Register() {
  return (
        <section className="hero is-fullheight is-link">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered has-text-centered">
                <div className="column is-5-tablet is-4-desktop is-5-widescreen">
                  <h3 className="title has-text-white">Register</h3>
                    <hr className="login-hr"/>
                  <form>
                  <div className="field is-horizontal is-align-items-center">
                    <div className="field-body">
                      <div className="field">
                          <input className="input" type="text" placeholder="Name"/>
                      </div>
                    </div>
                  </div>
                    <div className="field">
                      <div className="control">
                        <input className="input is-normal" type="text" placeholder="Last name" autoFocus=""/>
                      </div>
                    </div>
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
                    <div className="field">
                      <div className="control">
                        <input className="input is-normal" type="password" placeholder="Repeat password"/>
                      </div>
                    </div>
                    <div className="field is-grouped is-justify-content-center">
                      <div className="control">
                        <button className="button is-primary">Sign in</button>
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
// <div className="hero-body">
// <div className="container has-text-centered">
// <p className="title">
// Title
// </p>
// <p className="subtitle">
// Subtitle
// </p>
// </div>
// </div>

export default Register;
