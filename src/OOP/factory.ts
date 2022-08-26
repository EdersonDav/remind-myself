import { Employer } from './Employer';
import { Intern } from './Intern';
import { Manager } from './Manager';

interface IObjectClass {
  intern: Intern,
  manager: Manager
}

export const factory = (type: string) => {
  const objectClass = {
    intern: Intern,
    manager: Manager
  }

  return new (objectClass[type as keyof IObjectClass] || Employer)()
}