import "../css/registration.css";
const RegistrationPage = () => {
  return (
    <div>
      <div className="create_new_section">
        <div className="top_section">
          <h2 className="register_title">Registration Form</h2>
          <p>
            <i>Please fill out the form with the required information</i>
          </p>
        </div>
        <form
          className="registration_form"
          method="post"
          action="about:blank"
          target="_blank"
        >
          <fieldset>
            <label for="first-name">
              First Name:{" "}
              <input id="first-name" name="first-name" type="text" required />
            </label>
            <label for="last-name">
              Last Name:{" "}
              <input id="last-name" name="last-name" type="text" required />
            </label>
            <label for="email">
              Email: <input id="email" name="email" type="email" required />
            </label>
            <label for="new-password">
              Password:{" "}
              <input
                id="new-password"
                name="new-password"
                type="password"
                pattern="[a-z0-5]{8,}"
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <label for="personal-account">
              <input
                id="personal-account"
                type="radio"
                name="account-type"
                class="inline"
              />{" "}
              Client Account
            </label>
            <label for="business-account">
              <input
                id="business-account"
                type="radio"
                name="account-type"
                class="inline"
              />{" "}
              Admin Account
            </label>
            <label for="terms-and-conditions">
              <input
                id="terms-and-conditions"
                type="checkbox"
                required
                name="terms-and-conditions"
                class="inline"
              />
              I accept the <a href="about:blank">terms and conditions</a>
            </label>
          </fieldset>
          <fieldset>
            <label for="profile-picture">
              Upload a profile picture:{" "}
              <input id="profile-picture" type="file" name="file" />
            </label>
            <label for="age">
              Input your age (years):{" "}
              <input id="age" type="number" name="age" min="13" max="120" />
            </label>
            <label for="referrer">
              How did you hear about us?
              <select
                id="referrer"
                name="referrer"
                style={{ backgroundColor: "#11334d" }}
              >
                <option value="">(choose one)</option>
                <option value="1">Facebook</option>
                <option value="2">Tiktok</option>
                <option value="3">Instagram</option>
                <option value="4">Other</option>
              </select>
            </label>
            <label for="bio">
              Provide a bio:
              <textarea
                id="bio"
                name="bio"
                rows="3"
                cols="30"
                placeholder=" What is your greatest motivation? "
              ></textarea>
            </label>
          </fieldset>
          <input type="submit" value="Submit" style={{ color: "#ffb703" }} />
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
