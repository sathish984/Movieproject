import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlackAdamdetailsComponent } from './Components/dashboard/black-adamdetails/black-adamdetails.component';
import { Dashboard1Component } from './Components/dashboard/dashboard1/dashboard1.component';
import { FlashComponent } from './Components/dashboard/flash/flash.component';
import { AntmanComponent } from './Components/dashboard/antman/antman.component';
import { DoctorstrangeComponent } from './Components/dashboard/doctorstrange/doctorstrange.component';
import { Extraction2Component } from './Components/dashboard/extraction2/extraction2.component';
import { ThereddoorComponent } from './Components/dashboard/thereddoor/thereddoor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SpiderverseComponent } from './Components/dashboard/spiderverse/spiderverse.component';
import { MissionimpossibleComponent } from './Components/dashboard/missionimpossible/missionimpossible.component';
import { RiseofbeastComponent } from './Components/dashboard/riseofbeast/riseofbeast.component';
import { GuardiansComponent } from './Components/dashboard/guardians/guardians.component';
import { JohnwickComponent } from './Components/dashboard/johnwick/johnwick.component';
import { BeetleComponent } from './Components/dashboard/beetle/beetle.component';
import { MarvelsComponent } from './Components/dashboard/marvels/marvels.component';
import { KnightzodiacComponent } from './Components/dashboard/knightzodiac/knightzodiac.component';
import { SearchbarComponent } from './Components/searchbar/searchbar.component';
import { ViewcustomersComponent } from './viewcustomers/viewcustomers.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TermsandCondtionComponent } from './termsand-condtion/termsand-condtion.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MoonfallComponent } from './Components/dashboard/moonfall/moonfall.component';
import { ThorComponent } from './Components/dashboard/thor/thor.component';
import { NorthmanComponent } from './Components/dashboard/northman/northman.component';
import { WindowComponent } from './Components/dashboard/window/window.component';
import { FeelingsComponent } from './Components/dashboard/feelings/feelings.component';
import { ForeverComponent } from './Components/dashboard/forever/forever.component';
import { AvatarComponent } from './Components/dashboard/avatar/avatar.component';
import { LostCityComponent } from './Components/dashboard/lost-city/lost-city.component';
import { GrayManComponent } from './Components/dashboard/gray-man/gray-man.component';
import { AdamprojectComponent } from './Components/dashboard/adamproject/adamproject.component';
import { AmsterdamComponent } from './Components/dashboard/amsterdam/amsterdam.component';
import { DayShiftComponent } from './Components/dashboard/day-shift/day-shift.component';
import { WatcherComponent } from './Components/dashboard/watcher/watcher.component';
import { HolmesComponent } from './Components/dashboard/holmes/holmes.component';
import { AdminmoviesearchComponent } from './adminmoviesearch/adminmoviesearch.component';
import { ActionComponent } from './Genre/action/action.component';
import { AdventureComponent } from './Genre/adventure/adventure.component';
import { SuperheroComponent } from './Genre/superhero/superhero.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BlackAdamdetailsComponent,
    Dashboard1Component,
    FlashComponent,
    AntmanComponent,
    DoctorstrangeComponent,
    Extraction2Component,
    ThereddoorComponent,
    SpiderverseComponent,
    MissionimpossibleComponent,
    RiseofbeastComponent,
    GuardiansComponent,
    JohnwickComponent,
    BeetleComponent,
    MarvelsComponent,
    KnightzodiacComponent,
    SearchbarComponent,
    ViewcustomersComponent,

    LoginComponent,
    RegisterComponent,
    TermsandCondtionComponent,
    AdminregisterComponent,
    AdminloginComponent,
    MovieslistComponent,
    MoonfallComponent,
    ThorComponent,
    NorthmanComponent,
    WindowComponent,
    FeelingsComponent,
    ForeverComponent,
    AvatarComponent,
    LostCityComponent,
    GrayManComponent,
    AdamprojectComponent,
    AmsterdamComponent,
    DayShiftComponent,
    WatcherComponent,
    HolmesComponent,
    AdminmoviesearchComponent,
    ActionComponent,
    AdventureComponent,
    SuperheroComponent,
    LogComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
