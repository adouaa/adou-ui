// makeData.ts

export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
  }
  
  export function makeData(count: number): Person[] {
    const data: Person[] = [];
  
    for (let i = 0; i < count; i++) {
      const firstName = `First${i + 1}`;
      const lastName = `Last${i + 1}`;
      const age = Math.floor(Math.random() * 80) + 20; // Random age between 20 and 99
      const visits = Math.floor(Math.random() * 100);
      const status = i % 2 === 0 ? 'complicated' : 'single';
      const progress = Math.random() * 100;
  
      data.push({
        firstName,
        lastName,
        age,
        visits,
        status,
        progress,
      });
    }
  
    return data;
  }
  