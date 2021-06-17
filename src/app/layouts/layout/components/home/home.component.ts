import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../service/booking.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public intervale = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public bookingForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,private service: UserService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.bookingForm = this.formBuilder.group({
      B_LOCATION_1: new FormControl('', [Validators.required]),
      B_LOCATION_2: new FormControl('', [Validators.required]),
      B_DATE_1: new FormControl('', [Validators.required]),
      B_DATE_2: new FormControl('', [Validators.required]),
      ADTPAX: new FormControl('', [Validators.required]),
      ENFANTPAX: new FormControl('', [Validators.required]),
    });
  }

  public submit() {
    if (this.bookingForm.value){
      let booking = this.bookingForm.value;
      this.service.searchForBooking(booking).subscribe(res => {
        console.log('response: ',res);
      })
    } 
  }
}
