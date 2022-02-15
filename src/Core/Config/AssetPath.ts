import { lAsset } from '../Interface/lAsset';

import logo from '../../Views/Assets/Images/logo.png';
import RegisterBtn from '../../Views/Assets/Images/Register.png';
import AlertBtn from '../../Views/Assets/Images/Alert.png';
import TagDelete from '../../Views/Assets/Images/TagDelete.png';

export const LogoImg: lAsset = {
  name: 'logo',
  info: {
    src: `${logo}`,
    alt: '메인 로고 이미지',
  },
};

export const Register: lAsset = {
  name: 'Register',
  info: {
    src: `${RegisterBtn}`,
    alt: '아이템 등록하기',
  },
};

export const Alert: lAsset = {
  name: 'Alert',
  info: {
    src: `${AlertBtn}`,
    alt: '경고 이미지',
  },
};

export const TagRemove: lAsset = {
  name: 'TagDete',
  info: {
    src: `${TagDelete}`,
    alt: '태그버튼 지우기',
  },
};
