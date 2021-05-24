import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reclamation-form',
  templateUrl: './reclamation-form.component.html',
  styleUrls: ['./reclamation-form.component.css'],
})
export class ReclamationFormComponent implements OnInit {
  public reclamationForm: FormGroup = new FormGroup({});
  public types = ['Demande de remboursement', 'Vol retarde ou annule', 'Autres'];

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.reclamationForm = this.formBuilder.group({
      type: new FormControl('', [Validators.required]),
      objet: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      file: new FormControl('')
    });
  }

  submit(){
    if(this.reclamationForm.valid){
      let reclamation: any ={};
      reclamation = this.reclamationForm.value;
      console.log('reclamation: ',reclamation);
    }

  }
}
