import { Col, Row } from "antd";
import React, { FunctionComponent } from "react";
import "./gridview.css";

interface IGridViewProps {
	children?: any[];
}

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

const GridView: FunctionComponent<Partial<IGridViewProps>> = (props) => {
	const { children } = props;
	return (
		<div className={"grid-view"}>
			<Row
				gutter={[
					{ xs: 8, sm: 16, md: 24, lg: 32 },
					{ xs: 8, sm: 16, md: 24, lg: 32 },
				]}
				justify="center"
				align="top"
			>
				{children?.map((v, i) => {
					return <ResponsiveCol key={i}>{v}</ResponsiveCol>;
				})}
			</Row>
		</div>
	);
};

export default GridView;
