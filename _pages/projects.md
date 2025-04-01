---
layout: page
title: Projects
description: where technology meets humanity
permalink: /projects/
nav: true
nav_order: 2
display_categories: [funded, fun, list]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>


2024.10 - 2025.09  뇌병변 장애인 재활체육을 위한 AI 트레이너 앱 개발 (중소벤처기업부, 좋은운동장)

2024.06 - 2025.05  협업 생산성과 프라이버시 간 갈등 해소를 위한 대안적 협업 도구 설계 연구 (한국연구재단)

2023.10 - 2025.09  머신러닝 기반 파킨슨병 환자의 변화 지표 모니터링과 맞춤형 자조관리 시스템 (중소벤처기업부, 하루하루움직임연구소)

2022.06 - 2025.02  실시간 온라인교육에서 학습몰입과 참여를 강화하기 위한 AI 알고리즘 기반 맞춤형 피드백 시스템 개발 (한국연구재단, 한신대학교)

2022.08 - 2024.07  파킨슨병 환자의 신체기능 모니터링 및 운동관리를 위한 스마트폰 어플리케이션 개발 및 임상시험 (서울대학교병원)

2021.03 - 2024.02  신뢰 조절을 활용한 자율주행시스템의 운전자 경험 설계 및 모델링 Experience Design and Modeling of Autonomous Driving System using Trust Calibration (National Research Foundation of Korea, 한국연구재단)

2021.04 - 2023.12  청각보조기기 현장 실증 및 사용성 평가 Development of hearing aids that conveniently receive sound and subtitles (보건복지부, 소리를보는통로)

2021.09 - 2023.11  의료적 관리가 필요한 장애인을 위한 재활운동기기 개발 및 임상 중개 연구-상지운동기기 (국립재활원, 좋은운동장)

2023.06 - 2023.08  당뇨 환자 눈 관리 시스템의 사용자 인터페이스 및 사용자 경험 설계 (주식회사 클롭)

2022.04 - 2023.03  인공지능 기반 파킨슨병 환자의 자가 훈련과 모니터링 솔루션 개발 및 사업화  Development and Commercialization of AI-based Self-training and Monitoring Solutions for Patients with Parkinsonism (IITP, 정보통신기획평가원) [관련 기사](https://www.joongang.co.kr/article/25072468)

2022.02 - 2022.07  웹 쇼핑몰의 고객 경험 분석 및 그로스해킹 컨설팅 (Designovel, 디자이노블)

2022.02 - 2022.06  브랜드 악용 탐지 솔루션의 대시보드 설계 및 개발 (S2W, 에스투더블유)

2021.09 - 2022.02  지능형 로봇을 위한 기초수학 분야의 학습 패턴 분석 및 교육 개선안 도출 : 데이터 애널리틱스 활용 사례 연구 (한양대학교 산학협력단)

2021.01 ~ 2021.12  발달장애인의 의사소통 효율성 증대를 위한 AAC 검색 기능 및 표현 예측 알고리즘 개발 (SOVORO, 소리를보는통로)

2020.07 - 2020.09  파킨슨병환자를 위한 운동 처방 및 관리 어플리케이션 개발 Development of Exercise Prescription and Management Application for Parkinson's disease (Seoul National University Hospital, 서울대학교병원) 