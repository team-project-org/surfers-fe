"use client";
import React, { FunctionComponent } from "react";
import { Layout, theme, Typography, Space } from "antd";
import ResponseCarousel from "./responseCarousel";
import MainHeader from "@/app/mainheader";
import "../fonts/font.css";

/*

[feat] info-main-contents-and-button by ricksclone

1.로고 화질 개선 => mainheader에 화질 개선된 img 파일로 넣고 globals.css 크기 조정해서 완료
2.폰트 설치 및 css 파일 구성 => src 안에 fonts 안에 폰트 다 넣어놓고, import 후 사용 완료
3.메인 문구 작성 및 배치 => 완료 
4.서브 문구 작성 및 배치 => 완료 
5.버튼 제작 및 버튼 내용 구성과 아이콘 삽입 => 완료 
6.버튼내 링크 연결 => 완료 
7.캐릭터, 아이콘, 링 배치 => 완료

*/

const { Title, Text, Link } = Typography;
const { Content, Footer } = Layout;

interface IMainProps {}

const Main: FunctionComponent<IMainProps> = (props) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<MainHeader>
			<Layout>
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
							<div style={{ position: 'relative' , top:'40px' }}>
								<img
									src="../character.png"  // 이미지 경로를 적절히 변경해야 합니다.
									alt="character"
									style={{
										maxWidth: '35%', // 이미지의 최대 너비를 부모 요소의 너비에 맞게 설정하여 비율을 유지
										height: 'auto', // 이미지의 높이를 자동으로 조정하여 비율을 유지
									}}
								/> 
								<Typography.Title level={1} style={{ fontFamily: 'PyeongChangPeace', color: 'white', fontSize: '60px', lineHeight: '150%' , marginTop: '-5px' }}>
									사이드 프로젝트를<br />
									시작하는 가장 쉽고 빠른 방법
								</Typography.Title>
								<Typography.Text style={{ fontFamily: 'Pretendard-Light', fontSize: '18px', color: 'white' }}>
									개발자, 디자이너, 기획자 등 IT 업계 검증 가능한 다양한 팀원들을 만나보세요.
								</Typography.Text>
								<img src="../ring.png" alt="ring" style={{
											position: 'absolute',
											transform: 'translate(-50%, -50%)',
											left: '50%',
											top: 'calc(50% + 60px)',
											zIndex: '-1',
											maxWidth: '102%', // 이미지의 최대 너비를 부모 요소의 너비에 맞게 설정하여 비율을 유지
											height: 'auto', // 이미지의 높이를 자동으로 조정하여 비율을 유지
							
									// position: 'absolute',
									// top: 'calc(50% + 75px)',  // 이미지를 위로 이동하여 중앙으로 정렬될 수 있도록 수정
									// left: '48%',
									// transform: 'translate(-50%, -50%)', // 이미지 중앙 정렬을 위해 수정
									// width: '1227.74px', 
									// height: '817.02px',
									// zIndex: '-1'
								}} />
							</div>

							<Footer style={{ textAlign: "center", marginTop: "85px" }}>
								<div style={{
									margin: '20px auto', // 버튼을 수평 가운데 정렬
									width: 'fit-content', // 컨텐츠 크기에 맞게 버튼 너비 조정
								}}>
									<a href="https://docs.google.com/forms/d/e/1FAIpQLSeWhJrzkMPPpc-gRmurB45bHE3Xu8ga3-dbpfQej1NHXte9yw/viewform" style={{
										display: 'inline-flex', // 텍스트와 이미지를 가운데로 정렬하기 위해 flex로 설정
										alignItems: 'center', // 수직 정렬 설정
										backgroundColor: '#0012FA', // 버튼 배경색
										color: 'white', // 버튼 텍스트 색상
										padding: '15px 28px', // 내부 여백
										borderRadius: '50px', // 모서리를 둥글게 만듦
										textDecoration: 'none', // 밑줄 제거
										fontSize: '21px', // 텍스트 크기
										fontFamily: 'Pretendard-Medium', // 폰트 설정
									}}>
										<span style={{ marginRight: '10px' }}>베타서비스 이용 신청하기</span>
										<img src="../ei_arrow-left.png" alt="button-icon" style={{ width: '35px', height: '35px' }} />
									</a>
								</div>
							</Footer>
						</div>
						

						

						<ResponseCarousel
							items={[
								{
									title: "Swiper Carousel Example",
									text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
									imageUrl: "http://placehold.it/350x150",
								},
								{
									title: "Swiper Carousel Example",
									text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
									imageUrl: "http://placehold.it/350x150",
								},
								{
									title: "Swiper Carousel Example",
									text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
									imageUrl: "http://placehold.it/350x150",
								},
							]}
						/>
					</div>
				</Content>
				<Content style={{ margin: "24px 16px 0" }}>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						테스트 텍스트
						<Title>h1. Ant Design</Title>
						<Title level={2}>h2. Ant Design</Title>
						<Title level={3}>h3. Ant Design</Title>
						<Title level={4}>h4. Ant Design</Title>
						<Title level={5}>h5. Ant Design</Title>
					</div>
				</Content>
				<Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
					<div
						style={{
							padding: 24,
							// background: colorBgContainer,
							// borderRadius: borderRadiusLG,
						}}
					>
						<Space direction="vertical">
							<Text>Ant Design (default)</Text>
							<Text type="secondary">Ant Design (secondary)</Text>
							<Text type="success">Ant Design (success)</Text>
							<Text type="warning">Ant Design (warning)</Text>
							<Text type="danger">Ant Design (danger)</Text>
							<Text disabled>Ant Design (disabled)</Text>
							<Text mark>Ant Design (mark)</Text>
							<Text code>Ant Design (code)</Text>
							<Text keyboard>Ant Design (keyboard)</Text>
							<Text underline>Ant Design (underline)</Text>
							<Text delete>Ant Design (delete)</Text>
							<Text strong>Ant Design (strong)</Text>
							<Text italic>Ant Design (italic)</Text>
							<Link href="https://ant.design" target="_blank">
								Ant Design (Link)
							</Link>
						</Space>
						<p>long content</p>
						{
							// indicates very long content
							Array.from({ length: 100 }, (_, index) => (
								<React.Fragment key={index}>
									{index % 20 === 0 && index ? "more" : "..."}
									<br />
								</React.Fragment>
							))
						}
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Sprinter ©{new Date().getFullYear()} Created by dongho1596
				</Footer>
			</Layout>
		</MainHeader>
	);
};

export default Main;
