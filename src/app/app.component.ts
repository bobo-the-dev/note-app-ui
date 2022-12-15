import { Component } from '@angular/core';
import packageJson from '../../package.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'note-app-ui';
  public version: string = packageJson.version;
}
