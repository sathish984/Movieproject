import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './Components/dashboard/dashboard1/dashboard1.component';
import { BlackAdamdetailsComponent } from './Components/dashboard/black-adamdetails/black-adamdetails.component';
import { FlashComponent } from './Components/dashboard/flash/flash.component';
import { AntmanComponent } from './Components/dashboard/antman/antman.component';
import { DoctorstrangeComponent } from './Components/dashboard/doctorstrange/doctorstrange.component';
import { Extraction2Component } from './Components/dashboard/extraction2/extraction2.component';
import { ThereddoorComponent } from './Components/dashboard/thereddoor/thereddoor.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
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
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
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

const routes: Routes = [
  {
    path:'Dashboard1',
    component:Dashboard1Component,
  },
  {
    path:'Dashboard',
    component:DashboardComponent,
  },
  {
     path:'blackadam',
     component:BlackAdamdetailsComponent,
  },
  {
    path:'flash',
    component:FlashComponent,
  },
  {
    path:'antman',
    component:AntmanComponent,
  },
  {
    path:'doctorstrange',
    component:DoctorstrangeComponent,
  },
  {
    path:'extraction2',
    component:Extraction2Component,
  },
  {
    path:'reddoor',
    component:ThereddoorComponent,
  },
  {
    path:'appmodule',
    component:AppComponent,
  },
  {
    path:'spiderverse',
    component:SpiderverseComponent,
  },
  {
    path:'impossible',
    component:MissionimpossibleComponent,
  },
  {
    path:'rise',
    component:RiseofbeastComponent,
  },
  {
    path:'guardians',
    component:GuardiansComponent,
  },
  {
    path:'johnwick',
    component:JohnwickComponent,
  },
  {
    path:'beetle',
    component:BeetleComponent,
  },
  {
    path:'marvels',
    component:MarvelsComponent,
  },
  {
    path:'knight',
    component:KnightzodiacComponent,
  },
  {
    path:'zodiac',
    component:KnightzodiacComponent,
  },
  {
     path:'searchbar',
     component:SearchbarComponent,
  },
  {
    path:'viewcustomer',
    component:ViewcustomersComponent,
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'terms',
    component:TermsandCondtionComponent,
  },
  {
     path:'adminlogin',
     component:AdminloginComponent,
  },
  {
     path:'adminregister',
     component:AdminregisterComponent,
  },
  {
    path:'movielist',
    component:MovieslistComponent,
  },
  {
    path:'moonfall',
    component:MoonfallComponent,
  },
  {
    path:'thor',
    component:ThorComponent
  },
  {
    path:'northman',
    component:NorthmanComponent,
  },
  {
    path:'window',
    component:WindowComponent,
  },
  {
    path:'feelings',
    component:FeelingsComponent,
  },
  {
    path:'forever',
    component:ForeverComponent,
  },
  {
    path:'avatar',
    component:AvatarComponent,
  },
  {
    path:'lostcity',
    component:LostCityComponent,
  },
  {
    path:'grayman',
    component:GrayManComponent,
  },
  {
    path:'adam',
    component:AdamprojectComponent,
  },
  {
    path:'amster',
    component:AmsterdamComponent,
  },
  {
    path:'dayshift',
    component:DayShiftComponent,
  },
  {
    path:'watcher',
    component:WatcherComponent,
  },
  {
    path:'holmes',
    component:HolmesComponent,
  },
  {
    path:'adminsearch',
    component:AdminmoviesearchComponent,
  },
  {
    path:'action',
    component:ActionComponent,
  },
  {
     path:'adventure',
     component:AdventureComponent,
  },
  {
    path:'superhero',
    component:SuperheroComponent,
  },
  {
    path:'log',
    component:LogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
