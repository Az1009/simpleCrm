import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/class/user.class';

@Component({
  selector: 'app-dialog-edit-adress',
  templateUrl: './dialog-edit-adress.component.html',
  styleUrls: ['./dialog-edit-adress.component.scss']
})
export class DialogEditAdressComponent implements OnInit {
  // v30. user hier anlegen
  // für test new user
  user:User = new User();
  userId: string;
  loading = false;
// v30 componente einfügen
// v33 JSon in firestore updaten, nach datenänderung 1. firestore einbinden, 
  constructor(public dialogRef: MatDialogRef<DialogEditAdressComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }
  saveUser(){
    // v33 JSon in firestore updaten 2. um auf die db zuzugreifen
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
