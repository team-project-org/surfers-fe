import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import HeaderLayout from "@/app/headerlayout";
import Provider from "./utils/Provider";
import { ConfigProvider } from "antd";
import { transparent, primary, black, white } from "@/app/color";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const borderRadius = 16

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<AntdRegistry>
					<Provider>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: primary,
									borderRadius,
									colorText: black,
								},
								components: {
									Layout: {
										headerBg: transparent,
										headerHeight: 70,
										headerPadding: 10,
										paddingContentHorizontal: 100,
										bodyBg: 'white',
									},
									Menu: {
										colorBgContainer: transparent,
										colorPrimary: black,
										activeBarHeight: 5,
										itemPaddingInline: 30,
									},
									Button: {
										borderRadiusLG: borderRadius
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
										borderRadius
									}
								},
							}}
						>
							<HeaderLayout>{children}</HeaderLayout>
						</ConfigProvider>
					</Provider>
				</AntdRegistry>
			</body>
		</html>
	);
}
