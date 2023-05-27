import { LawnService } from './../../services/lawn.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Lawn } from '../../models/Lawn';
import { Application } from '../../models/Application';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {

  @Output() updateLawn: EventEmitter<Lawn> = new EventEmitter<Lawn>();
  @Input() lawn: Lawn;
  private newApplication: Application;

  constructor(private lawnService: LawnService) { }

  ngOnInit() {
    this.newApplication = {
      name: '',
      date: new Date(),
      amount: 0
    };
  }

  public onSubmit() {
    this.lawn.applications.push(this.newApplication);
    this.lawnService.updateLawn(this.lawn).subscribe(res => {
      this.updateLawn.emit(res);
    });
  }
}
