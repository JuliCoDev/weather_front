import Modal from 'react-modal';

interface PropsModal {
  modalIsOpen : boolean
  closeModal : (value: boolean)=> void
  infoModal : object
}
function ModalMap(props : PropsModal) {
  const {modalIsOpen, closeModal } = props
  return (

    <Modal 
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal(false)}
      // className="bg-red-400"
      >
      <button onClick={() => closeModal(false)}>Cerrar</button>
      <h2>Este es mi Pop Up</h2>
      <p>Aquí puedes poner cualquier contenido que quieras mostrar.</p>
    </Modal>
    
  );
}

export default ModalMap;