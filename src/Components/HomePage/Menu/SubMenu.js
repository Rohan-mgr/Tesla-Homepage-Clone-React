import React from "react";
import "./SubMenu.css";

function SubMenu() {
  return (
    <div className="sub__menu">
      <ol>
        <h2>North America</h2>
        <li>
          <p>United States</p>
          <p>English</p>
        </li>
        <li>
          <p>Canada</p>
          <div>
            <p>English</p>
            <p>Français</p>
          </div>
        </li>
        <li>
          <p>México</p>
          <p>Español</p>
        </li>
        <li>
          <p>Puerto Rico</p>
          <div>
            <p>English</p>
            <p>Español</p>
          </div>
        </li>
        <h2 style={{ marginTop: "5rem" }}>Middle-East</h2>
        <li>
          <p>ישראל</p>
          <p>עִברִית</p>
        </li>
        <li>
          <p>UAE</p>
          <div>
            <p>English</p>
            <p>اَلْعَرَبِيَّةُ</p>
          </div>
        </li>
        <li>
          <p>Jordan</p>
          <p>English</p>
        </li>
        <h2 style={{ marginTop: "5rem" }}>Asia/Pacific</h2>
        <li>
          <p>中国大陆</p>
          <p>简体中文</p>
        </li>
        <li>
          <p>Hong Kong</p>
          <div>
            <p>繁體中文</p>
            <p>English</p>
          </div>
        </li>
        <li>
          <p>Macau</p>
          <div>
            <p>繁體中文</p>
            <p>English</p>
          </div>
        </li>
        <li>
          <p>台灣</p>
          <p>繁體中文</p>
        </li>
        <li>
          <p>日本</p>
          <p>日本語</p>
        </li>
        <li>
          <p>Singapore</p>
          <p>English</p>
        </li>
        <li>
          <p>대한민국</p>
          <p>한국어</p>
        </li>
        <li>
          <p>Australia</p>
          <p>English</p>
        </li>
        <li>
          <p>New Zealand</p>
          <p>English</p>
        </li>
        <div style={{ height: "33vh" }}></div>
      </ol>
    </div>
  );
}

export default SubMenu;
