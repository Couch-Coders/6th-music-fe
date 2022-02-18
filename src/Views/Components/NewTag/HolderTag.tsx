import React, { useState } from 'react';
import InputTag from './InputTag';

function HolderTag() {
  const [tags, setTags] = useState([]);

  const onAddTag = (tag: string) => {
    setTags([...tags, tag]);
  };

  const onDeleteTag = (tag: string) => {
    alert(`delete ${tag}!!`);
    let remainingTags = tags.filter((item) => {
      return item !== tag;
    });
    setTags([...remainingTags]);
  };
  return (
    <div>
      <h1>태그 컴포넌트!!, 예진님 여기 입니다.</h1>
      <InputTag
        onAddTag={onAddTag}
        onDeleteTag={onDeleteTag}
        defaultTags={tags}
        placeholder="enter tags seperated by comma"
      />
      <div>you can also press &lt; return &gt; or&lt;rnyrt&gt;key</div>
    </div>
  );
}

export default HolderTag;
