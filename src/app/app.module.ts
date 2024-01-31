import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { DepotClientComponent } from './depot-client/depot-client.component';
import { InformationsClientComponent } from './informations-client/informations-client.component';
import { RetraitClientComponent } from './retrait-client/retrait-client.component';
import { TransactionsClientComponent } from './transactions-client/transactions-client.component';
import { VirementClientComponent } from './virement-client/virement-client.component';
import { PopupRetraitComponent } from './popup-retrait/popup-retrait.component';
import { PopupReComponent } from './depot-client/popup-re/popup-re.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { ClientsAdminComponent } from './clients-admin/clients-admin.component';
import { UnClientAdminComponent } from './un-client-admin/un-client-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CompteClientComponent,
    DepotClientComponent,
    InformationsClientComponent,
    RetraitClientComponent,
    TransactionsClientComponent,
    VirementClientComponent,
    PopupRetraitComponent,
    PopupReComponent,
    AdminBoardComponent,
    ClientsAdminComponent,
    UnClientAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
