import React from 'react';
import { IMGS } from '../../../../theme/images.const';

export const FinalTestInfo = () => {
  return (
    <>
      {' '}
      <img src={IMGS.JAVA_SCRIPT} alt='Java Script' width='146' height='146' />
      <h2>FullStack - Final Test</h2>
      <p>
        JavaScript is a programming language that is one of the core
        technologies of the World Wide Web, alongside HTML and CSS.{' '}
      </p>
      <ul>
        <li>
          <p>Теми</p>
          <p>HTML, CSS, JavaScript, React</p>
        </li>
        <li>
          <p>Час проходження</p>
          <p>2:00:00</p>
        </li>
        <li>
          <p>Питання</p>
          <p>50</p>
        </li>
        <li>
          <p>Learners</p>
          <p>200</p>
        </li>
        <li>
          <p>Author</p>
          <p>GoIT</p>
        </li>
      </ul>
    </>
  );
};
