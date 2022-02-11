import Header from "../components/header";
import Body from "../components/body";
import Categories from "../components/categories";
import { Paper } from "@mui/material";

export default function Home() {
  return (
    <Paper>
      <Header />
      <Categories />
      <Body />
    </Paper>
  );
}
