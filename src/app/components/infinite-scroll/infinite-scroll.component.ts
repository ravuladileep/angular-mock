import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {
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

  /**
   * @ function : onScroll
   * @ Purpose  : once the data reached(scrolled) to end it will execute
   * @ version  : 1.0.1
   * @ author   : dileep_ravula
   */

  onScroll(event): void{
    this.appService.getPosts().subscribe((data) => {
      this.dataSource = [...this.dataSource, ...data];
    });
  }

}
