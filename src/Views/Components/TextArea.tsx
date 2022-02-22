// import React from 'react';

import { TextAreaComp, TextAreaWrapper } from './TextArea.style';

function TextArea() {
  return (
    <TextAreaWrapper>
      <TextAreaComp minRows={3} maxRows={30} placeholder="본문을 입력하세요" />
    </TextAreaWrapper>
  );
}

export default TextArea;
