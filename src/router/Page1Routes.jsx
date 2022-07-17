import { Page1 } from "../Page1";
import { Page1Detail1 } from "../Page1Detail1";
import { Page1Detail2 } from "../Page1Detail2";

export const page1Routes = [
  { path: "/", exact: true, children: <Page1 /> },
  { path: "/detail1", exact: false, children: <Page1Detail1 /> },
  { path: "/detail2", exact: false, children: <Page1Detail2 /> }
];
