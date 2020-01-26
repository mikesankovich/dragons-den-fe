import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.scss']
})
export class SpellCardComponent implements OnInit {
  @Input() spell: any;
  @Input() cardData: any;
  @Input() shown = false;
  constructor(private api: ApiService) {

  }

  ngOnInit() {
  }

  showSpell() {
    this.shown = !this.shown;
    this.api.post('api/spells', {id: this.spell.id}).subscribe((e: any) => {
      this.spell = e;
    });
  }

  spellLevelSuffix(level) {
    if (level >= 4) {
      return 'th';
    } if (level === 3) {
      return 'rd';
    } if (level === 2) {
      return 'nd';
    }
    return 'st';
  }
}
