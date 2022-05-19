import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginServService } from 'src/app/services/login-serv.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authServ: LoginServService, private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(6)]]
      }
    )
  }

  ngOnInit(): void {
  }

  get Email() {
    return this.loginForm.get('email')
  }

  get Password() {
    return this.loginForm.get('password')
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
    const user = await this.authServ.login(email, password);
    } catch (error) {
      console.log(error)
    }
  }

}
