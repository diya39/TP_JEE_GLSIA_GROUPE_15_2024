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

@NgModule({
  declarations: [
    AppComponent,
    CompteClientComponent,
    DepotClientComponent,
    InformationsClientComponent,
    RetraitClientComponent,
    TransactionsClientComponent,
    VirementClientComponent
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
