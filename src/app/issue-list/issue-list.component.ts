import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {


  private issues: Issue[] = [];
  public filteredIssues: Issue[];
  public selectedStatus: string;
  public selectedIssue: Issue;

  constructor(
    private issueService: IssueService
  ) {
    this.issues = issueService.getIssues();
  }
  public ngOnInit(): void {
    this.selectedStatus = '';
    this.filter();
  }

  public onFilterChange(status: string): void {
    this.selectedStatus = status;
    this.filter();
  }

  public onSelectIssue(issue: Issue): void {
    this.selectedIssue = issue;
  }


  public onFormSubmit(formIssue: Issue): void {
    if (this.selectedIssue.id > 0) {
      const issue: Issue = Object.assign(this.selectedIssue, formIssue);
      this.issueService.updateIssue(formIssue);
    }
    else {
      this.issueService.createIssue(formIssue);
    }
    this.selectedIssue = null;
    this.filter();
  }

  public onNewClick(): void {
    this.selectedIssue = new Issue();
  }

  private filter(): void {
    this.filteredIssues = this.selectedStatus === ''
      ? this.issues
      : this.issues.filter(issue => issue.status === this.selectedStatus);
  }

}
