import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ContractService } from 'app/services/contract.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  compteId;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private contractService: ContractService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          if (params.id) {
            this.compteId = params.id;
          }
        });
    this.form = this.formBuilder.group({
      libelle: [''],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    let data = this.form.value;
    data['compte_id'] = parseInt(this.compteId);
    this.contractService.addContract(data).subscribe((data) => {
      console.log('data', data)
      if (data) {
        this.form.reset();
        this.toastr.success("Contrat ajouté avec succès");
      }
    });
  }

}
