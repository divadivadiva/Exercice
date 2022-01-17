import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.methodeFinal();
  }

  Arbres: Arbre[] = [
    { id: 'boX1', x: 8, y: -6 },
    { id: 'boX2', x: 6, y: 10 },
    { id: 'boX3', x: 4, y: 5 },
  ];
  Enfants: Enfant[] = [
    { id: 'Kid1', x: 8, y: 8 },
    { id: 'Kid2', x: 2, y: 7 },
    { id: 'Kid3', x: -2, y: 1 },
    { id: 'Kid4', x: -5, y: -7 },
  ];
  showResult = true;
  finalResult = [];

  calculDistance(enfant: Enfant, arbre: Arbre) {
    let distanceCarre = (enfant.x - arbre.x) ** 2 + (enfant.y - arbre.y) ** 2;
    return Math.sqrt(distanceCarre);
  }

  methodeFinal() {
    this.Enfants.forEach((enfant: any) => {
      let plusProcheArbre = '';
      let plusProcheDistance = null;
      this.Arbres.forEach((arbre) => {
        const distance = this.calculDistance(enfant, arbre);

        if (plusProcheDistance == null) {
          plusProcheDistance = distance;
          plusProcheArbre = arbre.id;
        } else if (plusProcheDistance > distance) {
          plusProcheDistance = distance;
          plusProcheArbre = arbre.id;
        }
      });
      let resultat = {
        enfant: enfant.id,
        arbre: plusProcheArbre,
      };
      this.finalResult.push(resultat);
      console.log('resultat : ', this.finalResult);
    });
  }
}
export interface Arbre {
  id: string;
  x: number;
  y: number;
}
export interface Enfant {
  id: string;
  x: number;
  y: number;
}
