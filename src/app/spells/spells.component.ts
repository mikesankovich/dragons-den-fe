import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import * as _ from 'lodash';

import SpellDetails from './spells.json';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {
  SpellDetails;
  shown;
  cardData;
  spellsOriginal;
  spellsByLevel = [[],[],[],[],[],[],[],[],[],[]];
  hidden = [];
  selectedLevels = [];
  filterForm;
  constructor(private formBuilder: FormBuilder) {
    this.SpellDetails = _.cloneDeep(SpellDetails);
    this.spellsOriginal = _.cloneDeep(SpellDetails.spells);
    const { classes, sources, spell_schools } = SpellDetails;
    this.cardData = { classes, sources, spell_schools };
    this.getSpellsByLevel(this.spellsOriginal);

    this.filterForm = new FormGroup({
      class: new FormControl(''),
      name: new FormControl(''),
      specialization: new FormControl(''),
    });

    this.onChanges();
  }

  ngOnInit() {}

  onChanges() {
    this.filterForm.valueChanges.subscribe(val => {
      this.filterSpells(this.filterForm.value);
    });
  }

  selectLevel(level) {
    const idx = this.selectedLevels.indexOf(level);
    if (idx === -1) {
      this.selectedLevels.push(level);
    } else {
      this.selectedLevels.splice(idx, 1);
    }
  }

  showLevel(level) {
    const idx = this.hidden.indexOf(level);
    if (idx === -1) {
      this.hidden.push(level);
    } else {
      this.hidden.splice(idx, 1);
    }
  }

  filterSpells(filters) {
    let filteredSpells = _.cloneDeep(SpellDetails.spells);
    if (filters.class) {
      const classSpellIds = this.SpellDetails.classes.find(e => e.id === filters.class).spells_ids;
      filteredSpells = filteredSpells.filter(e => classSpellIds.includes(e.id));
    }
    // if (filters.specialization) {
    //   const classSpellIds = this.SpellDetails.specializations.find(e => e.id === filters.specialization).spells_ids;
    //   filteredSpells = filteredSpells.filter(e => classSpellIds.includes(e.id));
    // }
    if (filters.name) {
      filteredSpells = filteredSpells.filter(e => e.name.toLowerCase().includes(filters.name.toLowerCase()));
    }
    if (filters.levels) {
      // console.log(filters.levels)
      // filteredSpells = filteredSpells.filter(e => e.name.toLowerCase().includes(filters.name.toLowerCase()));
    }
    this.getSpellsByLevel(filteredSpells);
  }

  getSpellsByLevel(spells) {
    this.spellsByLevel = [[],[],[],[],[],[],[],[],[],[]];
    spells.forEach(spell => {
      this.spellsByLevel[spell.level].push(spell);
    });
    this.spellsByLevel.forEach((spellLevel) => {
      spellLevel.sort((a, b) => a.name > b.name ? 1 : -1)
    });
  }

  spellLevelSuffix(level) {
    if (level >= 4) {
      return `${level}th Level Spells`;
    } if (level === 3) {
      return `${level}rd Level Spells`;
    } if (level === 2) {
      return `${level}nd Level Spells`;
    } if (level === 1) {
      return `${level}st Level Spells`;
    }
    return 'Cantrips'
  }
}
