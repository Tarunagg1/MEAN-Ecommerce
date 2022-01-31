import { Observable, BehaviorSubject } from 'rxjs';

export class Store<T> {
  state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject<T>(initialState);
    this.state$ = this._state$.asObservable();
  }

  get state() {
    return this._state$.getValue();
  }

  protected setState(newState: T): void {
    console.log('-----------------------');
    console.log('Previous state ', this.state);

    this._state$.next(newState);

    console.log('-----------------------');
    console.log('Current state', this.state);
  }
}
