import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';
import { doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {

user: User;
userId: string;
loading: boolean = false;

constructor(public dialog: MatDialogRef<DialogEditAddressComponent>, private firestore: Firestore){ }

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
