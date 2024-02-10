import Link from "next/link";
import Main from "@/app/main";

export default function Home() {
	return (
		<div className="App">
			<Main />
			<ul>
				<li>
					<Link href="/projects">프로젝트</Link>
				</li>
				<li>
					<Link href="/talents">인재풀</Link>
				</li>
				<li>
					<Link href="/notion">노션테스트</Link>
				</li>
			</ul>
		</div>
	);
}
