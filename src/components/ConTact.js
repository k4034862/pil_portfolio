import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
const logoStyle = {
  width: "140px",
  height: "auto",
};

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" mt={1}>
//       {"Copyright © "}
//       <Link href="https://mui.com/">Sitemark&nbsp;</Link>
//       {new Date().getFullYear()}
//     </Typography>
//   );
// }

export default function Contact() {
  return (
    <Container
      id={"contact"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
          {/* <Box sx={{}}>
            <img
              src={"../PIL_PORTFOLIO.png"}
              style={logoStyle}
              alt="logo of pil"
              width="20"
              height="10"
            />
          </Box> */}
          {/* <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography> */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body2" fontWeight={600}>
              <PhoneIcon></PhoneIcon> 010-4114-8117
            </Typography>
            <br />
            <br />
            <Typography variant="body2" fontWeight={600}>
              <HomeIcon></HomeIcon> 부산광역시 중구 대영로 240
            </Typography>
            <br />
            <br />
            <Typography variant="body2" fontWeight={600}>
              <EmailIcon></EmailIcon> k4034862@naver.com
            </Typography>
            <br />
            <br />
            {/* <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              sx={{ marginBottom: "8px", width: "100px" }}
              fullWidth
              placeholder="성함"
              inputProps={{
                autoComplete: "off",
              }}
            />
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              sx={{ marginBottom: "8px", width: "100px" }}
              fullWidth
              placeholder="회신받을 Email"
              inputProps={{
                autoComplete: "off",
              }}
            />
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              sx={{ marginBottom: "8px", width: "100px" }}
              fullWidth
              placeholder="제목"
              inputProps={{
                autoComplete: "off",
              }}
            />
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              multiline
              rows={6}
              variant="outlined"
              sx={{ marginBottom: "8px", width: "100px" }}
              fullWidth
              placeholder="내용"
              inputProps={{
                autoComplete: "off",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginBottom: "8px",
                width: "120px",
              }}
            >
              메일 보내기
            </Button> */}
          </Box>
        </Box>
        {/* <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            <PhoneIcon></PhoneIcon> 010-4114-8117
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            <HomeIcon></HomeIcon> 부산광역시 중구 대영로 240
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            <EmailIcon></EmailIcon> k4034862@naver.com
          </Typography>
        </Box> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          {/* <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright /> */}
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/k4034862"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          {/* <IconButton
            color="inherit"
            href="https://twitter.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton> */}
        </Stack>
      </Box>
    </Container>
  );
}
