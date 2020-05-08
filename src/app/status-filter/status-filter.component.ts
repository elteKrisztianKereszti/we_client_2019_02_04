import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  public statuses: string[] = [ '', 'NEW', 'DOING', 'DONE' ];
  @Input('status') status: string = '';
  @Output() filterChange = new EventEmitter<string>();
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.radioGroupForm = this.formBuilder.group({
      status: this.status
    });
  }

  public handleChange(): void {
    this.filterChange.emit(this.radioGroupForm.get('status').value);
  }
}
