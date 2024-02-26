import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from './Components/user-form/user-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'USER-MANAGEMENT';

  constructor(private _dialog: MatDialog) {}

  openUserForm()
  {
    this._dialog.open(UserFormComponent);
  }
}
