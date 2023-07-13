import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/accounts';
  public authenticated = false;
  public userRole = '';
  constructor(private http: HttpClient, private router: Router) {}

  signIn(username: string, password: string): void {
    this.connectToDB().pipe(
      catchError(error => {
        console.log('Error retrieving data:', error);
        return throwError('Error retrieving data');
      })
    ).subscribe(accounts => {
        if (accounts) {
          // @ts-ignore
          const matchedAccount = accounts.find(account => account.username === username && account.password === password);
          if (matchedAccount) {
            console.log('Sign in successful', matchedAccount.access);
            this.userRole = matchedAccount?.access;
            this.authenticated = true;
            if (this.userRole == 'user') {
              this.router.navigate(['ControlPage']);
            }
            if (this.userRole == 'admin') {
              this.router.navigate(['dashboard']);
            }
          } else {
            console.log('Invalid credentials');
          }
        } else {
          console.log('No accounts found in DB! DB is empty');
        }
      }
    );
  }

  signUp(username: string, password: string): void {
    this.connectToDB().pipe(
      catchError(error => {
        console.log('Error retrieving data:', error);
        return throwError('Error retrieving data');
      })
    ).subscribe(accounts => {
      if (accounts) {
        // @ts-ignore
        const existingAccount = accounts.find(account => account.username === username);
        if (existingAccount) {
          console.log('Username already exists. Please choose a different username.');
        } else {
          const newAccount = { username, password };
          accounts.push(newAccount);
          this.saveDataToDB(accounts).pipe(
            catchError(error => {
              console.log('Error saving data:', error);
              return throwError('Error saving data');
            })
          ).subscribe(() => {
            console.log('Sign up successful');
          });
        }
      } else {
        console.log('Error retrieving data');
      }
    });
  }

  private connectToDB() {
    return this.http.get<any>('http://localhost:3000/accounts').pipe(
      catchError(error => {
        console.log('Error connecting to DB:', error);
        return throwError('Error connecting to DB');
      })
    );
  }

  private saveDataToDB(data: any) {
    return this.http.put('http://localhost:3000/accounts', data).pipe(
      catchError(error => {
        console.log('Error saving data:', error);
        return throwError('Error saving data');
      })
    );
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.authenticated);
      }, 1000);
    });
  }

  getUserRole() {
    return this.userRole;
  }
}
