import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC } from 'react';
import './JournalList.scss';
import cn from 'classnames';
interface JournalListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const JournalList: FC<JournalListProps> = ({ children, className, ...props }) => {
  return <div {...props}>{children}</div>;
};
