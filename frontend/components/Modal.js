'use client';
import {useEffect,useRef} from 'react';
import Icon from './Icon';
export default function Modal({title,children,onClose,busy}){const ref=useRef(null);useEffect(()=>{const d=ref.current;d.showModal();return()=>{if(d.open)d.close()};},[]);return <dialog ref={ref} className="modal" aria-labelledby="modal-title" onCancel={e=>{e.preventDefault();if(!busy)onClose()}} onClick={e=>{if(e.target===e.currentTarget&&!busy)onClose()}}><div className="modal-head"><h2 id="modal-title">{title}</h2><button className="icon-button" disabled={busy} aria-label="Close dialog" onClick={onClose}><Icon name="close"/></button></div>{children}</dialog>}
