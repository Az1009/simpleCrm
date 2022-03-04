import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/class/user.class';

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
  constructor(private route:ActivatedRoute, private firestore: AngularFirestore) { }

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
  // vid27. 2. funktion erstellen
openAddressDialog(){

}

}
