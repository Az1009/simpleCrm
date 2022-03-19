import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/class/user.class';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

    //vid 25 3. id aus der url
    userId= '';

    // v26. 4 User object erstellt
    user:User = new User();


  //vid 25 1. id aus der url activateRoute
  // v 26 1. user aus der db auslesen
  // v 29. 1 MatDialog service
  constructor(private route:ActivatedRoute, 
    private firestore: AngularFirestore, 
    public dialog: MatDialog) { }

  ngOnInit(): void {
      //vid 25 2.id aus der url

    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
      console.log('get id', this.userId)
      // v26 3. user aus der db auslesen funktion aufrufen
      this.getUser();
  })
  }
  // v26. 2. user aus der db auslesen getuser funk erstellen
  getUser(){
    if(this.userId){
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user:any)=>{
      // vid.26 5. neuen user in das json schreiben
      this.user= new User(user);
      console.log('retrived user',this.user)
    });
  }
  }
  //v29. 2.funktion editMenu definieren
  editMenu(){
    // v30. um in dialogEditadress darauf zugreifen zu klnne (let dialog+DialogInst)
  let dialog= this.dialog.open(DialogEditAdressComponent);
  //v32 mit new User (this.user.toJSON erstellen wir eine kopie von unseren nutzer)
  dialog.componentInstance.user= new User(this.user.toJSON());
  //v33 2.update firestore userId übergeben
  dialog.componentInstance.userId= this.userId;


  }
  //// v29. funkt editUser definieren
  editUserDetails(){
   let dialog= this.dialog.open(DialogEditUserComponent);
   //v32 mit new User (this.user.toJSON erstellen wir eine kopie von unseren nutzer)
    dialog.componentInstance.user= new User(this.user.toJSON());
    //v33 2.update firestore userId übergeben
    dialog.componentInstance.userId= this.userId;


  }
}

