import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardDataFinal } from './dashboard-data-final';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataFinalService {
  public getData(tableName: string): Observable<any> {
    return of(DashboardDataFinal[tableName]);
  }
}
