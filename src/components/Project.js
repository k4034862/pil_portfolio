import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import Link from "@mui/material/Link";
const userTestimonials = [
  {
    avatar: (
      <Avatar alt="태일 스마트 팩토리" src="/static/images/avatar/1.jpg" />
    ),
    name: "태일 스마트 팩토리 ",
    testimonial:
      "내용 : \n " +
      "참여기간: (2020.6 -2021.9)3개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 , MES 개발   ",
    link: "https://example.com",
  },
  {
    avatar: (
      <Avatar alt="신흥 스마트 팩토리" src="/static/images/avatar/2.jpg" />
    ),
    name: "신흥 스마트 팩토리",
    testimonial:
      "내용 : \n " +
      "참여기간: (2020.6 -2021.9)3개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 , MES 개발 ",
  },
  {
    avatar: (
      <Avatar
        alt="구봉에스테크 스마트 팩토리"
        src="/static/images/avatar/3.jpg"
      />
    ),
    name: "구봉에스테크 스마트 팩토리",
    testimonial:
      "내용 : \n " +
      "참여기간: (2020.08 -2020.10)2개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 ",
  },
  {
    avatar: (
      <Avatar alt="대건금속 스마트 팩토리" src="/static/images/avatar/4.jpg" />
    ),
    name: "대건금속 스마트 팩토리",
    testimonial:
      "내용 : \n " +
      "참여기간: (2020.10 -2021.06)9개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 , MES 개발",
  },
  {
    avatar: (
      <Avatar
        alt="대경코리아 스마트 팩토리"
        src="/static/images/avatar/5.jpg"
      />
    ),
    name: "대경코리아 스마트 팩토리",
    testimonial:
      "내용 : \n " +
      "참여기간: (200.11 -2010.10)1년 \n" +
      "담당 업무: 하드웨어 개발 및 설계 , MES 개발 및 유지보수",
  },
  {
    avatar: <Avatar alt="대력 IOT펌웨어" src="/static/images/avatar/6.jpg" />,
    name: "대력 IOT펌웨어",
    testimonial:
      "내용 : \n " +
      "참여기간: (2021.04 - 2021.06)3개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 ",
  },
  {
    avatar: (
      <Avatar alt="바이탈린 IOT펌웨어" src="/static/images/avatar/6.jpg" />
    ),
    name: "바이탈린 IOT펌웨어",
    testimonial:
      "내용 : \n " +
      "참여기간: (2021.03 - 2021.06)4개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 ",
  },
  {
    avatar: (
      <Avatar
        alt="우리마트(통합물류 시스템)"
        src="/static/images/avatar/6.jpg"
      />
    ),
    name: "우리마트(통합물류 시스템)",
    testimonial:
      "내용 : \n " +
      "참여기간: (2021.11 ~ )2년 3개월\n" +
      "담당 업무: WERP 개발(WEB) ,유지보수 ",
  },
  {
    avatar: (
      <Avatar alt="메디폴 스마트 팩토리	" src="/static/images/avatar/6.jpg" />
    ),
    name: "메디폴 스마트 팩토리",
    testimonial:
      "내용 : \n " +
      "참여기간: (2023.07 ~2023.08)2개월\n" +
      "담당 업무: MES(WEB) 개발 ",
  },
  {
    avatar: <Avatar alt="동성사 MES	" src="/static/images/avatar/6.jpg" />,
    name: "동성사 MES",
    testimonial:
      "내용 : \n " +
      "참여기간: (2023.09 ~2024.02)6개월\n" +
      "담당 업무: 프로젝트 관리,일정관리, MES(WEB)개발 ",
  },
  {
    avatar: (
      <Avatar alt="성홍 스마트 팩토리	" src="/static/images/loginSunghong.png" />
    ),
    name: "성홍 스마트 팩토리",
    testimonial:
      "내용 : \n " +
      "참여기간: (2023.02 ~2024.07)5개월\n" +
      "담당 업무: MES(WEB) 개발 ",
  },
];

// const whiteLogos = [
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
//   "../static/images/logo2.png",
// ];

// const darkLogos = [
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
//   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
//   "../static/images/logo2.png",
// ];

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export default function Project() {
  const theme = useTheme();
  // const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Container
      id="project"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          PROJECT
        </Typography>
        <Typography variant="body1" color="text.secondary">
          주로 프로젝트에 개발을 담당하였고 MES , WERP , IOT , 통신프로그램 등을
          개발하였습니다.
          <br />
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                {testimonial.testimonial.split("\n").map((line, index) => {
                  return (
                    <div>
                      <Typography variant="body2" color="text.secondary">
                        {line}
                      </Typography>
                      <Link
                        href={testimonial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Example Link
                      </Link>

                      <br />
                    </div>
                  );
                })}
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                {/* <img
                  src={"../../static/images/loginSunghong.png"}
                  // src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                /> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
