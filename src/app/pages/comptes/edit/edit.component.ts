import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientService } from 'app/services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  SERVER_URL = "http://localhost:8000/comptes";
  form: FormGroup;
  compteId;

  constructor(
    private formBuilder: FormBuilder,
    private clientservice: ClientService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          if (params.id) {
            this.compteId = params.id;
            this.getClientById(params.id);
          }
        });

    this.form = this.formBuilder.group({
      type: [''],
      officeId: [''],
      devise: [''],
      organisme: [''],
      matricule: [''],
      proprietaire: [''],
      responsable: [''],
      adresse: [''],
      // tel: [''],
      //fax: [''],
      actif: [''],
      //url: [''],
    });
  }

  getClientById(id) {
    this.clientservice.getClientsById(id).subscribe((data: any) => {
      console.log('data', data)
      if (data) {
        const {
          type,
          officeId,
          devise,
          organisme,
          matriculeFiscale,
          proprietaire,
          responsable,
          adresse,
          telephone,
          actif
        } = data;

        this.form.setValue({
          type,
          officeId,
          devise,
          organisme,
          matricule: matriculeFiscale,
          proprietaire,
          responsable,
          adresse,
          // tel: telephone[0],
          actif
        });
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;
    const actif = data['actif'];
    delete data['actif'];
    data['actif'] = actif === "false" ? false : true;
    this.clientservice.updateClient(this.compteId, data).subscribe((data) => {
      if (data) {
        this.toastr.success("Compte modifié avec succès");
      }
      console.log('data', data)
    });
  }

}
