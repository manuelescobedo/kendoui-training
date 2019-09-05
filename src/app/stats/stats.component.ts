import { Component, OnDestroy, OnInit } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { IStat } from './stat';
import { StatsService } from './stats.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styles: [`
  `]
})
export class StatsComponent implements OnInit, OnDestroy {

  stats: Array<IStat> = [];
  
  onFetchGeneralStats: Subscription = null;

  view = null;
  sort: Array<SortDescriptor> = [{
    field: 'score',
    dir: 'desc'
  }, {
    field: 'diff', dir: 'desc'
  }];

  constructor(
    private _statsService: StatsService
  ) {

  }

  ngOnInit() {
    this.onFetchGeneralStats = this._statsService.fetchGeneralStats().subscribe(
      (stats) => {
        this.setStats(stats)

        this.setView();
      }
    );
  }


  onSortChange(sort: Array<SortDescriptor>) {
    this.sort = sort;

    this.setView();
  }
  

  setStats(stats) {
    this.stats = stats;
  }

  setView() {
    this.view = {
      data: orderBy(this.stats, this.sort),
      total: this.stats.length
    }
  }

  ngOnDestroy () {
    if (this.onFetchGeneralStats) this.onFetchGeneralStats.unsubscribe();
  }
}
