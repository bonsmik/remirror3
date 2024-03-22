import React from 'react';
import { BoldExtension } from 'remirror/extensions';

import { Remirror, ThemeProvider, useRemirror } from '@remirror/react';
import { ToggleBoldButton, Toolbar } from '@remirror/react-ui';

const extensions = () => [new BoldExtension({})];

const ToggleBold = (): JSX.Element => {
  const { manager, state, onChange } = useRemirror({
    extensions: extensions,
    content: '<p>Text in <b>bold</b></p>',
    stringHandler: 'html',
  });

  return (
    <ThemeProvider>
      <Remirror
        manager={manager}
        autoFocus
        onChange={onChange}
        initialContent={state}
        autoRender='end'
      >
        <Toolbar>
          <ToggleBoldButton />
        </Toolbar>
      </Remirror>
    </ThemeProvider>
  );
};

export default ToggleBold;