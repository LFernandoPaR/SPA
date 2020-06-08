import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/Shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeModalComponent } from './components/heroe-modal/heroe-modal.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HeroeModalComponent]
})
export class AppModule { }
