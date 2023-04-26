import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "../css/signup2.css";
const SignUpForm2 = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <div className="logInForm">
      <>
        {success ? (
          <section className="after_login">
            <h1>You are logged in!</h1>
            <br />
            <p>
              <Link to="/ProfilePage" className="navLink_Item" id="go_to">
                Go to your profile
              </Link>
            </p>
          </section>
        ) : (
          <section className="signInForm">
            <p
              ref={errRef}
              className={errMsg ? "errMgs" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div className="sign_up_form">
              <h1 className="sign_up_message">
                <span style={{ color: "yellow" }}>Sign in</span> now and start
                tracking progress
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="formContainer">
              {/* this is for the username */}
              <label htmlFor="username" className="usernameForm">
                <h2>Username</h2>
              </label>
              <input
                placeholder="Username"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                className="form_ctrl"
                style={{ color: "white", fontSize: "1rem" }}
              />

              {/* this is for the password */}
              <label htmlFor="password" className="passwordForm">
                <h2>Password</h2>
              </label>
              <input
                placeholder="Password"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                className="form_ctrl"
                style={{ color: "white", fontSize: "1rem" }}
              />
              <div className="submitButtonContainer">
                <button className="submitButton">Sign In</button>
              </div>
            </form>
            <div className="new_account">
              <p>Need an account?</p>
              <Link
                to="/RegistrationPage"
                style={{ color: "yellow" }}
                className="navLink_Item"
              >
                Sign up
              </Link>
            </div>
          </section>
        )}
      </>
    </div>
  );
};

export default SignUpForm2;
