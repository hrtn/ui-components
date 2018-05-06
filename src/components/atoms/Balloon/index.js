import React from 'react';
import styles from './styles.css';

const Baloon = ({children, className, ...props}) => (
  <span className={
    [styles.balloon, className].join('')}{...props}>{ children }</span>
);

export default Baloon;
