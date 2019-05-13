import { Component } from '@angular/core';
import { APIService } from '../services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private APIService: APIService) {
    this.APIService.getAPI();
  }
}

const foo = 33;
foo;
