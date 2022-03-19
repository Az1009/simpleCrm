import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { DialogEditAdressComponent } from './dialog-edit-adress.component';

describe('DialogEditAdressComponent', () => {
  let component: DialogEditAdressComponent;
  let fixture: ComponentFixture<DialogEditAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      /*1. Fehlermeldung im test NullInjectorError: No provider for MatDialogRef! */
      imports: [AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule , MatDialogModule],
      /* 2. fehler trtitt weiter auf*/
      declarations: [ DialogEditAdressComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }]
        
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
