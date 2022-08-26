import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link , useLocation} from "react-router-dom";
import {
  fbSignInInitiate,
  googleSignInInitiate,
  loginInitiate,
} from "../../../Redux/AuthReducer/action";
import "./Login.css";
import { LOGIN_SUCCESS} from '../../../Redux/AuthReducer/actionTypes'

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const location =useLocation()
  const comFrom = location.state?.from?.pathname || "/";

  const { email, password } = state;

  const { currentUser } = useSelector((state) => state.user);
  const isAuth = useSelector((state) => state.user.isAuth);

  console.log(isAuth)
  useEffect(() => {
    if (currentUser) {
      // navigate("/");
      navigate(comFrom, { replace: true})
      // console.log(currentUser)
      // localStorage.setItem("authKey",isAuth)
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate())
    .then((r)=>{
      if(r.type === LOGIN_SUCCESS){
        console.log(r)
        navigate(comFrom, { replace: true})
      }
    })
    console.log("Google sucess")
  };
  const handleFBSignIn = () => {
    dispatch(fbSignInInitiate())
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password))
    setState({ email: "", password: "" })
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div style={{background:"#f3f3f3",height:"850px"}}>

    <div style={{margin:'auto', textAlign:"center"}}>
      <div><img style={{width:"110px",marginTop:"40px"}} src="https://e7.pngegg.com/pngimages/777/943/png-clipart-logo-indeed-computer-icons-graphics-brand-nmax-logo-blue-text.png" alt="indeedimage111" /></div>

      <div id="logreg-forms">
        <div >
          <h4 >Ready to take the next step?</h4>
          <p>Create an account or sign in.</p>
          <p className="byCreating">By creating an account or logging in, you understand and agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies. You will receive marketing messages from Indeed and may opt out at any time by following the unsubscribe link in our messages, or as detailed in our terms.</p>
        </div>
        <form className="form-signin" onSubmit={handleSubmit}>
          {/* <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign in
          </h1> */}
          <div className="social-login" >
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <img className="socialButtonImg"  src="https://cdn-icons-png.flaticon.com/512/2965/2965278.png" alt="" />
              <span>
                <i className="fab fa-google-plus-g"></i> Continue with Google
              </span>
            </button>
            <button
              className="btn facebook-btn social-btn"
              type="button"
              onClick={handleFBSignIn}
            >
              <img className="socialButtonImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt="" />
              <span>
                <i className="fab fa-facebook-f"></i> Sign in with Facebook
              </span>
            </button>
          </div>
          <div className="orTagDiv">
            <hr style={{marginRight:"5px"}}/>
            <p>or</p>
            <hr style={{marginLeft:"3px"}}/> 

          </div>

          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fas fa-sign-in-alt"></i> Sign In
          </button>
          <hr />
          <p>Don't have an account</p>
          <Link to="/register">
            <button
              className="btn btn-primary btn-block1"
              type="button"
              id="btn-signup"
            >
              <i className="fas fa-user-plus"></i> Sign up New Account
            </button>
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
