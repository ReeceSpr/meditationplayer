import React from 'react';
import './style.css';

export default function App() {
  return (
    <div id="Player">
      <div id="Controls">
        <div id="LeftButtons">
          <button id="Search" />
          <button id="Upload" />
          <button id="Website" />
          <button id="PreviousSong" />
          <button id="NextSong" />
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

