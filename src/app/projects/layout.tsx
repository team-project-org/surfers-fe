import type { Metadata } from "next";
import HeaderLayout from "@/app/headerlayout";
import { ConfigProvider } from "antd";
import { transparent, primary, black, white } from "@/app/color";
import TokenChecker from "@/app/utils/TokenChekcker";
import getImages from "@/app/utils/getImages";
import ResponseCarousel from "@/app/component/responseCarousel";

const projectsBanners = getImages(["banner/main/main_banner_1.png"]);

const projectsBannerCarocel = projectsBanners.map((projectsBanner) => ({
	imageUrl: projectsBanner,
}));

const borderRadius = 16;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<TokenChecker>
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
							bodyBg: white,
						},
						Menu: {
							colorBgContainer: transparent,
							colorPrimary: black,
							colorText: black,
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
							colorTextDescription: black,
						},
					},
				}}
			>
				<HeaderLayout
					belowHeader={
						<div
							style={{
								padding: 0,
								textAlign: "center",
							}}
						>
							<ResponseCarousel items={projectsBannerCarocel} />
						</div>
					}
				>
					{children}
				</HeaderLayout>
			</ConfigProvider>
		</TokenChecker>
	);
}
