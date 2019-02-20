import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  loginUrl = `http://control.msg91.com/api/sendotp.php?otp_length=6
  &authkey='262911Aecz13425c65666d'
  &message='Test OTP 123456'
  &sender='OTPSMS'
  &mobile=917696613595
  &otp=123456`;
  
  httpHeader= new HttpHeaders().set('Content-Type','text/plain')
  validate():Observable<JSON>{
    console.log('login component')
    return this.http.post<JSON>(this.loginUrl,
      ``);
  }
}
