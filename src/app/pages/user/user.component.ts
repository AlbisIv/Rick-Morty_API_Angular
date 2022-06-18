// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { User } from 'src/app/models/character.model';
// import {usersService} from '../../services/character.service';

// // sākumā visi @, mainīgie, konstruktors hooki un metodes. 
// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.scss']
// })
// export class UserComponent implements OnInit {

//   user$: Observable<User> | undefined

//   constructor(
//     private route: ActivatedRoute,
//     private usersService: usersService,
//     // private router: Router
//     ) { }

//   ngOnInit(): void {
//     this.route.params.subscribe((params: any) => {
//       const id = params['id'];
//       this.user$ = this.usersService.getUser(id);
//     })

//       // this.router.navigate(['/users'], { 
//       //   queryParamsHandling: 'merge'
//       // });
//   }

// }
