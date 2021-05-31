import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.state = { bg: true };
    this.state = { song: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleBGClick = this.handleBGClick.bind(this);
    this.handleSongClick = this.handleSongClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleBGClick() {
    this.setState(prevState => ({
      bg: !prevState.bg
    }));
  }

  handleSongClick() {
    this.setState(prevState => ({
      song: !prevState.song
    }));
    this.setState(prevState => ({
      bg: !prevState.bg
    }));
  }

  render() {
    return (
      <div
        class={this.state.bg ? 'Playing' : 'Paused'}
        id={
          (this.state.song ? 'Song1Bg' : 'Song2Bg',
          console.log(
            this.state.bg ? 'Playing' : 'Paused',
            this.state.song ? 'Song1Bg' : 'Song2Bg'
          ))
        }
        onClick={this.handleBGClick}
      >
        <div id="Controls">
          <div id="LeftButtons">
            <button id="Search" onClick={this.handleClick} />
            <button id="Upload" />
            <form action="https://blueskymeditation.mrchencheng.com/">
              <button id="Website" />
            </form>
            <button id="PreviousSong" onClick={this.handleSongClick} />
            <button id="NextSong" onClick={this.handleSongClick} />
          </div>

          <div id="VolumeButtons">
            <button id="VolUp" />
            <button id="VolDown" />
          </div>

          <div id="SongDetails">
            <h1>The Wind</h1>
            <p>Focus</p>
          </div>

          <div id="Rating" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
