# 클린노바 APK 빌드용 GitHub 프로젝트

## 사용법
1. 이 폴더 전체를 GitHub 새 저장소에 업로드합니다.
2. GitHub 저장소의 **Actions** 탭으로 이동합니다.
3. **Build CleanNova APK** 워크플로를 실행합니다.
4. 빌드가 완료되면 workflow의 **Artifacts → cleannova-apk**에서 `app-debug.apk`를 내려받습니다.
5. Android 휴대폰에서 APK를 설치합니다.

## 앱 시작 화면
`www/index.html`에 앱 최초 실행 시 홈 화면으로 초기화하는 부트 로직이 포함되어 있습니다.

## 주의
이 workflow는 테스트/개인 설치용 **debug APK**를 생성합니다. Play 스토어 배포용 release APK/AAB는 별도의 서명키 설정이 필요합니다.
