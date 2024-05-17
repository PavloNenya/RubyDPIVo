import "./index.scss";

const SignUpPage = () => {
  return (
    <section className="page__authorization authorization">
      <div className="authorization__container">
        <div className="authorization__body">
          <div className="authorization__maincontent">
            <div className="authorization__header">
              <img className="authorization__logo" src="img/icons/logo.svg" alt="logo.svg" />
              <h2 className="authorization__title title-2">Now let&apos;s register you in the sneakpeek club.</h2>
            </div>
            <div className="form">
              <input type="text" className="form__input" name="text-input" placeholder="E-mail*" />
              <div className="form__input-wrapper">
                <input type="text" className="authorization__input" name="text-input" placeholder="Name*" />
                <input type="text" className="authorization__input" name="text-input" placeholder="Second name*" />
              </div>
              <input type="password" className="form__input" name="text-input" placeholder="Password*" />
              <input type="date" className="form__input" name="text-input" placeholder="Birthday Date*" />
            </div>
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
                  I have read and agree to the terms &amp; conotions and privacy policy
                </label>
              </div>
            </div>
            <div className="authorization__button">
              <a className="button button_lg button_default button_authorization" href="#">
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

export default SignUpPage;
