import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../components/Card/Card.component';
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent {
  // select piope

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

  // plural pipe

  clients = signal(['Fernando', 'Reinaldo', 'Diego', 'Genesis', 'Zulimar', 'Maria']);

  // we could handle this map with a normal property but we could also use signals
  clientMap = signal({
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }
}
