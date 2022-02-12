// <Footer /> should render contact email prop.
import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return <footer>Email: {props.email}</footer>;
}