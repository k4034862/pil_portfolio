import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box
      id="home"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            <Typography component="span" variant="h1">
              WebApp PortFolio
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            안녕하세요. 5년차 개발자 김동필입니다. <br />
          </Typography>
          {/* <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: "off",
                ariaLabel: "Enter your email address",
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack> */}
          {/* <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
        </Stack>
        <Box
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            // alignSelf: "center",
            height: "100%",
            width: "100%",
            p: 2,
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",

            borderRadius: "10px",
            outline: "1px solid",
            outlineColor: alpha("#9CCCFC", 0.1),
          })}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={6}>
              <Box>
                <img
                  src={`${process.env.PUBLIC_URL}/KakaoTalk_20241105_164529425.jpg`}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Box>
                <Typography variant="body1" color="text.secondary">
                  <span style={{ color: "#1E90FF" }}>Contact.</span>
                  <br />
                  <br />
                  <span style={{ color: "white" }}>Email.</span>{" "}
                  k4034862@naver.com
                  <br />
                  <br />
                  <span style={{ color: "white" }}>Phone.</span> 010-4114-8117
                  <br />
                  <br />
                  <span style={{ color: "#3FE0D0" }}>Chanel.</span>
                  <br />
                  <br />
                  <span style={{ color: "white" }}>Github.</span>{" "}
                  https://github.com/k4034862
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
