import Input from "../ui/Input";
import Button from "./Button";
import Select from "./Select";

function Modal({ setOpenModal, openModal, children }) {
  return (
    <div className="relative rounded-lg bg-yellow-300 p-20">
      <div className="absolute right-12 top-12">
        <Button handleOnClick={() => setOpenModal(!openModal)}>X</Button>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Modal;
