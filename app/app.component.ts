import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
