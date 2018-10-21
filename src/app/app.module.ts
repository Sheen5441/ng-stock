import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { StockManageComponent } from './components/stock/stock-manage/stock-manage.component';
import { StarsComponent } from './components/stars/stars.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './components/stock/stock-form/stock-form.component';

const routeConfig: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock', component: StockManageComponent},
  {path: 'stock/:id', component: StockFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    MenuComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
