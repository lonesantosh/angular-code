import { CanActivateFn } from '@angular/router';
import { UserInformationService } from '../services/user-information-service';
import { inject } from '@angular/core';

export const uploadGuard: CanActivateFn = (route, state) => {
  
 let userInformationService = inject(UserInformationService);

  if (userInformationService.getUserRole() == 'trainer') {
    return true;
  } else {
    alert('You Dont have Access to this page');
    return false;
  }

};
