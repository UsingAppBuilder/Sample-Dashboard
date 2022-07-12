import { Component, OnInit } from '@angular/core';
import { DashboardDataFinalService } from '../services/dashboard-data-final.service';

@Component({
  selector: 'app-finished-dashboard',
  templateUrl: './finished-dashboard.component.html',
  styleUrls: ['./finished-dashboard.component.scss']
})
export class FinishedDashboardComponent implements OnInit {
  public groupVisible = false;
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
