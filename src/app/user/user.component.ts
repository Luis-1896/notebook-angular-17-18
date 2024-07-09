import {
  Component,
  Input,
  computed,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };
// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
    selector: 'app-user',
    // standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    // imports: [CardComponent]
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
  // @Input({ required: true }) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };
  @Input({ required: true }) user!: User;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })

  @Input({ required: true }) selected!: boolean;

  get imagePath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
}
