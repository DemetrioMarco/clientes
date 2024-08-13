import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';


export const AuthGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);


  return authService.getTokenValidation().pipe(
    tap( (isAuthenticated)=>{
      if(!isAuthenticated){
        router.navigateByUrl('/login');
      }
    })
  );

};