"use client";
import React, { FunctionComponent } from "react";
import { Layout, theme, Typography, Flex, Row, Col, Button } from "antd";
import { white, orange, primary } from "@/app/color";
import IntroBox from "@/app/component/IntroBox";
import MainHeader from "@/app/mainheader";
import LeftRight from "@/app/component/LeftRight";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

const { Content, Footer } = Layout;

interface IMainProps {}

const Main: FunctionComponent<IMainProps> = (props) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<>
			<MainHeader>
				<Flex
					justify={"center"}
					align={"center"}
					style={{
						flexDirection: "column",
						width: "100%",
						maxWidth: "1200px",
					}}
				>
					<Content style={{ width: "100%", padding: "24px 16px" }}>
						<div
							style={{
								padding: 24,
								textAlign: "center",
								width: "100%",
								maxWidth: "1200px",
							}}
						>
							<Flex
								justify={"center"}
								align={"center"}
								style={{
									position: "relative",
									textAlign: "center",
									flexDirection: "column",
									backgroundImage:
										"url('/intro/main1/intro_main1_sticker2.png')", // 이미지 경로 수정 3
									backgroundSize: "cover",
									padding: "40px 0",
									backgroundPositionX: "center",
									backgroundPositionY: -100,
									backgroundRepeat: "no-repeat",
									width: "100%",
								}}
							>
								{/* (1) 첫번째 메인 설명 글과 버튼 작업 */}
								<img
									src="/intro/main1/intro_main1_character.png" // 이미지 경로 수정 1
									alt="main1_character" // 이미지 이름 수정 1
									style={{
										width: "100%",
										maxWidth: 400,
										height: "auto",
									}}
								/>
								<img
									src="/intro/main1/intro_main1_sticker.png" // 이미지 경로 수정 2
									alt="main1_sticker" // 이미지 이름 수정 2
									className="beta_sticker"
								/>
								<Typography.Title
									className="big_title"
									style={{
										fontFamily: "PyeongChangPeace-Bold",
										color: "white",
										lineHeight: "150%",
										marginTop: "-3px",
									}}
								>
									사이드 프로젝트를
									<br />
									시작하는 가장 쉽고 빠른 방법
								</Typography.Title>
								<Typography.Text
									style={{
										fontFamily: "Pretendard-Regular",
										fontSize: "1.5rem", // 미디어 쿼리를 사용하여 화면 크기에 따라 동적으로 조절됨
										color: "white",
									}}
								>
									개발자, 디자이너, 기획자 등 IT 업계 검증 가능한 다양한
									팀원들을 만나보세요.
								</Typography.Text>
								<div
									style={{
										// CTA 버튼 스타일 지정
										width: "fit-content",
										paddingTop: 60,
									}}
								>
									<Button
										type="primary"
										size="large"
										shape="round"
										style={{
											fontFamily: "Pretendard-Regular",
											height: "auto",
											width: "auto",
											fontSize: 24,
											display: "flex",
											whiteSpace: "break-spaces",
											justifyContent: "center",
											alignItems: "center",
										}}
										onClick={() => {
											sendGTMEvent({
												event: "custom_event",
												value: "apply_beta",
											});
											sendGAEvent({
												event: "custom_event",
												value: "apply_beta",
											});
										}}
										href="https://docs.google.com/forms/d/e/1FAIpQLSeWhJrzkMPPpc-gRmurB45bHE3Xu8ga3-dbpfQej1NHXte9yw/viewform"
										target="_blank"
									>
										<span>베타서비스 이용 신청하기</span>
										<img
											src="/icons/intro_arrowleft.png"
											alt="arrow_icon"
											style={{
												width: "3rem",
												height: "3rem",
												marginLeft: 10,
											}}
										/>
									</Button>
								</div>
							</Flex>

							{/* (2) 두번째 메인 설명글과 이미지 첨부 구현  */}
							<Flex
								justify={"center"}
								align={"center"}
								style={{
									flexDirection: "column",
									width: "100%",
									maxWidth: "1200px",
								}}
							>
								<div
									style={{
										backgroundImage:
											"url('/intro/main2/intro_main2_character.png')", //이미지 경로 수정 5
										backgroundSize: "contain",
										backgroundRepeat: "no-repeat",
										backgroundPosition: "center",
										maxWidth: 700, // 두번째 메인 이미지 스타일
										width: "100%",
										height: 700,
									}}
								/>

								<Typography.Text
									style={{
										//이미지 아래 메인 설명글 스타일
										fontFamily: "Pretendard-Regular",
										fontSize: "2.5rem",
										fontWeight: "bold",
										color: white,
										marginTop: "-10rem",
									}}
								>
									IT 업계 협업 풀 스프린터
								</Typography.Text>

								<Typography.Text
									style={{
										//이미지 아래 서브 설명글 스타일
										fontFamily: "Pretendard-Regular",
										fontSize: "1rem",
										color: white,
									}}
								>
									<br />
									사이드프로젝트 진행에서 가장 긴 시간이 걸리는 팀 모집 과정을
									<br />
									가장 간편하게 진행할 수 있는 IT 업계 협업 풀 스프린터
									베타서비스를 오픈했어요.
								</Typography.Text>
							</Flex>
						</div>
					</Content>

					{/* (3) 세번째 설명글과 동영상 첨부 작업 */}
					<Content style={{ padding: "24px 16px", width: "100%" }}>
						<div
							style={{
								padding: "10px",
								marginBottom: 100,
							}}
						>
							{/* (3)-1 첫번째 기능 설명 글 */}
							<div style={{ marginTop: "80px" }}>
								<LeftRight
									left={
										<IntroBox title={"프로필 등록하기"}>
											<div
												style={{
													fontFamily: "Pretendard-Regular",
													fontWeight: "bold",
													fontSize: "45px",
													marginTop: "25px", // IT 업계 협업 풀 스프린터와 간격 조절
													lineHeight: "1.5",
												}}
											>
												내 프로필 등록
												<br />
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
												기존에 사용하던 링크드인, 노션, 깃헙과 같은 기타 여러
												링크로
												<br />
												복잡하게 프로필 및 커리어 내용을 작성할 필요없이,
												<br />
												1분 안에 내 프로필 등록이 가능해요.
											</div>
										</IntroBox>
									}
									leftWeight={4}
									right={
										<Flex
											align={"flex-start"}
											justify="center"
											style={{ width: "100%" }}
										>
											<div
												style={{
													borderRadius: 27,
													overflow: "hidden",
													width: "100%",
													height: 300,
												}}
											>
												<iframe
													width="100%"
													height="300"
													src={`https://www.youtube.com/embed/bHoefwpj6L8`}
													title="YouTube video player"
													frameBorder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen
												/>
											</div>
										</Flex>
									}
									rightWeight={6}
									rightStyle={{ marginLeft: 80, width: "100%" }}
								/>
							</div>

							{/* (3)-2 두번째 기능 설명 글 */}
							<div style={{ marginTop: "250px" }}>
								<LeftRight
									right={
										<IntroBox right title={"IT업계 내 인재풀"}>
											<div
												style={{
													fontFamily: "Pretendard-Regular",
													fontWeight: "bold",
													fontSize: "45px",
													marginTop: "25px", // IT 업계 협업 풀 스프린터와 간격 조절
													textAlign: "right", // 오른쪽 정렬 추가
													lineHeight: "1.5",
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
												개발자, 디자이너, 기획자 등 프로필 등록을 완료한
												유저들은
												<br />
												팀원 구인 게시글 작성 및 개별 프로필 컨택 기능을 사용할
												수 있어요.
											</div>
										</IntroBox>
									}
									rightWeight={6}
									left={
										<Flex
											align={"flex-start"}
											justify="center"
											style={{ width: "100%" }}
										>
											<div
												style={{
													borderRadius: 27,
													overflow: "hidden",
													width: "100%",
													height: 300,
												}}
											>
												<iframe
													width="100%"
													height="300"
													src={`https://www.youtube.com/embed/f8YqprA7hms`}
													title="YouTube video player"
													frameBorder="0" // frameborder로 넣기
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen
												/>
											</div>
										</Flex>
									}
									leftWeight={4}
									leftStyle={{ marginRight: 80 }}
								/>

								{/* (3)-3 세번째 기능 설명 글 */}
								<div style={{ marginTop: "250px" }}>
									<LeftRight
										left={
											<IntroBox
												title={"테스트 진행 후 오픈"}
												className="it_talents"
												backgroundColor={orange}
											>
												<div
													style={{
														fontFamily: "Pretendard-Regular",
														fontWeight: "bold",
														fontSize: "45px",
														marginTop: 25,
														lineHeight: "1.5",
													}}
												>
													협업 경험을 확인하고,
													<br />
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
													함께할 팀원이 프로젝트를 끝까지 완수할 수 있는
													사람인지,
													<br />
													과거 어떤 협업 경험이 있었는지 궁금하신가요?
													<br />
													상세 프로필 페이지 내 협업 역량 평가표로 확인해보세요!
												</div>
												{/* (3)-3 세번째 기능 설명 아래 안내 메세지*/}
												<div
													style={{
														position: "relative",
														backgroundColor: "rgba(255, 255, 255, 0.1)", // 배경색
														borderRadius: "15px", // 도형의 모서리를 둥글게 만듦
														display: "flex", // 내부 요소들을 가로로 정렬
														alignItems: "center", // 내부 요소들을 세로로 정렬
														padding: "20px", // 내부 여백
														marginTop: 30,
													}}
												>
													{/* 느낌표 아이콘 */}
													<img
														src="icons/intro_alerticon.png"
														alt="alerticon"
														style={{
															width: "30px",
															height: "auto",
															marginRight: "10px",
														}}
													/>
													{/* 안내 텍스트 */}
													<span
														style={{
															fontFamily: "Arial",
															color: "white",
															fontSize: "0.8rem",
															lineHeight: "1.5",
														}}
													>
														해당 기능은 서비스 오픈 이후 유저 테스트를 거쳐
														적용되며,
														<br />
														기술 평가를 제외한 협업 역량에 대해서 다룹니다.
													</span>
												</div>
											</IntroBox>
										}
										leftWeight={5}
										right={
											<Flex align={"flex-start"} justify="center">
												<div>
													<img
														src="/intro/main2/intro_main2_image.png"
														alt="teamwork"
														style={{
															width: "100%", // 도형의 가로 크기의 절반
															height: "auto", // 이미지 비율 유지
														}}
													/>
												</div>
											</Flex>
										}
										rightWeight={5}
										rightStyle={{ marginLeft: 80 }}
									/>
								</div>
							</div>
						</div>
					</Content>
				</Flex>
			</MainHeader>
			{/* (4) 네번째 설명글과 이미지 첨부 작업 */}
			<Flex
				justify={"center"}
				align={"center"}
				style={{
					backgroundColor: primary,
					padding: "120px 10px",
					position: "relative",
					minHeight: "75vh", // 파란색 배경 높이 조절
				}}
			>
				<div style={{ textAlign: "center" }}>
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
								fontFamily: "Pretendard-Regular",
								fontSize: "23px",
							}}
						>
							서비스 이용 방법
						</div>
					</div>
					{/* 메인 타이틀 텍스트 */}
					<div
						style={{
							fontFamily: "Pretendard-Regular",
							fontWeight: "bold",
							fontSize: "45px",
							color: "white",
							marginBottom: "20px",
							lineHeight: "1.5", // 문장 사이 여백을 조절합니다.
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
					<Flex
						justify={"center"}
						align={"center"}
						style={{
							flexDirection: "column",
							width: "100%",
							maxWidth: "1200px",
							paddingTop: "20px",
							paddingBottom: "20px",
						}}
					>
						<Row gutter={[16, 16]}>
							<Col
								xs={{ span: 24 }}
								sm={{ span: 24 }}
								md={{ span: 24 }}
								lg={{ span: 8 }}
							>
								{/* 서비스 이용 방법 (1) 도형과 텍스트와 이미지 */}
								<div
									style={{
										width: "100%",
										backgroundColor: "black",
										borderRadius: "32px",
										display: "inline-block",
										alignItems: "center",
										justifyContent: "center",
										padding: "20px", // 텍스트 좌우 여백 설정
										boxSizing: "border-box", // 내부 여백을 요소의 크기에 포함
									}}
								>
									<div
										style={{
											color: "white",
											fontFamily: "Prompt",
											fontSize: "22px",
											textAlign: "left", // 텍스트 왼쪽으로 정렬
										}}
									>
										STEP 1
									</div>

									{/* 이미지 (1) */}
									<img
										src="/intro/main3/intro_main3_image1.png" //이미지 경로 수정 8
										alt="main3_image1" //이미지 이름 수정 8
										style={{
											width: 220, // 이미지 비율 유지
											height: 160,
										}}
									/>
									<div
										style={{
											color: "white",
											fontFamily: "Pretendard-Regular",
											fontWeight: 200,
											fontSize: "18px",
											textAlign: "left", // 텍스트 왼쪽으로 정렬
											lineHeight: "150%", // 문장 사이 여백을 조절합니다.
											marginTop: "30px", // 텍스트를 아래로 이동하여 이미지와 간격 조정
										}}
									>
										따로 이력서를 작성할 필요 없이, 기존에 관리하던 링크로
										간편하게 내 프로필 등록하기
									</div>
								</div>
							</Col>
							<Col
								xs={{ span: 24 }}
								sm={{ span: 24 }}
								md={{ span: 24 }}
								lg={{ span: 8 }}
							>
								{/* 서비스 이용 방법 (2) 도형과 텍스트와 이미지 */}
								<div
									style={{
										width: "100%",
										backgroundColor: "black",
										borderRadius: "32px",
										display: "inline-block",
										alignItems: "center",
										justifyContent: "center",
										padding: "20px", // 텍스트 좌우 여백 설정
										boxSizing: "border-box", // 내부 여백을 요소의 크기에 포함
									}}
								>
									<div
										style={{
											color: "white",
											fontFamily: "Prompt",
											fontSize: "22px",
											textAlign: "left", // 텍스트 왼쪽으로 정렬
										}}
									>
										STEP 2
									</div>

									{/* 이미지 (2) */}
									<img
										src="/intro/main3/intro_main3_image2.png" //이미지 경로 수정 9
										alt="main3_image2" //이미지 이름 수정 9
										style={{
											width: 220, // 이미지 비율 유지
											height: 160,
										}}
									/>
									<div
										style={{
											color: "white",
											fontFamily: "Pretendard-Regular",
											fontWeight: 200,
											fontSize: "18px",
											textAlign: "left", // 텍스트 왼쪽으로 정렬
											lineHeight: "150%", // 문장 사이 여백을 조절합니다.
											marginTop: "30px", // 텍스트를 아래로 이동하여 이미지와 간격 조정
										}}
									>
										베타서비스 오픈 후 연락처와 메일로 전송되는 사이트 링크
										확인하기
									</div>
								</div>
							</Col>
							<Col
								xs={{ span: 24 }}
								sm={{ span: 24 }}
								md={{ span: 24 }}
								lg={{ span: 8 }}
							>
								{/* 서비스 이용 방법 (3) 도형과 텍스트와 이미지 */}
								<div
									style={{
										width: "100%",
										backgroundColor: "black",
										borderRadius: "32px",
										display: "inline-block",
										alignItems: "center",
										justifyContent: "center",
										padding: "20px", // 텍스트 좌우 여백 설정
										boxSizing: "border-box", // 내부 여백을 요소의 크기에 포함
									}}
								>
									<div
										style={{
											color: "white",
											fontFamily: "Prompt",
											fontSize: "22px",
											textAlign: "left", // 텍스트 왼쪽으로 정렬
										}}
									>
										STEP 3
									</div>

									{/* 이미지 (3) */}
									<img
										src="/intro/main3/intro_main3_image3.png" //이미지 경로 수정 10
										alt="main3_image3" //이미지 이름 수정 10
										style={{
											width: 220, // 이미지 비율 유지
											height: 160,
										}}
									/>
									<div
										style={{
											color: "white",
											fontFamily: "Pretendard-Regular",
											fontWeight: 200,
											fontSize: "18px",
											textAlign: "left", // 텍스트 왼쪽으로 정렬
											lineHeight: "150%", // 문장 사이 여백을 조절합니다.
											marginTop: "30px", // 텍스트를 아래로 이동하여 이미지와 간격 조정
										}}
									>
										사이트 접속 후, 인재풀 둘러보기 및 게시글 작성하기 등의
										서비스 이용하기
									</div>
								</div>
							</Col>
						</Row>
					</Flex>
				</div>
			</Flex>
			{/* (5) Footer */}
			<Footer
				style={{
					backgroundColor: "#002DCC", // 배경색 설정
					textAlign: "center",
					paddingTop: 50,
					paddingBottom: 50,
				}}
			>
				{/* 가운데 정렬된 텍스트 */}
				<div
					style={{
						color: "white",
						fontFamily: "Pretendard-Regular",
						fontWeight: 200,
						fontSize: 20,
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
				<div style={{ marginTop: 20, fontSize: 20 }}>
					All rights reserved sprinter
				</div>
				<div style={{ marginTop: 25 }}>
					<img
						src="/logo/big_whitelogo.png" // 로고 경로 수정 11
						alt="Logo"
						style={{ width: 110, height: "auto" }}
					/>
				</div>
			</Footer>
		</>
	);
};

export default Main;
