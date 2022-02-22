import faker from "@faker-js/faker";
import { lHome } from "../Interface/lHome";

export const HomeData: lHome[] = [
  {
    id: 1,
    video: faker.image.people(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 1,
  },
  {
    id: 2,
    video: faker.image.cats(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 2,
  },
  {
    id: 3,
    video: faker.image.food(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 3,
  },
  {
    id: 4,
    video: faker.image.transport(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 4,
  },
  {
    id: 5,
    video: faker.image.fashion(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 5,
  },
  {
    id: 6,
    video: faker.image.animals(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 6,
  },
  {
    id: 7,
    video: faker.image.city(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 7,
  },
  {
    id: 8,
    video: faker.image.food(),
    videoTitle: faker.commerce.productName(),
    itemIdx: 8,
  },
];
