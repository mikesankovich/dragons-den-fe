import { Component, OnInit } from '@angular/core';
import SpellDetails from './spells.json';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {
  SpellDetails;
  shown;
  spells;
  constructor() {
    this.SpellDetails = SpellDetails;
  }

  ngOnInit() {
    console.log(this.SpellDetails)
    this.spells = this.SpellDetails.spells;
  }

  showSpell(id) {
    if (this.shown === id) {
      this.shown = null;
    } else {
      this.shown = id;
    }
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
    return this.SpellDetails.spell_schools.find(item => id === item.id).name.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
  }

  spellClasses(id) {
    const found = this.SpellDetails.klasses.filter(e => e.spells_ids.includes(id));
    return found.map(e => e.name.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    )).join(', ');
  }

  spellSources(rels) {
    return rels.map(e => {
      const source = this.SpellDetails.sources.find(s => s.id === e.source_id);
      return `${source.name} page ${e.page}`
    });
  }
}
