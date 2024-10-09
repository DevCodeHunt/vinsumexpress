import { useDistanceCalcultor } from "../../stores/modalStore";
import Modals from "./Modals";

const DistanceCalculatorModal = () => {
  const { open, onClose } = useDistanceCalcultor();
  return (
    <Modals isOpen={open} onClose={onClose} title="Distance Calculator">
      <div className="modal-content">
        <h2>Distance Calculator</h2>
        <p>
          This modal will allow you to calculate the distance between two points
          on a map.
        </p>
      </div>
    </Modals>
  );
};

export default DistanceCalculatorModal;
