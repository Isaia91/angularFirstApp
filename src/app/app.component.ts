import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComposantComponent } from './first-composant/first-composant.component';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComposantComponent, FormsModule, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // ✅ correction ici
})
export class AppComponent {
  title = 'firstApp';
  chaine: string = "je bois de";
  nom: string = "isaia";

  constructor(private renderer: Renderer2) {
    this.setBodyBackground();
  }

  setBodyBackground(): void {
    const bgGradient = this.getRandomGradient();
    this.renderer.setStyle(document.body, 'background', bgGradient);
  }

  xfunction() {
    return "l'eau";
  }

  aCocher = true;

  toCheck() {
    return true;
  }

  displayAlert(msg: string) {
    window.alert(msg);
  }

  attributSource1 = "Mangue";

  afficherParagraphe: boolean = false;

  estAffichable(): boolean {
    return this.afficherParagraphe;
  }

  monTableau = [
    { nom1: 'John', nom2: 'Doe' },
    { nom1: 'Tony', nom2: 'Stark' },
    { nom1: 'Matt', nom2: 'Murdock' }
  ];

  bgGradient: string = '';

  getRandomGradient(): string {
    // Génère 2 couleurs aléatoires
    const color1 = this.getRandomColor();
    const color2 = this.getRandomColor();

    return `linear-gradient(135deg, ${color1}, ${color2})`;
  }

  getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
