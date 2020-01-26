import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  class;
  avg;
  constructor(private api: ApiService, private router: Router) {
    const url = router.url.split('/');
    const name = url[url.length - 1];
    const type = url[url.length - 2];
    this.api.get(`api/homebrew?type=${type}&name=${name}`).subscribe((e: any) => {
      this.class = e;
      this.avg = Math.ceil((1 + this.class.hitDice) / 2); // hit dice avg
    });
  }

  ngOnInit() {

  }

  isArray(item) {
    return Array.isArray(item);
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
