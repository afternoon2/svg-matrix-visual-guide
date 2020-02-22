import React from 'react';
import { Alert, Text } from 'theme-ui';
import { Transition } from 'react-spring/renderprops.cjs';
import Segment from '../../common/segment';
import MatrixContext from '../../../context/matrix/context';

const Code: React.FC = () => {
  const {
    state: {
      a, b, c, d, e, f,
    },
  } = React.useContext(MatrixContext);
  const [copied, setCopied] = React.useState<boolean>(false);
  const handleClick = React.useCallback((event: React.MouseEvent) => {
    const str: string = (event.target as HTMLElement).textContent;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [setCopied]);
  return (
    <Segment
      title="Code"
      styles={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      id="code"
    >
      <Transition
        items={copied}
        from={{
          opacity: 0,
          top: 0,
        }}
        enter={{
          opacity: 1,
          top: 10,
        }}
        leave={{
          opacity: 0,
          top: 0,
        }}
      >
        {(isCopied): any => isCopied && ((props): React.ReactElement => (
          <Alert
            sx={{
              position: 'fixed',
              width: '400px',
              left: 'calc(50% - 200px)',
              zIndex: 100,
              fontFamily: 'monospace',
            }}
            style={props}
          >
            <Text sx={{ width: '100%', textAlign: 'center' }}>
              Matrix copied to the clipboard!
            </Text>
          </Alert>
        ))}
      </Transition>
      <Text
        as="code"
        mt={3}
        sx={{
          fontFamily: 'monospace',
          margin: 0,
          padding: 0,
          paddingBottom: 2,
          fontSize: [15, 20, 20],
          textAlign: 'center',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        transform=&quot;matrix(
        {a}
        {' '}
        {b}
        {' '}
        {c}
        {' '}
        {d}
        {' '}
        {e}
        {' '}
        {f}
)&quot;
      </Text>
    </Segment>
  );
};

export default Code;
