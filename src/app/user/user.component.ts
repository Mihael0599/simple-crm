import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  allUsers$: Observable<any[]>;
  user: User = new User();

constructor(public dialog: MatDialog, private firestore: Firestore) { }

ngOnInit() {
  const usersRef = collection(this.firestore, 'users');
  this.allUsers$ = collectionData(usersRef, { idField: 'id' });
}
openDetails(id: string){
  console.log('Ausgewählte ID:', id);
}
 openDialog(){
  this.dialog.open(DialogAddUserComponent)
 }
}
