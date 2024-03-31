import { primary, white } from "@/app/color";
import React, { FunctionComponent } from "react";

interface IIntroBoxProps {
	title: string;
	children: any;
	right?: boolean;
}

const IntroBox: FunctionComponent<IIntroBoxProps> = (props) => {
	const { title, children, right } = props;
	return (
		<div style={right ? { textAlign: "right" } : {}}>
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
				<div
					style={{
						fontFamily: "Pretendard-Medium",
						fontSize: "24px",
						padding: 18,
						color: white,
						margin: "0",
					}}
				>
					{title}
				</div>
			</div>
			{children}
		</div>
	);
};

export default IntroBox;
