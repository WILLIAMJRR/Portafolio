import logo from '../assets/icon/logo.svg';
//icons
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs';

const Header = ({ theme, setTheme }) => {
  // const handleThemeSwitch = () => {
  //   const dark_mode = document.querySelector('.dark_mode');
  //   const classInputs = document.querySelectorAll('input');
  //   const textArea = document.querySelector('.text_area');

  //   const isDarkTheme = theme === 'dark';

  //   setTheme(isDarkTheme ? 'light' : 'dark');
  //   dark_mode.classList.toggle('bg-sitelight', isDarkTheme);
  //   dark_mode.classList.toggle('text-indigo-900', isDarkTheme);
  //   textArea.classList.toggle('placeholder:text-white', !isDarkTheme);
  //   textArea.classList.toggle('placeholder:text-indigo-900', isDarkTheme);
  //   classInputs.forEach((input) => {
  //     input.classList.toggle('placeholder:text-white', !isDarkTheme);
  //     input.classList.toggle('placeholder:text-indigo-900', isDarkTheme);
  //   });
  // };
  const handleThemeSwitch = () => {
    //dark mode
    const dark_mode = document.querySelector('.dark_light');
    const classInputs = document.querySelectorAll('input');
    const textArea = document.querySelector('.text_area');

    if (theme === 'dark') {
      setTheme('light');
      dark_mode.classList.remove('modeDark');
      dark_mode.classList.add('modeLight', 'text-indigo-600');
      textArea.classList.remove('placeholder:text-white');
      textArea.classList.add('placeholder:text-indigo-600');
      classInputs.forEach((input) => {
        input.classList.remove('placeholder:text-white');
      });
      classInputs.forEach((input) => {
        input.classList.add('placeholder:text-indigo-600');
      });
    } else {
      setTheme('dark');
      dark_mode.classList.add('modeDark');
      dark_mode.classList.remove('modeLight', 'text-indigo-600');
      textArea.classList.add('placeholder:text-white');
      textArea.classList.remove('placeholder:text-indigo-600');
      classInputs.forEach((input) => {
        input.classList.add('placeholder:text-white');
      });
      classInputs.forEach((input) => {
        input.classList.remove('placeholder:text-indigo-600');
      });
    }
  };
  return (
    <header className=' py-4'>
      <div className='container mx-auto'>
        {/* logo */}
        <div className='flex justify-between items-center'>
          <a href=''>
            <img className='w-44' src={logo} alt='logo william' />
          </a>
          <div className='flex items-center justify-evenly w-80'>
            <button onClick={handleThemeSwitch} className='p-4 btn'>
              {theme === 'dark' ? <BsFillSunFill /> : <BsMoonFill />}
            </button>
            <button className='btn btn-sm'>Work with me</button>
          </div>
          {/* boton */}
        </div>
      </div>
    </header>
  );
};

export default Header;
