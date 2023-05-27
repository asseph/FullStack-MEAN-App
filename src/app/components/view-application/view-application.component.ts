import { LawnService } from './../../services/lawn.service';
import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/Application';
import { Lawn } from '../../models/Lawn';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  private selectedApplication: Application;
  private lawn: Lawn;

  constructor(private lawnService: LawnService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.lawn = {
      _id: '',
      title: '',
      address: '',
      size: 0,
      applications: []
    };

    this.route.params.subscribe(params => {
      this.lawnService.getLawn(params['id']).subscribe(res => {
        this.lawn = res;
      });
    });
  }

  public deleteApplication(application: Application) {
    const index = this.lawn.applications.indexOf(application);
    this.lawn.applications.splice(index, 1);
    this.lawnService.updateLawn(this.lawn).subscribe(res => {
      this.lawn = res;
    });
  }

  public selectApplication(application: Application) {
    this.selectedApplication = application;
  }

  public onUpdateLawn(lawn: Lawn) {
    this.lawnService.getLawn(lawn._id).subscribe(res => {
      this.lawn = res;
    });
  }
}
