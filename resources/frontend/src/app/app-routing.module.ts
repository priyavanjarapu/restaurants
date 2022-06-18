import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestuarantCreateComponent} from "./restuarant-create/restuarant-create.component";
import {RestuarantListComponent} from "./restuarant-list/restuarant-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/restaurants/list', pathMatch: 'full'},
  {path: 'restaurants/add', component: RestuarantCreateComponent},
  {path: 'restaurants/list', component: RestuarantListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
