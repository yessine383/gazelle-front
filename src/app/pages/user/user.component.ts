import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-cmp',
  moduleId: module.id,
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public users: any[] = [];
  public display: boolean = true;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getListUserByAgence('1');
  }

  private getListUserByAgence(id: String) {
    this.subscription.add(
      this.userService.getListUserByAgence(id).subscribe(users => {
        console.log(users);

        this.users = users;
      })
    );
  }

  togglePassword(index){
      console.log(index);
      
    let eyeDisplay = document.getElementById('pass-'+index).classList;
    let eyeMask = document.getElementById('mask-'+index).classList;
    let inputMask = document.getElementById('input-mask-' + index).classList;
    let inputDisplay = document.getElementById('input-pass-' + index).classList;
    if (eyeMask.contains('hidden')) {
      inputMask.remove('hidden');
      eyeMask.remove('hidden');
      eyeDisplay.add('hidden');
      inputDisplay.add('hidden');
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
