import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAddressComponent } from './dialog-edit-address.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Config } from '../config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, MatInputModule, BrowserAnimationsModule, FormsModule, provideFirebaseApp(() => initializeApp(Config)),
        provideFirestore(() => getFirestore())],
      declarations: [DialogEditAddressComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: () => { } }
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
