import useStore from "../../store/MessageState";

function registerWorker() {
  useStore.setState({
    isMessage: true,
    message: "Se desabilitó el Service Worker",
    typeMessage: "warning",
    isPermanent: false,
  });
}

export default registerWorker;
