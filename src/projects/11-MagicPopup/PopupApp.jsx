import React, { useState, useEffect } from "react";
import Popup from "../components/Popup.component";
import Button from "../components/Button";
import Title from "../components/Title";

export default function PopupApp() {
  const [trigger, setTrigger] = useState(false);
  const [timeTrigger, setTimeTrigger] = useState(false);
  const triggerPopup = () => {
    setTrigger(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeTrigger(true);
    }, 3000);
  }, []);

  return (
    <div className="text-center">
      <Title text={"Click for popup, or wait 3 seconds"} />
      <Button clases={"btn-primary"} onClick={triggerPopup} />
      <Popup
        type={"alert-info"}
        title={"Trigger Popup"}
        text={"This popup was triggered by a button"}
        handleClose={setTrigger}
        trigger={trigger}
      />{" "}
      <Popup
        type={"alert-danger"}
        title={"Time trigger Popup"}
        text={"This popup was triggered by a button"}
        handleClose={setTimeTrigger}
        trigger={timeTrigger}
      />
    </div>
  );
}
