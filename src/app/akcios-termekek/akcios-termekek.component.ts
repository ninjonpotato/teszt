import { Component } from '@angular/core';

@Component({
  selector: 'app-akcios-termekek',
  templateUrl: './akcios-termekek.component.html',
  styleUrls: ['./akcios-termekek.component.css']
})
export class AkciosTermekekComponent {
  discountedProducts = [
    { name: 'Hajszáritó', imageUrl: 'assets/AkciosTermekek/Hajszarito.png' },
    { name: 'Pullover', imageUrl: 'assets/AkciosTermekek/pullover.png' },
    { name: 'Tojás', imageUrl: 'assets/AkciosTermekek/tojás.png' }
  ];

}
