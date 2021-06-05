import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css'],
})
export class ReclamationsComponent implements OnInit {
  reclamations: any = [];
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getListReclamation();
    
  }

  private getListReclamation() {
    this.service.getListReclamation().subscribe(res => {
      this.reclamations = res['hydra:member'];
      console.log('res recalamtion: ', res['hydra:member']);
    });
  }
}
