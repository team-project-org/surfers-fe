"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import { Layout, theme, Typography, Space } from "antd";
import ResponseCarousel from "./responseCarousel";
import "../fonts/font.css";

const { Title, Text, Link } = Typography;
const { Content, Footer } = Layout;

interface IMainProps { }

const Main: FunctionComponent<IMainProps> = (props) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
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
							{/* 첫번째 메인 설명글 및 이미지와 CTA 버튼 작업  */}

							<div style={{ position: 'relative', top: '40px', zIndex: '0'  }}>
								<img
									src="../character.png"  // 캐릭터 3명 이미지 스타일 지정  
									alt="character"
									style={{
										maxWidth: '35%',
										height: 'auto',
									}}
								/>
								<Typography.Title level={1} style={{ fontFamily: 'PyeongChangPeace', color: 'white', fontSize: '60px', lineHeight: '150%', marginTop: '-3px' }}>
									사이드 프로젝트를<br />
									시작하는 가장 쉽고 빠른 방법
									<img
										src="../sticker.png"  // Beta 스티커 이미지 스타일 지정 
										alt="sticker"
										style={{
											position: 'absolute',
											top: 110,
											left: 854,
											maxWidth: '10%',
											height: 'auto',
										}}
									/>
								</Typography.Title>
								<Typography.Text style={{ fontFamily: 'Pretendard-Regular', fontSize: '17px', color: 'white' }}>
									개발자, 디자이너, 기획자 등 IT 업계 검증 가능한 다양한 팀원들을 만나보세요.
								</Typography.Text>
								<img src="../ring.png" alt="ring" style={{ // 링 모양 이미지 스타일 조정 
									position: 'absolute',
									transform: 'translate(-50%, -49%)',
									left: '50%',
									top: 'calc(50% + 60px)',
									zIndex: '-1',
									maxWidth: '104%',
									height: 'auto',
								}} />
							</div>
							<Footer style={{ textAlign: "center", marginTop: "100px",  position: "relative"}}>
								<div style={{ 	// CTA 버튼 스타일 지정
									margin: '20px auto',
									width: 'fit-content',
								}}>
									<a href="https://docs.google.com/forms/d/e/1FAIpQLSeWhJrzkMPPpc-gRmurB45bHE3Xu8ga3-dbpfQej1NHXte9yw/viewform" style={{
										display: 'inline-flex', // 버튼 리다이렉션 주소 지정 및 버튼 내 텍스트 스타일
										alignItems: 'center',
										backgroundColor: '#0012FA',
										color: 'white',
										padding: '13px 28px',
										borderRadius: '50px',
										textDecoration: 'none',
										fontSize: '21px',
										fontFamily: 'Pretendard-Medium',
										zIndex: 1,
									}}>
										<span style={{ marginRight: '10px' , }}>베타서비스 이용 신청하기</span>
										<img src="../ei_arrow-left.png" alt="button-icon" style={{ width: '35px', height: '35px' }} />
									</a>
								</div>
							</Footer>
						</div>

						{/* 두번째 메인 설명글과 이미지 첨부 구현  */}

						<div style={{ position: 'relative' }}>
							<img src="../mainimage2.png" alt="mainimage2" style={{
								maxWidth: '73%', // 두번째 메인 이미지 스타일 
								height: 'auto',
								marginTop: '40px',
								zIndex: '-2'
							}} />
							<Typography.Text style={{ //이미지 아래 메인 설명글 스타일
								position: 'absolute',
								fontFamily: 'Pretendard-SemiBold',
								fontSize: '26px',
								color: 'white',
								bottom: '120px',
								left: '50%',
								transform: 'translate(-50%, -50%)',
							}}>
								IT 업계 협업 풀 스프린터
							</Typography.Text>

							<Typography.Text style={{ //이미지 아래 서브 설명글 스타일
								position: 'absolute',
								fontFamily: 'Pretendard-Regular',
								fontSize: '16px',
								color: 'white',
								top: '750px',
								left: '50%',
								transform: 'translate(-50%, -50%)',
							}}>
								<br />사이드프로젝트 진행에서 가장 긴 시간이 걸리는 팀 모집 과정을<br />
								가장 간편하게 진행할 수 있는 IT 업계 협업 풀 스프린터 베타서비스를 오픈했어요.
							</Typography.Text>

						</div>
					</div>
				</Content>


				{/* 세번째 메인 설명글과 동영상 첨부 작업 => 동영상 후 순위 */}

				<Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
					<div
						style={{
							padding: 24,
						}}
					>
						{/* 3-1 기능 설명 문구 및 도형 구성  */}
						<div style={{ position: 'relative', marginTop: '30px', textAlign: 'left', marginLeft: '100px', display: 'flex', flexDirection: 'column' }}>
							<div style={{ width: '180px', height: '50px', backgroundColor: '#0012FA', borderRadius: '15px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								{/* 도형 안의 프로필 등록하기 텍스트 */}
								<p style={{ fontFamily: 'Pretendard-Medium', fontSize: '24px', color: 'white', margin: '0' }}>
									프로필 등록하기
								</p>
							</div>
							{/* 도형 아래 메인 텍스트 */}
							<p style={{ fontFamily: 'Pretendard-SemiBold', fontSize: '45px', marginTop: '25px' }}>
								내 프로필 등록<br />
								<span style={{ color: '#FFAD0E', lineHeight: '1.5' }}>1분</span> 안에 간편하게
							</p>
							{/* 도형 아래 서브 텍스트 */}
							<p style={{ fontFamily: 'Pretendard-Regular', fontSize: '16px', marginTop: '-20px', lineHeight: '1.5' }}>
								기존에 사용하던 링크드인, 노션, 깃헙과 같은 기타 여러 링크로<br />
								복잡하게 프로필 및 커리어 내용을 작성할 필요없이,<br />
								1분 안에 내 프로필 등록이 가능해요.
							</p>
						</div>


						{/* 3-2 기능 설명 문구 및 도형 구성  */}
						<div style={{ position: 'relative', marginTop: '240px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '100px' }}>
								<div style={{ width: '200px', height: '50px', backgroundColor: '#0012FA', borderRadius: '15px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									{/* 도형 안의 프로필 등록하기 텍스트 */}
									<p style={{ fontFamily: 'Pretendard-Medium', fontSize: '24px', color: 'white', margin: '0' }}>
										IT 업계 내 인재풀
									</p>
								</div>
							</div>
							{/* 도형 아래 메인 텍스트 */}
							<p style={{ fontFamily: 'Pretendard-SemiBold', fontSize: '45px', marginTop: '25px', textAlign: 'right', marginRight: '100px' }}>
								함께 <span style={{ color: '#FFAD0E', lineHeight: '1.5' }}>성장</span>할<br />좋은 팀과 팀원 찾기
							</p>
							{/* 도형 아래 서브 텍스트 */}
							<p style={{ fontFamily: 'Pretendard-Regular', fontSize: '16px', marginTop: '-15px', lineHeight: '1.5', textAlign: 'right', marginRight: '100px' }}>
								개발자, 디자이너, 기획자 등 프로필 등록을 완료한 유저들은<br />
								팀원 구인 게시글 작성 및 개별 프로필 컨택 기능을 사용할 수 있어요.
							</p>
						</div>
					</div>
				</Content>



				{/* 네번째 메인 설명글 작업  */}
				<Content style={{ padding: 0, overflow: "hidden", marginTop: '240px', width: "100vw" }}>
					<div
						style={{
							backgroundColor: "#0012FA",
							height: 800,
							borderRadius: 0,
							width: "100vw", // 화면 전체 너비로 설정
							position: "relative", // 부모 요소 설정
							left: "50%", // 가운데 정렬을 위해 왼쪽으로 50% 이동
							transform: "translateX(-50%)", // 왼쪽으로 이동한 거리의 반대 방향으로 다시 이동하여 가운데 정렬
						}}
					>
						{/* 도형 내용 */}
					</div>
				</Content>


				{/* <Footer style={{ textAlign: "center" }}>
					Sprinter ©{new Date().getFullYear()} Created by dongho1596
				</Footer>  */}


			</Layout>
	);
};

export default Main;
