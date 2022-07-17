import { useLocation } from "react-router-dom";

export const Page1Detail1 = () => {
  const { state } = useLocation();
  console.log(state);

  return <h1>Page1Detail1</h1>;
};
