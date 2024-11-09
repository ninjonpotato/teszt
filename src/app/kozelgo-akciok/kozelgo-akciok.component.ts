import { Component } from '@angular/core';

@Component({
  selector: 'app-kozelgo-akciok',
  templateUrl: './kozelgo-akciok.component.html',
  styleUrls: ['./kozelgo-akciok.component.css']
})
export class KozelgoAkciokComponent {
  upcomingDeals = [
    { title: 'Karácsonyi Vásár', description: 'Készülj a karácsonyi vásárra...', imageUrl: 'assets/KozelgoAkciok/christmas.png' },
    { title: 'Black Friday', description: 'Ne maradj le a hatalmas kedvezményekről...', imageUrl: 'assets/KozelgoAkciok/black-friday.png' }
  ];
}
