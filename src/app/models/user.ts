export class User {

    
     // Employee Model = Structure + Logic
  id!: number;
  name!: string;
  age!: string;
  sal!: number;
  gender!: string;

  constructor(data: any) {
    Object.assign(this, data);
  }

  
}
