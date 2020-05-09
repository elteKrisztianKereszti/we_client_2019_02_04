import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Issue } from '../issue';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnChanges {
  @Input() issue: Issue

  constructor(private fb: FormBuilder) { }

  public form: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    place: ['', [Validators.required, Validators.pattern(/^PC\d+/)]],
    description: [''],
    status: ['NEW', [Validators.required]]
  });

  get title() { return this.form.get('title'); }
  get place() { return this.form.get('place'); }
  get description() { return this.form.get('description'); }
  get status() { return this.form.get('status'); }

  public ngOnChanges(): void {
    this.form.patchValue(this.issue);
  }
}
