import { Container, Grid } from "@mui/material";
import styles from "./page.module.css";

import AuthBox from "@/components/AuthBox";

export default function Home() {
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
            <AuthBox />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
