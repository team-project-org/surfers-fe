import React, { FunctionComponent } from "react";

const blueButtonStyle = {
	backgroundColor: 'blue',
	color: 'white',
	padding: '20px 30px',
	borderRadius: '75.01px',
	border: 'none',
	cursor: 'pointer',
	display: 'inline-flex',  // 버튼을 인라인 블록 요소로 지정하여 문장 내에 삽입
	marginTop: '85px', // 버튼과 문장 사이에 간격 추가
	alignItems: 'center', // 아이콘과 문장 수직 가운데 정렬
	textDecoration: 'none', //링크 밑줄효과 제거
  };
  
  const buttonTextStyle = {
	marginRight: '10px', // 텍스트와 이미지 사이 간격 추가
	fontSize: '24px', // 버튼 내 텍스트 크기 
  };

  

function App() {
    return (
		<body style={{
            backgroundColor: 'black', // 배경색을 검정색으로 설정
            color: 'white', // 글자색을 하얀색으로 설정
            margin: '0' , // body의 기본 마진을 제거
			overflowY: 'auto', // 수직 스크롤 가능하도록 설정
			backgroundImage: 'url("/images/background.png")', //백그라운드 이미지 설정
			backgroundSize: 'cover', // 배경 이미지를 화면에 꽉 채우도록 설정
        }}>
            <div style={{ textAlign: 'center', marginTop: '300px' }}>
			<div style={{
                    fontFamily: 'Pretendard-SemiBold', // Pretendard-Bold 폰트 사용
                    fontSize: '60px',
                    lineHeight: '150%',
                }}>
                    사이드프로젝트를<br/>시작하는 가장 쉽고 빠른 방법
                </div>
                <div style={{ marginTop: '30px', fontSize: '20px', fontFamily: 'Pretendard-Light'}}>
                    개발자, 디자이너, 기획자 등 IT 업계 검증 가능한 다양한 팀원들을 만나보세요.
                </div>
				<a href="https://docs.google.com/forms/d/e/1FAIpQLSeWhJrzkMPPpc-gRmurB45bHE3Xu8ga3-dbpfQej1NHXte9yw/viewform" style={blueButtonStyle}>
                    <span style={buttonTextStyle}>베타서비스 이용 신청하기</span>
                    <img  src="/images/ei_arrow-left.png" // public > images아이콘 다운받아서 쓸 때 화질 계속 깨지는 이슈 확인
					 alt="button-icon" style={{ width: '35px', height: '35px' }} />  
				</a>
            </div>
        </body>
    );
}

export default App;