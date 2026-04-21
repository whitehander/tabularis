<div align="center">
  <img src="public/logo-sm.png" width="120" height="120" />
</div>

# tabularis

<p align="center">
  <strong>README:</strong>
  <a href="./README.md">English</a> |
  <a href="./README.it.md">Italiano</a> |
  <a href="./README.es.md">Español</a> |
  <a href="./README.zh-CN.md">中文</a> |
  <a href="./README.fr.md">Français</a> |
  <a href="./README.de.md">Deutsch</a> |
  <a href="./README.ko.md">한국어</a>
</p>

현대적인 데이터베이스를 위한 오픈소스 데스크톱 클라이언트입니다. PostgreSQL, MySQL/MariaDB, SQLite를 지원하며, SQL 노트북, AI 기능, MCP 통합, 외부 플러그인 시스템을 함께 제공합니다.

**Discord** - [Discord 서버에 참여하기](https://discord.gg/YrZPHAwMSG)에서 유지보수자들과 대화하고, 피드백을 공유하고, 도움을 받을 수 있습니다.

> 번역 문서입니다. 기준이 되는 최신 내용은 [영문 README](./README.md)도 함께 확인해 주세요.

## 다운로드

[![Windows](https://img.shields.io/badge/Windows-Download-blue?logo=windows)](https://github.com/TabularisDB/tabularis/releases/download/v0.9.19/tabularis_0.9.19_x64-setup.exe)
[![macOS](https://img.shields.io/badge/macOS-Download-black?logo=apple)](https://github.com/TabularisDB/tabularis/releases/download/v0.9.19/tabularis_0.9.19_x64.dmg)
[![Linux AppImage](https://img.shields.io/badge/Linux-AppImage-green?logo=linux)](https://github.com/TabularisDB/tabularis/releases/download/v0.9.19/tabularis_0.9.19_amd64.AppImage)
[![Linux .deb](https://img.shields.io/badge/Linux-.deb-orange?logo=debian)](https://github.com/TabularisDB/tabularis/releases/download/v0.9.19/tabularis_0.9.19_amd64.deb)
[![Linux .rpm](https://img.shields.io/badge/Linux-.rpm-red?logo=redhat)](https://github.com/TabularisDB/tabularis/releases/download/v0.9.19/tabularis-0.9.7-1.x86_64.rpm)

## 설치

### Windows

```bash
winget install Debba.Tabularis
```

또는 [Releases 페이지](https://github.com/TabularisDB/tabularis/releases)에서 설치 프로그램을 직접 내려받을 수 있습니다.

### macOS

```bash
brew tap TabularisDB/tabularis
brew install --cask tabularis
```

릴리즈에서 직접 설치하는 경우에는 다음 명령이 추가로 필요할 수 있습니다.

```bash
xattr -c /Applications/tabularis.app
```

### Linux

Snap:

```bash
sudo snap install tabularis
```

AppImage:

```bash
chmod +x tabularis_x.x.x_amd64.AppImage
./tabularis_x.x.x_amd64.AppImage
```

Arch Linux:

```bash
yay -S tabularis-bin
```

## 업데이트

- 앱 시작 시 자동으로 업데이트를 확인합니다.
- GitHub Releases에서 최신 버전을 수동으로 내려받을 수도 있습니다.

## 갤러리

전체 갤러리는 [tabularis.dev](https://tabularis.dev)에서 볼 수 있습니다.

## 주요 기능

### 연결 관리

- PostgreSQL, MySQL/MariaDB, SQLite를 지원합니다.
- 연결 프로필을 로컬에 저장합니다.
- SSH 터널과 시스템 키체인 비밀번호 저장을 지원합니다.
- 그리드/리스트 보기와 실시간 검색을 제공하는 연결 페이지를 포함합니다.

### 데이터베이스 탐색기

- 테이블, 컬럼, 키, 인덱스, 뷰, 루틴을 탐색할 수 있습니다.
- 일부 스키마 요소를 인라인으로 수정할 수 있습니다.
- 인터랙티브 ER 다이어그램을 제공합니다.
- 컨텍스트 메뉴를 통한 빠른 작업을 지원합니다.

### SQL 에디터

- 문법 강조와 자동완성을 제공하는 Monaco Editor를 사용합니다.
- 연결이 분리된 여러 탭을 지원합니다.
- 여러 쿼리를 실행하고 결과를 분리해서 보여줍니다.
- 저장된 쿼리와 에디터 내부 AI 오버레이를 제공합니다.

### SQL 노트북

- 하나의 문서에서 SQL 셀과 Markdown 셀을 함께 사용할 수 있습니다.
- 인라인 결과와 차트를 표시합니다.
- 셀 간 변수와 전역 파라미터를 지원합니다.
- 모든 셀을 순차적으로 실행할 수 있습니다.

### 비주얼 쿼리 빌더

- 드래그 앤 드롭으로 쿼리를 구성할 수 있습니다.
- 비주얼 JOIN, 필터, 집계, 정렬, 제한을 지원합니다.
- SQL이 실시간으로 생성됩니다.

### Visual EXPLAIN

- 실행 계획을 탐색 가능한 그래프로 보여줍니다.
- 테이블 보기, 원본 보기, 선택적 AI 분석 보기를 제공합니다.
- PostgreSQL, MySQL/MariaDB, SQLite를 지원합니다.

### 데이터 그리드

- 인라인 편집과 일괄 편집을 지원합니다.
- 행 생성, 선택, 삭제가 가능합니다.
- CSV 또는 JSON으로 내보낼 수 있습니다.
- 공간 데이터에 대한 초기 지원을 제공합니다.

### 로깅

- 설정 화면에서 실시간 로그를 확인할 수 있습니다.
- 레벨별 필터링을 지원합니다.
- `.log` 파일로 내보낼 수 있습니다.
- `tabularis --debug`로 CLI 디버그 모드를 사용할 수 있습니다.

### 플러그인

- stdin/stdout 기반 JSON-RPC 2.0 외부 플러그인 시스템을 지원합니다.
- 커뮤니티 드라이버를 재시작 없이 설치할 수 있습니다.
- 공식 레지스트리는 [`plugins/registry.json`](./plugins/registry.json)에 있습니다.
- 개발자 가이드는 [`plugins/PLUGIN_GUIDE.md`](./plugins/PLUGIN_GUIDE.md)를 참고하세요.

## 설정

설정은 다음 위치에 저장됩니다.

- Linux: `~/.config/tabularis/`
- macOS: `~/Library/Application Support/tabularis/`
- Windows: `%APPDATA%\\tabularis\\`

주요 파일:

- `connections.json`
- `saved_queries.json`
- `config.json`
- `themes/`
- `preferences/`

`config.json`의 `language` 필드는 `auto`, `en`, `it`, `es`, `zh`, `fr`, `de` 값을 지원합니다.

## AI

선택적으로 Text-to-SQL과 쿼리 설명 기능을 다음 제공자와 함께 사용할 수 있습니다.

- OpenAI
- Anthropic
- MiniMax
- OpenRouter
- Ollama
- OpenAI 호환 API

모델 목록은 동적으로 불러오며 로컬에 캐시됩니다.

## MCP

내장 MCP 서버는 다음과 같이 실행할 수 있습니다.

```bash
tabularis --mcp
```

지원 클라이언트:

- Claude Desktop
- Cursor
- Windsurf

사용 가능한 도구:

- `list_connections`
- `list_tables`
- `describe_table`
- `run_query`

## 기술 스택

- 프론트엔드: React 19, TypeScript, Tailwind CSS v4
- 백엔드: Rust, Tauri v2, SQLx

## 개발

설치 및 실행:

```bash
pnpm install
pnpm tauri dev
```

빌드:

```bash
pnpm tauri build
```

## 로드맵

- Remote Control
- Command Palette
- JSON/JSONB Editor & Viewer
- SQL Formatting / Prettier
- Data Compare / Diff Tool
- Team Collaboration

## 라이선스

Apache License 2.0
