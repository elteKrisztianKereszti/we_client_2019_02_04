import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  public issues: Issue[] = [
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

  ngOnInit(): void {
  }

}
