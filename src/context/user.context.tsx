import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { createContext } from 'react';

interface UserContextType {
  userId: number;
  setUserId: Dispatch<SetStateAction<number>>;
}
interface UserContextProviderProps {
  children: ReactNode;
}
export const UserContext = createContext<UserContextType>({
  userId: 1,
  setUserId: () => {},
});

export const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<number>(1);
  return <UserContext.Provider value={{ userId, setUserId }}>{children}</UserContext.Provider>;
};
