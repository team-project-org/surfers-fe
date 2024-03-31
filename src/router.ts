export const sprinter_token = btoa("sprinter_beta");

export const pageRouter = [
	{
		path: `/talents?token=${sprinter_token}`,
		title: "인재풀 둘러보기",
	},
	{
		path: `/projects?token=${sprinter_token}`,
		title: "프로젝트 게시물 둘러보기",
	},
];
