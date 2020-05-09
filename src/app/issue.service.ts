import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  issues: Issue[] = [
    {
      id: 1,
      place: 'PC42',
      title: 'The issue #1',
      description: 'Fatallica',
      status: 'NEW',
    },
    {
      id: 2,
      place: 'PC12',
      title: 'MegaIssue',
      description: 'MegaFatal',
      status: 'DOING',
    },
    {
      id: 3,
      place: 'Air',
      title: 'Unknown issue',
      description: 'U.F.O',
      status: 'DOING',
    },
    {
      id: 4,
      place: 'PCxxx',
      title: 'Broken Windows 10',
      description: 'Everywhere',
      status: 'DONE'
    },
  ];

  constructor() { }

  public getIssues(): Issue[] {
    return this.issues;
  }

  public getIssue(id: number): Issue {
    return this.issues.find((issue: Issue) => issue.id === id);
  }

  public updateIssue(updatedIssue: Issue): void {
    const issue: Issue = this.getIssue(updatedIssue.id);
    if (issue) {
      console.log(updatedIssue);
      issue.description = updatedIssue.description;
      issue.place = updatedIssue.place;
      issue.title = updatedIssue.title;
    }
  }

  public createIssue(createdIssue: Issue): void {
    const issue: Issue = new Issue();

    issue.id = Math.floor(Math.random() * 1000000);
    issue.status = 'NEW';
    issue.description = createdIssue.description;
    issue.place  = createdIssue.place;
    issue.title = createdIssue.title;
    this.issues.push(issue);
  }

  public deleteIssue(id: number): void {
    const issueId: number = this.issues.findIndex((issue: Issue) => issue.id === id);

    if (issueId >= 0 ) {
      this.issues.splice(issueId, 1);
    }
  }
}
