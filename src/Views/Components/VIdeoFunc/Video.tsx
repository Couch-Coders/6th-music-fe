import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ProgressBar from '@ramonak/react-progress-bar';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { IoMdRefreshCircle } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import Toggle from '../ToggleFunc/Toggle';
import ClipboardCon from '../../../Store/Containers/ClipboardCon';
import {
  Urlholder,
  VideoBtn,
  VideoBtnArea,
  VideoControlBox,
  VideoController,
  VideoHandle,
  VideoPlayer,
  VideoRange,
  VideoToggleArea,
  VideoWrapper,
} from './Video.style';
import { TextHidden } from '../../Assets/Styles/Common.style';

interface lVideoProps {
  playNum: string;
}

function Video({ playNum }: lVideoProps) {
  const VideoList = [
    'https://www.youtube.com/watch?v=Wwx4BXCJnQ8',
    'https://www.youtube.com/watch?v=CCyFnyMiYEs',
    'https://www.youtube.com/watch?v=AHRzK-bfROA&list=PL10mMS3nf3TZ6TU14qboJ5VtNwmNH7z27&index=10',
    'https://www.youtube.com/watch?v=TAfITcsgheI&list=PL10mMS3nf3TZ6TU14qboJ5VtNwmNH7z27',
    'https://www.youtube.com/watch?v=6aeZ7CYaNUk',
    'https://www.youtube.com/watch?v=HvRb6kzNVmQ',
    'https://www.youtube.com/watch?v=HuSvZLvtxms',
    'https://www.youtube.com/watch?v=J9wXEA5gOnc',
  ];
  const nowPlayingUrl = VideoList[Number(playNum) - 1];
  const playerSize = {
    wd: '480px',
    ht: '400px',
  };
  const toggleControl = {
    label: '컨트롤바',
    labelFor: 'label-control',
    optionsLabels: ['적용', '미적용'],
  };
  const toggleLoop = {
    label: '반복재생',
    labelFor: 'label-Loop',
    optionsLabels: ['적용', '미적용'],
  };

  const [url, setUrl] = useState(null);
  const [cplayed, setCplayed] = useState(0);
  const [play, setPlay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [control, setControl] = useState(false);

  const ref = useRef(null);
  const ToggleLoopRef = useRef<HTMLInputElement>(null);
  const ToggleControlRef = useRef<HTMLInputElement>(null);

  const getPlayData = (playUrl: string) => {
    setUrl(playUrl);
  };

  const handlePlay = () => {
    getPlayData(nowPlayingUrl);
    setPlay(true);
  };

  const handlePause = () => {
    setPlay(false);
  };

  const handleRefresh = () => {
    setCplayed(0);
    setPlay(false);
    setUrl(null);
    setTimeout(handlePlay, 100);
  };

  const handleLoop = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoop(e.currentTarget.checked);
  };

  const handleControl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlay(false);
    setUrl(null);
    setControl(e.currentTarget.checked);
    setUrl(null);
    setTimeout(handlePlay, 100);
  };

  const inputRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCplayed(0);
    setCplayed(Number(event.currentTarget.value));
    ref.current.seekTo(cplayed);
  };

  useEffect(() => {
    getPlayData(nowPlayingUrl);
    return () => {
      getPlayData(nowPlayingUrl);
    };
  }, [nowPlayingUrl]);

  // console.log('cplayed', cplayed * 100);
  // console.log('현재 control', control);
  // console.log('url', url);
  // console.log('video로 넘어온', playNum);
  // console.log('Video로 들어온 nowPlayingUrl', nowPlayingUrl);

  return (
    <>
      <VideoWrapper>
        <VideoPlayer>
          <ReactPlayer
            className="react-player"
            ref={ref}
            width={playerSize.wd}
            height={playerSize.ht}
            url={url}
            playing={play}
            loop={loop}
            controls={control}
            light={false}
            muted={false}
          />
        </VideoPlayer>
        <VideoHandle>
          <ProgressBar
            completed={Math.round(cplayed * 100)}
            maxCompleted={100}
          />
          <VideoControlBox>
            <Urlholder>
              <ClipboardCon />
            </Urlholder>
            <VideoController>
              <VideoBtnArea>
                <IconContext.Provider value={{ size: '50px' }}>
                  <VideoBtn>
                    <TextHidden>영상 플레이 버튼</TextHidden>
                    <AiFillPlayCircle onClick={handlePlay} />
                  </VideoBtn>
                  <VideoBtn>
                    <TextHidden>영상 정지 버튼</TextHidden>
                    <AiFillPauseCircle onClick={handlePause} />
                  </VideoBtn>
                  <VideoBtn>
                    <TextHidden>영상 다시 시작버튼</TextHidden>
                    <IoMdRefreshCircle onClick={handleRefresh} />
                  </VideoBtn>
                </IconContext.Provider>
              </VideoBtnArea>
              <VideoToggleArea>
                <Toggle
                  toggleInfo={toggleControl}
                  handleToggle={handleControl}
                  toggle={control}
                  inputRef={ToggleControlRef}
                />
                <Toggle
                  toggleInfo={toggleLoop}
                  handleToggle={handleLoop}
                  toggle={loop}
                  inputRef={ToggleLoopRef}
                />
              </VideoToggleArea>
            </VideoController>
            <VideoRange>
              <input
                type="range"
                min={0}
                max={0.999999}
                step="any"
                value={cplayed}
                onChange={inputRange}
                style={{ display: 'block', width: '100%' }}
              />
            </VideoRange>
          </VideoControlBox>
        </VideoHandle>
      </VideoWrapper>
    </>
  );
}

export default Video;
