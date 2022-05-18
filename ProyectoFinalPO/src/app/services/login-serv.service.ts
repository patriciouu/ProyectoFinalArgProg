import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '@firebase/auth';
import { first } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServService {
  public user!: User;

  constructor(public fireAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
      const result = await this.fireAuth.signInWithEmailAndPassword(email, password);
      return result;
  }

  async logout() {
    await this.fireAuth.signOut();
  }

  async getCurrentUser() {
    return this.fireAuth.authState.pipe(first()).toPromise();
  }


}

