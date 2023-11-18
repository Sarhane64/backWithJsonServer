import { writeFileSync } from "fs";
import { faker } from "@faker-js/faker";

function createRandomUser() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 2,
});

function createRandomTravel() {
  return {
    id: faker.string.uuid(),
    country: faker.location.country(),
    timeStaying: faker.number.int({ min: 3, max: 15 }),
  };
}

const TRAVELS = faker.helpers.multiple(createRandomTravel, {
  count: 2,
});

console.log({ users: USERS, travels: TRAVELS });
writeFileSync("./db.json", JSON.stringify({ users: USERS, travels: TRAVELS }));
