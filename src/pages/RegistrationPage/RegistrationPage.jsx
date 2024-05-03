export const RegistrationPage = () => {
  return (
    <section className="page__authorization authorization">
      <div className="authorization__container">
        <div className="authorization__body">
          <div className="authorization__maincontent">
            <div className="authorization__header">
              <img
                className="authorization__logo"
                src="img/icons/logo.svg"
                alt="logo.svg"
              />
              <h2 className="authorization__title title-2">
                Enter your email address to login or register.
              </h2>
            </div>
            <div className="authorization__dropdown-wrapper">
              <label htmlFor="dropdown">Country:</label>
              <select id="dropdown" className="authorization__dropdown">
                <option value="value1">Ukraine</option>
                <option value="value2">Poland</option>
                <option value="value3">Moldova</option>
              </select>
            </div>
            <input
              type="text"
              className="authorization__input"
              name="text-input"
              placeholder="E-mail*"
            />
          </div>
          <div className="authorization__footer">
            <div className="authorization__checkbox-line">
              <hr />
              <div className="authorization__checkbox-wrapper">
                <input
                  type="checkbox"
                  className="authorization__checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  defaultValue="checkboxValue"
                />
                <label htmlFor="myCheckbox">
                  I have read and agree to the terms &amp; conotions and privacy
                  policy
                </label>
              </div>
            </div>
            <div className="authorization__button button-wrapper">
              <a className="button button_lg button_default" href="#">
                Continue
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
