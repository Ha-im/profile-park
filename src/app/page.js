"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function Home() {
  const texts = ["React", "Next.js", "Supabase", "Node.js", "Wordpress", "Figma", "Git", "Firebase", "Vue.js", "Vite", "Bootstrap", "Apache", "MySQL", "PHP", "Jquery", "HTML", "CSS", "JavaScript"]; // 타이핑할 스택
  const speed = 100; // 글자당 지연(ms)
  const pause = 1000; // 한 단어 끝난 후 대기(ms)

  const [index, setIndex] = useState(0);       // 현재 텍스트 인덱스
  const [charIndex, setCharIndex] = useState(0); // 글자 인덱스
  const [display, setDisplay] = useState("");   // 화면에 보이는 텍스트
  const messages = [
    ['"함께 성장하는 경험을 만들겠습니다"', '"연결과 소통을 소중히 합니다."'],
    ['"도전을 멈추지 않습니다"', '"꾸준히 발전하는 모습을 보여드리겠습니다."'],
    ['"읽어주셔서 감사합니다"', '"항상 배우며 성장하겠습니다."']
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  /* projects fillter*/
  const [activeTab, setActiveTab] = useState("all"); // all, team, personal
  const projects = [
    {
      title: "Nestlé Clone Website",
      description: "Static Website Clone Development",
      type: "team",
      teamInfo: "4명, 프론트 25%",
      role: ["레이아웃 구성", "페이지 일부 인터렉션 구현", "무한 애니메이션 구현"],
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ha-im/Renewal_project_Nestle",
      site: "https://timcho19.github.io/Renewal_project_Nestle/?authuser=0",
      imageUrl : "https://profile-park.vercel.app/image/nestle-image.png"
    },
    {
      title: "CGV Renewal",
      description: "CGV Website Revamp with PHP & MySQL",
      type: "team",
      teamInfo: "3명, 프론트 40% 백앤드 100%",
      role: ["로그인 기능 연동 및 사용자 인증 구현", "관리자 페이지 제작", "영화 데이터 처리 및 출력 기능 개발"],
      tech: ["HTML", "CSS", "Jquery", "PHP", "MySQL"],
      github: "https://github.com/Ha-im/Renewal_project_Cgv",
      site: "http://gungsun1.dothome.co.kr/Renewal_project_Cgv/",
      imageUrl : "https://profile-park.vercel.app/image/cgv-image.png"
    },
    {
      title: "Wandoo Community",
      description: "Wandoo Website Development with Vite & Firebase",
      type: "team",
      teamInfo: "3명, 프론트40% 백앤드 70%",
      role: ["로그인 연동 구현 (카카오 로그인 포함)", "CRUD 기능 개발 (2명 공동 진행)", "UI/UX 디자인 참여 및 화면 구성", "Firebase를 활용한 데이터 관리 및 연동"],
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ha-im/wandoo-project",
      site: "https://wandoo-project.vercel.app/",
      imageUrl : "https://profile-park.vercel.app/image/wandoo-image.png"
    },
  ];
  const filteredProjects = projects.filter(project => {
    if (activeTab === "all") return true;
    if (activeTab === "team") return project.type === "team";
    if (activeTab === "personal") return project.type === "personal";
    return false;
  });

  /* arrow */
  const [showArrow, setShowArrow] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // 문서 끝 100px 전부터 사라지게
      if (scrollPosition >= documentHeight - 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /* home 기술 스텍 */
  useEffect(() => {
    const currentText = texts[index];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplay(prev => prev + currentText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // 한 단어 끝나면 pause 후 다음 단어로
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplay("");
        setIndex(prev => (prev + 1) % texts.length); // 순환
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, texts]);

  /*contact*/
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // 페이드 아웃
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setFade(true); // 페이드 인
      }, 500); // 페이드 아웃 시간
    }, 4000); // 문구 변경 간격

    return () => clearInterval(interval);
  }, []);
  /* 새로고침 */
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const badgesAll = document.querySelector(".badges-all");
    if (badgesAll) {
      badgesAll.scrollLeft = 0;
    }
  }, []);
  return (
    <>
      <header>
        <h1 className="name">kyeongseon Park</h1>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="#about">ABOUT ME</Link></li>
          <li><Link href="#skills">SKILLS</Link></li>
          <li><Link href="#project">PROJECTS</Link></li>
          <li><Link href="#interview">INTERVIEW</Link></li>
          <li><Link href="#contact">CONTACT</Link></li>
        </ul>
      </header>
      <div className="container">
        {/* Home */}
        <div className="home">
          <div className='home-sub'>
            <div className="title">
              <h2>Hello, i&#44;m</h2>
              <h3>Kyeoungseon</h3>
              <h4><span className='title-sub'>&quot;배우는 것을 두려워하지 않는&quot;</span> 신입 프론트엔드 개발자입니다.<br />매일 조금씩 더 나은 코드를 작성하기 위해 노력하고 있습니다.</h4>
            </div>
            <div className='text'>
              <div>{display}<span className="cursor">|</span></div>
            </div>
          </div>
          <div className={`arrow-icon ${!showArrow ? "hidden" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eaeaea"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" /></svg>
          </div>
        </div>

        {/* about */}
        <div className="about" id="about">
          <div>
            <h2 className="about-title">About Me</h2>
            <div className='about-role'>
              <h4 className='role-title'>Frontend Developer</h4>
              <p className="role-description">프론트엔드 개발의 기초부터 최신 프레임워크까지 체계적으로 학습해온 예비 개발자입니다.<br />배운 지식을 실무에 적용하며 사용자 중심의 웹 경험을 만들어가고 싶습니다.</p>
            </div>
            <div className='badges'>
              <div>
                <Image src="/image/html5.svg" alt="HTML5 Logo" width={24} height={24} />
                <p>HTML5</p>
              </div>
              <div>
                <Image src="/image/css.svg" alt="CSS Logo" width={24} height={24} />
                <p>CSS</p>
              </div>
              <div>
                <Image src="/image/javascript.svg" alt="JavaScript Logo" width={24} height={24} />
                <p>JavaScript</p>
              </div>
              <div>
                <Image src="/image/jquery.svg" alt="Jquery Logo" width={24} height={24} />
                <p>Jquery</p>
              </div>
              <div>
                <Image src="/image/react-1.svg" alt="React Logo" width={24} height={24} />
                <p>React</p>
              </div>
              <div>
                <Image src="/image/vite.svg" alt="Vite Logo" width={24} height={24} />
                <p>Vite</p>
              </div>
              <div>
                <Image src="/image/nextdotjs.svg" alt="Nextjs Logo" width={24} height={24} />
                <p>Next.js</p>
              </div>
              <div>
                <Image src="/image/vuedotjs.svg" alt="Vue Logo" width={24} height={24} />
                <p>Vue</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className='Strengths'>Core Strengths</h4>
            <p><span>Team Collaboration:</span>소통과 협업을 중시하며, 팀 프로젝트에서 원활한 진행을 돕습니다.</p>
            <p><span>Persistence:</span>어려운 문제도 끝까지 해결하려는 끈기를 가지고 있습니다.</p>
            <p><span>Adaptability:</span>새로운 환경과 기술에 빠르게 적응해 업무에 적용합니다.</p>
            <p><span>Continuous Learning:</span>최신 기술을 꾸준히 배우고 성장하려는 열정을 가지고 있습니다.</p>
          </div>
          <div>
            <h4 className='Philosophy'>Work Philosophy</h4>
            <p>제가 경험한 사회생활은 항상 팀 단위로 진행되었으며, 협업과 원활한 소통의 중요성을 깊이 깨달았습니다. 어려운 문제 앞에서도 포기하지 않고 끝까지 해결하는 끈기와 새로운 환경에 빠르게 적응하는 유연성을 길렀습니다. 이를 바탕으로, 사용자 중심의 웹 경험을 만드는 개발자가 되고자 합니다.</p>
          </div>
        </div>

        {/* skills */}
        <div className="skills" id="skills">
          <h2 className="skills-title">Skills</h2>
          <div>
            <h3 className='current-skills'>Current Skills</h3>
            <div className="badges">
              <div>
                <Image src="/image/html5.svg" alt="HEML5 Logo" width={24} height={24} />
                <p>HEML5</p>
              </div>
              <div>
                <Image src="/image/css.svg" alt="CSS Logo" width={24} height={24} />
                <p>CSS</p>
              </div>
              <div>
                <Image src="/image/javascript.svg" alt="JavaScript Logo" width={24} height={24} />
                <p>JavaScript</p>
              </div>
              <div>
                <Image src="/image/react-1.svg" alt="React Logo" width={24} height={24} />
                <p>React</p>
              </div>
              <div>
                <Image src="/image/vite.svg" alt="Vite Logo" width={24} height={24} />
                <p>Vite</p>
              </div>
              <div>
                <Image src="/image/jquery.svg" alt="Vite Logo" width={24} height={24} />
                <p>Jquery</p>
              </div>
              <div>
                <Image src="/image/git.svg" alt="React Logo" width={24} height={24} />
                <p>Git/GitHub</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className='experienced-tools'>Tools & Experience</h3>
            <div className="badges">
              <div>
                <Image src="/image/nextdotjs.svg" alt="Next Logo" width={24} height={24} />
                <p>Next.js</p>
              </div>
              <div>
                <Image src="/image/supabase.svg" alt="supabase Logo" width={24} height={24} />
                <p>Supabase</p>
              </div>
              <div>
                <Image src="/image/firebase.svg" alt="firebase Logo" width={24} height={24} />
                <p>Firebase</p>
              </div>
              <div>
                <Image src="/image/figma.svg" alt="React Logo" width={24} height={24} />
                <p>Figma</p>
              </div>
              <div>
                <Image src="/image/typescript.svg" alt="React Logo" width={24} height={24} />
                <p>TypeScript</p>
              </div>
              <div>
                <Image src="/image/wordpress.svg" alt="React Logo" width={24} height={24} />
                <p>Wordpress</p>
              </div>
              <div>
                <Image src="/image/nodedotjs.svg" alt="React Logo" width={24} height={24} />
                <p>Node.js</p>
              </div>
              <div>
                <Image src="/image/mysql.svg" alt="React Logo" width={24} height={24} />
                <p>MySQL</p>
              </div>
              <div>
                <Image src="/image/php.svg" alt="React Logo" width={24} height={24} />
                <p>PHP</p>
              </div>
              <div>
                <Image src="/image/bootstrap.svg" alt="React Logo" width={24} height={24} />
                <p>BootStrap</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className='currently-learning'>Currently Learning</h3>
            <div className="badges">
              <div>
                <Image src="/image/typescript.svg" alt="React Logo" width={24} height={24} />
                <p>TypeScript</p>
              </div>
              <div>
                <Image src="/image/tailwindcss.svg" alt="React Logo" width={24} height={24} />
                <p>Tailwind CSS</p>
              </div>
              <div>
                <Image src="/image/vuedotjs.svg" alt="React Logo" width={24} height={24} />
                <p>Vue</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project" id="project">
          <h2 className="project-title">Project</h2>

          {/* Tabs */}
          <div className="badges-all">
            <div className={`badges ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
              <p>All</p>
            </div>
            <div className={`badges ${activeTab === "team" ? "active" : ""}`} onClick={() => setActiveTab("team")}>
              <p>Team Projects</p>
            </div>
            <div className={`badges ${activeTab === "personal" ? "active" : ""}`} onClick={() => setActiveTab("personal")}>
              <p>Personal Projects</p>
            </div>
          </div>

          {/* Projects */}
          <div className="project-cards">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <div className="project-card" key={idx}
                  style={{ '--hover-bg': `url(${project.imageUrl})` }}
                 >
                  <div>
                    <h5 className="project-card-title">{project.title}</h5>
                    <p dangerouslySetInnerHTML={{ __html: project.description }} />
                  </div>
                  <div>
                    <h6>Team Project</h6>
                    <p>{project.teamInfo}</p>
                  </div>
                  <div>
                    <h6>Role / Contributions</h6>
                    {project.role.map((r, i) => <p key={i}>{r}</p>)}
                  </div>
                  <div>
                    <h6>Tech Stack</h6>
                    <p>{project.tech.join(", ")}</p>
                  </div>
                  <div className="git-link">
                    <div>
                      <Link href={project.github} target="_blank">
                        <Image src="/image/github.svg" alt="" width={24} height={24} />
                        <p>GitHub</p>
                      </Link>
                    </div>
                    <div>
                      <Link href={project.site} target="_blank">
                        <Image src="/image/open-in-new.svg" alt="" width={24} height={24} />
                        <p>Site</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='project-card-personal'>
                <p>Personal Projects are coming soon...</p>
              </div>
            )}
          </div>
        </div>
        {/* Interview */}
        <div className="interview" id="interview">
          <h2 className="interview-title" >Interview</h2>
          <div className='qna'>
            <h3>Q. 프론트엔드를 시작하게 된 계기는 무엇인가요?</h3>
          </div>
          <div className='interview-qna'>
            <p>친구를 통해 프론트엔드를 알게 되었고, 흥미를 느꼇지만 늦었다고 생각해 미루고 있었습니다. <br /> <span>하지만 계속 후회할 것 같다는 생각에, 더 늦기 전에 시작하자는 마음으로 도전하게 되었습니다.</span></p>
          </div>
          <div className='qna'>
            <h3>Q. 개발자로서 본인의 강점은 무엇인가요?</h3>
          </div>
          <div className='interview-qna'>
            <p>저의 강점은 끈기와 꾸준한 노력입니다.<br />
              <span>문제를 해결하며 배우는 과정에서 즐거움을 느끼고, 이를 통해 지속적으로 성장해 나가고 있습니다.</span></p>
          </div>
          <div className='qna'>
            <h3>Q. 문제를 해결할 때 가장 중요하게 생각하는 것은 무엇인가요?</h3>
          </div>
          <div className='interview-qna'>
            <p>문제 해결에서 가장 중요한 것은 상황에 맞는 접근과 팀원 간의 소통입니다.<br />
              <span>저는 팀과 함께 열린 마음으로 최선의 해결책을 찾습니다.</span></p>
          </div>
        </div>
        {/* Contact */}
        <div className="contact" id="contact">
          <h2 className="contact-title">Contact</h2>
          <div className='intro-message'>
            <p>
              <span style={{
                opacity: fade ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                display: "inline-block"
              }}>
                {messages[currentIndex][0]}
              </span>
              <br />
              <span style={{
                opacity: fade ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                display: "inline-block"
              }}>
                {messages[currentIndex][1]}
              </span>
            </p>
          </div>
          <div className='contact-links'>
            <div className='contact-item'>
              <Link href='https://github.com/Ha-im' target='_blank'>
                <Image src="/image/github.svg" alt="깃허브 아이콘" width={24} height={24} />
                <p>GitHub</p>
              </Link>
            </div>
            <div className='contact-item'>
              <a href='mailto:gungsun1@naver.com' >
                <Image src="/image/mail.svg" alt="메일 아이콘" width={24} height={24} />
                <p>Email</p>
              </a>
            </div>
            <div className='contact-item'>
              <Link href='https://preschool.tistory.com/' target='_blank'>
                <Image src="/image/tistory.svg" alt="블로그 티스토리 아이콘" width={24} height={24} />
                <p>Blog</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h2>@ 2025 Kyeongseon Park, Built with Next.js</h2>
      </footer>
      <div className='action-buttons'>
        <div className='mail-color-black-btn'>
          <button onClick={() => window.location.href = 'mailto:gungsun1@naver.com'}><Image src="/image/mail-color-black.svg" alt="" width={24} height={24} /></button>
        </div>
        <div className='feedback-btn'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzvwLwqIxIugCrg3-pkas3AWLcG-mO6p2pZ28FQ7-ud_TrDQ/viewform?usp=header" target="_blank"><Image src="/image/feedback.svg" alt="" width={24} height={24} /></a>
        </div>
        <div className='arrow-upward-btn'>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Image src="/image/arrow_upward.svg" alt="" width={24} height={24} /></button>
        </div>
      </div>
    </>

  );
}