import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.scss']
})
export class SpellCardComponent implements OnInit {
  @Input() spell = {};
  @Input() cardData;
  @Input() shown = false;
  constructor() {

  }

  ngOnInit() {
  }

  showSpell() {
    this.shown = !this.shown;
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

  spellSchool(id) {
    return this.cardData.spell_schools.find(item => id === item.id).name.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
  }

  spellClasses(id) {
    const found = this.cardData.classes.filter(e => e.spells_ids.includes(id));
    return found.map(e => e.name.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    )).join(', ');
  }

  spellSources(rels) {
    return rels.map(e => {
      const source = this.cardData.sources.find(s => s.id === e.source_id);
      return `${source.name} page ${e.page}`
    }).join(', ');
  }
}
