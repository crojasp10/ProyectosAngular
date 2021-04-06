import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VehiculoModifComponent } from './vehiculo-modif/vehiculo-modif.component';
import { VehiculoCalculosComponent } from './vehiculo-calculos/vehiculo-calculos.component';
import { PokeApiComponent } from './poke-api/poke-api.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TareasComponent } from './tareas/tareas.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    VehiculoModifComponent,
    VehiculoCalculosComponent,
    PokeApiComponent,
    TareasComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
