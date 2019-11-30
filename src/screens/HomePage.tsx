import React from 'react';

const SlashDelimiter: React.FC = () => <> / </>;

const PersonalInformationSection: React.FC = () => (
  <section>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>
            Ginpei Takanashi
            /
            高梨ギンペイ
          </td>
        </tr>
        <tr>
          <th>GitHub</th>
          <td>
            <a href="https://github.com/ginpei/">@ginpei</a>
          </td>
        </tr>
        <tr>
          <th>Twitter</th>
          <td>
            <a href="https://twitter.com/ginpei_en">@ginpei_en</a>
            {' / '}
            <a href="https://twitter.com/ginpei_jp">@ginpei_jp</a>
          </td>
        </tr>
        <tr>
          <th>Mail</th>
          <td>
            ginpei@gmail.com
          </td>
        </tr>
        <tr>
          <th>Posts</th>
          <td>
            <a href="https://ginpen.com/">Ginpen.com （日本語）</a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);

const AppSection: React.FC = () => (
  <section>
    <h2>Apps</h2>
    <ul>
      <li>
        <a href="https://chrome.google.com/webstore/detail/devtools-z-index/bcnpmhefiohkpmjacfoanhbjhikegmoe">DevTools z-index for Chrome</a>
        <SlashDelimiter />
        <a href="https://addons.mozilla.org/en-US/firefox/addon/devtools-z-index/">for Firefox</a>
        <SlashDelimiter />
        <a href="https://github.com/ginpei/devtools-z-index">GitHub</a>
      </li>
      <li>
        <a href="https://chrome.google.com/webstore/detail/%E3%81%8A%E5%89%8D%E3%82%92%E6%B6%88%E3%81%99%E6%96%B9%E6%B3%95-for-github/lhicnokhbnhbecjiahdaokfphfhjkbnp">お前を消す方法 for GitHub for Chrome</a>
        <SlashDelimiter />
        <a href="https://addons.mozilla.org/en-US/firefox/addon/%E3%81%8A%E5%89%8D%E3%82%92%E6%B6%88%E3%81%99%E6%96%B9%E6%B3%95-for-github/">for Firefox</a>
        <SlashDelimiter />
        <a href="https://github.com/ginpei/omae-wo-kesu-houhou-for-github">GitHub</a>
      </li>
      <li>
        <a href="https://pretty-letters.ginpei.info/">Pretty Letters</a>
        <SlashDelimiter />
        <a href="https://github.com/ginpei/pretty-letters">GitHub</a>
      </li>
      <li>
        <a href="https://understanding-transform-matrix.ginpei.info/">Understanding transform:matrix()</a>
        <SlashDelimiter />
        <a href="https://github.com/ginpei/understanding-transform-matrix">GitHub</a>
      </li>
      <li>
        <a href="https://potoshop.ginpei.info/">Potoshop (Beta)</a>
      </li>
      <li>
        <a href="https://ccc.ginpei.info/">Code Chat Cat (beta)</a>
      </li>
    </ul>
  </section>
);

const PublicationSection: React.FC = () => (
  <section>
    <h1>Paper Publications</h1>
    <ul>
      <li>
        <a href="https://www.amazon.co.jp/dp/4844364936">現場のプロが教えるHTML+CSSコーディングの最新常識 知らないと困るWebデザインの新ルール4 (2015)</a>
      </li>
      <li>
        <a href="https://www.amazon.co.jp/dp/4844364014">web creators特別号 HTML5完全読本―実践テクニックとWebデザインの最新動向 (2014)</a>
      </li>
    </ul>
  </section>
);

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <div className="ui-container">
        <h1>Ginpei Takanashi</h1>
        <p>
          GINPEI IS:
          A guy who writes JavaScript and makes JapaneseSushi in Vancouver, Canada.
        </p>
        <div className="ui-center">
          <img
            alt="A standing penguin with the red sun, the icon of Ginpei"
            height="512"
            src={`${process.env.PUBLIC_URL}/ginpei-1200.png`}
            style={{
              height: 'auto',
              maxWidth: '256px',
            }}
            width="512"
          />
        </div>
        <PersonalInformationSection />
        <AppSection />
        <PublicationSection />
      </div>
    </div>
  );
}

export default HomePage;
