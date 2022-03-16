import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { IContext } from "./switch.interface";

export const Context = createContext({} as IContext);

export const useSwitch = (value: string | symbol) => {
  const [taken, setTaken] = useState(false);

  useEffect(() => {
    setTaken(false);
  }, [value]);

  return { taken, setTaken };
};

const useShow = () => {
  const { value, taken, setTaken } = useContext(Context);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) setShow(false);
  }, [show, value]);

  return { show, setShow, value, taken, setTaken };
};

const useTaken = (
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>,
  compCase: string | symbol
) => {
  const { value, taken, setTaken } = useContext(Context);
  useEffect(() => {
    if (!taken) {
      setTaken((taken) => {
        if (!taken && compCase === value) {
          setShow(true);
        }
        return taken || compCase === value;
      });
    }
  }, [compCase, setShow, setTaken, taken, value]);
};

export const useCase = (compCase: string | symbol) => {
  const { show, setShow } = useShow();
  useTaken(show, setShow, compCase);
  return { show };
};

export const useDefault = () => {
  const { show, setShow, value } = useShow();
  useTaken(show, setShow, value);
  return { show };
};
