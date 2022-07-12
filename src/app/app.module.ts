import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinishedDashboardComponent } from './finished-dashboard/finished-dashboard.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxCardModule, IgxGridModule } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './master-page/master-page.component';
import { Containers1Component } from './containers1/containers1.component';
import { Containers2Component } from './containers2/containers2.component';
import { AddingContentComponent } from './adding-content/adding-content.component';
import { ContainersWithContentComponent } from './containers-with-content/containers-with-content.component';
import { AddingAssetsComponent } from './adding-assets/adding-assets.component';
import { ThemingComponent } from './theming/theming.component';

@NgModule({
  declarations: [
    AppComponent,
    FinishedDashboardComponent,
    MasterPageComponent,
    Containers1Component,
    Containers2Component,
    AddingContentComponent,
    ContainersWithContentComponent,
    AddingAssetsComponent,
    ThemingComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxListModule,
    IgxCardModule,
    IgxGridModule,
    IgxCategoryChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
