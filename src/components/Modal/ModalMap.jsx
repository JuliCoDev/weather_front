import Modal from 'react-modal';
import CardWeather from '../CardWather/CardWeather';

// interface PropsModal {
//   modalIsOpen : boolean
//   closeModal : (value: boolean)=> void
//   infoModal : object
// }


function ModalMap(props) {
  const {modalIsOpen, closeModal, infoModal, city} = props
 



  
  return (
    
    <Modal 
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal(false)}
      ariaHideApp={false}
      className="m-auto w-[80%] bg-gray-100 mt-[100px] shadow-lg p-[10px]"
      >
      <button 
        onClick={() => closeModal(false)}
        className="w-full text-right mb-4"
        >          
        X
      </button>
      <CardWeather info={infoModal} title={city} /> 
      
      
    </Modal>
    
  );
}


export default ModalMap;