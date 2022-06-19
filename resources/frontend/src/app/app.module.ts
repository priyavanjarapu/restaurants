import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RestuarantListComponent} from './restuarant-list/restuarant-list.component';
import {RestuarantCreateComponent} from './restuarant-create/restuarant-create.component';
import {RestuarantDetailsComponent} from './restuarant-details/restuarant-details.component';
import {RestuarantDeleteComponent} from './restuarant-delete/restuarant-delete.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RestuarantListComponent,
    RestuarantCreateComponent,
    RestuarantDetailsComponent,
    RestuarantDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
