import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';



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
