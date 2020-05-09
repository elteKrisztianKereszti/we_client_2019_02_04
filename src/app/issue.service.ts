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

}
