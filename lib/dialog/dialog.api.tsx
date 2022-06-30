import React from "react";
import Dialog, { alert, confirm, modal } from "./dialog";

const DialogExample: React.FC = () => {
  alert("alert API");
  confirm("confirm API");
  modal("modal API");
  return (
    <Dialog visible={true} onClose={() => {}} buttons={[<button></button>]}>
      Dialog 组件
    </Dialog>
  );
};

export default DialogExample;
