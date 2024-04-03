"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import { Layout, theme, Typography, Space, Flex } from "antd";
// import ResponseCarousel from "./responseCarousel";
import "@/app/fonts/font.css";
import { white, orange, primary } from "@/app/color";
import IntroBox from "@/app/component/IntroBox";
import MainHeader from "@/app/mainheader";

/*
안녕하세요 
[feat] info-main-contents-and-button by ricksclone

commit explain 
1. Delete Header And zindex : header 삭제 및 백그라운드 컬러 설정과 zindex이미지별 위계 설정 
2. font Delete : 안사용하는 폰트 삭제 
3. Background Stop: src를 모두 backgroundImage로 관리할 수 있게 background.css 작업을 하다가 이미지별 스타일이 달라지는 오류가 생기길래 후 순위로 미뤘습니다 ㅠㅠ 추후 일괄 수정 
4. fontAdress : font 주소 동호님이 적어주신대로 수정 
5. code convention 설정 완료 
6. IntroBox  : 동호님이 주신 IntroBox 코드대로 수정 
7. IntrofixDongho: 동호님 IntroBox 수정 
8. IntroBoxAlign : IT업계 내 인재풀 위치 오른쪽 정렬 
9. 4mainContents : 4번째 메인 컨텐츠 작업 
10. Save : 4번째 메인 컨텐츠 작업 중간 저장
11. Primary color : 디쟌팀 지정 메인 색으로 변경 #0036FA
12. 4mainContentsSave : 4번째 메인 컨텐츠 작업 
13. PromptFont : 새로운 폰트 추가 
14. 4mainFinish : 4번째 메인 컨텐츠 완성  
15. FooterSave : 푸터 1차 작업 진행 
16. 

*/
const { Title, Text, Link } = Typography;
const { Content, Footer } = Layout;

interface IMainProps {}

const Main: FunctionComponent<IMainProps> = (props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ backgroundColor: "black" }}>
        {/*상단헤더의 스프린터 로고 삽입*/}
        <div
          style={{ marginRight: "auto", marginLeft: "70px", marginTop: "30px" }}
        >
          <img
            src="/logowhite.png"
            alt="Logo"
            style={{ maxWidth: "20%", height: "auto" }}
          />
        </div>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: 24,
                textAlign: "center",
              }}
            >
              {/* (1) 첫번째 메인 설명 글과 버튼 작업  */}
              <div style={{ position: "relative", top: "40px", zIndex: "0" }}>
                <img
                  src="/character.png" // 캐릭터 3명 이미지 스타일 지정
                  alt="character"
                  style={{
                    maxWidth: "35%",
                    height: "auto",
                  }}
                />
                <Typography.Title
                  level={1}
                  style={{
                    fontFamily: "PyeongChangPeace",
                    color: "white",
                    fontSize: "60px",
                    lineHeight: "150%",
                    marginTop: "-3px",
                  }}
                >
                  사이드 프로젝트를
                  <br />
                  시작하는 가장 쉽고 빠른 방법
                  <img
                    src="/sticker.png" // Beta 스티커 이미지 스타일 지정
                    alt="sticker"
                    style={{
                      position: "absolute",
                      top: 110,
                      left: 854,
                      maxWidth: "10%",
                      height: "auto",
                    }}
                  />
                </Typography.Title>
                <Typography.Text
                  style={{
                    fontFamily: "Pretendard-Regular",
                    fontSize: "17px",
                    color: "white",
                  }}
                >
                  개발자, 디자이너, 기획자 등 IT 업계 검증 가능한 다양한
                  팀원들을 만나보세요.
                </Typography.Text>
                <img
                  src="/ring.png"
                  alt="ring"
                  style={{
                    // 링 모양 이미지 스타일 조정
                    position: "absolute",
                    transform: "translate(-50%, -49%)",
                    left: "50%",
                    top: "calc(50% + 60px)",
                    zIndex: "-1",
                    maxWidth: "104%",
                    height: "auto",
                  }}
                />
              </div>

              <Footer
                style={{
                  textAlign: "center",
                  marginTop: "100px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    // CTA 버튼 스타일 지정
                    margin: "20px auto",
                    width: "fit-content",
                  }}
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeWhJrzkMPPpc-gRmurB45bHE3Xu8ga3-dbpfQej1NHXte9yw/viewform"
                    style={{
                      display: "inline-flex", // 버튼 리다이렉션 주소 지정 및 버튼 내 텍스트 스타일
                      alignItems: "center",
                      backgroundColor: primary,
                      color: "white",
                      padding: "13px 28px",
                      borderRadius: "50px",
                      textDecoration: "none",
                      fontSize: "21px",
                      fontFamily: "Pretendard-Medium",
                    }}
                    target="_blank"
                  >
                    <span style={{ marginRight: "10px" }}>
                      베타서비스 이용 신청하기
                    </span>
                    <img
                      src="../ei_arrow-left.png"
                      alt="button-icon"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>
                </div>
              </Footer>
            </div>

            {/* (2) 두번째 메인 설명글과 이미지 첨부 구현  */}
            <div style={{ position: "relative" }}>
              <img
                src="../mainimage2.png"
                alt="mainimage2"
                style={{
                  maxWidth: "73%", // 두번째 메인 이미지 스타일
                  height: "auto",
                  marginTop: "40px",
                  zIndex: "-2",
                }}
              />
              <Typography.Text
                style={{
                  //이미지 아래 메인 설명글 스타일
                  position: "absolute",
                  fontFamily: "Pretendard-SemiBold",
                  fontSize: "35px",
                  color: white,
                  bottom: "120px",
                  left: "50%",
                  transform: "translate(-50%, +100%)",
                }}
              >
                IT 업계 협업 풀 스프린터
              </Typography.Text>

              <Typography.Text
                style={{
                  //이미지 아래 서브 설명글 스타일
                  position: "absolute",
                  fontFamily: "Pretendard-Regular",
                  fontSize: "16px",
                  color: white,
                  top: "750px",
                  left: "50%",
                  transform: "translate(-50%, +50%)",
                }}
              >
                <br />
                사이드프로젝트 진행에서 가장 긴 시간이 걸리는 팀 모집 과정을
                <br />
                가장 간편하게 진행할 수 있는 IT 업계 협업 풀 스프린터
                베타서비스를 오픈했어요.
              </Typography.Text>
            </div>
          </div>
        </Content>
        {/* (3) 세번째 설명글과 동영상 첨부 작업 */}
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: "40px 100px",
              marginBottom: 100,
            }}
          >
            {/* (3)-1 첫번째 기능 설명 글 */}
            <div style={{ marginTop: "80px" }}>
              <IntroBox title={"프로필 등록하기"}>
                <div
                  style={{
                    fontFamily: "Pretendard-SemiBold",
                    fontSize: "45px",
                    marginTop: "25px", // IT 업계 협업 풀 스프린터와 간격 조절 
                  }}
                >
                  내 프로필 등록
                  <br />
                  {/* <span style={{ color: orange, lineHeight: "1.5" }}>
                  1분
                </span>{" "} */}
                  1분 안에 간편하게
                </div>
                {/* 서브 텍스트 */}
                <div
                  style={{
                    fontFamily: "Pretendard-Regular",
                    fontSize: "16px",
                    marginTop: 30,
                    lineHeight: "1.5",
                  }}
                >
                  기존에 사용하던 링크드인, 노션, 깃헙과 같은 기타 여러 링크로
                  <br />
                  복잡하게 프로필 및 커리어 내용을 작성할 필요없이,
                  <br />
                  1분 안에 내 프로필 등록이 가능해요.
                </div>
              </IntroBox>
            </div>

            {/* (3)-2 두번째 기능 설명 글 */}
            <div style={{ marginTop: "250px" }}>
              <IntroBox right title={"IT업계 내 인재풀"}>
                <div
                  style={{
                    fontFamily: "Pretendard-SemiBold",
                    fontSize: "45px",
                    marginTop: "25px",
                    textAlign: "right", // 오른쪽 정렬 추가
                  }}
                >
                  함께{" "}
                  {/* <span style={{ color: orange, lineHeight: "1.5" }}>성장</span> */}
                  성장할
                  <br />
                  좋은 팀과 팀원 찾기
                </div>
                {/*서브 텍스트 */}
                <div
                  style={{
                    fontFamily: "Pretendard-Regular",
                    fontSize: "16px",
                    marginTop: 30,
                    lineHeight: "1.5",
                    textAlign: "right", // 오른쪽 정렬 추가
                  }}
                >
                  개발자, 디자이너, 기획자 등 프로필 등록을 완료한 유저들은
                  <br />
                  팀원 구인 게시글 작성 및 개별 프로필 컨택 기능을 사용할 수
                  있어요.
                </div>
              </IntroBox>
            </div>

            {/* (3)-3 세번째 기능 설명 글 */}
            <div style={{ marginTop: "250px" }}>
              <IntroBox title={"테스트 진행 후 오픈"} backgroundColor={orange}>
                <div
                  style={{
                    fontFamily: "Pretendard-SemiBold",
                    fontSize: "45px",
                    marginTop: "25px",
                  }}
                >
                  협업 경험을 확인하고,
                  <br />
                  {/* <span style={{ color: orange, lineHeight: "1.5" }}>
                  1분
                </span>{" "} */}
                  검증된 팀원 구하기
                </div>
                {/* 서브 텍스트 */}
                <div
                  style={{
                    fontFamily: "Pretendard-Regular",
                    fontSize: "16px",
                    marginTop: 30,
                    lineHeight: "1.5",
                  }}
                >
                  함께할 팀원이 프로젝트를 끝까지 완수할 수 있는 사람인지,
                  <br />
                  과거 어떤 협업 경험이 있었는지 궁금하신가요?
                  <br />
                  상세 프로필 페이지 내 협업 역량 평가표로 확인해보세요!
                </div>
                {/* 이미지 */}
                <img
                  src="/teamworkimage.png"
                  alt="alerttextbox"
                  style={{
                    width: "43%", // 도형의 가로 크기의 절반
                    height: "auto", // 이미지 비율 유지
                    float: "right",
                    marginTop: "-285px",
                  }}
                />
              </IntroBox>
            </div>
          </div>
        </Content>
        {/* (4) 네번째 설명글과 이미지 첨부 작업 */}
        <Flex
          justify={"center"}
          align={"center"}
          style={{
            backgroundColor: primary,
            // padding: "0px 100px",
            position: "relative",
            minHeight: "75vh", // 파란색 배경 높이 조절
            marginTop: "100px", // 테스트 진행 후 오픈 컨텐츠 내리기
          }}
        >
          <div style={{ textAlign: "center", marginTop: "-50px" }}>
            {/* 검정색 버튼 모양의 도형 */}
            <div
              style={{
                backgroundColor: "black",
                width: "190px",
                height: "50px",
                borderRadius: "15px",
                marginRight: "10px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                margin: "auto", // 가운데 정렬을 위해 추가
              }}
            >
              {/* "서비스 이용방법" 텍스트 */}
              <div
                style={{
                  color: "white",
                  fontFamily: "Pretendard-Medium",
                  fontSize: "23px",
                }}
              >
                서비스 이용 방법
              </div>
            </div>
            {/* 메인 타이틀 텍스트 */}
            <div
              style={{
                fontFamily: "Pretendard-SemiBold",
                fontSize: "45px",
                color: "white",
                marginBottom: "20px",
                lineHeight: "150%", // 문장 사이 여백을 조절합니다.
                marginTop: "30px",
              }}
            >
              프로필 등록으로
              <br />
              인재풀 컨택 및 팀원 구인 등의
              <br />
              베타서비스 이용이 가능해요
            </div>

            {/* 서비스 이용 방법 도형 그룹 section */}
            <div style={{ marginTop: "70px" }}>
              <section
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {/* 서비스 이용 방법 (1) 도형과 텍스트와 이미지 */}
                <div
                  style={{
                    backgroundColor: "black",
                    width: "320px",
                    height: "400px",
                    borderRadius: "32px",
                    marginRight: "40px",
                    display: "inline-block",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    padding: "0 20px", // 텍스트 좌우 여백 설정
                    boxSizing: "border-box", // 내부 여백을 요소의 크기에 포함
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontFamily: "Prompt",
                      fontSize: "22px",
                      textAlign: "left", // 텍스트 왼쪽으로 정렬
                      paddingLeft: "15px", // 텍스트 좀 더 왼쪽으로 이동
                      marginTop: "25px", // 텍스트를 아래로 이동하여 이미지와 간격 조정
                    }}
                  >
                    STEP 1
                  </div>

                  {/* 이미지 (1) */}
                  <img
                    src="/Serviceimage1.png"
                    alt="ServiceInfoImage1"
                    style={{
                      width: "90%", // 도형의 가로 크기의 절반ㄹ
                      height: "auto", // 이미지 비율 유지
                      borderRadius: "32px", // 이미지에도 모서리를 둥글게
                      marginTop: "10px", // 텍스트와 이미지를 아래로 이동
                    }}
                  />
                  <div
                    style={{
                      color: "white",
                      fontFamily: "Pretendard-Light",
                      fontSize: "18px",
                      textAlign: "left", // 텍스트 왼쪽으로 정렬
                      paddingLeft: "10px", // 텍스트 좀 더 왼쪽으로 이동
                      lineHeight: "150%", // 문장 사이 여백을 조절합니다.
                      marginTop: "30px", // 텍스트를 아래로 이동하여 이미지와 간격 조정
                    }}
                  >
                    따로 이력서를 작성할 필요 없이, 기존에 관리하던 링크로
                    간편하게 내 프로필 등록하기.
                  </div>
                </div>

                {/* 서비스 이용 방법 (2) 도형과 텍스트와 이미지 */}
                <div
                  style={{
                    backgroundColor: "black",
                    width: "320px",
                    height: "400px",
                    borderRadius: "32px",
                    marginRight: "40px",
                    display: "inline-block",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    padding: "0 20px", // 텍스트 좌우 여백 설정
                    boxSizing: "border-box", // 내부 여백을 요소의 크기에 포함
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontFamily: "Prompt",
                      fontSize: "22px",
                      textAlign: "left", // 텍스트 왼쪽으로 정렬
                      paddingLeft: "15px", // 텍스트 좀 더 왼쪽으로 이동
                      marginTop: "25px", // 텍스트를 아래로 이동하여 이미지와 간격 조정
                    }}
                  >
                    STEP 2
                  </div>

                  {/* 이미지 (2) */}
                  <img
                    src="/Serviceimage2.png"
                    alt="ServiceInfoImage2"
                    style={{
                      width: "auto", // 이미지 비율 유지
                      height: "45%", // 도형의 세로 크기의 절반
                      margin: "10px", // 여백 설정
                      marginTop: "11px", // 텍스트와 이미지를 아래로 이동
                    }}
                  />
                  <div
                    style={{
                      color: "white",
                      fontFamily: "Pretendard-Light",
                      fontSize: "18px",
                      textAlign: "left", // 텍스트 왼쪽으로 정렬
                      paddingLeft: "10px", // 텍스트 좀 더 왼쪽으로 이동
                      lineHeight: "150%", // 문장 사이 여백을 조절합니다.
                      marginTop: "10px", // 텍스트를 아래로 이동하여 이미지와 간격 조정
                    }}
                  >
                    베타서비스 오픈 후 연락처와 메일로 전송되는 사이트 링크
                    확인하기
                  </div>
                </div>

                {/* 서비스 이용 방법 (3) 도형과 텍스트와 이미지 */}
                <div
                  style={{
                    backgroundColor: "black",
                    width: "320px",
                    height: "400px",
                    borderRadius: "32px",
                    marginRight: "10px",
                    display: "inline-block",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    padding: "0 20px", // 텍스트 좌우 여백 설정
                    boxSizing: "border-box", // 내부 여백을 요소의 크기에 포함
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontFamily: "Prompt",
                      fontSize: "22px",
                      textAlign: "left", // 텍스트 왼쪽으로 정렬
                      paddingLeft: "15px", // 텍스트 좀 더 왼쪽으로 이동
                      marginTop: "25px", // 텍스트를 아래로 이동하여 이미지와 간격 조정
                    }}
                  >
                    STEP 3
                  </div>

                  {/* 이미지 (3) */}
                  <img
                    src="/Serviceimage3.png"
                    alt="ServiceInfoImage3"
                    style={{
                      width: "auto", // 이미지 비율 유지
                      height: "45%", // 도형의 세로 크기의 절반
                      margin: "10px", // 여백 설정
                      marginTop: "10px", // 텍스트와 이미지를 아래로 이동
                    }}
                  />
                  <div
                    style={{
                      color: "white",
                      fontFamily: "Pretendard-Light",
                      fontSize: "18px",
                      textAlign: "left", // 텍스트 왼쪽으로 정렬
                      paddingLeft: "15px", // 텍스트 좀 더 왼쪽으로 이동
                      lineHeight: "150%", // 문장 사이 여백을 조절합니다.
                      marginTop: "10px", // 텍스트를 아래로 이동하여 이미지와 간격 조정
                    }}
                  >
                    사이트 접속 후, 인재풀 둘러보기
                    <br />
                    및 게시글 작성하기 등의 서비스
                    <br />
                    이용하기.
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Flex>
        ;{/* (5) Footer */}
        <Footer
          style={{
            backgroundColor: "#002DCC", // 배경색 설정
            textAlign: "center",
            height: "20vh", // 약 4분의 1 높이 설정
            marginTop: "-20px", // 여백 제거
          }}
        >
          {/* 가운데 정렬된 텍스트 */}
          <div
            style={{
              color: "white",
              fontFamily: "Pretendard-Light",
              fontSize: "18px",
            }}
          >
            <a
              href="https://www.sprinterteam.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              www.sprinterteam.com
            </a>
          </div>

          <div style={{ marginTop: "20px" }}>
            <img
              src="/logowhite.png"
              alt="Logo"
              style={{ maxWidth: "8%", height: "auto" }}
            />
          </div>
        </Footer>
      </Layout>
    </>
  );
};

export default Main;
