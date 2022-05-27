import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { RedSocial } from 'src/app/model/red-social';
import { LoginServService } from 'src/app/services/login-serv.service';
import { RedSocialServService } from 'src/app/services/red-social-serv.service';

@Component({
  selector: 'app-logoap',
  templateUrl: './logoap.component.html',
  styleUrls: ['./logoap.component.css']
})
export class LogoapComponent implements OnInit {

  public isLogged = false;
  public user$: Observable<any> = this.authServ.fireAuth.user;
  


  redesList: RedSocial[] = [];
  redSoc: RedSocial = new RedSocial;



  constructor(private redService: RedSocialServService, private authServ: LoginServService) { }

  async ngOnInit() {
    this.redService.returnRedes().subscribe(
      data => this.redesList = data
    );
  }

  onEdit(red: RedSocial) {
    const redSoc = red;
  }

  editRed(red: RedSocial) {
    this.redService.editRedes(red.redSocialId, red).subscribe(
      data => this.redService.returnRedes().subscribe(
        response => this.redesList = response
      )
    )
  }

  async onLogout() {
    try {
      await this.authServ.logout();
      // ROUTER????
    } catch (error) {
      console.log(error);
    }
  }

}
