import { useAuth } from "../../custom-hooks/AuthContext";

const Main = () => {
  const { state } = useAuth();
  console.log(state);
  return <>{state.user}</>;
};

export default Main;
