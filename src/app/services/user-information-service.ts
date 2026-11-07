import { Service } from '@angular/core';

@Service()
export class UserInformationService {

 userRole: string = 'trainer'; //student

  getUserRole() {
    return this.userRole;
  }

}
