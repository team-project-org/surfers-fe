import { Col, Row } from "antd";
import React, { FunctionComponent } from "react";
import "./gridview.css";
import { Gutter } from "antd/es/grid/row";

interface IGridViewProps {
	children?: any[];
	glutter?: Gutter | [Gutter, Gutter];
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
}

interface IResponsiveColProps {
	children: any | void;
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
}

const ResponsiveCol: FunctionComponent<Partial<IResponsiveColProps>> = ({
	children,
	xs = 24,
	sm = 12,
	md = 8,
	lg = 6,
}) => {
	return (
		<Col
			xs={{ span: xs }}
			sm={{ span: sm }}
			md={{ span: md }}
			lg={{ span: lg }}
		>
			<div>{children}</div>
		</Col>
	);
};

const GridView: FunctionComponent<Partial<IGridViewProps>> = (props) => {
	const {
		children,
		glutter = [
			{ xs: 8, sm: 16, md: 24, lg: 32 },
			{ xs: 8, sm: 16, md: 24, lg: 32 },
		],
		xs = 24,
		sm = 12,
		md = 8,
		lg = 6,
	} = props;
	return (
		<div className={"grid-view"}>
			<Row gutter={glutter} justify="start" align="top">
				{children?.map((v, i) => {
					return (
						<ResponsiveCol key={i} xs={xs} sm={sm} md={md} lg={lg}>
							{v}
						</ResponsiveCol>
					);
				})}
			</Row>
		</div>
	);
};

export default GridView;
