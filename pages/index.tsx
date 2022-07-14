import { Grid, Text } from "@nextui-org/react";
import type { NextPage } from "next";

const Styles = {

}

const Home: NextPage = () => (
  <Grid.Container justify="space-evenly" alignItems="center">
    <Text h1> Welcome to my new homepage</Text>
  </Grid.Container>
);

export default Home;
