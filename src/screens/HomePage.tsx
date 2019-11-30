import React from 'react';

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
      </div>
    </div>
  );
}

export default HomePage;
