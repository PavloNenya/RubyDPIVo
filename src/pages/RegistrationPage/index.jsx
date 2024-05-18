import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../store/context.jsx";

import { saveToken } from "../../services/tokenService.js";

import { register } from "../../api/auth";

import logo from "../../assets/img/logo.svg";

import "./index.scss";

const RegistrationPage = () => {
  const { isAuth, setIsAuth, setButtonActive } = useContext(AppContext);
  const navigate = useNavigate();

  if (isAuth) navigate("/");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const ref = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (ref.current.checked) {
      try {
        const data = await register(formData);
        const token = data?.accessToken;

        if (token) {
          saveToken(data.accessToken);
          setIsAuth(true);
          navigate("/");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <section className="page__authorization authorization">
      <div className="authorization__container">
        <div className="authorization__body">
          <form className="authorization__form form" onSubmit={handleSubmit}>
            <div className="form__title-block">
              <img className="form__logo logo" src={logo} alt="logo.svg" />
              <h1 className="form__title title-2">Registration</h1>
            </div>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="email"
                className="form__input"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form__agree checkbox">
              <input type="checkbox" className="checkbox__index" id="agree" ref={ref} />
              <label className="checkbox__label" htmlFor="agree">
                I have read and agree to the terms &amp; conotions and privacy policy
              </label>
            </div>
            <div className="form__button button-wrapper">
              <button className="button button_lg button_default" type="submit" onClick={() => setButtonActive(false)}>
                Register
                <span className="icon-arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
