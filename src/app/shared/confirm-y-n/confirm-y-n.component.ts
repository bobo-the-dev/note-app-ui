import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-y-n',
  templateUrl: './confirm-y-n.component.html',
  styleUrls: ['./confirm-y-n.component.scss']
})
export class ConfirmYNComponent implements OnInit{
  @Input() message: string = '';
  @Output() callback: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

  }

  onConfirm() {
    this.callback.emit(true);
  }

  onCancel() {
    this.callback.emit(false);
  }
}
