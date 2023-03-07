import Modal from 'react-modal';

// interface PropsModal {
//   modalIsOpen : boolean
//   closeModal : (value: boolean)=> void
//   infoModal : object
// }


function ModalMap(props) {
  const {modalIsOpen, closeModal, infoModal } = props
 

  const {temp, temp_min, temp_max, humidity} = infoModal;

  
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
      
      
      <div>
        <div class="flex items-center m-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
          <span class="text-lg font-medium">Humedad: {humidity} %</span>
        </div>
        
        <table className="w-full table-fixed">
          <tbody className="bg-gray-100">
            <tr className="border-b border-gray-200">
              <td className="w-1/2 p-4 font-bold">Temperatura</td>
              <td className="w-1/2 p-4">{temp}°C</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="w-1/2 p-4 font-bold">Mínima</td>
              <td className="w-1/2 p-4">{temp_min}°C</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="w-1/2 p-4 font-bold">Máxima</td>
              <td className="w-1/2 p-4">{temp_max}°C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
    
  );
}


export default ModalMap;