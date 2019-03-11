import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Barcelona Web App';
  selectedFeature = 'recipe';

  navigate(feature: string) {
    this.selectedFeature = feature;
  }
}
