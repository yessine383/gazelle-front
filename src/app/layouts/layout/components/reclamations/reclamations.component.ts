import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReclamationFormComponent } from 'app/layouts/admin-layout/reclamation/reclamation-form/reclamation-form.component';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css'],
})
export class ReclamationsComponent implements OnInit {
  reclamations: any = [];
  constructor(private service: UserService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getListReclamation();
  }

  public openReclamationForm() {
    this.modalService.open(ReclamationFormComponent, {
      size: 'lg',
      backdrop: 'static',
    });
  }

  private getListReclamation() {
    this.service.getListReclamation().subscribe(res => {
      this.reclamations = res['hydra:member'];
      console.log('res recalamtion: ', res['hydra:member']);
    });
  }
}
