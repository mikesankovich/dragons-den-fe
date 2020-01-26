import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-allocation',
  templateUrl: './point-allocation.component.html',
  styleUrls: ['./point-allocation.component.scss']
})
export class PointAllocationComponent implements OnInit {
  points = {
    STR: 6,
    DEX: 6,
    CON: 6,
    INT: 6,
    WIS: 6,
    CHA: 6,
  }
  constructor() { }

  ngOnInit() {
  }

  get pointsAvailable() {
    const total = 72;
    const returnValue = {
      used: 0,
      available: 36,
    };
    Object.keys(this.points).forEach(key => {
      returnValue.used += this.points[key] - 6;
      returnValue.available -= this.points[key] - 6;
    });
    return returnValue;
  }

  adjust(type, stat) {
    if (type === '+' && this.pointsAvailable.available > 0) {
      if (this.points[stat] < 16) {
        this.points[stat] += 1
      }
    }
    if (type === '-' && this.pointsAvailable.used > 0) {
      if (this.points[stat] > 6) {
        this.points[stat] -= 1
      }
    }
  }

}
