import { LawnService } from './../../services/lawn.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Application } from '../../models/Application';
import { Lawn } from '../../models/Lawn';

@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})
export class EditApplicationComponent implements OnInit {

  @Input() application: Application;
  @Input() lawn: Lawn;
  @Output() updateLawn: EventEmitter<Lawn> = new EventEmitter<Lawn>();

  constructor(private lawnService: LawnService) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.lawn.applications.filter(a => a._id === this.application._id)[0] = this.application;
    this.lawnService.updateLawn(this.lawn).subscribe(res => {
      this.updateLawn.emit(res);
    });
  }

  public updateDate(event: string) {
    const dateParts = event.split('-');
    this.application.date = new Date(+dateParts[0], (+dateParts[1]) - 1, +dateParts[2], 0, 0, 0, 0);
  }

}
