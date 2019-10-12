import { resolve, reject } from 'q';

export class AuthService {

  isLoggedIn = false;

  isAuth(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(this.isLoggedIn);
      },1000)
    })
  }

  logIn(){
    this.isLoggedIn = true;
  }

  logOut(){
    this.isLoggedIn = false;
  }
}
