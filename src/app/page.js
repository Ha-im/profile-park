import Image from "next/image";

export default function Home() {
  return (
    <>
    <header>
      <div>
        <h1 className="park">Kyeongseon Park</h1>
      </div>
    </header>
    <div className="container">
    <main>
      <div className="home">
        <h2 className="home-title">Hello, I&apos;m</h2>
        <h3 className="name">Kyeongseon</h3>
        <div className="typetext">text</div>
        <p className="description">배우는 것을 두려워하지 않는 신입 프론트엔드 개발자입니다. <br/>매일 조금씩 더 나은 코드를 작성하기 위해 노력하고 있습니다.</p>
        <div>
          <button className="project-btn">Project</button>
        </div>
        <div className="scroll-indicator"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fafafa"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></div>
      </div>
      <div className="about">
        <h2 className="about-title">About Me</h2>
        <div className="about-developer">
          <h4>Frontend Developer</h4>
          <p>프론트엔드 개발의 기초부터 최신 프레임워크까지 체계적으로 학습해온 예비 개발자입니다.<br/>배운 지식을 실무에 적용하며 사용자 중심의 웹 경험을 만들어가고 싶습니다.</p>
          <div className="badges">
            <div>
              <p>HTML</p>
            </div>
            <div>
              <p>CSS</p>
            </div>
            <div>
              <p>JavaScript</p>
            </div>
            <div>
              <p>React</p>
            </div>
            <div>
              <p>Vite</p>
            </div>
            <div>
              <p>BootStrap</p>
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="feature-item">
            <Image src="" alt=""/>
            <h4 className="feature-title">Web Development</h4>
            <p className="feature-desc">반응형 웹 사이트 제작 학습중</p>
          </div>
          <div className="feature-item">
            <Image src="" alt=""/>
            <h4 className="feature-title">Team Collaboration</h4>
            <p className="feature-desc">소통과 협업을 중시</p>
          </div>
        </div>
      </div>
      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-desc">
          <div >
            <Image src="" alt=""/>
            <h3>HTML</h3>
          </div>
          <div className="progressbar">
            <div>

            </div>
          </div>
          <div>
            <p>0%</p>
          </div>
        </div>
        <div className="skills-desc">
          <div >
            <Image src="" alt=""/>
            <h3>HTML</h3>
          </div>
          <div className="progressbar">
            <div>

            </div>
          </div>
          <div>
            <p>0%</p>
          </div>
        </div>
        <div className="skills-desc">
          <div >
            <Image src="" alt=""/>
            <h3>HTML</h3>
          </div>
          <div className="progressbar">
            <div>

            </div>
          </div>
          <div>
            <p>0%</p>
          </div>
        </div>
        <div className="skills-desc">
          <div >
            <Image src="" alt=""/>
            <h3>HTML</h3>
          </div>
          <div className="progressbar">
            <div>

            </div>
          </div>
          <div>
            <p>0%</p>
          </div>
        </div>
        <div className="skills-desc">
          <div >
            <Image src="" alt=""/>
            <h3>HTML</h3>
          </div>
          <div className="progressbar">
            <div>

            </div>
          </div>
          <div>
            <p>0%</p>
          </div>
        </div>
        <div className="skills-desc">
          <div >
            <Image src="" alt=""/>
            <h3>HTML</h3>
          </div>
          <div className="progressbar">
            <div>

            </div>
          </div>
          <div>
            <p>0%</p>
          </div>
        </div>
      </div>
      <div className="project">
        <h2 className="project-title">Projects</h2>
        <div>
          <Image src="" alt=""/>
          <div>
            <h4>Small Group Community</h4>
            <p>소모임 매칭 및 관리 플랫폼. 팀 협업으로 개발한 커뮤니티 웹사이트</p>
          </div>
          <div>
            <div>
              <p>Vite</p>
            </div>
            <div>
              <p>React</p>
            </div>
            <div>
              <p>SupaBase</p>
            </div>
            <div>
              <p>Kakao API</p>
            </div>
          </div>
          <div>
            <Image src="" alt=""/>
            <p>Code</p>
          </div>
          <div>
            <Image src="" alt=""/>
            <p>Live</p>
          </div>
        </div>
        <div>
          <Image src="" alt=""/>
          <div>
            <h4>Small Group Community</h4>
            <p>소모임 매칭 및 관리 플랫폼. 팀 협업으로 개발한 커뮤니티 웹사이트</p>
          </div>
          <div>
            <div>
              <p>Vite</p>
            </div>
            <div>
              <p>React</p>
            </div>
            <div>
              <p>SupaBase</p>
            </div>
            <div>
              <p>Kakao API</p>
            </div>
          </div>
          <div>
            <Image src="" alt=""/>
            <p>Code</p>
          </div>
          <div>
            <Image src="" alt=""/>
            <p>Live</p>
          </div>
        </div>
        <div>
          <Image src="" alt=""/>
          <div>
            <h4>Small Group Community</h4>
            <p>소모임 매칭 및 관리 플랫폼. 팀 협업으로 개발한 커뮤니티 웹사이트</p>
          </div>
          <div>
            <div>
              <p>Vite</p>
            </div>
            <div>
              <p>React</p>
            </div>
            <div>
              <p>SupaBase</p>
            </div>
            <div>
              <p>Kakao API</p>
            </div>
          </div>
          <div>
            <Image src="" alt=""/>
            <p>Code</p>
          </div>
          <div>
            <Image src="" alt=""/>
            <p>Live</p>
          </div>
        </div>
      </div>
      <div className="connect">
        <h2 className="connect-title">Let&apos;s Connect</h2>
        <div>
          <h4>Ready to Work together?</h4>
          <p>새로운 기회와 흥미로운 프로젝트에 항상 관심이 있습니다.</p>
          <div>
            <Image src="" alt=""/>
            <p>gungsun1@naver.com</p>
          </div>
          <div>
            <Image src="" alt=""/>
            <p>Seoul, Korea</p>
          </div>
          <div>
            <h4>get in Touch</h4>
          </div>
        </div>
      </div>
    </main>
    </div>
    <footer>
      <p>© 2025 Kyeongseon Park. Built with Next.js.</p>
    </footer>

    </>
  );
}
