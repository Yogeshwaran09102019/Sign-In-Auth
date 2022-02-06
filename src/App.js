import "./styles.css";
import socialMediaAuth from "./auth"
import { googleProvider,gitProvider,yahooProvider } from "./authMethod";
import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";

export default function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [resultName,setResult]=useState("");
  const [resultImage,setImage]=useState("");
  const handleClick= async(provider)=>{
    console.log(isLoggedIn)
    const res=await socialMediaAuth(provider);
    console.log(res);
    setResult(res.auth.currentUser.displayName);
    setImage(res.auth.currentUser.photoURL);
    console.log(res.auth.currentUser.photoURL);
    setIsLoggedIn(true);
  }

  const [email,changeMail]=useState("");
  const [password,changePass]=useState("");

  function handleMail(event){
    changeMail(event.target.value);
    event.preventDefault();
  }

  
  function handlePass(event){
    changePass(event.target.value);
    event.preventDefault();
  }

  function emailPass(event){
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setIsLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Invalid MailId or Password")
      });
  }
function handleSignOut(){
  setResult("");
  setImage("");
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  setIsLoggedIn(false);
}).catch((error) => {
  // An error happened.
});
}
  if (isLoggedIn===false)
  {
  return (
    <div className="login-page">
      <div className="bg">
        <main>
          <div className="login-block">
            <h1>Eduonetech</h1>
            <h1>Sign In</h1>

            <form action="#">
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-envelope ti-email"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your email address"
                    onChange={handleMail}
                  ></input>
                  <hr />
                 </div>
              </div>

              <hr className="hr-xs" />

              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-lock ti-unlock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your password"
                    onChange={handlePass}
                  ></input>
                  <hr />
                  </div>
              </div>

              <button className="btn btn-primary btn-block" onClick={emailPass}>
                Sign In
              </button>

              <div className="login-footer">
                <h6>Or Sign In with</h6>
                <ul className="social-icons">
                  <li>
                    <button
                      className="google"
                      onClick={() => handleClick(googleProvider)}
                    >
                      <i className="fa fa-google"></i>
                    </button>
                  </li>
                  <li>
                    <button className="github"  onClick={() => handleClick(gitProvider)}>
                      <i className="fa fa-github"></i>
                    </button>
                  </li>
                  <li>
                    <button className="linkedin"  onClick={() => handleClick(yahooProvider)}>
                      <i className="fa fa-yahoo"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
  }
  else
  return (
    <div className="login">
      <h1 className="welcome">Welcome {resultName}</h1>
      <hr></hr>
      <img src={resultImage} alt="Profile Picture"></img>
      <hr></hr>
    <button className="btn btn-primary btn-block out" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
