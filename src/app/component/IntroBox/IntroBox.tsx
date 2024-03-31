import { primary, white } from "@/app/color";
import React, { FunctionComponent } from "react";

interface IIntroBoxProps {
	title: string;
	children: any;
}

const IntroBox: FunctionComponent<IIntroBoxProps> = (props) => {
	const { title, children } = props;
	return (
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
					{title}
				</div>
			</div>
      {children}
		</div>
	);
};

export default IntroBox;
