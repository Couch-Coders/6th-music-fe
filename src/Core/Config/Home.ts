import faker from '@faker-js/faker';
import { lHome } from '../Interface/lHome';

export const VideoList = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=Wwx4BXCJnQ8',
    title: '역시 성시경 오빠노래는 최고야',
    uploader: '오빠!나야나!!',
    tag: {},
  },
  {
    id: 2,
    url: 'https://www.youtube.com/watch?v=CCyFnyMiYEs',
    title: '김동률 노래는 밤늦게 들어야...',
    uploader: '동률팬',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=AHRzK-bfROA&list=PL10mMS3nf3TZ6TU14qboJ5VtNwmNH7z27&index=10',
    title: '월간 윤종신',
    uploader: '윤종신팬',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/watch?v=TAfITcsgheI&list=PL10mMS3nf3TZ6TU14qboJ5VtNwmNH7z27',
    title: '윤종신의 나이',
    uploader: '나이만먹은사람',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/watch?v=6aeZ7CYaNUk',
    title: '김동률 노래 모음집 30',
    uploader: '공시생',
  },
  {
    id: 6,
    url: 'https://www.youtube.com/watch?v=HvRb6kzNVmQ',
    title: '90년대 발라드',
    uploader: '전교1등',
  },
  {
    id: 7,
    url: 'https://www.youtube.com/watch?v=HuSvZLvtxms',
    title: '인디락, 델리스파이스부터 검정치마까지 ',
    uploader: '옆집누나',
  },
  {
    id: 8,
    url: 'https://www.youtube.com/watch?v=J9wXEA5gOnc',
    title: '토이-우리 1시간',
    uploader: '심심해',
  },
];

// const url = VideoList[0];
// const YoutubeId = getYouTubeID(data.url);

// `https://img.youtube.com/vi/${YoutubeId}/maxresdefault.jpg`;

// console.log('id', YoutubeId);

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
