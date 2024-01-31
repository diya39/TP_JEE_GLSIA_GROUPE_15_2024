import { Component } from '@angular/core';

@Component({
  selector: 'popup-retrait',
  templateUrl: './popup-retrait.component.html',
  styleUrl: './popup-retrait.component.css'
})
export class PopupRetraitComponent {

  show= false;

  openPopup(){
    this.show=true;
  }

  closePopup(){
    this.show=false;
  }
}
