import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../../Redux/AuthReducer/action";
import {useNavigate} from 'react-router-dom'

const Logout = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
    // Reviewed for: fw16_443 - you can remove the key from local storage
    localStorage.setItem("authKey",false)
    navigate('/')
   
  };
  return (
    <div>
      <h2>Welcome to Our Site</h2>
      <br />
      <button className="btn btn-danger" onClick={handleAuth}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
