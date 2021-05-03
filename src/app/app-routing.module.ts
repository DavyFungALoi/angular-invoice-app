import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceOverviewScreenComponent } from './Screens/invoice-overview-screen/invoice-overview-screen.component';

const routes: Routes = [
  { path: '', component: InvoiceOverviewScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
