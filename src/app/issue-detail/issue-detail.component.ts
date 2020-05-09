import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  public issue: Issue = null;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService
  ) { }

  public ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.issue = this.issueService.getIssue(id);
  }
}
