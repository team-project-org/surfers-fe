"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import { Layout, theme, Typography, Space, Flex } from "antd";
import ResponseCarousel from "./responseCarousel";
import MainHeader from "@/app/mainheader";
import "../fonts/font.css";
import { white, orange, primary } from "@/app/color";
import IntroBox from "@/app/component/IntroBox";

/*

[feat] info-main-contents-and-button by ricksclone

1.로고 화질 개선 => mainheader에 화질 개선된 img 파일로 넣고 globals.css 크기 조정해서 완료
2.폰트 설치 및 css 파일 구성 => src 안에 fonts 안에 폰트 다 넣어놓고, import 후 사용 완료
3.메인 문구 작성 및 배치 => 완료 
4.서브 문구 작성 및 배치 => 완료 
5.버튼 제작 및 버튼 내용 구성과 아이콘 삽입 => 완료 
6.버튼내 링크 연결 => 완료 
7.캐릭터, 아이콘, 링 배치 => 완료
8.서비스 Q&A 빛 서비스 소개 헤더 주석처리 

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
			<MainHeader>
				<Layout style={{ color: white }}>
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
								{/* 첫번째 메인 설명글 및 이미지와 CTA 버튼 작업  */}
								<div style={{ position: "relative", top: "40px" }}>
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

								<Footer style={{ textAlign: "center", marginTop: "100px" }}>
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

							{/* 두번째 메인 설명글과 이미지 첨부 구현  */}

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

					{/* 세번째 메인 설명글과 동영상 첨부 작업 => 동영상 후 순위 */}

					<Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
						<div
							style={{
								padding: "40px 100px",
								marginBottom: 100,
							}}
						>
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
								{/* 도형 아래 서브 텍스트 */}
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

							{/* 3-1 기능 설명 문구 및 도형 구성  */}
							<div>
								<div
									style={{
										width: "180px",
										height: "50px",
										backgroundColor: primary,
										borderRadius: "15px",
										textAlign: "center",
										display: "inline-flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									{/* 도형 안의 프로필 등록하기 텍스트 */}
									<div
										style={{
											fontFamily: "Pretendard-Medium",
											fontSize: "24px",
											color: white,
											margin: "0",
										}}
									>
										프로필 등록하기
									</div>
								</div>
								{/* 도형 아래 메인 텍스트 */}
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
								{/* 도형 아래 서브 텍스트 */}
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
							</div>

							{/* 3-2 기능 설명 문구 및 도형 구성  */}
							<div
								style={{
									width: "100%",
									position: "relative",
									marginTop: "100px",
									textAlign: "left",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<div>
									<div
										style={{
											width: "auto",
											height: "50px",
											backgroundColor: primary,
											borderRadius: "15px",
											textAlign: "center",
											display: "inline-flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										{/* 도형 안의 프로필 등록하기 텍스트 */}
										<div
											style={{
												fontFamily: "Pretendard-Medium",
												fontSize: "24px",
												color: white,
												margin: "0",
											}}
										>
											IT 업계 내 인재풀
										</div>
									</div>
								</div>
								<div
									style={{
										fontFamily: "Pretendard-SemiBold",
										fontSize: "45px",
										marginTop: "25px",
										textAlign: "right",
									}}
								>
									함께{" "}
									<span style={{ color: orange, lineHeight: "1.5" }}>성장</span>
									할<br />
									좋은 팀과 팀원 찾기
								</div>
								{/* 도형 아래 서브 텍스트 */}
								<div
									style={{
										fontFamily: "Pretendard-Regular",
										fontSize: "16px",
										marginTop: "30px",
										lineHeight: "1.5",
										textAlign: "right",
									}}
								>
									개발자, 디자이너, 기획자 등 프로필 등록을 완료한 유저들은
									<br />
									팀원 구인 게시글 작성 및 개별 프로필 컨택 기능을 사용할 수
									있어요.
								</div>
							</div>

							{/* 3-3 협업 과정의 신뢰성 구성  */}
							<div>
								<div
									style={{
										width: "180px",
										height: "50px",
										backgroundColor: primary,
										borderRadius: "15px",
										textAlign: "center",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									{/* 도형 안의 프로필 등록하기 텍스트 */}
									<div
										style={{
											fontFamily: "Pretendard-Medium",
											fontSize: "24px",
											color: "white",
											margin: "0",
										}}
									>
										협업 과정의 신뢰성
									</div>
								</div>
								{/* 도형 아래 메인 텍스트 */}
								<div
									style={{
										fontFamily: "Pretendard-SemiBold",
										fontSize: "45px",
										marginTop: "25px",
									}}
								>
									협업 점수 기능 사용시
									<br />
									작성할 문구와 내용
								</div>
								{/* 도형 아래 서브 텍스트 */}
								<div
									style={{
										fontFamily: "Pretendard-Regular",
										fontSize: "16px",
										marginTop: 30,
										width: 500,
										lineHeight: "1.5",
									}}
								>
									나와 함께 일하는 사람이 신뢰 가능한지?
									<br />
									사이드프로젝트에서 중요한건 기본적인 스킬과 뛰어난 협업
									역량입니다. 함께할 팀원들이 프로젝트를 끝까지 완수할 수 있는
									사람인지, 서비스 내 협업 점수표를 확인 해보세요.
								</div>
							</div>
						</div>
					</Content>
					{/* <Footer style={{ textAlign: "center" }}>
					Sprinter ©{new Date().getFullYear()} Created by dongho1596
				</Footer>  */}
				</Layout>
			</MainHeader>
			<Flex
				justify={"center"}
				align={"center"}
				style={{ backgroundColor: primary, padding: "1000px 100px" }}
			>
				여기에 네번쨰 설명글 넣어주시면 좋을 것 같아요
			</Flex>
		</>
	);
};

export default Main;
