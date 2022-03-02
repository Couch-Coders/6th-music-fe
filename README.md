스타일 : styled-components 사용

폴더명 - 폴더 역할, 파일명 설명

(\*타입스크립트)
@types - 설치한 npm 중, typescript가 실행하는데 필요한 타입 정의 파일들을 모아두는 폴더
(리액트-타입스크립트가 필요없을 경우, 필요없는 폴더)
: Clipboard.d.ts : 클립보드 기능에 필요한 타입들을 정의한 파일
: faker.d.t.s : faker라는 더미 파일들의 타입들을 정의한 파일
: import-image.d.ts: 타입스크립트에서 이미지를 import 할 때, 이미지 타입(png,svg,jpg)별로 import 가능하도록 설정해 둔 파일
(타입스크립트 사용하지 않을 경우, 삭제해도 됨)
:json-server.d.ts : json-server에 대한 타입정의 파일(json-server를 사용하지 않으면 삭제해도 됨)

(\*타입스크립트)
config - interface를 적용한 소스
: AssetPath.ts : 이미지 사용하는데 필요한 인터페이스를 적용한 파일, 이미지를 사용하는 여러 페이지에서 이미지 타입의 정의/인터페이스 활용되는, 코드중복을 제거하기 위해 별도의 파일로 만들었음
(타입스크립트이기 때문에 적용한 파일 )
: Home.ts : 홈 화면에서 보이는 유튜브 실행하는데, 필요한 데이터 정의
: RegisterData.ts : 의미없는 더미 파일, 삭제해도 됨

(\*타입스크립트)
Interface - 타입스크립트에 필요한 인터페이스를 정의한 폴더
: lAsset.ts : 이미지 사용하는데 필요한 인터페이스
: lForm.ts: 폴더 Components > TagFunc폴더 하위 파일들이 필요한 인터페이스
: lHome.ts: 홈 화면의 유튜브 영상들을 실행하는데 필요한 인터페이스
: lModal.ts: register.tsx안의 모달에 필요한 인터페이스
: lStyle.ts : styled-components에 스타일 props를 전달할때, 필요한 인터페이스

Server - 파이어베이스 인증, axios 관련 파일이 있는 폴더
: AxiosInstance.ts : 전역적으로 axios를 사용하기 위해 AxiosInstance를 생성하는 파일
: FirebaseConfig.ts : Firebase에 Config 파일을 정리함
: UseAuth.tsx : Firebase auth에 필요한 파일

Store : 리덕스가 정의된 폴더
Store > Containers > Clipboard.tsx: 클립보드 기능, 클립보드에 필요한 상태를 정의한 파일
Store > Modules > mClipboard.ts : 클립보드가 갖는 상태를 처리하기 위해 어떻게 상태를 변경할 것인지 정의한 파일
Store > Modules > index.ts : Modules폴더 내 파일들(mClipboard.ts)의 내용들을 모두 담는 파일

Views - 가시적으로 드러나는 페이지들을 정의한 폴더
Views > Assets > Images : 이미지 파일
Views > Assets > Styles : 스타일 파일
: Common.style.ts : 지역적으로 사용할 기본 스타일 파일 정의
: GlobalStyle.ts : 전역으로 적용되는 기본 스타일 파일
: Home.style.ts : 홈 화면에 필요한 스타일
: Login.style.ts : 로그인 화면에 필요한 스타일
: Register.style.ts : 등록하기 화면에 필요한 스타일
: Styled.d.ts : Styled-components가 타입스크립트에서 사용되기 위해, 타입을 정의하는 파일, styled-components를 타입스크립트에서 사용하기 위해서 기본적으로 설정해줘야 하는 세팅파일
: Theme.ts : 상태변경에 따라 달라질 스타일파일(더미파일 삭제해도 무방함)

Views > Components : 프로젝트로 사용할 컴포넌트(기능)
: ClipboardFunc : 클립보드
: LikeFunc : 좋아요 기능 정의(빈폴더)
: Modal : 모달
: Toggle : 토글
: VideoFunc : 비디오
Button.style.ts : 버튼 스타일
Input.style.ts : 인풋 스타일
Picture.style.ts : img 태그 스타일
Private.style.ts : 더미 파일
(정의되고 사용되지 않았음)PrivateRoute.tsx : 로그인 될 경우(user)가 있을 경우, private한 라우트를 만들어주는 파일:
Radio.style.ts : input 라디오의 스타일 파일
Radio.tsx : 라디오 컴포넌트
TextArea.style.ts : TextArea스타일
TextArea.tsx : TextArea 컴포넌트

Views > Layout : 화면 레이아웃을 정의한 폴더
Layout > Header : 헤더 부분을 정의
Layout > Header > Logo : 로고 정의
Layout > Header > Navbar : 네비게이션(메뉴) 정의
Layout > Header > Utiles : 화면 우측(로그인/로그아웃) 버튼 정의한 부분
Layout > Layout.tsx : 화면 전체 기본 레이아웃을 정의
Layout > Layout.style.ts : 화면 전체 기본 레이아웃에 필요한 스타일 정의

Views > Pages : 각 화면 파일
Detail.tsx : 홈 화면의 유튜브 아이템을 클릭하면 실행될 화면
Home.tsx : 홈 화면
Login.tsx : 로그인 화면
Logout.tsx : 로그아웃 화면
NotFound.tsx : NotFound 화면
Register.tsx: 등록하기 화면

Router.tsx: 라우터 정의
