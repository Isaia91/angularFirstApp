import { Component } from '@angular/core';

@Component({
  selector: 'app-second-composant',
  templateUrl: './second-composant.component.html',
  styleUrls: ['./second-composant.component.css']
})
export class SecondComposantComponent {
  title = 'Bonjour voici le second composant !';
  counter = 0;

  incrementer() {
    this.counter++;
  }
}
