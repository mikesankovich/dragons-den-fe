import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  title;
  classDescription;
  creatingHeader;
  creatingDescription;
  classFeaturesHeading;
  quickBuildDescription;
  hitDice;
  avg;
  armor;
  weapons;
  tools;
  savingThrows;
  skills;
  equipment = [];
  headers = [];
  tableRows = [];
  spellCastingHeader;
  spellCastingDescription;
  constructor() { }

  ngOnInit() {
    this.title = 'Necromancer'
    this.classDescription = 'While some schools of magic teach their practitioners to weave magics with the essence of life, a Necromancer has learned to navigate the realm of death to acheive their goals. Often shunned or looked upon wearily by society, those who manipulate the threads of fate to acheive their goals are a valuable asset to those whose lives are drawn to the battlefield where fallen comrades and enemies alike rise once more to aid in battle.'
    this.creatingHeader = 'Creating a Necromancer';
    this.creatingDescription = 'A Necromancer is a caster who has devoted their lives to manipulating the twisting paths of death. A highly specialized class, what a Necromancer lacks in versatility they make up for in sheer potency. Their attacks wither the very flesh they strike, poison and decay become like water and air, and of course the corpses of even their enemies can be brought back to a stage of pseudo-life under the caster\'s thrall. But contrary to popular belief, not all Necromancers deal solely in death and the undead. Some have learned to twist the fabrics of life and death to heal and bolster their allies in battle. For what is a master of death if they cannot stop those they care about from dying?';
    this.classFeaturesHeading = 'Class Features';

    this.quickBuildDescription = 'You can make a necromancer quickly by following these suggestions. First, Charisma should be your highest ability score, followed by Constitution and Dexterity. Second, choose the charlatan background.';

    this.hitDice = 6;
    this.avg = Math.ceil((1 + this.hitDice) / 2);
    this.armor = 'Light Armor';
    this.weapons = 'Simple Weapons';

    this.tools = 'None';
    this.savingThrows = 'Charmisma, Constitution';
    this.skills = 'Choose two from Arcana, Deception, Intimidation, Medicine, Survival, and Religion';
    this.equipment = [
      '(a) A Staff or (b) Two Daggers',
      '(a) Leather Armor or (b) Padded Armor',
      '(a) A Dungeoneer\'s Pack or (b) an Explorer\'s Pack',
      'A Spellcasting Focus',
    ]

    this.headers = [
      'Level',
      'Proficiency Bonus',
      'Features',
      'Cantrips Known',
      'Spells Known',
      '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'
    ];

    this.tableRows = [
      { level: 1, proficiency: 2, features: 'Spellcasting, Life Tap', cantrips: 2, spells: 2, slots: [2] },
      { level: 2, proficiency: 2, features: 'Necromancer Occult', cantrips: 2, spells: 3, slots: [3] },
      { level: 3, proficiency: 2, features: 'Soul Harvest', cantrips: 2, spells: 4, slots: [4, 2] },
      { level: 4, proficiency: 2, features: 'Ability Score Improvement', cantrips: 3, spells: 5, slots: [4, 3] },
      { level: 5, proficiency: 3, features: 'Spontaneous Unburial', cantrips: 3, spells: 6, slots: [4, 3, 2] },
      { level: 6, proficiency: 3, features: 'Occult Feature', cantrips: 3, spells: 7, slots: [4, 3, 3] },
      { level: 7, proficiency: 3, features: 'Animate Major Undead', cantrips: 3, spells: 8, slots: [4, 3, 3, 1] },
      { level: 8, proficiency: 3, features: 'Ability Score Improvement', cantrips: 3, spells: 9, slots: [4, 3, 3, 2] },
      { level: 9, proficiency: 4, features: '--', cantrips: 3, spells: 10, slots: [4, 3, 3, 3, 1] },
      { level: 10, proficiency: 4, features: 'Occult Feature', cantrips: 3, spells: 11, slots: [4, 3, 3, 3, 2] },
      { level: 11, proficiency: 4, features: 'Animate Major Undead improvement', cantrips: 4, spells: 12, slots: [4, 3, 3, 3, 2, 1] },
      { level: 12, proficiency: 4, features: 'Ability Score Improvement', cantrips: 4, spells: 12, slots: [4, 3, 3, 3, 2, 1] },
      { level: 13, proficiency: 5, features: '--', cantrips: 4, spells: 13, slots: [4, 3, 3, 3, 2, 1, 1] },
      { level: 14, proficiency: 5, features: 'Occult feature, Ritualistic Unburial', cantrips: 4, spells: 13, slots: [4, 3, 3, 3, 2, 1, 1] },
      { level: 15, proficiency: 5, features: 'Animate Major Undead improvement', cantrips: 4, spells: 14, slots: [4, 3, 3, 3, 2, 1, 1, 1] },
      { level: 16, proficiency: 5, features: 'Ability Score Improvement', cantrips: 4, spells: 14, slots: [4, 3, 3, 3, 2, 1, 1, 1] },
      { level: 17, proficiency: 6, features: '--', cantrips: 4, spells: 15, slots: [4, 3, 3, 3, 2, 1, 1, 1, 1] },
      { level: 18, proficiency: 6, features: 'Macabre', cantrips: 4, spells: 15, slots: [4, 3, 3, 3, 2, 1, 1, 1, 1] },
      { level: 19, proficiency: 6, features: 'Ability Score Improvement', cantrips: 4, spells: 15, slots: [4, 3, 3, 3, 2, 2, 1, 1, 1] },
      { level: 20, proficiency: 6, features: 'Séance', cantrips: 4, spells: 15, slots: [4, 3, 3, 3, 2, 2, 2, 1, 1] },
    ]

    this.spellCastingDescription = 'You draw on the essence of life and death itself to fuel your spells.';
    this.cantripsDescription = 'At 1st level, you know 2 cantrips of your choice from the wizard spell list. You learn additional cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Necromancer table.';

    this.spellSlotDescription = 'The Necromancer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell false life and have a 1st-level and a 2nd-level spell slot available, you can cast false life using either slot.'

    this.spellsKnownDescription = 'You know two 1st-level spells of your choice from the wizard spell list. The Spells Known column of the Necromancer table shows when you learn more necromancer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. Additionally, when you gain a level in this class, you can choose one of the necromancer spells you know and replace it with another spell from the wizard spell list, which also must be of a level for which you have spell slots.'

    this.spellCastingAbility = 'Charisma is your spellcasting ability for your necromancer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a necromancer spell you cast and when making an attack roll with one.';
    this.spellSaveDC = '= 8 + your proficiency bonus + your Charisma modifier';
    this.spellAttackModifier = '= your proficiency bonus + your Charisma modifier';
  }

  cantripsDescription;
  spellSlotDescription;
  spellsKnownDescription;
  spellCastingAbility;
  spellSaveDC;
  spellAttackModifier;

  // your healing spells can affect undead, even if the spell says they cannot.

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
