import useStore from "../../store/MessageState";

export function generalError(message: string) {
  useStore.setState({
    isMessage: true,
    message,
    typeMessage: "error",
    isPermanent: true,
  });
}

export function generalWarning(message: string) {
  useStore.setState({
    isMessage: true,
    message,
    typeMessage: "warning",
    isPermanent: true,
  });
}

export function generalPass(message: string) {
  useStore.setState({
    isMessage: true,
    message,
    typeMessage: "pass",
    isPermanent: false,
  });
}

