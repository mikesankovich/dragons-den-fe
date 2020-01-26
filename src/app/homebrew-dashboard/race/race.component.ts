import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  race;
  constructor(private router: Router, private api: ApiService) {
    const url = router.url.split('/');
    const name = url[url.length - 1];
    const type = url[url.length - 2];
    this.api.get(`http://localhost:3000/api/homebrew?type=${type}&name=${name}`).subscribe((e: any) => {
      this.race = e;
    });
  }

  ngOnInit() {

  }

}
