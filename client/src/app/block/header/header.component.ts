import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  LogoutEvent = new EventEmitter<any>();

  ngOnInit(): void {}

  constructor() {}
}
