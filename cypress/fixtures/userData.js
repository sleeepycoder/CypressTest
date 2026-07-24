import { faker } from '@faker-js/faker';

export const user = {
  firstName: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};
