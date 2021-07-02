import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SvgIcon } from '@app/component/svg-icon/svg-icon.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  readonly logoIcon: string = SvgIcon.CODESANDBOX;
}
