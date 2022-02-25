import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/class/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

//Klasse verknüpfen
  user= new User();

  constructor(public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogAddUserComponent);

  }
}
