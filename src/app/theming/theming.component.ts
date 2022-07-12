import { Component, OnInit } from '@angular/core';
import { DashboardDataFinalService } from '../services/dashboard-data-final.service';

@Component({
  selector: 'app-theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.scss']
})
export class ThemingComponent implements OnInit {
  public groupVisible4 = false;
  public dashboardDataFinalGridData: any = null;
  public dashboardDataFinalChartData: any = null;

  constructor(
    private dashboardDataFinalService: DashboardDataFinalService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dashboardDataFinalService.getData('Grid Data').subscribe(data => this.dashboardDataFinalGridData = data);
    this.dashboardDataFinalService.getData('Chart Data').subscribe(data => this.dashboardDataFinalChartData = data);
  }
}
