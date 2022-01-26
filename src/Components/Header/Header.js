// <Header /> should render greeting prop
import React from 'react';
import './Header.css';

export default function Header(props) {
  return <header>Welcome to the Animal Farm by {props.name}</header>;
}