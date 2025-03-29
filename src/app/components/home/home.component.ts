import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from "../hero/hero.component";
import { WorkComponent } from "../work/work.component";
import { ClientsComponent } from "../clients/clients.component";
import { HireComponent } from "../hire/hire.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, WorkComponent, ClientsComponent, HireComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
