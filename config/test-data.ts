import { USERS } from '../test-data/users';

export const TEST_DATA = {
  login: {
    validUser: USERS.standard,
    lockedOutUser: USERS.lockedOut,
    invalidUser: USERS.invalid,
  },

  checkout: {
    firstName: 'Narmadha',
    lastName: 'Tester',
    postalCode: '600001',
  },
};