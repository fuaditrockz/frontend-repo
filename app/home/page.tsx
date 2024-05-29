import { Container, Grid } from "@mui/material";
import styles from "@/app/page.module.css";
import UserBox from "@/components/UserBox";

const Home = async () => {
  return (
    <main className={styles.main}>
      <Container fixed>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "60vh" }}
        >
          <Grid item xs={3}>
            <UserBox />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
