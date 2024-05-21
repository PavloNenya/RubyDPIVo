import { useContext, useEffect, useState } from "react";
import "./index.scss";
import { getOldProfile, updateProfile } from "../../api/profile";
import { AppContext } from "../../store/context";

const UserProfile = () => {
  const { user, setUser } = useContext(AppContext);
  const [updateUser, setUpdateUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getOldProfile()
      .then((data) => {
        setUser(data);
        setUpdateUser(data);
      })
      .catch(() => setUser({}));
  }, [setUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdateUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveUpdatedData = () => {
    updateProfile(user.id, updateUser)
      .then((data) => {
        console.log(data);
        setUser(data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUpdatedData();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__body">
          <h1 className="profile__title title-3">User Profile</h1>
          {!isEditing ? (
            <div className="profile__details">
              <div className="profile__wrapper">
                <p>
                  <strong>Name:</strong> {user?.name}
                </p>
                <p>
                  <strong>Surname:</strong> {user?.surname}
                </p>
                <p>
                  <strong>Phone Number:</strong> {user?.phone_number}
                </p>
                <p>
                  <strong>Country:</strong> {user?.country}
                </p>
                <p>
                  <strong>State:</strong> {user?.state}
                </p>
                <p>
                  <strong>City:</strong> {user?.city}
                </p>
                <p>
                  <strong>Street:</strong> {user?.street}
                </p>
                <p>
                  <strong>Apartment:</strong> {user?.apartment}
                </p>
              </div>
              <button
                className="button button_lg button_default"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
          ) : (
            <form className="profile__form" onSubmit={handleSubmit}>
              <div className="profile__form-group">
                <label className="profile__label title-5" htmlFor="name">
                  Name:
                </label>
                <input
                  className="profile__input"
                  type="text"
                  id="name"
                  name="name"
                  value={updateUser.name}
                  onChange={handleChange}
                />
              </div>
              <div className="profile__form-group">
                <label className="profile__label title-5" htmlFor="surname">
                  Surname:
                </label>
                <input
                  className="profile__input"
                  type="text"
                  id="surname"
                  name="surname"
                  value={updateUser.surname}
                  onChange={handleChange}
                />
              </div>
              <div className="profile__form-group">
                <label
                  className="profile__label title-5"
                  htmlFor="phone_number"
                >
                  Phone Number:
                </label>
                <input
                  className="profile__input"
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  value={updateUser.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className="profile__form-group">
                <label className="profile__label title-5" htmlFor="country">
                  Country:
                </label>
                <input
                  className="profile__input"
                  type="text"
                  id="country"
                  name="country"
                  value={updateUser.country}
                  onChange={handleChange}
                />
              </div>
              <div className="profile__form-group">
                <label className="profile__label title-5" htmlFor="state">
                  State:
                </label>
                <input
                  className="profile__input"
                  type="text"
                  id="state"
                  name="state"
                  value={updateUser.state}
                  onChange={handleChange}
                />
              </div>
              <div className="profile__form-group">
                <label className="profile__label title-5" htmlFor="city">
                  City:
                </label>
                <input
                  className="profile__input"
                  type="text"
                  id="city"
                  name="city"
                  value={updateUser.city}
                  onChange={handleChange}
                />
              </div>
              <div className="profile__form-group">
                <label className="profile__label title-5" htmlFor="street">
                  Street:
                </label>
                <input
                  className="profile__input"
                  type="text"
                  id="street"
                  name="street"
                  value={updateUser.street}
                  onChange={handleChange}
                />
              </div>
              <div className="profile__form-group">
                <label className="profile__label title-5" htmlFor="apartment">
                  Apartment:
                </label>
                <input
                  className="profile__input"
                  type="text"
                  id="apartment"
                  name="apartment"
                  value={updateUser.apartment}
                  onChange={handleChange}
                />
              </div>
              <div className="form__button button-wrapper">
                <button
                  className="button button_lg button_default"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
