import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    timer(0, 3000)
      .subscribe( () => {
        this.userService.getUsers()
          .subscribe(users => this.users = users);
      });
  }

}
