import { LawnService } from './../../services/lawn.service';
import { Component, OnInit } from '@angular/core';
import { Lawn } from '../../models/Lawn';

@Component({
  selector: 'app-view-lawn',
  templateUrl: './view-lawn.component.html',
  styleUrls: ['./view-lawn.component.css']
})
export class ViewLawnComponent implements OnInit {

  private lawns: Lawn[] = [];
  private selectedLawn: Lawn;

  constructor(private lawnService: LawnService) { }

  ngOnInit() {
    this.loadLawns();
  }

  public loadLawns() {
    this.lawnService.getAllLawn().subscribe(res => {
      this.lawns = res;
      console.log(this.lawns);
    });
  }

  public selectLawn(lawn: Lawn) {
    this.selectedLawn = lawn;
  }

  public deleteLawn(lawn: Lawn) {
    const index = this.lawns.indexOf(lawn);
    this.lawnService.deleteLawn(lawn).subscribe(res => {
      this.lawns.splice(index, 1);
    });
  }

  public onAddLawn(newLawn) {
    this.lawns = this.lawns.concat(newLawn);
  }

  public onUpdateLawn(lawn) {
    this.loadLawns();
  }
}
