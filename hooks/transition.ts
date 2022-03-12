import { random } from "lodash";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export interface IProps {
  enter: boolean;
  enterStyle: string;
  transitionInStyle: string;
  transitionOutStyle: string;
}

// https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component
export function useTransition(props: IProps) {
  const [show, setShow] = useState(true);
  const transitionStyle = useRef(props.enterStyle);

  useEffect(() => {
    console.log("props.mount in useEffect", props.enter);
    if (!props.enter) {
      console.log("");
      return unMountStyle(transitionStyle, props);
    }
    setTimeout(() => mountStyle(transitionStyle, props), 10);
  }, [props]);

  console.log("show", show);
  console.log("props.mount", props.enter);
  return {
    show,
    handleTransitionEnd: handleTransitionEndHC(props.enter, setShow),
    transitionStyle: transitionStyle.current,
  };
}
function mountStyle(refStyle: MutableRefObject<string>, props: IProps) {
  refStyle.current = props.transitionInStyle;
}

function unMountStyle(refStyle: MutableRefObject<string>, props: IProps) {
  console.log("is unmounting", new Date().getTime());
  refStyle.current = props.transitionOutStyle;
}

function handleTransitionEndHC(
  enter: boolean,
  setShow: Dispatch<SetStateAction<boolean>>
) {
  return function handleTransition() {
    if (!enter) {
      setShow(false);
      console.log("transition end called", new Date().getTime());
    }
  };
}
