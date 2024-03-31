"use client";
import React, { FunctionComponent } from "react";
import { Layout, theme, Typography, Space } from "antd";
import ResponseCarousel from "../component/responseCarousel";
import MainHeader from "@/app/mainheader";

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
							// background: colorBgContainer,
							// borderRadius: borderRadiusLG,
						}}
					>
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
