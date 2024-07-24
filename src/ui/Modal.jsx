import Button from "./Button";

function Modal({ editMode, setEditMode, setOpenModal, openModal, children }) {
  function onHandleClick() {
    editMode ? setEditMode(!editMode) : "";
    setOpenModal(!openModal);
  }
  return (
    <div className="relative rounded-lg bg-yellow-300 p-20">
      <div className="absolute right-12 top-12">
        <Button handleOnClick={onHandleClick}>X</Button>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Modal;
