import { Component, OnInit } from '@angular/core';
import { RedSocial } from 'src/app/model/red-social';
import { RedSocialServService } from 'src/app/services/red-social-serv.service';

@Component({
  selector: 'app-logoap',
  templateUrl: './logoap.component.html',
  styleUrls: ['./logoap.component.css']
})
export class LogoapComponent implements OnInit {

  redesList: RedSocial[] = [];
  redSoc: RedSocial = new RedSocial;

  constructor(private redService: RedSocialServService) { }

  ngOnInit(): void {
    this.redService.returnRedes().subscribe(
      data => this.redesList = data
    )
  }

  onEdit(red: RedSocial) {
    const redSoc = red;
    return console.log(red)
  }

  editRed(red: RedSocial) {
    this.redService.editRedes(red.redSocialId, red).subscribe(
      data => this.redService.returnRedes().subscribe(
        response => this.redesList = response
      )
    )
  }




}
