import Video from '../Components/VIdeoFunc/Video';
import { PageContentWrapper } from '../Layout/Layout.style';
import { useParams } from 'react-router-dom';

function Detail() {
  const param = useParams();
  const urlNum = param.itemIdx;

  return (
    <PageContentWrapper>
      <Video playNum={urlNum} />
    </PageContentWrapper>
  );
}

export default Detail;
