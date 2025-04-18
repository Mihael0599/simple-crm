import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';
import { doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent {

user: User; //speichert den User aus Firebase. Es kommt aus user-detail.componnent weil ich mir von dort die Daten aus Firebase hole
loading: boolean = false;
birthDate: Date;
userId: string;

constructor(public dialog: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore){ }



async saveUser(){
  this.loading = true;
    const userRef = doc(this.firestore, 'users', this.userId);
    const userSnap = await updateDoc(userRef, this.user.toJSON())
    .then(() => {
      this.loading = false;
      this.dialog.close(this.user);
    });
}

}
