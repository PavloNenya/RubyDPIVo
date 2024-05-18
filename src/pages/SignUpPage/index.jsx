import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../store/context.jsx";

import { saveToken } from "../../services/tokenService.js";

import { login } from "../../api/auth";

import logo from "../../assets/img/logo.svg";

import "./index.scss";

const SignUpPage = () => {
  const { isAuth, setIsAuth, setButtonActive } = useContext(AppContext);
  const navigate = useNavigate();

  if (isAuth) navigate("/");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(formData);
      const token = data?.accessToken;
      if (token) {
        saveToken(token);
        setIsAuth(true);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <section className="page__authorization authorization">
      <div className="authorization__container">
        <div className="authorization__body">
          <form className="authorization__form form" onSubmit={handleSubmit}>
            <div className="form__title-block">
              <img className="form__logo logo" src={logo} alt="logo.svg" />
              <h1 className="form__title title-2">Login</h1>
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
                type="password"
                className="form__input"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form__button button-wrapper">
              <button className="button button_lg button_default" type="submit" onClick={() => setButtonActive(false)}>
                Login
                <span className="icon-arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
