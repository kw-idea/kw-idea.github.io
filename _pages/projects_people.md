---
layout: page
title: People
permalink: /people/
nav: true
nav_order: 1
display_categories: [Graduate Student, Undergraduate Research Assistant, Undergraduate Research Engineer (Front/UX Team), Undergraduate Research Engineer (Back/Infra Team), Visiting Researcher,  Alumni]
horizontal: false
profiles:
  # if you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: left
    image: pkd.jpg
    content: people_pkd.md
    image_circular: true # crops the image to make it circular
    more_info: 
---

<div class="post">
  <article>
    {% if page.profiles %}
      {% for profile in page.profiles %}
        <hr>
        <div class="profile float-{% if profile.align == 'left' %}left{% else %}right{% endif %}">
          {% if profile.image %}
            {% assign profile_image_path = profile.image | prepend: 'assets/img/' %}
            {% if profile.image_circular %}
              {% assign profile_image_class = 'img-fluid z-depth-1 rounded-circle' %}
            {% else %}
              {% assign profile_image_class = 'img-fluid z-depth-1 rounded' %}
            {% endif %}
            {% include figure.liquid loading="eager" path=profile_image_path class=profile_image_class sizes=sizes alt=profile.image %}
          {% endif %}
          {% if profile.more_info %}
            <div class="more-info">{{ profile.more_info }}</div>
          {% endif %}
        </div>

        <div class="clearfix">
          {% if profile.content %}
            {% capture profile_content %}{% include_relative {{ profile.content }} %}{% endcapture %}
            {{ profile_content | markdownify }}
          {% else %}
            {{ content }}
          {% endif %}
        </div>
      {% endfor %}
    {% endif %}
  </article>
</div>


<!-- pages/projects.md -->
<div class="people">

  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.peoples | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="row row-cols-2 row-cols-md-5" style="
    margin-left: -5px;
    margin-right: -5px;">
    {% for project in sorted_projects %}
      {% include people.liquid %}
    {% endfor %}
  </div>

  {% endfor %}

</div>

### Master's degree

---

##### 곽소정 

2025.02 - 효과적인 개인의 정서 지원을 위한 사용자 중심적 대화형 AI 설계

##### 김주현

2025.02 - LLM 기반 개인 비서 챗봇의 광고 전달 방식이 사용자 경험과 광고 효과에 미치는 영향 파악

##### 김호준

2025.02 - 3D 인간 자세 추정을 이용한 상지 재활 운동 인식 시스템 개발 및 평가

### Bachelor's degree

---

채수지	2021.01 ~ 2022.06

정범영  2021.01 ~ 2021.12

이영현	2021.05 ~ 2023.08

신수빈	2021.06 ~ 2022.12

김종민	2021.07 ~ 2022.12

김채현 	2021.07 ~ 2022.12

이규민	2022.01 ~ 2023.02

홍성혁 	2022.04 ~ 2023.06

변유진 	2022.04 ~ 2024.02

이지은 	2022.04 ~ 2025.02

이현빈	2022.04 ~ 2022.07

황희태 	2022.06 ~ 2024.01

신해담 	2022.07 ~ 2023.02

김형빈 	2022.07 ~ 2023.06

이종민 	2022.11 ~ 2024.08

서대원 	2023.06 ~ 2024.06

이건희 	2023.06 ~ 2024.06

박제인	2023.06 ~ 2023.08

고석환 	2023.06 ~ 2024.06

홍유진 	2023.08 ~ 2024.07

이승훈 	2023.12 ~ 2024.11