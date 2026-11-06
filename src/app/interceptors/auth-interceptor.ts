import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
 console.log('I am Auth Interceptor');
  // Add a header 'Authorization:Bearer 1234567' to every request
  const myToken = 'ABCDEF123456'
  const requestWithToken = req.clone({
    setHeaders: { Authorization: `Bearer ${myToken}` },
  });
  return next(requestWithToken);

};
