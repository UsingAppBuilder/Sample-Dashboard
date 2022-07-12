import { Component, OnInit } from '@angular/core';
import { DashboardDataFinalService } from '../services/dashboard-data-final.service';

@Component({
  selector: 'app-adding-assets',
  templateUrl: './adding-assets.component.html',
  styleUrls: ['./adding-assets.component.scss']
})
export class AddingAssetsComponent implements OnInit {
  public groupVisible3 = false;
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
