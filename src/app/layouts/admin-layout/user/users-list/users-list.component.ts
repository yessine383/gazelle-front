import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  public users: any[] = [];
  public display: boolean = true;
  searchText: string = null;
  constructor(private userService: UserService, private modalService: NgbModal, private toastService: ToastrService) {}

  ngOnInit(): void {
    this.getListUserByAgence('1');
  }

  private getListUserByAgence(id: String) {
    this.subscription.add(
      this.userService.getListUserByAgence(id).subscribe(users => {
        this.users = users['hydra:member'];
        console.log(users['hydra:member'][0]);
      })
    );
  }

  togglePassword(index) {
    let showDiv = document.getElementById('input-pass-' + index).classList;
    let hiddenDiv = document.getElementById('input-mask-' + index).classList;
    if (showDiv.contains('hidden') || hiddenDiv.contains('hidden')) {
      showDiv.toggle('hidden');
      hiddenDiv.toggle('hidden');
    }
  }

  openAddForm() {
    this.modalService.open(UserFormComponent, {
      size: 'lg',
      backdrop: 'static',
    });
  }

  openUpdateForm(user) {
    const ref = this.modalService.open(UserFormComponent, {
      size: 'lg',
      backdrop: 'static',
    });
    ref.componentInstance.user = user;
  }

  deleteUser(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then(result => {
      if (result.value) {
        this.userService.deleteUser(id).subscribe(user => {
          Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
          console.log('deleted user: ', user);
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
