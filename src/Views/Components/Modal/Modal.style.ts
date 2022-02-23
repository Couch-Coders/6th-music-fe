import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: white;
  width: 417px;
  height: 220px;
  overflow-y: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 5px;
  transform: translate(-50%, -50%);
  z-index: 1011;
`;

export const ModalImgWrapper = styled.div`
  width: 22px;
  height: 22px;
`;

export const ModalContent = styled.div`
  width: 315px;
  margin: 0 0 0 16px;
`;

export const ModalTitle = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
`;

export const ModalButtons = styled.div`
  display: flex;
`;

// const ModalShow = keyframes`
// from {
//     opacity: 0;
//     margin-top: -50px;
//   }
//   to {
//     opacity: 1;
//     margin-top: 0;
//   }
// `;

// const ModalbgShow = keyframes`
// from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;
