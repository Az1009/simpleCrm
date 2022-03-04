import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/class/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  // v31. 2.user hier anlegen und ladefunktion 
  user:User;
  userId: string;
  birthDate:Date;
  loading = false;

  //v31. 4 dialog einfügen +impor tieren

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }
  // v31. saveUser
  saveUser(){

      // v33 JSon in firestore updaten 2. um auf die db zuzugreifen
      // ladebalken
      this.loading = true;
      this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(()=>{
        this.loading = false;
        this.dialogRef.close();

      });
  
  
  
    }
  

  }


