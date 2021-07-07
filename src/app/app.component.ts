import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SvgIcon } from '@app/component/svg-icon/svg-icon.const';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '@app/enum/lang.enum';
import { EN, RU } from '@app/const/lang-icon-url.const';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';

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

  readonly user$ = this.authService.user$;
  readonly isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$.pipe(
    tap(() => this.spinnerService.hide()),
  );

  constructor(
    private translateService: TranslateService,
    private authService: AuthService,
    private spinnerService: NgxSpinnerService,
  ) {
    this.translateService.use(Lang.EN);
    this.spinnerService.show();
  }

  isEnglishCurrentLang(): boolean {
    return this.translateService.currentLang === Lang.EN;
  }

  onEnglishLanguageClick(): void {
    this.translateService.use(Lang.EN);
  }

  onRussianLanguageClick(): void {
    this.translateService.use(Lang.RU);
  }

  onLogoutButtonClick(): void {
    this.authService.logout();
  }
}
