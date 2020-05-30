import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // import
import { AuthService, httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  // place into service class
  private issueUrl = 'http://localhost:8080/api/issues';

  // Modify/add these methods
  constructor(
    private http: HttpClient
  ) { }


  public getIssues(): Promise<Issue[]> {
    return this.http.get<Issue[]>(`${this.issueUrl}`, httpOptions).toPromise();
  }

  public getIssue(id: number): Promise<Issue> {
    return this.http.get<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }

  public createIssue(issue: Issue): Promise<Issue> {
    return this.http.post<Issue>(`${this.issueUrl}`, issue, httpOptions).toPromise();
  }

  public updateIssue(issue: Issue): Promise<Issue> {
    return this.http.put<Issue>(`${this.issueUrl}/${issue.id}`, issue, httpOptions).toPromise();
  }

  public deleteIssue(id): Promise<Issue> {
    return this.http.delete<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }
}
