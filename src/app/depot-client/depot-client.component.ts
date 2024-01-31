import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PopupReComponent } from './popup-re/popup-re.component';

@Component({
  selector: 'app-depot-client',
  templateUrl: './depot-client.component.html',
  styleUrl: './depot-client.component.css'
})
export class DepotClientComponent implements AfterViewInit {
  @ViewChild(PopupReComponent) PopupReComponent!: PopupReComponent;

  ngAfterViewInit(): void {
    // La propriété popupComponent est maintenant initialisée
  }

  openPopup() {
    this.PopupReComponent.openPopup();
  }

  closePopup() {
    this.PopupReComponent.closePopup();
  }
  
  
}
