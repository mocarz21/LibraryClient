import { useState, useEffect } from "react";
import "./Alert.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const Alert = () => {
  const initialState = {
    isOpen: false,
    type: "",
    title: "",
    description: "",
  };
  const [state, setState] = useState(initialState);

  let timer;

  const startInterval = () => {
    timer = setTimeout(() => setState(initialState), 6000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      clearTimeout(timer);
    };
  }, [state.isOpen]);

  document.showAlert = (type, title, description) => {
    setState({
      isOpen: true,
      type,
      title,
      description,
    });
  };

  return (
    state.isOpen && (
      <div className={`alert ${state.type}`}>
        <div className={`icon ${state.type}`}>
          {state.type === "error" ? (
            <FontAwesomeIcon icon={faCircleXmark} />
          ) : (
            <FontAwesomeIcon icon={faCircleCheck} />
          )}
        </div>
        <div className='content'>
          <div className='content-header'>
            <h1>{state.title}</h1>
            <span onClick={() => setState(initialState)}>&#10005;</span>
          </div>
          <p className={state.type}>{state.description}</p>
        </div>
      </div>
    )
  );
};

export default Alert;
