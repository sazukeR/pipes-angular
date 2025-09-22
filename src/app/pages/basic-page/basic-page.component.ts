import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal, inject } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {
  localeService = inject(LocaleService);

  nameLower = signal('fernando');
  nameUpper = signal('FERNANDO');
  fullName = signal('FeRNandO');

  customDate = signal(new Date());

  // See changes in real time

  tickingDateInterval = effect((onCleanup) => {
    const dateInterval = setInterval(() => {
      console.log('interval');
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(dateInterval);
    });
  });

  changeLocale(locale: AvailableLocale) {
    this.localeService.changeLocale(locale);
  }
}
