import { lModalProps } from "../../../Core/Interface/lModal";

import { Alert } from "../../../Core/Config/AssetPath";

import { ModalCancel, ModalConfirm } from "../Button.style";

import { Img, ImgWrapper } from "../Picture.style";

import {
  ModalButtons,
  ModalContent,
  ModalImgWrapper,
  ModalTitle,
  ModalWrapper,
} from "./Modal.style";

import { useNavigate } from "react-router";

function Modal({ close, children }: lModalProps) {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  return (
    <ModalWrapper>
      <ModalImgWrapper>
        <ImgWrapper>
          <Img src={Alert.info.src} alt={Alert.info.alt} />
        </ImgWrapper>
      </ModalImgWrapper>
      <ModalContent>
        <ModalTitle>{children}</ModalTitle>
        <ModalButtons>
          <ModalCancel onClick={redirect}>예</ModalCancel>
          <ModalConfirm onClick={close}>아니오</ModalConfirm>
        </ModalButtons>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
