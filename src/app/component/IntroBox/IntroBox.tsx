import { primary, white, orange } from "@/app/color";
import React, { FunctionComponent } from "react";

interface IIntroBoxProps {
	title: string;
	children: any;
	right?: boolean;
	backgroundColor?: string; // backgroundColor prop 추가
}

const IntroBox: FunctionComponent<IIntroBoxProps> = (props) => {
	const { title, children, right, backgroundColor } = props;
	const defaultBackgroundColor = primary;
	return (
		<div style={right ? { textAlign: "right" } : {}}>
			<div
				style={{
					width: "auto",
					height: "50px",
					backgroundColor: backgroundColor ? backgroundColor : defaultBackgroundColor, // 배경색이 지정되지 않았을 때 기본값은 primary로 설정
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