import { Component, OnInit, OnDestroy, Input, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoundService } from '../../round.service';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { process, State } from '@progress/kendo-data-query';
import { GridComponent } from '@progress/kendo-angular-grid';
import { IMatch } from './match';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-matches',
  templateUrl: './matches-list.component.html',
  styles: [`
  `]
})
export class MatchesListComponent implements OnInit, OnDestroy {
  round = 1;

  @ViewChild(GridComponent) grid;

  gridState: State = {};
  view = null;
  onDocumentClickSubscriptor = null;

  formGroup = null;
  currentMatch = null;
  editedRowIndex = -1;

  routeSubscriber: Subscription = null;

  constructor(
    private _roundService: RoundService,
    private renderer: Renderer2,
    private route: ActivatedRoute
  ) {

    this.onDocumentClickSubscriptor = this.renderer.listen('document', 'click', e => this.onDocumentClick(e))
  }

  onDocumentClick(e) {
    if (!e.target.matches('#round-matches tbody *')) {
      this.saveChanges();
    }
  }

  closeEditor() {
    this.grid.closeRow(this.editedRowIndex);

    this.formGroup = null;
    this.currentMatch = null;
    this.editedRowIndex = -1;
  }

  ngOnDestroy() {
    this.onDocumentClickSubscriptor();
    if (this.routeSubscriber) this.routeSubscriber.unsubscribe();
  }

  ngOnInit() {
    this.routeSubscriber = this.route.paramMap.subscribe(
      (params) => {
        this.round = +(params.get('id'));
        this.view = this._roundService.pipe(
          map(data => process(data, this.gridState))
        );
        this._roundService.fetchRoundMatches(this.round);
      }
    )

  }


  saveChanges() {
    if (this.formGroup) {
      const match = {
        ...this.currentMatch, ...this.formGroup.value
      };

      this._roundService.updateMatchScore(match.id, match);
      this.closeEditor();
    }
  }

  cellClickHandler({ isEdited, dataItem, rowIndex }) {
    if (isEdited || (this.formGroup && !this.formGroup.valid)) return;

    this.saveChanges();

    this.formGroup = this._createFormGroup(dataItem);
    this.currentMatch = dataItem;
    this.editedRowIndex = rowIndex;

    this.grid.editRow(rowIndex, this.formGroup);
  }

  private _createFormGroup(dataItem) {
    const group = new FormGroup({
      localScore: new FormControl(dataItem.localScore, Validators.compose([
        Validators.min(0)
      ])),
      visitorScore: new FormControl(dataItem.visitorScore, Validators.compose([
        Validators.min(0)
      ]))
    })
    return group;
  }
}
