import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceOverviewScreenComponent } from './Screens/invoice-overview-screen/invoice-overview-screen.component';
import { InvoiceScreenComponent } from './Screens/invoice-screen/invoice-screen.component';
const routes: Routes = [
  { path: '', component: InvoiceOverviewScreenComponent },
  { path: 'invoice/:id', component: InvoiceScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
