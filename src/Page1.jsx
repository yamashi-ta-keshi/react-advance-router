import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();
  const onClickDetail1 = () => history.push("/page1/detail1");
  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "/page1/detail1", state: arr }}>Page1Detail1</Link>
      <br />
      <Link to="/page1/detail2">Page1Detail2</Link>
      <br />
      <button onClick={onClickDetail1}>detail1</button>
    </div>
  );
};
