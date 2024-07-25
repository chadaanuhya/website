import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey="users";
  private currentUserKey="currentUser";
  signup(email:string,password:string):boolean{
    const users=this.getUsers();
    if(users.some(user=>user.email===email)) {
      return false;
    }
    users.push({email,password});
    localStorage.setItem(this.usersKey,JSON.stringify(users));
    return true;
  }
  login(email:string,password:string):boolean {
    const users=this.getUsers();
    const user=users.find(u=>u.email===email&&u.password ===password);
    if(user){
      localStorage.setItem(this.currentUserKey,email);
      return true;
    } 
    return false;
  }
  logout():void{
    localStorage.removeItem(this.currentUserKey);
  }
  getCurrentUser():string|null{
    return localStorage.getItem(this.currentUserKey);
  }
  private getUsers():any[]{
    const usersString=localStorage.getItem(this.usersKey);
    return usersString?JSON.parse(usersString):[];
  }
}
      
       /* const storedUsers=localStorage.getItem('users');
        if(storedUsers){
          this.users=JSON.parse(storedUsers);
        }
        const storedCurrentUser=localStorage.getItem('currenUser');
        if(storedCurrentUser){
          this.currentUser=JSON.parse(storedCurrentUser);
        }
       }
      login(email:string,password:string):boolean{
        const user=this.users.find(user=>user.email===email &&user.password==password);
        if(user){
          this.currentUser=user;
          localStorage.setItem('currentUser',JSON.stringify(user));
          return true;

        }
        return false;
      }
      signup(email:string,password:string):boolean {
        const userExists=this.users.some(user=>user.email===email);
        if(userExists){
          return false;
        }else{
          const newUser={email,password};
          this.users.push(newUser);
          localStorage.setItem('users',JSON.stringify(this.users));
          this.currentUser=newUser;
          localStorage.setItem('currentUser',JSON.stringify(newUser));
          return true;
        }
        
      }
      logout():void{
        this.currentUser=null;
        localStorage.removeItem('currentUser');

      }
      getCurrentUser(){
        return this.currentUser;
      }
      isAuthenticated():boolean{
        return this.currentUser!==null
      }
    }*/

    
  
