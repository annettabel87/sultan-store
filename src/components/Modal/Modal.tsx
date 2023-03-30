import React, { FC, useEffect } from 'react';
import ReactDom from 'react-dom';
import style from './Modal.module.scss';

export interface IModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
  }


const Modal: FC<IModalProps> = ({ children, open }: IModalProps) => {
  const domNode = document.getElementById('portal');
  const element = document.createElement('div');

  useEffect(() => {
    domNode?.appendChild(element);
    return () => {
      domNode?.removeChild(element);
    };
  });

  return open ? ReactDom.createPortal(children, element) : null;
};

export default Modal;