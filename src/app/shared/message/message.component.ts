import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: string = '';
  @Input() error: boolean = false;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onClose() {
    this.message = '';
    this.callback.emit(true);
  }
}
