import React, { FunctionComponent } from "react";
import { Col, Flex, Row } from "antd";
import "./projects.css";

interface IProjectsProps {}

interface IResponsiveColProps {
	children: any | void;
}

const ResponsiveCol: FunctionComponent<Partial<IResponsiveColProps>> = ({
	children,
}) => {
	return (
		<Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
			<div>{children}</div>
		</Col>
	);
};

const Projects: FunctionComponent<IProjectsProps> = (props) => {
	return (
		<div className={"project-list"}>
			<Row
				gutter={[
					{ xs: 8, sm: 16, md: 24, lg: 32 },
					{ xs: 8, sm: 16, md: 24, lg: 32 },
				]}
				justify="center"
				align="top"
			>
				<ResponsiveCol>dd</ResponsiveCol>
				<ResponsiveCol />
				<ResponsiveCol />
				<ResponsiveCol />
				<ResponsiveCol />
				<ResponsiveCol />
				<ResponsiveCol />
				<ResponsiveCol />
				<ResponsiveCol />
				<ResponsiveCol />
				<ResponsiveCol />
				<ResponsiveCol />
			</Row>
		</div>
	);
};

export default Projects;
