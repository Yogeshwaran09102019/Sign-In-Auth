import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();
export const gitProvider = new GithubAuthProvider();
export const yahooProvider = new OAuthProvider('yahoo.com');
