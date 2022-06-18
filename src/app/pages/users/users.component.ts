// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Observable, Subscription } from 'rxjs';
// import { User } from 'src/app/models/character.model';
// import {usersService} from '../../services/character.service';
// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.scss']
// })
// export class UsersComponent implements OnInit, OnDestroy {
//   users: User[] | undefined;
//   loading$: Observable<boolean> | undefined
//   usersSubscription: Subscription | undefined;
//   users$: Observable<User[]> | undefined;

//   constructor(private usersService: usersService) { }

//   ngOnInit(): void {
//     this.usersSubscription = this.usersService.getUsers().subscribe((users: User[])=> {
//       this.users = users;
//     });
//     // this.loading$ = this.loadingService.getLoadingState();

//     this.users$ = this.usersService.getUsers();
//   }
//   ngOnDestroy(): void {
//     this.usersSubscription?.unsubscribe();
//   }

// }
// // Divi veidi kā iegūt datus no servera subscribe/async pipe