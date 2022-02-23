// import React from 'react';

import { TagComp, TagCompList, TagCompItem } from './Tag.style';

const TagData = [
  { key: 1, title: 'POP' },
  { key: 2, title: '가사가 있는' },
  { key: 3, title: '가사가 없는' },
  { key: 4, title: '더미ssssss1' },
  { key: 5, title: '더미sssssssssss2' },
  { key: 6, title: '더미3' },
  { key: 7, title: '더미sssssssssssssssssss4' },
  { key: 8, title: '더미5' },
  { key: 9, title: '더미ssssss6' },
  { key: 10, title: '더미8' },
  { key: 11, title: '더미9' },
  { key: 12, title: '더미10' },
  { key: 13, title: '더미7' },
  { key: 14, title: '더미8' },
  { key: 15, title: '더미9' },
  { key: 16, title: '더미10' },
  { key: 17, title: '더미8' },
  { key: 18, title: '더미9' },
  { key: 19, title: '더미10' },
  { key: 20, title: '더미10' },
];

function Tag() {
  return (
    <TagComp>
      <ul>
        {TagData.map((tag) => (
          <TagCompList key={tag.key}>
            <TagCompItem>{tag.title}</TagCompItem>
          </TagCompList>
        ))}
      </ul>
    </TagComp>
  );
}

export default Tag;
