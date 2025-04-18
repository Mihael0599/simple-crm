import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../models/user.class';
import { FormsModule } from '@angular/forms'
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {

  constructor(public dialog: MatDialogRef<DialogAddUserComponent>) { }

  user: User = new User;
  birthDate: Date;
  firestore: Firestore = inject(Firestore);
  loading: boolean = false;

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    const usersCollection = collection(this.firestore, 'users');
    this.loading = true;
    addDoc(usersCollection, this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialog.close();
      })
      .catch((error) => {
        console.error('Fehler beim Speichern des Users:', error);
      });
  }


}
