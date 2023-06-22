import React from 'react';
import styled from 'styled-components';
import { colors } from '../../includes/style';

const ModalStyle = styled.aside`
  // Maintain a fixed position
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20000;
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  &[data-open="false"] {
    display: none;
  }

  // Content Area
  .modal-inner {
    position: relative;
    margin: auto;
    z-index: 20;
    width: 560px;
    max-width: 100%;
    max-height: 100%;

    -webkit-overflow-scrolling: touch; // Native style momentum scrolling

    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
    overflow: hidden;
    border-radius: 16px;
    padding: 8px;
  }

  // Content
  .modal-content {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 20;
    padding: 8px;

    & > * {
      max-width: 100%;
    }

    h1 {
      font-weight: normal;
      font-size: 36px;
      text-transform: none;
      margin-bottom: 60px;
      word-break: keep-all;
      hyphens: none;
    }
  }

  // Modal backdrop and close button
  .modal-backdrop {
    display: block;
    height: 1px; // Prevent close element to appear
    clip: rect(0 0 0 0);
    margin: -1px;
    overflow: hidden;
    text-indent: -100px;

    // Background as close
    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      background: black;
      opacity: .35;
    }
  }

  .modal-close{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background: none;
    border: none;
    color: ${colors.gray};
  }

  .modal-close-icon {
    display: inline-block;
    color: black;
    text-decoration: none;
    font-size: 2em;
    line-height: 1em;
    text-align: center;
    font-family: monospace;
    z-index: 100;

    &:focus:before {
      outline: 1px dotted;
      outline: -webkit-focus-ring-color auto 5px;
    }

    // Actual close button on modal
    &:before {
      content: '×';
      display: inline-block;
      text-decoration: none;
      text-indent: 0;
      width: 1em;
      height: 1em;
      line-height: .9em;
    }
  }
`;

type ModalProps = {
  id: string,
  className?: string,
  isOpen: boolean,
  onClose: () => void,
  children: React.ReactNode,
};
export default function Modal({ id, className, isOpen, onClose, children }: ModalProps) {
  return <ModalStyle id={id} className={className} data-open={isOpen}>
    <div className="modal-backdrop" onClick={onClose}></div>
    <section className="modal-inner">
      <header className="modal-header">
        <button className="modal-close-icon" title="Close" onClick={onClose}></button>
      </header>
      <div className="modal-content">
        {children}
      </div>
    </section>
  </ModalStyle>;
}
