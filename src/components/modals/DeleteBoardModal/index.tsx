import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Line,
  Body,
  ButtonWrapper,
  SubmitButton,
} from './style';
import { BsXLg } from 'react-icons/bs';
import { BoardModalProps } from '../../../models/Modal';

const DeleteBoardModal: React.FC<BoardModalProps> = ({ isOpen, onClose }) => {
  // 더미 데이터
  const dummyData = {
    boardName: '9oorm_KDT',
  };

  // 삭제 버튼 클릭 핸들러
  const handleDeleteBoard = () => {
    onClose(); // 모달 닫기
  };
  if (!isOpen) {
    return null; // 모달이 열려있지 않으면 렌더링하지 않음
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>교실 삭제하기</h2>
          <BsXLg className="CloseButton" onClick={onClose} />
        </ModalHeader>
        <Line />
        <Body>
          <h1>{dummyData.boardName}</h1>
          <h3>
            해당 교실을 삭제하시겠습니까?
            <br />
            삭제한 교실은 복구할 수 없습니다.
          </h3>
        </Body>
        <ButtonWrapper>
          <SubmitButton onClick={handleDeleteBoard}>교실 삭제</SubmitButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DeleteBoardModal;
