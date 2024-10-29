import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UserProfile } from '../../interfaces/user-profile';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, MatButtonModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent {
  user: UserProfile = {
    name: 'Eduardo',
    phone: '0424-5142978',
    email: 'mejiasavilaeduardo@gmail.com',
    cedula: '19591303',
    sells: [],
    role: 'admin',
    comission: 5000,
    tax: 0,
    image: 'https://i.ibb.co/jVLNSD1/Eduardo-Mejias-SF.png'
  }

}
