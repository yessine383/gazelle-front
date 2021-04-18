import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'app/services/client.service';
import { ContratService } from 'app/services/contrat.service';

@Component({
  selector: 'app-comptes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clientList: any
  client: any;
  clientById: any
  contractApis: [];
  contractList: Array<any> = [];
  modalOption: NgbModalOptions = {};
  modalReference: NgbModalRef;


  constructor(
    private clientservice: ClientService,
    private modalService: NgbModal,
    private contratService: ContratService,
    private http: HttpClient,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.clientservice.getAllClients().subscribe(data => {
      this.clientList = data["hydra:member"];
      console.log(this.clientList)
      console.log(data)
    })
  }

  saveClient() {
    this.clientservice.addClient(this.client).subscribe((data) => { console.log(data) }, (error) => { console.log(error) })
  }

  getClientInfo(content, id) {
    this.contractList = []
    this.clientservice.getClientsById(id).subscribe((data) => {

      this.clientById = data
      this.contractApis = this.clientById["contrats"]
      this.contractApis.forEach(element => {
        this.http.get("http://localhost:8000" + element).subscribe(data => {

          this.contractList.push(data)
          console.log(this.contractList)

        })
      });

    })
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalOption.size = "xl";
    this.modalService.open(content, this.modalOption);
  }


  redirectToAddClient() {
    this.router.navigateByUrl("/comptes/add")

  }

}
