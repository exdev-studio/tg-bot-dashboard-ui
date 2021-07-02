import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  /**
   * Defines an icon which to be shown
   */
  @Input() icon: string | null = null;

  /**
   * Defines a CSS class that will be applied to an icon
   */
  @Input() iconClass: string | null = null;
}
