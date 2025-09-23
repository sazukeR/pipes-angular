import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../components/Card/Card.component';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Reinaldo',
  gender: 'male',
  age: 30,
  address: 'av 1',
};

const client2 = {
  name: 'Maria',
  gender: 'female',
  age: 30,
  address: 'av 2',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent {
  client = signal(client1);

  invitationMap = {
    female: 'invitarla',
    male: 'invitarlo',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }
}
