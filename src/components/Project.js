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
      "내용 : MES 시스템 및 하드웨어 개발 \n " +
      "참여기간: (2020.6 -2020.9)3개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 , MES 개발   ",
    link: `${process.env.PUBLIC_URL}/project/tail_project.pdf`,
  },
  {
    avatar: (
      <Avatar alt="신흥 스마트 팩토리" src="/static/images/avatar/2.jpg" />
    ),
    name: "신흥 스마트 팩토리",
    testimonial:
      "내용 :MES 시스템 및 하드웨어 개발  \n " +
      "참여기간: (2020.6 -2020.9)3개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 , MES 개발 ",
    link: `${process.env.PUBLIC_URL}/project/sinhung_project.pdf`,
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
      "내용 : 하드웨어 개발 \n " +
      "참여기간: (2020.08 -2020.10)2개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 ",
    link: `${process.env.PUBLIC_URL}/project/gubong_project.pdf`,
  },
  {
    avatar: (
      <Avatar alt="대건금속 스마트 팩토리" src="/static/images/avatar/4.jpg" />
    ),
    name: "대건금속 스마트 팩토리",
    testimonial:
      "내용 : MES 시스템 및 하드웨어 개발 \n " +
      "참여기간: (2020.10 -2021.06)9개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 , MES 개발",
    link: `${process.env.PUBLIC_URL}/project/daegun_project.pdf`,
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
      "내용 : MES 시스템 및 하드웨어 개발 \n " +
      "참여기간: (2020.11 -2021.10)1년 \n" +
      "담당 업무: 하드웨어 개발 및 설계 , MES 개발 및 유지보수",
    link: `${process.env.PUBLIC_URL}/project/daeg_project.pdf`,
  },
  {
    avatar: (
      <Avatar alt="바이탈린 IOT펌웨어" src="/static/images/avatar/6.jpg" />
    ),
    name: "바이탈린 IOT펌웨어",
    testimonial:
      "내용 : 하드웨어 개발 \n " +
      "참여기간: (2021.03 - 2021.06)3개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 ",
    link: `${process.env.PUBLIC_URL}/project/by_project.pdf`,
  },
  {
    avatar: <Avatar alt="대력 IOT펌웨어" src="/static/images/avatar/6.jpg" />,
    name: "대력 IOT펌웨어",
    testimonial:
      "내용 : 하드웨어 개발 \n " +
      "참여기간: (2021.04 - 2021.07)3개월\n" +
      "담당 업무: 하드웨어 개발 및 설계 ",
    link: `${process.env.PUBLIC_URL}/project/dr_project.pdf`,
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
      "내용 : WERP 시스템 개발 \n " +
      "참여기간: (2021.11 ~ 2024.01)2년 2개월\n" +
      "담당 업무: WERP 개발(WEB) ,유지보수 ",
    link: `${process.env.PUBLIC_URL}/project/woori_project.pdf`,
  },
  {
    avatar: (
      <Avatar alt="메디폴 스마트 팩토리	" src="/static/images/avatar/6.jpg" />
    ),
    name: "메디폴 스마트 팩토리",
    testimonial:
      "내용 : MES 시스템 개발 \n " +
      "참여기간: (2023.07 ~2023.09)2개월\n" +
      "담당 업무: MES(WEB) 개발 ",
    link: `${process.env.PUBLIC_URL}/project/medipol_project.pdf`,
  },
  {
    avatar: <Avatar alt="동성사 MES	" src="/static/images/avatar/6.jpg" />,
    name: "동성사 MES",
    testimonial:
      "내용 : MES 시스템 개발 \n " +
      "참여기간: (2023.09 ~2024.02)6개월\n" +
      "담당 업무: 프로젝트 관리,일정관리, MES(WEB)개발 ",
    link: `${process.env.PUBLIC_URL}/project/dongsung_project.pdf`,
  },
  {
    avatar: (
      <Avatar alt="성홍 스마트 팩토리	" src="/static/images/loginSunghong.png" />
    ),
    name: "성홍 스마트 팩토리",
    testimonial:
      "내용 : MES 시스템 개발 \n " +
      "참여기간: (2023.02 ~2024.07)5개월\n" +
      "담당 업무: MES(WEB) 개발 ",
    link: `${process.env.PUBLIC_URL}/project/sunghong_project.pdf`,
  },
];

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
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={testimonial.name}
            sx={{ display: "flex" }}
          >
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
                    <div key={index}>
                      <Typography variant="body2" color="text.secondary">
                        {line}
                      </Typography>

                      <br />
                    </div>
                  );
                })}
                <Link
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  자세히 보기
                </Link>
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
