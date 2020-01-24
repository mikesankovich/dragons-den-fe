import { Component, OnInit } from '@angular/core';
import necromancer from './classes/necromancer.json';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  class;
  avg;
  constructor() { }

  ngOnInit() {
    this.class = necromancer;
    this.avg = Math.ceil((1 + this.class.hitDice) / 2); // hit dice avg

  }

  spellLevelSuffix(level) {
    if (level >= 4) {
      return `${level}th`;
    } if (level === 3) {
      return `${level}rd`;
    } if (level === 2) {
      return `${level}nd`;
    } if (level === 1) {
      return `${level}st`;
    }
  }
}
