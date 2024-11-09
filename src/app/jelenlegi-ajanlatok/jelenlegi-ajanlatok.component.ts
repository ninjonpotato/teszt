import { Component } from '@angular/core';

@Component({
  selector: 'app-jelenlegi-ajanlatok',
  templateUrl: './jelenlegi-ajanlatok.component.html',
  styleUrls: ['./jelenlegi-ajanlatok.component.css']
})
export class JelenlegiAjanlatokComponent {
  currentOffers = [
    { title: 'Halloween Napok', description: 'Halloweeni ajánlat, Vásárolj bármit...' , imageUrl: 'assets/JelenlegiAjánlatok/Halloween.png'},
    { title: 'Különleges Kedvezmény', description: 'Élvezd a 50%-os kedvezményeket...', imageUrl: 'assets/AkciosTermekek/tojás.png'}
  ];

}
