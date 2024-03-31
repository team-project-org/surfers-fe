"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import { Layout, theme, Typography, Space, Flex } from "antd";
import ResponseCarousel from "./responseCarousel";
import MainHeader from "@/app/mainheader";
import "@/app/fonts/font.css";
import { white, orange, primary } from "@/app/color";
import IntroBox from "@/app/component/IntroBox";

/*

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
                  fontSize: "26px",
                  color: white,
                  bottom: "120px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
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
                  transform: "translate(-50%, -50%)",
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
            <IntroBox title={"프로필 등록하기"}>
              <div
                style={{
                  fontFamily: "Pretendard-SemiBold",
                  fontSize: "45px",
                  marginTop: "25px",
                }}
              >
                내 프로필 등록
                <br />
                <span style={{ color: orange, lineHeight: "1.5" }}>
                  1분
                </span>{" "}
                안에 간편하게
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

            {/* (3)-2 두번째 기능 설명 글 */}
            <div style={{ textAlign: "right", marginTop: "200px" }}>
              <IntroBox title={"IT업계 내 인재풀"}>
                <div
                  style={{
                    fontFamily: "Pretendard-SemiBold",
                    fontSize: "45px",
                    marginTop: "25px",
                    textAlign: "right", // 오른쪽 정렬 추가
                  }}
                >
                  함께{" "}
                  <span style={{ color: orange, lineHeight: "1.5" }}>성장</span>
                  할
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
          </div>
        </Content>

        {/* <Footer style={{ textAlign: "center" }}>
					Sprinter ©{new Date().getFullYear()} Created by dongho1596
				</Footer>  */}
      </Layout>


      {/* (4) 네번째 설명글과 이미지 첨부 작업 */}
      <Flex
        justify={"center"}
        align={"center"}
        style={{
          backgroundColor: primary,
          padding: "500px 100px",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {/* 검정색 버튼 모양의 도형 */}
          <div
            style={{
              backgroundColor: "black",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              marginRight: "10px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            {/* "서비스 이용방법" 텍스트 */}
            <div
              style={{
                color: "white",
                fontFamily: "Pretendard-SemiBold",
                fontSize: "18px",
              }}
            >
              서비스 이용방법
            </div>
          </div>
          {/* 메인 타이틀 텍스트 */}
          <div
            style={{
              fontFamily: "Pretendard-SemiBold",
              fontSize: "45px",
              color: "white",
              marginBottom: "20px",
            }}
          >
            프로필 등록으로
            <br />
            인재풀 컨택 및 팀원 구인등의
            <br />
            서비스 이용이 가능해요
          </div>
          {/* 서비스 이용 방법 도형 그룹 */}
          <div>
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
                  width: "300px",
                  height: "446px",
                  borderRadius: "32px",
                  marginRight: "10px",
                  display: "inline-block",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontFamily: "Pretendard-SemiBold",
                    fontSize: "18px",
                  }}
                >
                  안녕하세요
                </div>
              </div>

              {/* 서비스 이용 방법 (2) 도형과 텍스트와 이미지 */}
              <div
                style={{
                  backgroundColor: "black",
                  width: "300px",
                  height: "446px",
                  borderRadius: "32px",
                  marginRight: "10px",
                  display: "inline-block",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontFamily: "Pretendard-SemiBold",
                    fontSize: "18px",
                  }}
                >
                  추가된 도형 1
                </div>
              </div>

              {/* 서비스 이용 방법 (3) 도형과 텍스트와 이미지 */}
              <div
                style={{
                  backgroundColor: "black",
                  width: "300px",
                  height: "446px",
                  borderRadius: "32px",
                  marginRight: "10px",
                  display: "inline-block",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontFamily: "Pretendard-SemiBold",
                    fontSize: "18px",
                  }}
                >
                  추가된 도형 2
                </div>
              </div>
            </section>
          </div>
        </div>
      </Flex>
      ;
    </>
  );
};

export default Main;
