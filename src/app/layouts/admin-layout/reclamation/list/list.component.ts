import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ReclamationFormComponent } from '../reclamation-form/reclamation-form.component';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private modalService: NgbModal, private toastService: ToastrService,private service: UserService) {}
public listReclamation = [];
  ngOnInit(): void {
    this.getListRecalamtion();
  }


  private getListRecalamtion(){
    this.service.getListReclamation().subscribe(res => {
      this.listReclamation = res['hydra:member'];
      this.listReclamation.forEach( elm => {
        let id = elm.compteid.slice(13, elm.compteid.length-1);
        this.service.getCompteById(id).subscribe(res => {
            elm.organisme = res;
        })
      })
    })
  }
 /*  openModal() {
    this.modalService.open(ReclamationFormComponent, {
      size: 'lg',
      backdrop: 'static',
    });
  } */
}


