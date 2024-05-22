import logo from './logo.svg';
import classes from './App.module.scss';
import { Button } from './Button';
import { TopBar } from './TopBar';
import { useContext } from 'react';
import { AppContext } from './App';
import clsx from 'clsx';

function HomePage() {
  const {
    userData: {fullname},
    isLight,
  } = useContext(AppContext);

  return (
    <div className={classes.App}>
      <header className={clsx([
      classes['App-header'],
      isLight && classes['App-header-light'],
  ])}>
        <TopBar />

        <Button
          text="Hello"
          smallText="world"
          onClick={() => {
            alert('Hi');
          }}
          style={{
            color: 'red',
          }}
          id="myButton"
        />
        <img src={logo} className={classes["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello {fullname}</p>
        <a
          className={classes["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello world</p>
        <Button text="Hey"/>
      </header>
    </div>
  );
}

export default HomePage;