import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import Provider from "./utils/Provider";
import { ConfigProvider } from "antd";
import { transparent, primary, black, white } from "@/app/color";

export const metadata: Metadata = {
	title: "스프린터",
	description: "스프린터에 오신 것을 환영합니다",
};

const borderRadius = 16;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon/favicon-32x32.png" sizes="any" />
			<body>
				<AntdRegistry>
					<Provider>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: primary,
									borderRadius,
									colorText: white,
									colorTextBase: white
								},
								components: {
									Layout: {
										headerBg: black,
										headerHeight: 70,
										headerPadding: 10,
										paddingContentHorizontal: 100,
										bodyBg: transparent,
										footerBg: transparent,
									},
									Menu: {
										colorBgContainer: transparent,
										colorPrimary: black,
										colorText: white,
										activeBarHeight: 5,
										itemPaddingInline: 30,
									},
									Button: {
										borderRadiusLG: borderRadius,
									},
									Segmented: {
										itemColor: black,
										itemActiveBg: primary,
										itemHoverColor: white,
										itemSelectedColor: white,
										controlItemBgActive: primary,
										trackBg: white,
										controlItemBgHover: white,
										colorBgLayout: primary,
										colorBgBase: primary,
										colorBgContainer: primary,
										itemHoverBg: primary,
										itemSelectedBg: primary,
										borderRadius,
									},
									Card: {
										borderRadius,
										paddingXL: 16,
										paddingMD: 16,
										paddingLG: 16,
										paddingSM: 16
									},
								},
							}}
						>
							{children}
							{/* <HeaderLayout>{children}</HeaderLayout> */}
						</ConfigProvider>
					</Provider>
				</AntdRegistry>
			</body>
		</html>
	);
}
