import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styles: [`
  `]
})
export class RoundComponent implements OnInit {

  rounds = [];
  round = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    for (let i = 1; i <= 18; i += 1) {
      this.rounds.push(i);
    }
  }

  ngOnInit() {

    this.round = this.getRoundFromUrl();
  }

  getRoundFromUrl() {
    let round = '1';
    try {
      [, round] = this.router.url.match(/([0-9]{1,})\/matches$/);
    } finally {
      return +round;
    }
  }

  onRoundChanged(newRound) {
    this.router.navigate([`./${newRound}/matches`], { relativeTo: this.route });

  }
}
