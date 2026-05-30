import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from "../hero/hero.component";
import { WorkComponent } from "../work/work.component";
import { ClientsComponent } from "../clients/clients.component";
import { HireComponent } from "../hire/hire.component";
import { ExperienceComponent } from "../experience/experience.component";
import { TechStackComponent } from "../tech-stack/tech-stack.component";

@Component({
    selector: 'app-home',
    imports: [HeaderComponent, HeroComponent, WorkComponent, ClientsComponent, HireComponent, ExperienceComponent, TechStackComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
