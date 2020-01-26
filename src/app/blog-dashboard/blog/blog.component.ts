import { Component, OnInit } from '@angular/core';
import blog from './blog.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog = {}
  constructor() { }

  ngOnInit() {
    this.blog = blog;
  }

}
