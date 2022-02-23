import { PhoneService } from './../../services/phone.service';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { CustomResponse } from 'src/app/core/custom-response';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  myPhones$!: Observable<CustomResponse>;
  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.getAllPhonePhones();
  }

  getAllPhonePhones() {
    this.myPhones$ = this.phoneService.getAllPhonesList();
  }
}
