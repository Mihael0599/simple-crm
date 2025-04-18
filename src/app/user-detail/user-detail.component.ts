import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

userId: string = '';
user: User = new User();

constructor(public dialog: MatDialog, private route: ActivatedRoute, private firestore: Firestore){  }

ngOnInit(): void{
  this.route.paramMap.subscribe(paramMap => {
    this.userId = paramMap.get('id'); //Weil in app-routing die url /user/:id ist und somit kann ich das auslessen
    this.getUser();
});
}

async getUser(){
  const userRef = doc(this.firestore, 'users', this.userId);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data();
  this.user = userData && new User(userData);
}

editAddressMenu(){
 const dialog =  this.dialog.open(DialogEditAddressComponent);
 dialog.componentInstance.user = new User(this.user.toJSON()); //Somit kann ich die User aus Firebase and die componentnte übergeben, und mit toJSON wird mein objekt in JSON umgewandelt als kopie
 dialog.componentInstance.userId = this.userId; 

 dialog.afterClosed().subscribe((updatedUser: User) => {
  if (updatedUser) {
    this.user = updatedUser;
  }
});
}

editUserDetail(){
  const dialog = this.dialog.open(DialogEditUserComponent);
  dialog.componentInstance.user = new User(this.user.toJSON());
  dialog.componentInstance.userId = this.userId; 
  dialog.afterClosed().subscribe((updatedUser: User) => {
    if (updatedUser) {
      this.user = updatedUser;
    }
  });
}

}



