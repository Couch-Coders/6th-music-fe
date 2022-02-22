// import React from "react";

import {
  DivLinkWrapper,
  ImgWrapper,
  Img,
} from '../../../Components/Picture.style';
import { LogoWrapper } from './Logo.style';
import { LogoImg } from '../../../../Core/Config/AssetPath';

function Logo() {
  return (
    <LogoWrapper>
      <DivLinkWrapper to="/">
        <ImgWrapper>
          <Img src={LogoImg.info.src} alt={LogoImg.info.alt} />
        </ImgWrapper>
      </DivLinkWrapper>
    </LogoWrapper>
  );
}

export default Logo;
