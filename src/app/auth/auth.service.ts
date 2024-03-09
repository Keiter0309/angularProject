import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from './auth';
import {HttpClient} from '@angular/common/http'
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }
  private URL=`http://localhost:3000/users`;

  Users: LoginForm [] = [
    
  ];
  Auto(){
    var max=1;
    this.Users.forEach(item=>{
      if (item.id>max) {
        max=item.id;
      }
    })
    return max +1
  }
getAllUserList() :Observable <LoginForm[]>{
  return this.http.get<LoginForm[]>(`${this.URL}`)
}
login(email: string, password: string): Observable<boolean> {
  return this.getAllUserList().pipe(
    map(users => {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        this.isAuthenticated=true;
        this.router.navigate([""]); // Điều hướng đến trang chính sau khi đăng nhập thành công
      }
      return !!user; // Trả về true nếu user tồn tại, ngược lại trả về false
    })
  );
}
logout(){
  this.router.navigate([""]);
  this.isAuthenticated=false;
}
register(email :string ,password :string ,ho:string,ten:string,sdt:string){
  return this.getAllUserList().pipe(
    map(users =>{
      const user = users.find(i=>i.email===email);
      if (!user) {
        this.Auto
        const newUser: LoginForm = {
          email: email,
          password: password,
          ho: ho,
          ten: ten,
          sdt: sdt,
          id: this.Auto()
        };
        this.Users.push(
          newUser
        )
          // Cập nhật thông tin mới vào db.json thông qua API
          this.updateUserList().subscribe();
      
        return true;
        
      }else{
        return false;

      }
    })
  )
}
private updateUserList(): Observable<any> {
  // Sử dụng phương thức PUT hoặc POST tùy thuộc vào yêu cầu của server
  // Ví dụ sử dụng phương thức PUT:
  // return this.http.put(this.URL, {users: this.Users });
  // Hoặc sử dụng phương thức POST:
  return this.http.post(this.URL, { users: this.Users });
}
}
