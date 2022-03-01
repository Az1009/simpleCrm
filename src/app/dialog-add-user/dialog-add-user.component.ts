import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/class/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user= new User();
  birthDate: Date;
  loading= false;



  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }
  saveUser(){
    //this.user.birthDate= this.birthDate.getTime();
    this.user.birthDate= this.birthDate.getTime();
    console.log('current User:', this.user)
this.loading =true;
    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result:any)=>{
      //ladebalken
      this.loading= false;
      this.dialogRef.close();
      console.log('adding user finished', result)

    });
  }

}
