# 쌈빡해유 APK 빌드용 GitHub 프로젝트

## 사용법
1. 이 폴더 전체를 GitHub 저장소에 업로드합니다.
2. GitHub 저장소의 **Actions** 탭으로 이동합니다.
3. **Build Ssambbakhayu APK** 워크플로를 실행합니다.
4. 빌드가 완료되면 **Artifacts → ssambbakhayu-apk**에서 `app-debug.apk`를 내려받습니다.
5. Android 휴대폰에서 APK를 설치합니다.

## 앱 파일
- 실제 앱 화면과 기능: `www/index.html`
- Capacitor 설정: `capacitor.config.ts`
- 앱 아이콘: `www/icons/`

## 데이터 보존 관련
기존 앱의 `cn8_` 및 `cn_cloud_` 저장 키를 유지했습니다. 기존 앱과 같은 Android 앱으로 업데이트할 수 있도록 `appId`도 기존 값(`kr.cleannova.app`)을 유지했습니다. 앱을 삭제하거나 앱 데이터/브라우저 저장공간을 초기화하면 저장 데이터가 사라질 수 있으므로, 설치 전에 앱 안에서 백업을 권장합니다.

## APK 종류
이 workflow는 개인 설치·테스트용 **debug APK**를 생성합니다. Play 스토어 배포용 release APK/AAB는 별도의 서명키 설정이 필요합니다.
