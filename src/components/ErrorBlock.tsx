import { FC, memo } from 'react';

interface IErrorBlock {
  error: String;
}

const ErrorBlock: FC<IErrorBlock> = ({ error }) => {
  if (!error) {
    return null;
  }

  return <div data-testid="error-elem">{error}</div>;
};

export default memo(ErrorBlock);
