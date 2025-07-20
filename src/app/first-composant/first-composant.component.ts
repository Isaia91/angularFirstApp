import { Component, Input } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-first-composant',
  templateUrl: './first-composant.component.html',
  styleUrls: ['./first-composant.component.css'],
  imports: [NgIf]
})
export class FirstComposantComponent {
  x: string = "je mange";

  @Input() firstitem: string = "";
  @Input() secconditem: string = "";

  xx(): string {
    return "une pomme";
  }
}
