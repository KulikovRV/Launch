import React from 'react';
import classes from './InputLang.module.css';

function InputLang({ langProg, setLangProg }) {
  return (
    <div className={classes.viewport}>
      <select value={langProg} onChange={(e) => setLangProg(e.target.value)} id="nameInputLang">
        <option value="yii2">Yii2</option>
        <option value="devops">DevOps</option>
        <option value="c++">C++</option>
        <option value="ios">iOS</option>
        <option value="laravel">Laravel</option>
        <option value="java">Java</option>
        <option value="kotlin">kotlin</option>
        <option value="ruby">Ruby</option>
        <option value="python">Python</option>
        <option value="js">js</option>
        <option value="sql">SQL</option>
        <option value="backend">backend</option>
        <option value="fullstack">Fullstack</option>
        <option value="angular">angular</option>
        <option value="react">React</option>
        <option value="django">Django</option>
        <option value="html">HTML</option>
        <option value="nodejs">nodejs</option>
        <option value="rails">Rails</option>
        <option value="css">CSS</option>
        <option value="go">Go</option>
        <option value="web">web</option>
        <option value="c#">C#</option>
        <option value="flask">Flask</option>
        <option value="vue">Vue</option>
        <option value="yii">Yii</option>
        <option value="redis">Redis</option>
        <option value="вёрстка">вёрстка</option>
        <option value="typescript">Typescript</option>
        <option value="ruby on rails">Ruby On Rails</option>
        <option value="clojure">clojure</option>
        <option value="frontend">frontend</option>
        <option value="golang">GoLang</option>
        <option value="javascript">javascript</option>
        <option value="postgresql">PostgreSQL</option>
        <option value="ror">RoR</option>
        <option value="spring">Spring</option>
        <option value="docker">Docker</option>
        <option value="node.js">node.js</option>
        <option value="php">php</option>
      </select>
    </div>
  );
}

export default InputLang;