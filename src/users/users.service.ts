import { Injectable } from '@nestjs/common';

export interface User {
  id: string;
  name: string;
  sex: string;
  depart?: number;
}

const users: User[] = [
  { id: '1', name: 'Juan', sex: 'M', depart: 1 },
  { id: '2', name: 'María', sex: 'F', depart: 2 },
];

@Injectable()
export class UsersService {
  findAll(): User[] {
    users.forEach((e) => {
      console.log(`mi name is: ${e.name}`);
    });

    return users;
  }

  findDetails(): User[] {
    return users;
  }

  findImages(): string[] {
    return users.map((user) => `https://example.com/images/${user.id}.jpg`);
  }

  findOne(id: string): User | undefined {
    return users.find((user) => user.id === id);
  }

  userFilter(id: string, sex: string, depart?: number): User[] {
    return users.filter((user) => {
      const matchesId = id === 'all' || user.id === id;
      const matchesSex = sex === 'all' || user.sex === sex;
      const matchesDepart = depart === undefined || user.depart === depart;

      return matchesId && matchesSex && matchesDepart;
    });
  }
}
