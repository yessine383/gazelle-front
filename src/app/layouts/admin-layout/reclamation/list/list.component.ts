import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ReclamationFormComponent } from '../reclamation-form/reclamation-form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private modalService: NgbModal, private toastService: ToastrService) {}

  ngOnInit(): void {}

  openModal() {
    this.modalService.open(ReclamationFormComponent, {
      size: 'lg',
      backdrop: 'static',
    });
  }
}


