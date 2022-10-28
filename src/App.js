import pic from "./images/avatar.png";
import "./App.css";
import Button from "./Button/Button";
import share from "./images/share-default.png";
import more from "./images/more-default.png";
import slack from "./images/slack.png";
import github from "./images/github.png";
import zuri from "./images/zuri.png";
import i4g from "./images/I4G.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="share">
          <a href="#">
            <img src={share} alt="share button" />
          </a>
        </div>
        <div className="more">
          <a href="#">
            <img src={more} alt="more button" />
          </a>
        </div>
        <div className="pic">
          <img src={pic} alt="onyiih" id="profile_img" width={100} />
          <p id="twitter">Annette Black</p>
          <p id="slack">Onyiih</p>
        </div>
      </header>
      <main>
        <Button
          href="https://training.zuri.team"
          children="Zuri Team"
          id="btn_zuri"
        />
        <Button
          href="http://books.zuri.team"
          children="Zuri Books"
          id="books"
        />
        <Button
          href="https://books.zuri.team/python-for-beginners"
          children="Python Books"
          id="book_python"
        />
        <Button
          href="https://background.zuri.team"
          children="Background Check for Coders"
          id="pitch"
        />
        <Button
          href="https://books.zuri.team/design-rules "
          children="Design Books"
          id="book_design"
        />

        <div className="icon">
          <a href="#">
            <img src={slack} alt="slack icon" />
          </a>
          <a href="#">
            <img src={github} alt="github icon" />
          </a>
        </div>
      </main>
      <hr />
      <footer>
        <div>
          <img src={zuri} alt="zuri logo" />
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div>
          <img src={i4g} alt="I4G logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
