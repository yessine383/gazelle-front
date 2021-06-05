import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../service/booking.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css'],
})
export class ActualitesComponent implements OnInit {

  public actualites: any = [];
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getListActualite();
  }

  private getListActualite() {
    this.service.getListActualite().subscribe(res => {
      this.actualites = res['hydra:member'];
      console.log('actualite: ',this.actualites);
    });
  }
}
