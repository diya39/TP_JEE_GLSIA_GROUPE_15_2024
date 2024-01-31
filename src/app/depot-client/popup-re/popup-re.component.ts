import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-re',
  templateUrl: './popup-re.component.html',
  styleUrl: './popup-re.component.css'
})
export class PopupReComponent {
  show= false;

  openPopup(){
    this.show=true;
  }

  closePopup(){
    this.show=false;
  }
}
