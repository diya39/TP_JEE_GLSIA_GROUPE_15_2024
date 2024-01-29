import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { DepotClientComponent } from './depot-client/depot-client.component';
import { InformationsClientComponent } from './informations-client/informations-client.component';
import { RetraitClientComponent } from './retrait-client/retrait-client.component';
import { TransactionsClientComponent } from './transactions-client/transactions-client.component';
import { VirementClientComponent } from './virement-client/virement-client.component';

const routes: Routes = [
  {path: '', component: CompteClientComponent },
  {path: 'depot-client', component: DepotClientComponent},
  {path: 'informations-client', component: InformationsClientComponent},
  {path: 'retrait-client', component: RetraitClientComponent},
  {path: 'transactions-client', component: TransactionsClientComponent},
  {path: 'virement-client', component: VirementClientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
