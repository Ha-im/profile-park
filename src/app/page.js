"use client";
import Image from 'next/image';
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <>
          <header>
                <h1>kyeongseon Park</h1>
                <ul>
                  <li><a href="">HOME</a></li>
                  <li><a href="">ABOUT ME</a></li>
                  <li><a href="">SKILLS</a></li>
                  <li><a href="">PROJECTS</a></li>
                  <li><a href="">INTERVIEW</a></li>
                  <li><a href="">CONTACT</a></li>
                </ul>
              </header>
          <ReactFullpage.Wrapper>
              
            {/* 첫 번째 섹션 */}
            <div className="section">
              <div>
                <h2>Hello, i'm</h2>
                <h3>Kyeoundseon</h3>
                <h4>배우는 것을 두려워하지 않는 신입 프론트엔드 개발자입니다.<br/>매일 조금씩 더 나은 코드를 작성하기 위해 노력하고 있습니다.</h4>
              </div>
              <div>
                <p>React</p>
              </div>
            </div>

            {/* 두 번째 섹션 */}
            <div className="section">
              <h2>About Me</h2>
              <div>
                <h4>Frontend Developer</h4>
                <p>프론트엔드 개발의 기초부터 최신 프레임워크까지 체계적으로 학습해온 예비 개발자입니다.<br/>배운 지식을 실무에 적용하며 사용자 중심의 웹 경험을 만들어가고 싶습니다.</p>
              </div>
              <div>
                <Image src="" alt=""/>
                <p>React</p>
              </div>
              <div>
                <h4>Core Strengths</h4>
                <p><span>Team Collaboration:</span>소통과 협업을 중시하며, 팀 프로젝트에서 원활한 진행을 돕습니다.</p>
                <p><span>Persistence:</span>어려운 문제도 끝까지 해결하려는 끈기를 가지고 있습니다.</p>
                <p><span>Adaptability:</span>새로운 환경과 기술에 빠르게 적응해 업무에 적용합니다.</p>
                <p><span>Continuous Learning:</span>최신 기술을 꾸준히 배우고 성장하려는 열정을 가지고 있습니다.</p>
              </div>
              <div>
                <h4>Work Philosophy</h4>
                <p>제가 지금껏 경험해 온 사회생활은 항상 팀 단위로 움직이는 환경이었습니다.<br/> 
                이 과정에서 협업의 중요성을 깊이 깨달았고, 팀원과의 원활한 소통과 역할 분담이 프로젝트 성패를 좌우한다는 것을 배웠습니다.<br/> 
                또한 어려운 문제 앞에서도 포기하지 않고 끝까지 해결하는 끈기, 새로운 환경과 기술에도 빠르게 적응하는 유연성을 길렀습니다.<br/> 
                이러한 경험을 바탕으로, 저는 사용자 중심의 웹 경험을 만들어가고 지속적으로 성장하는 개발자가 되고자 합니다.</p>
              </div>
            </div>

            {/* 세 번째 섹션 */}
            <div className="section">
              <h2>Skills</h2>
              <div>
                <h3>Current Skills</h3>
                <div>
                  <Image src="" alt=""/>
                  <p>React</p>
                </div>
              </div>
              <div>
                <h3>Experienced Tools</h3>
                <div>
                  <Image src="" alt=""/>
                  <p>React</p>
                </div>
              </div>
              <div>
                <h3>Currently Learning</h3>
                <div>
                  <Image src="" alt=""/>
                  <p>React</p>
                </div>
              </div>
            </div>

            {/* 네 번째 섹션 */}
            <div className="section">
              <h2>Project</h2>
              <div>
                <div>
                  <p><a href="">All</a></p>
                </div>
                <div>
                  <p><a href="">Team Projects</a></p>
                </div>
                <div>
                  <p><a href="">Personal Projects</a></p>
                </div>
              </div>
              <div>
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
                <div>
                  <div>
                    <Image src="" alt=""/>
                    <p>GitHub</p>
                  </div>
                  <div>
                    <Image src="" alt=""/>
                    <p>Site</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 다 섯번째 섹션 */}
            <div className="section">
              <h2>Interview</h2>
              <div>
                <h3>Q.프론트엔드를 시작하게 된 계기는 무엇인가요?</h3>
              </div>
              <div>
                <p>친구를 통해 프론트엔드를 알게 되었습니다.<br/> <span>늦었다고 생각했지만, 원래 해보고 싶었던 일을 지금이라도 해보고자 도전했습니다.</span></p>
              </div>
              <div>
                <h3>Q.개발자로서 본인의 강점은 무엇인가요?</h3>
              </div>
              <div>
                <p>끈기와 노력은 제 강점입니다.<br/> 
                <span>문제를 해결하며 배우는 과정 자체에서 재미를 느끼고, 이를 통해 꾸준히 성장하고 있습니다.</span></p>
              </div>
              <div>
                <h3>Q.문제를 해결할 때 가장 중요하게 생각하는 것은 무엇인가요?</h3>
              </div>
              <div>
                <p>어떤 문제든 상황에 따라 다르지만, 팀 협업에서는 소통과 이해가 핵심이라고 생각합니다.<br/> 
                 <span>저는 “좋은 게 좋은 것”이라는 마인드로 팀과 함께 문제를 해결합니다.</span></p>
              </div>
            </div>
            {/* 다 섯번째 섹션 */}
            <div className="section">
              <h2>Contact</h2>
              <div>
                <p>
                <span>“오늘보다 나은 내일을 위해”</span><br/>
                <span>“계속 성장하는 모습을 보여드리겠습니다.”</span>
                </p>
              </div>
              <div>
                  <div>
                    <a href=''>
                      <Image src="" alt=""/>
                      <p>GitHub</p>
                    </a>
                  </div>
                  <div>
                    <a href=''>
                      <Image src="" alt=""/>
                      <p>Email</p>
                    </a>
                  </div>
                  <div>
                    <a href=''>
                      <Image src="" alt=""/>
                      <p>Blog</p>
                    </a>
                  </div>
                </div>
              <footer>
                <h2>@ 2025 Kyeongseon Park, Built with Next.js</h2>
              </footer>
            </div>
          </ReactFullpage.Wrapper>

          </>
        );
      }}
    />
  );
}