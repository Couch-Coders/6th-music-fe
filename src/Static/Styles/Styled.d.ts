import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // 여기 아래에 당신이 사용하고자 하는 기본 스타일 세팅을 하세요
    // styled components의 테마정의를 하는 곳
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
