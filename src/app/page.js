"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";

export default function Home() {
 const texts = ["React", "Next.js", "Supabase","Node.js","Wordpress","Figma","Git","Firebase","Vue.js","Vite","Bootstrap","Apache","MySQL","PHP","Jquery","HTML","CSS","JavaScript"]; // 타이핑할 스택
  const speed = 100; // 글자당 지연(ms)
  const pause = 1000; // 한 단어 끝난 후 대기(ms)

  const [index, setIndex] = useState(0);       // 현재 텍스트 인덱스
  const [charIndex, setCharIndex] = useState(0); // 글자 인덱스
  const [display, setDisplay] = useState("");   // 화면에 보이는 텍스트

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
  return (
          <>
          <header>
                <h1 className="name">kyeongseon Park</h1>
                <ul>
                  <li><a href="">HOME</a></li>
                  <li><a href="">ABOUT ME</a></li>
                  <li><a href="">SKILLS</a></li>
                  <li><a href="">PROJECTS</a></li>
                  <li><a href="">INTERVIEW</a></li>
                  <li><a href="">CONTACT</a></li>
                </ul>
          </header>
          <div className="container">
            {/* Home */}
            <div className="home">
              <div className='home-sub'>
                <div className="title">
                  <h2>Hello, i&#44;m</h2>
                  <h3>Kyeoungseon</h3>
                  <h4><span className='title-sub'>&quot;배우는 것을 두려워하지 않는&quot;</span> 신입 프론트엔드 개발자입니다.<br/>매일 조금씩 더 나은 코드를 작성하기 위해 노력하고 있습니다.</h4>
                </div>
                <div className='text'>
                  <div>{display}<span className="cursor">|</span></div>
                </div>
              </div>
              <div className="arrow-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eaeaea"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>
              </div>
            </div>

            {/* about */}
            <div className="about">
              <div>
                <h2 className="about-title">About Me</h2>
                <div className='about-role'>
                  <h4 className='role-title'>Frontend Developer</h4>
                  <p className="role-description">프론트엔드 개발의 기초부터 최신 프레임워크까지 체계적으로 학습해온 예비 개발자입니다.<br/>배운 지식을 실무에 적용하며 사용자 중심의 웹 경험을 만들어가고 싶습니다.</p>
                </div>
                <div className='badges'>
                  <div>
                    <Image src="/image/html5.svg" alt="HTML5 Logo" width={24} height={24}/>
                    <p>HTML5</p>
                  </div>
                  <div>
                    <Image src="/image/css.svg" alt="CSS Logo" width={24} height={24}/>
                    <p>CSS</p>
                  </div>
                  <div>
                    <Image src="/image/javascript.svg" alt="JavaScript Logo" width={24} height={24}/>
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <Image src="/image/jquery.svg" alt="Jquery Logo" width={24} height={24}/>
                    <p>Jquery</p>
                  </div>
                  <div>
                    <Image src="/image/react-1.svg" alt="React Logo" width={24} height={24}/>
                    <p>React</p>
                  </div>
                  <div>
                    <Image src="/image/vite.svg" alt="Vite Logo" width={24} height={24}/>
                    <p>Vite</p>
                  </div>
                  <div>
                    <Image src="/image/nextdotjs.svg" alt="Nextjs Logo" width={24} height={24}/>
                    <p>Next.js</p>
                  </div>
                  <div>
                    <Image src="/image/vuedotjs.svg" alt="Vue Logo" width={24} height={24}/>
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
                <p>제가 지금껏 경험해 온 사회생활은 항상 팀 단위로 움직이는 환경이었습니다.<br/> 
                이 과정에서 협업의 중요성을 깊이 깨달았고, 팀원과의 원활한 소통과 역할 분담이 프로젝트 성패를 좌우한다는 것을 배웠습니다.<br/> 
                또한 어려운 문제 앞에서도 포기하지 않고 끝까지 해결하는 끈기, 새로운 환경과 기술에도 빠르게 적응하는 유연성을 길렀습니다.<br/> 
                이러한 경험을 바탕으로, 저는 사용자 중심의 웹 경험을 만들어가고 지속적으로 성장하는 개발자가 되고자 합니다.</p>
              </div>
            </div>

            {/* skills */}
            <div className="skills">
              <h2 className="skills-title">Skills</h2>
              <div>
                <h3 className='current-skills'>Current Skills</h3>
                <div className="badges">
                  <div>
                    <Image src="/image/html5.svg" alt="HEML5 Logo" width={24} height={24}/>
                    <p>HEML5</p>
                  </div>
                  <div>
                    <Image src="/image/css.svg" alt="CSS Logo" width={24} height={24}/>
                    <p>CSS</p>
                  </div>
                  <div>
                    <Image src="/image/javascript.svg" alt="JavaScript Logo" width={24} height={24}/>
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <Image src="/image/react-1.svg" alt="React Logo" width={24} height={24}/>
                    <p>React</p>
                  </div>
                  <div>
                    <Image src="/image/vite.svg" alt="Vite Logo" width={24} height={24}/>
                    <p>Vite</p>
                  </div>
                  <div>
                    <Image src="/image/jquery.svg" alt="Vite Logo" width={24} height={24}/>
                    <p>Jquery</p>
                  </div>
                  <div>
                    <Image src="/image/git.svg" alt="React Logo" width={24} height={24}/>
                    <p>Git/GitHub</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className='experienced-tools'>Tools & Experience</h3>
                <div className="badges">
                  <div>
                    <Image src="/image/nextdotjs.svg" alt="Next Logo" width={24} height={24}/>
                    <p>Next.js</p>
                  </div>
                  <div>
                    <Image src="/image/supabase.svg" alt="supabase Logo" width={24} height={24}/>
                    <p>Supabase</p>
                  </div>
                  <div>
                    <Image src="/image/firebase.svg" alt="firebase Logo" width={24} height={24}/>
                    <p>Firebase</p>
                  </div>
                  <div>
                    <Image src="/image/figma.svg" alt="React Logo" width={24} height={24}/>
                    <p>Figma</p>
                  </div>
                  <div>
                    <Image src="/image/typescript.svg" alt="React Logo" width={24} height={24}/>
                    <p>TypeScript</p>
                  </div>
                  <div>
                    <Image src="/image/wordpress.svg" alt="React Logo" width={24} height={24}/>
                    <p>Wordpress</p>
                  </div>
                  <div>
                    <Image src="/image/nodedotjs.svg" alt="React Logo" width={24} height={24}/>
                    <p>Node.js</p>
                  </div>
                  <div>
                    <Image src="/image/mysql.svg" alt="React Logo" width={24} height={24}/>
                    <p>MySQL</p>
                  </div>
                  <div>
                    <Image src="/image/php.svg" alt="React Logo" width={24} height={24}/>
                    <p>PHP</p>
                  </div>
                  <div>
                    <Image src="/image/bootstrap.svg" alt="React Logo" width={24} height={24}/>
                    <p>BootStrap</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className='currently-learning'>Currently Learning</h3>
                <div className="badges">
                  <div>
                    <Image src="/image/typescript.svg" alt="React Logo" width={24} height={24}/>
                    <p>TypeScript</p>
                  </div>
                  <div>
                    <Image src="/image/tailwindcss.svg" alt="React Logo" width={24} height={24}/>
                    <p>Tailwind CSS</p>
                  </div>
                  <div>
                    <Image src="/image/vuedotjs.svg" alt="React Logo" width={24} height={24}/>
                    <p>Vue</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project */}
            <div className="project">
              <h2 className="project-title">Project</h2>
              <div>
                <div className='badges-all'>
                    <div className="badges">
                      <div>
                        <p><a href="">All</a></p>
                      </div>
                    </div>
                    <div className="badges">
                      <div>
                        <p><a href="">Team Projects</a></p>
                      </div>
                    </div>
                    <div className="badges">
                      <div>
                        <p><a href="">Personal Projects</a></p>
                      </div>
                    </div>
                </div>
              </div>
              <div className='project-cards'>
                <div className='project-card'>
                  <div>
                    <h5 className='project-card-title'>Nestlé Clone Website</h5>
                    <p>정적 웹사이트 클론 제작</p>
                  </div>
                  <div>
                    <h6>Team Project</h6>
                    <p>4명, 25% 기여</p>
                  </div>
                  <div>
                    <h6>Role / Contributions</h6>
                    <p>레이아웃 구성</p>
                    <p>페이지 일부 인터렉션 구현</p>
                    <p>무한 애니메이션 구현</p>
                  </div>
                  <div>
                    <h6>Tech Stack</h6>
                    <p>HTML , CSS , JavaScript</p>
                  </div>
                  <div className='git-link'>
                    <div>
                      <a href="">
                        <Image src="/image/github.svg" alt="" width={24} height={24}/>
                        <p>GitHub</p>
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <Image src="/image/open-in-new.svg" alt=""width={24} height={24}/>
                        <p>Site</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='project-card'>
                  <div>
                    <h5 className='project-card-title'>Nestlé Clone Website</h5>
                    <p>정적 웹사이트 클론 제작</p>
                  </div>
                  <div>
                    <h6>Team Project</h6>
                    <p>4명, 25% 기여</p>
                  </div>
                  <div>
                    <h6>Role / Contributions</h6>
                    <p>레이아웃 구성</p>
                    <p>페이지 일부 인터렉션 구현</p>
                    <p>무한 애니메이션 구현</p>
                  </div>
                  <div>
                    <h6>Tech Stack</h6>
                    <p>HTML , CSS , JavaScript</p>
                  </div>
                  <div className='git-link'>
                    <div>
                      <a href="">
                        <Image src="/image/github.svg" alt="" width={24} height={24}/>
                        <p>GitHub</p>
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <Image src="/image/open-in-new.svg" alt="" width={24} height={24}/>
                        <p>Site</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='project-card'>
                  <div>
                    <h5>Nestlé Clone Website</h5>
                    <p>정적 웹사이트 클론 제작</p>
                  </div>
                  <div>
                    <h6>Team Project</h6>
                    <p>4명, 25% 기여</p>
                  </div>
                  <div>
                    <h6>Role / Contributions</h6>
                    <p>레이아웃 구성</p>
                    <p>페이지 일부 인터렉션 구현</p>
                    <p>무한 애니메이션 구현</p>
                  </div>
                  <div>
                    <h6>Tech Stack</h6>
                    <p>HTML , CSS , JavaScript</p>
                  </div>
                  <div className='git-link'>
                    <div>
                      <a href="">
                        <Image src="/image/github.svg" alt="" width={24} height={24}/>
                        <p>GitHub</p>
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <Image src="/image/open-in-new.svg" alt="" width={24} height={24}/>
                        <p>Site</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Interview */}
            <div className="interview">
              <h2 className="interview-title" >Interview</h2>
              <div className='qna'>
                <h3>Q. 프론트엔드를 시작하게 된 계기는 무엇인가요?</h3>
              </div>
              <div className='interview-qna'>
                <p>친구를 통해 프론트엔드를 알게 되었습니다.<br/> <span>늦었다고 생각했지만, 원래 해보고 싶었던 일을 지금이라도 해보고자 도전했습니다.</span></p>
              </div>
              <div className='qna'>
                <h3>Q. 개발자로서 본인의 강점은 무엇인가요?</h3>
              </div>
              <div className='interview-qna'>
                <p>끈기와 노력은 제 강점입니다.<br/> 
                <span>문제를 해결하며 배우는 과정 자체에서 재미를 느끼고, 이를 통해 꾸준히 성장하고 있습니다.</span></p>
              </div>
              <div className='qna'>
                <h3>Q. 문제를 해결할 때 가장 중요하게 생각하는 것은 무엇인가요?</h3>
              </div>
              <div className='interview-qna'>
                <p>어떤 문제든 상황에 따라 다르지만, 팀 협업에서는 소통과 이해가 핵심이라고 생각합니다.<br/> 
                 <span>저는 “좋은 게 좋은 것”이라는 마인드로 팀과 함께 문제를 해결합니다.</span></p>
              </div>
            </div>
            {/* Contact */}
            <div className="contact">
              <h2 className="contact-title">Contact</h2>
              <div className='intro-message'>
                <p>
                <span>“오늘보다 나은 내일을 위해”</span><br/>
                <span>“계속 성장하는 모습을 보여드리겠습니다.”</span>
                </p>
              </div>
              <div className='contact-links'>
                  <div className='contact-item'>
                    <a href=''>
                      <Image src="/image/github.svg" alt="" width={24} height={24}/>
                      <p>GitHub</p>
                    </a>
                  </div>
                  <div className='contact-item'>
                    <a href=''>
                      <Image src="/image/mail.svg" alt="" width={24} height={24}/>
                      <p>Email</p>
                    </a>
                  </div>
                  <div className='contact-item'>
                    <a href=''>
                      <Image src="/image/tistory.svg" alt="" width={24} height={24}/>
                      <p>Blog</p>
                    </a>
                  </div>
                </div>
            </div> 
          </div>
            <footer>
              <h2>@ 2025 Kyeongseon Park, Built with Next.js</h2>
            </footer>

          </>

  );
}