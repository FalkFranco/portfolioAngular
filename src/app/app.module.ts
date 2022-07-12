import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ModalComponent } from './components/modal/modal.component';
import { SocialComponent } from './components/social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegacionComponent,
    AboutMeComponent,
    SkillsComponent,
    ArrowComponent,
    ProyectosComponent,
    ProyectoComponent,
    FooterComponent,
    ContactoComponent,
    ModalComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
