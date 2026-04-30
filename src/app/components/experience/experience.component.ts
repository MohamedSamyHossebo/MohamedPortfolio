import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiencesDate = new Date();
  currentYear = this.experiencesDate.getFullYear();

  getDuration(startDateString: string): string {
    const startDate = new Date(startDateString);
    const endDate = new Date();
    
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months += 1; // Include the starting month

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let durationParts = [];
    if (years > 0) {
      durationParts.push(years === 1 ? '1 yr' : `${years} yrs`);
    }
    if (remainingMonths > 0) {
      durationParts.push(remainingMonths === 1 ? '1 mo' : `${remainingMonths} mos`);
    }

    return durationParts.join(' ');
  }
}
