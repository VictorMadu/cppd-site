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

const useShow = (ctx: IContext, compCase: string | symbol) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show && compCase !== ctx.value) setShow(false);
  }, [show, ctx.value, compCase]);

  return { show, setShow };
};

const useTaken = (
  ctx: IContext,
  setShow: Dispatch<SetStateAction<boolean>>,
  compCase: string | symbol
) => {
  useEffect(() => {
    if (!ctx.taken) {
      ctx.setTaken((taken) => {
        if (!taken && compCase === ctx.value) {
          setShow(true);
        }
        return taken || compCase === ctx.value;
      });
    }
  }, [compCase, ctx, setShow]);
};

export const useCase = (compCase: string | symbol) => {
  const ctx = useContext(Context);
  const { show, setShow } = useShow(ctx, compCase);
  useTaken(ctx, setShow, compCase);
  return { show };
};

export const useDefault = () => {
  const ctx = useContext(Context);
  const { show, setShow } = useShow(ctx, ctx.value);
  useTaken(ctx, setShow, ctx.value);
  return { show };
};
