import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import * as _ from 'lodash';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {
  SpellDetails;
  shown;
  cardData;
  spellsByLevel;
  hidden = [];
  selectedLevels = [];
  filterForm;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.api.get('http://localhost:3000/api/spells').subscribe((e: any) => {
      this.spellsByLevel = e.spellsByLevel;
      const { classes, sources, spell_schools } = e;
      this.cardData = { classes, sources, spell_schools };
    });

    this.filterForm = new FormGroup({
      class: new FormControl(''),
      name: new FormControl(''),
      specialization: new FormControl(''),
    });
  }

  ngOnInit() {}

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

  filterSpells() {
    const filters = { ...this.filterForm.value };
    let filterBody = {};
    if (filters.class) {
      filterBody.class = filters.class;
    }
    if (filters.name) {
      filterBody.name = filters.name
    }

    if (this.selectedLevels.length) {
      filterBody.levels = this.selectedLevels;
    }

    this.api.post('http://localhost:3000/api/spells/filter', filterBody).subscribe((e: any) => {
      this.spellsByLevel = e;
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
