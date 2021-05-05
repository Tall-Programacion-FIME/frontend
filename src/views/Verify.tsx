import { useHistory, useParams } from "react-router-dom";
import { verifyAccount } from "api/auth";
import { useEffect } from "react";

type VerifyProps = {
  token: string;
};

function Verify() {
  const { token }: VerifyProps = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      await verifyAccount(token);
    })();
    history.push("/auth/login");
  });

  return (
    <>
      <h1>Verify</h1>
      <p>{token}</p>
    </>
  );
}

export default Verify;
