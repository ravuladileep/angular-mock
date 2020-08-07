import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {
  public dataSource;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.appService.getPosts().subscribe((data) => {
      this.dataSource = data;
    });
  }

}
