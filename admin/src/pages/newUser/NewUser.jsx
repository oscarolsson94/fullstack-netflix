import "./newUser.css";
import { useContext, useState } from "react";
import { createUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

export default function NewUser() {
  const [user, setUser] = useState(null);

  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New User</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
