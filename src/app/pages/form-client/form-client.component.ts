import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClientService } from 'app/services/client.service';
@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {
  SERVER_URL = "http://localhost:8000/comptes";
  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      compte: ['']
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('type', this.uploadForm.get('type').value);
    formData.append('office', this.uploadForm.get('office').value);
    formData.append('devise', this.uploadForm.get('devise').value);
    formData.append('organisme', this.uploadForm.get('organisme').value);
    formData.append('matricule', this.uploadForm.get('matricule').value);
    formData.append('proprietaire', this.uploadForm.get('proprietaire').value);
    formData.append('responsable', this.uploadForm.get('responsable').value);
    formData.append('adresse', this.uploadForm.get('adresse').value);
    formData.append('tel1', this.uploadForm.get('tel1').value);
    formData.append('tel2', this.uploadForm.get('tel2').value);
    formData.append('fax', this.uploadForm.get('fax').value);
    formData.append('email', this.uploadForm.get('email').value);
    formData.append('password', this.uploadForm.get('password').value);
    formData.append('actif', this.uploadForm.get('actif').value);
    formData.append('url', this.uploadForm.get('url').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
