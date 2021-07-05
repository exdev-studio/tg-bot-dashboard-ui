import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SvgIcon } from '@app/component/svg-icon/svg-icon.const';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '@app/enum/lang.enum';
import { EN, RU } from '@app/const/lang-icon-url.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  readonly logoIcon: string = SvgIcon.CODESANDBOX;

  readonly russianLangIconUrl: string = RU;
  readonly englishLangIconUrl: string = EN;

  constructor(
    private translateService: TranslateService,
  ) {
    this.translateService.use(Lang.EN);
  }

  onEnglishLanguageClick(): void {
    this.translateService.use(Lang.EN);
  }

  onRussianLanguageClick(): void {
    this.translateService.use(Lang.RU);
  }
}
