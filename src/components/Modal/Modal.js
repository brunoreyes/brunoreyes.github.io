// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Form } from '../Form/Form';
// import FocusTrap from 'focus-trap-react';
// import { Button } from '@material-ui/core';
// toggleModal = () => {
//   // console.log('You clicked the preview icon');
//   this.setState({
//     modal: !this.state.modal,
//   });
// };
// // export const Modal = ({
// //   onClickOutside,
// //   onKeyDown,
// //   modalRef,
// //   buttonRef,
// //   closeModal,
// //   onSubmit,
// // }) => {
// //   return ReactDOM.createPortal(
//     <FocusTrap>
//       <aside
//         tag="aside"
//         role="dialog"
//         tabIndex="-1"
//         aria-modal="true"
//         className="modal-cover"
//         onClick={onClickOutside}
//         onKeyDown={onKeyDown}
//       >
//         <div className="modal-area" ref={modalRef}>
//           <Button
//             ref={buttonRef}
//             aria-label="Close Modal"
//             aria-labelledby="close-modal"
//             className="_modal-close"
//             onClick={closeModal}
//             onClick={this.toggleModal}
//           >
//             <span id="close-modal" className="_hide-visual">
//               Close
//             </span>
//             <svg className="_modal-close-icon" viewBox="0 0 40 40">
//               <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
//             </svg>
//           </Button>
//           <div className="modal-body">
//             <Form onSubmit={onSubmit} />
//           </div>
//         </div>
//       </aside>
//     </FocusTrap>,
//     document.body
//   );
// };

// export default Modal;
