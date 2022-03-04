import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
// Array um die Userdaten in die Tabelle zu schreiben
allUsers=[];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {
    
   }

  ngOnInit(): void {

    // firestore abonieren Daten anzeigen und in daas array allUsers einfügen
    this.firestore
    .collection('users')
    // Vid 20 id herausfinden db {}
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes:any)=>{
      console.log('Recived changes from DB', changes );
      this.allUsers= changes;
    });
  }
  openDialog(){
    this.dialog.open(DialogAddUserComponent);

  }
}
