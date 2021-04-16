import useStore from "../../store/MessageState";

function checkProduction() {
  return process.env.NODE_ENV === "production";
}

function Production() {
  const isProduction = checkProduction();
  if (!isProduction) {
    useStore.setState({
      isMessage: true,
      message: "No estás en el modo de producción!!",
      typeMessage: "warning",
      isPermanent: true,
    });
  }
}

export default Production;
