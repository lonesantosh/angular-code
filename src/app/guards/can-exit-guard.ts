import { CanActivateFn, CanDeactivateFn } from '@angular/router';


export const canExitGuard: CanDeactivateFn<unknown> = (
  component: any,
  currentRoute,
  currentState,
  nextState,
) => {
  if (component.hasChanges) {
    alert('Plz save the page before you leave');
    return false;
  } else {
    return true;
  }
};