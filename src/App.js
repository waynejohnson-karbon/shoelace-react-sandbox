import './App.css';

import "@shoelace-style/shoelace/dist/themes/light.css";


import { useState } from 'react';
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import SlDialog from '@shoelace-style/shoelace/dist/react/dialog';

import SlDivider from '@shoelace-style/shoelace/dist/react/divider';
import SlDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';
import SlMenu from '@shoelace-style/shoelace/dist/react/menu';
import SlMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

function App() {

  const [open, setOpen] = useState(false);
  
  return (
    <div className="App">
      <header className="App-header">
        
        <SlDialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        <div
          style={{
            height: '100vh',
            border: 'dashed 2px var(--sl-color-neutral-200)',
            padding: '0 1rem'
          }}
        >
          <p>Open dropdown to see it extend outside of the modal...  👇</p>

          <p style={{height: '300px'}}>Pushing to the bottom</p>

          <SlDropdown>
            <SlButton slot="trigger" caret>
              Dropdown
            </SlButton>
            <SlMenu>
              <SlMenuItem>Dropdown Item 1</SlMenuItem>
              <SlMenuItem>Dropdown Item 2</SlMenuItem>
              <SlMenuItem>Dropdown Item 3</SlMenuItem>
              <SlDivider />
              <SlMenuItem type="checkbox" checked>
                Checkbox
              </SlMenuItem>
              <SlMenuItem disabled>Disabled</SlMenuItem>
              <SlDivider />
              <SlMenuItem>
                Prefix
                <SlIcon slot="prefix" name="gift" />
              </SlMenuItem>
              <SlMenuItem>
                Suffix Icon
                <SlIcon slot="suffix" name="heart" />
              </SlMenuItem>
            </SlMenu>
          </SlDropdown>

        </div>

        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>


      </header>
    </div>

    
  );

  
}

export default App;
