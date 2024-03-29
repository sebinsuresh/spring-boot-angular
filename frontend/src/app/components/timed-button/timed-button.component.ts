import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, interval, take } from 'rxjs';

const countDownInterval = 1000;

@Component({
  selector: 'app-timed-button',
  templateUrl: './timed-button.component.html',
  styleUrls: ['./timed-button.component.css'],
})
export class TimedButtonComponent implements OnInit, OnDestroy {
  @Input() public buttonText = '';
  @Input() public countdownTime = 3;
  @Input() public countdownToggle$?: Subject<boolean>;
  @Output() public onClick = new EventEmitter();

  public displayedText = '';
  public isDisabled = true;

  private countDownSubscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.displayedText = this.getCountDownText(0);

    this.countdownToggle$?.subscribe((start) => (start ? this.startCountdown() : this.resetCountdown()));
  }

  ngOnDestroy(): void {
    this.countDownSubscription?.unsubscribe();
  }

  private startCountdown() {
    this.isDisabled = true;
    this.countDownSubscription = interval(countDownInterval)
      .pipe(take(this.countdownTime))
      .subscribe({
        next: (n) => {
          this.displayedText = this.getCountDownText(n + 1);
        },
        complete: () => {
          this.isDisabled = false;
          this.displayedText = this.buttonText;
        },
      });
  }

  private resetCountdown() {
    if (this.countDownSubscription) {
      this.countDownSubscription.unsubscribe();
      this.displayedText = this.getCountDownText(0);
      this.isDisabled = true;
    }
  }

  private getCountDownText(index: number): string {
    const countDownValue = this.countdownTime - index;
    return `${this.buttonText} (${countDownValue})`;
  }

  public onButtonClick(): void {
    this.onClick.emit();
  }
}
