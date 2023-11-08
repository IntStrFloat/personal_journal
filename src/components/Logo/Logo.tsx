import { memo } from 'react';

const Logo = (src: string): JSX.Element => {
  return <img src={src} alt="" />;
};

export default memo(Logo);
