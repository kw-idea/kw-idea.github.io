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
        },{id: "post-새로운-홈페이지-업데이트",
        
          title: "새로운 홈페이지 업데이트",
        
        description: "welcome !",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/update/";
          
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
            },},{id: "peoples-김동윤",
          title: '김동윤',
          description: "영어산업학과  HCI UX Data Analytics",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EA%B9%80%EB%8F%99%EC%9C%A4/";
            },},{id: "peoples-김수빈",
          title: '김수빈',
          description: "경영학부  back-end web",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EA%B9%80%EC%88%98%EB%B9%88/";
            },},{id: "peoples-민희원",
          title: '민희원',
          description: "정보융합학부학석사연계과정 HCI AI Full-stack",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EB%AF%BC%ED%9D%AC%EC%9B%90/";
            },},{id: "peoples-박민석",
          title: '박민석',
          description: "정보융합학부  PM UX CX",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EB%B0%95%EB%AF%BC%EC%84%9D/";
            },},{id: "peoples-박준수",
          title: '박준수',
          description: "정보융합학부  HCIML",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EB%B0%95%EC%A4%80%EC%88%98/";
            },},{id: "peoples-부형진",
          title: '부형진',
          description: "산업심리학과 졸업  HCI ML",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EB%B6%80%ED%98%95%EC%A7%84/";
            },},{id: "peoples-손아현",
          title: '손아현',
          description: "정보융합학부  front-end react web",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%86%90%EC%95%84%ED%98%84/";
            },},{id: "peoples-심현",
          title: '심현',
          description: "인공지능응용학과석사과정 NLP Full-stack",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%8B%AC%ED%98%84/";
            },},{id: "peoples-안대현",
          title: '안대현',
          description: "미디어커뮤니케이션학부  HCI UX DevOps",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%95%88%EB%8C%80%ED%98%84/";
            },},{id: "peoples-염시훈",
          title: '염시훈',
          description: "디지털헬스케어학부 졸업  HCI ML",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%97%BC%EC%8B%9C%ED%9B%88/";
            },},{id: "peoples-오기택",
          title: '오기택',
          description: "정보융합학부  ML LLM",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%98%A4%EA%B8%B0%ED%83%9D/";
            },},{id: "peoples-오준혁",
          title: '오준혁',
          description: "정보융합학부  back-end web",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%98%A4%EC%A4%80%ED%98%81/";
            },},{id: "peoples-이재근",
          title: '이재근',
          description: "정보융합학부  front-end react web",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%9D%B4%EC%9E%AC%EA%B7%BC/";
            },},{id: "peoples-이주희",
          title: '이주희',
          description: "미디어커뮤니케이션학부  HCIUXData Analytics",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%9D%B4%EC%A3%BC%ED%9D%AC/";
            },},{id: "peoples-임주혁",
          title: '임주혁',
          description: "소프트웨어학부  back-end",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%9E%84%EC%A3%BC%ED%98%81/";
            },},{id: "peoples-전서연",
          title: '전서연',
          description: "정보융합학부  front-end react web",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%A0%84%EC%84%9C%EC%97%B0/";
            },},{id: "peoples-천성윤",
          title: '천성윤',
          description: "정보융합학부  front-end react web",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%EC%B2%9C%EC%84%B1%EC%9C%A4/";
            },},{id: "peoples-황규민",
          title: '황규민',
          description: "인공지능응용학과석사과정 HCI UX CV",
          section: "Peoples",handler: () => {
              window.location.href = "/peoples/%ED%99%A9%EA%B7%9C%EB%AF%BC/";
            },},{id: "projects-artvoice",
          title: 'ArtVoice',
          description: "시각장애인의 예술 접근성 향상을 위한 서비스 개발",
          section: "Projects",handler: () => {
              window.location.href = "/projects/artvoice/";
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
            },},{id: "projects-fashion-ai",
          title: 'Fashion AI',
          description: "멀티모달 기술을 활용한 정밀 패션 이미지 검색 시스템 개발",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fashion_AI/";
            },},{id: "projects-rehabilitation-app",
          title: 'Rehabilitation App',
          description: "장애인 재활 체육을 위한 AI 트레이너 앱",
          section: "Projects",handler: () => {
              window.location.href = "/projects/joynt/";
            },},{id: "projects-online-collaboration-tool",
          title: 'Online Collaboration Tool',
          description: "업무 생산성과 프라이버시 간의 갈등 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/online_collabo_tool/";
            },},{id: "projects-parkinson-39-s-disease",
          title: 'Parkinson&amp;#39;s Disease',
          description: "파킨슨병 환자의 일상 운동에 대한 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pd_analysis/";
            },},{id: "projects-mhealth-for-parkinsonism",
          title: 'mHealth for Parkinsonism',
          description: "파킨슨병 환자들을 위한 재활 운동영상 시청 앱",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pd_app/";
            },},{id: "projects-gaze-patterns-of-analyst",
          title: 'Gaze Patterns of Analyst',
          description: "프로세스 모델을 해석하는 분석가의 시선 패턴",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pmc/";
            },},{id: "projects-micro-module-management-system",
          title: 'Micro-module Management System',
          description: "마이크로모듈 관련 행정 지원 시스템",
          section: "Projects",handler: () => {
              window.location.href = "/projects/share/";
            },},{id: "projects-wi-fi-sensing",
          title: 'Wi-fi Sensing',
          description: "Wi-Fi 신호를 통한 제스처 및 신체 움직임 인식",
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
