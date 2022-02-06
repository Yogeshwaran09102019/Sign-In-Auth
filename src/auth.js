import firebase from "./firebase";
import { signInWithPopup } from "firebase/auth";

const socialMediaAuth = (provider) => {
    return signInWithPopup(firebase,provider)
    .then((res) => {
      console.log(res.user);
      return res.user;
    })
    .catch((er) => {
      console.log(er);
      return er;
    });
};

export default socialMediaAuth;
