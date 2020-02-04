import React from 'react';

export default (
  ref: React.MutableRefObject<any>,
  onClickOutside: () => void,
) => {
  const handleClickOutside = React.useCallback((event: React.MouseEvent<Element, MouseEvent>) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside();
    }
  }, [ref, onClickOutside]);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside as any);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as any);
    }
  });
};
