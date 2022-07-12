import { Component, OnInit } from '@angular/core';
import { DashboardDataFinalService } from '../services/dashboard-data-final.service';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {
  public groupVisible1 = false;
  public dashboardDataFinalGridData2: any = null;
  public dashboardDataFinalChartData: any = null;

  constructor(
    private dashboardDataFinalService: DashboardDataFinalService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dashboardDataFinalService.getData('Grid Data 2').subscribe(data => this.dashboardDataFinalGridData2 = data);
    this.dashboardDataFinalService.getData('Chart Data').subscribe(data => this.dashboardDataFinalChartData = data);
  }
}
