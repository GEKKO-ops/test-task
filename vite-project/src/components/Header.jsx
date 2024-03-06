import logo from '../assets/Logo.svg';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header_container container'>
        <img src={logo} className='logo' alt='logo' />
        <div className='header_buttons'>
          <button disabled={false}>Users</button>
          <button disabled={false}>Sign up</button>
        </div>
      </div>
    </header>
  );
};
