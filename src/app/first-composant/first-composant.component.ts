import {Component, Input} from '@angular/core';
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-first-composant',
  imports: [],
  templateUrl: './first-composant.component.html',
  styleUrl: './first-composant.component.css'
})
export class FirstComposantComponent {
  x:string = "je mange";

  @Input() firstitem:string = "";
  @Input() secconditem:string = "";

  xx (): string {
    return "une pomme";
  }



}
