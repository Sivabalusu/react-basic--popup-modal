import React from 'react';
import './App.css';
import Modal from './Modal/Modal';

function App() {

  const modalRef = React.useRef();
  
  const openModal = () =>{
    modalRef.current.openModal()
  }
  return (
    <div className="App">
       <button onClick={openModal}>Open Modal</button>
        <Modal ref={modalRef}>
          <h1>Modal Header</h1>
          <p>Landscaping includes services of maintaining the land around the house to serve greenery, </p>
          <p> Landscaping includes services of maintaining the land around the house to serve greenery, </p>
          <p>Landscaping includes services of maintaining the land around the house to serve greenery, </p>
          <p> Landscaping includes services of maintaining the land around the house to serve greenery, </p>
          <button onClick={()=>modalRef.current.closeModal()}>Close Modal</button>
        </Modal>
    </div>
  );
}

export default App;
