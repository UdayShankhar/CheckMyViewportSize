import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import "./App.css";
import ViewportDetails from './ViewportDetails';

const App = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div>
      <div className='colorSwitch'>
        <Switch
          shadow 
          size="lg"
          color="secondary"
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          iconOn={<BsMoonStarsFill />}
          iconOff={<BsSunFill />}
        />
      </div>

      <ViewportDetails />
    </div>
  )
}

export default App