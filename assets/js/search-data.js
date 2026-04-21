// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "where technology meets humanity",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-journal",
          title: "Journal",
          description: "Journal",
          section: "Navigation",
          handler: () => {
            window.location.href = "/journals/";
          },
        },{id: "nav-conference",
          title: "Conference",
          description: "Proceedings",
          section: "Navigation",
          handler: () => {
            window.location.href = "/conference/";
          },
        },{id: "nav-lecture",
          title: "Lecture",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lecture/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-chic",
          title: "CHIC",
          description: "CHI Community for undergraduate students",
          section: "Navigation",
          handler: () => {
            window.location.href = "/chic/";
          },
        },{id: "post-acm-chi-2026-accept",
        
          title: "ACM CHI 2026 Accept",
        
        description: "LLM 내부 해석을 &#39;인간 중심 탐구 과정&#39;으로 재정립",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/chi/";
          
        },
      },{id: "post-서울의료원-의료ai세미나에서-발표",
        
          title: "서울의료원 의료AI세미나에서 발표",
        
        description: "MedGemma LLM 및 Google AI Studio 에 대해 강의",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/smc/";
          
        },
      },{id: "post-석사과정-2명-학위-수여-심현-황규민",
        
          title: "석사과정 2명 학위 수여 (심현, 황규민)",
        
        description: "CV와 NLP 각각의 영역에서 AI 응용 연구 선보여",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/grad/";
          
        },
      },{id: "post-주-건융아이비씨-방문해-스마트-로봇-과제-실증-방향-논의",
        
          title: "(주)건융아이비씨 방문해 스마트 로봇 과제 실증 방향 논의",
        
        description: "보조공학 분야의 AI/AX 협력 구상",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/kunyoong/";
          
        },
      },{id: "post-테크빌교육-주-특강-진행",
        
          title: "테크빌교육(주) 특강 진행",
        
        description: "AI 시대, 사용자 경험 설계가 에듀테크의 핵심 경쟁력",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/tekville/";
          
        },
      },{id: "post-hci-korea-2026-학술대회서-5편-발표",
        
          title: "HCI Korea 2026 학술대회서 5편 발표",
        
        description: "학술대회 참가",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hci/";
          
        },
      },{id: "post-한국컴퓨터교육학회-학술대회-발표",
        
          title: "한국컴퓨터교육학회 학술대회 발표",
        
        description: "컴퓨터와 교육의 접점에서 연구성과 발표",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ksce/";
          
        },
      },{id: "post-한국방송미디어공학회-논문-발표-및-연구실-워크샵",
        
          title: "한국방송미디어공학회 논문 발표 및 연구실 워크샵",
        
        description: "황규민 석사과정 논문 발표",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/conf/";
          
        },
      },{id: "post-jmir-mhealth-and-uhealth-논문-게재",
        
          title: "JMIR mHealth and uHealth 논문 게재",
        
        description: "모바일 헬스케어 최우수 저널, 서울대학교병원 파킨슨센터와 공동연구 성과",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/jmir/";
          
        },
      },{id: "post-서울형-r-amp-d-지원사업-참여기관-선정",
        
          title: "서울형 R&amp;D 지원사업 참여기관 선정",
        
        description: "약자를 위한 기술개발 및 돌봄로봇 개발 지원사업에 참여기관으로 선정",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/seoul/";
          
        },
      },{id: "post-british-journal-of-educational-technology-저널-게재",
        
          title: "British Journal of Educational Technology 저널 게재",
        
        description: "교육공학 분야 Top 저널 성과 올리다",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/bjet/";
          
        },
      },{id: "post-한국데이터마이닝학회-학술대회서-5편-논문-발표",
        
          title: "한국데이터마이닝학회 학술대회서 5편 논문 발표",
        
        description: "학술대회 참가",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/kdms/";
          
        },
      },{id: "post-한국연구재단-우수신진-과제-선정",
        
          title: "한국연구재단 우수신진 과제 선정",
        
        description: "Wi-Fi 기반 인간 활동 인식 시스템 개발",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/nrf/";
          
        },
      },{id: "post-공모전-수상",
        
          title: "공모전 수상",
        
        description: "이주희 학부연구생 교육 공공데이터 분석활용대회 우수상 수상",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/award/";
          
        },
      },{id: "post-석사과정-3명-학위-수여-곽소정-김주현-김호준",
        
          title: "석사과정 3명 학위 수여 (곽소정, 김주현, 김호준)",
        
        description: "첫 졸업생 배출",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/grad/";
          
        },
      },{id: "post-hci-korea-2025-학회-참가",
        
          title: "HCI Korea 2025 학회 참가",
        
        description: "4건의 학술논문 발표와 2건의 Creative Award 세션에 참여",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hci/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "peoples-강민혁",
          title: '강민혁',
          description: "정보융합학부  HCI LLM",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EA%B0%95%EB%AF%BC%ED%98%81/";
            },},{id: "peoples-김수빈",
          title: '김수빈',
          description: "경영학부  back-end web",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EA%B9%80%EC%88%98%EB%B9%88/";
            },},{id: "peoples-김준호",
          title: '김준호',
          description: "정보융합학부  HCI UX UX Research",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EA%B9%80%EC%A4%80%ED%98%B8/";
            },},{id: "peoples-민희원",
          title: '민희원',
          description: "인공지능응용학과석사과정 HCI AI Full-stack",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EB%AF%BC%ED%9D%AC%EC%9B%90/";
            },},{id: "peoples-박민석",
          title: '박민석',
          description: "정보융합학부  PM UX CX",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EB%B0%95%EB%AF%BC%EC%84%9D/";
            },},{id: "peoples-박서현",
          title: '박서현',
          description: "정보융합학부  full-stack web",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EB%B0%95%EC%84%9C%ED%98%84/";
            },},{id: "peoples-박준수",
          title: '박준수',
          description: "정보융합학부  HCIML",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EB%B0%95%EC%A4%80%EC%88%98/";
            },},{id: "peoples-배진영",
          title: '배진영',
          description: "소프트웨어학부  HCI ML Assistive Technology",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EB%B0%B0%EC%A7%84%EC%98%81/";
            },},{id: "peoples-이채원",
          title: '이채원',
          description: "인공지능응용학과석사과정  HCI Accessibility",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%9D%B4%EC%B1%84%EC%9B%90/";
            },},{id: "peoples-전도윤",
          title: '전도윤',
          description: "정보융합학부  AI Data Analytics",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%A0%84%EB%8F%84%EC%9C%A4/";
            },},{id: "peoples-전서연",
          title: '전서연',
          description: "정보융합학부  front-end react web",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%A0%84%EC%84%9C%EC%97%B0/";
            },},{id: "projects-digital-pathology",
          title: 'Digital Pathology',
          description: "병리학 이미지의 편집툴 및 3차원 표현 기술",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dp/";
            },},{id: "projects-eye-read",
          title: 'Eye Read',
          description: "시선추적 기술을 기반으로 새로운 독서 경험을 제공",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eye_read/";
            },},{id: "projects-eye-tracker-with-edutech",
          title: 'Eye-Tracker with EduTech',
          description: "시선 추적 기반 학습 몰입 및 집중도 파악",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eyeve/";
            },},{id: "projects-mechanistic-interpretability",
          title: 'Mechanistic Interpretability',
          description: "해석 가능한 LLM과 편향 완화",
          section: "Projects",handler: () => {
              window.location.href = "/projects/machine/";
            },},{id: "projects-gaze-patterns-of-analyst",
          title: 'Gaze Patterns of Analyst',
          description: "프로세스 모델을 해석하는 분석가의 시선 패턴",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pmc/";
            },},{id: "projects-smart-easel",
          title: 'Smart Easel',
          description: "스마트 AI 음성 제어 로봇 이젤 개발 및 실증",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robot/";
            },},{id: "projects-micro-module-management-system",
          title: 'Micro-module Management System',
          description: "마이크로모듈 관련 행정 지원 시스템",
          section: "Projects",handler: () => {
              window.location.href = "/projects/share/";
            },},{id: "projects-wi-fi-sensing",
          title: 'Wi-fi Sensing',
          description: "Wi-Fi 신호를 통한 신체 움직임 인식",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wifi/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%64%70%61%72%6B@%6B%77.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kw-idea", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/kw.idea.lab", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kyudong-park-94a8a076", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gb_6VUIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
