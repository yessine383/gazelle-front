import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../Model/User';
import { UserService } from '../../../../services/user.service';
import { OnChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() user: User;
  public userForm: FormGroup = new FormGroup({});

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cd.detectChanges();
    if (this.user) {
      this.updateForm(this.user);
    }
  }

  ngOnInit(): void {
    this.buildForm();
    if (this.user) {
      this.updateForm(this.user);
    }

  }

  private buildForm() {
    this.userForm = this.formBuilder.group(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
        agency: new FormControl('', [Validators.required]),
        role: new FormControl('', [Validators.required]),
      },
      { validator: this.passwordConfirming }
    );
  }

  public updateForm(user: User) {
    this.userForm.patchValue({
      email: user.email,
      password: user.password,
      agency: user.agenceId,
      role: user.roles[0]
    });

  }

  submit() {
    if (this.userForm.valid) {
      let user = { ...this.userForm.value };
      delete user.confirmPassword;
      if (this.user) {
        /*     this.userService.updateUser(this.user).subscribe( user => {
              this.userService.userList.next(user);
            }) */
        console.log(user);

      } else {
        this.userService.addUser(user).subscribe(
          user => {
            this.toastrService.success("Ajout d'un utilisateur avec succès");
            this.activeModal.close();
          },
          error => {
            this.toastrService.error('Service indisponible');
            console.error(error);
          }
        );
      }

    }
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }
}
