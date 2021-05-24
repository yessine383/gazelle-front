import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-balance-form',
  templateUrl: './balance-form.component.html',
  styleUrls: ['./balance-form.component.css'],
})
export class BalanceFormComponent implements OnInit {
  public balanceForm: FormGroup = new FormGroup({});

  constructor(private router: Router, public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.balanceForm = this.formBuilder.group({
      clientId: new FormControl('', [Validators.required]),
      solde: new FormControl(''),
      numBulletin: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
      montant: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      validateur: new FormControl(''),
    });
  }
}
