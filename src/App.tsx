import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { JournalItem } from './components/JournalList/JournalItem/JournalItem';
import { Body } from './layouts/Body/Body';
import { Sidebar } from './layouts/Sidebar/Sidebar';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { UserContext, UserContextProvider } from './context/user.context';
import { Header } from './components/Header/Header';

export interface IJournalItem {
  title: string;
  text: string;
  data: Date;
  id: number;
}

function App() {
  const [userData, setUserData] = useLocalStorage('data');
  const [formValues, setFormValues] = useState<IJournalItem>({} as IJournalItem);
  const addJournalItems = (item: IJournalItem) => {
    console.log(item.id);
    if (!item.id) {
      setUserData([
        ...userData,
        {
          ...item,
          data: new Date(item.data),
          id: userData.length > 0 ? Math.max(...userData.map((i) => i.id)) + 1 : 1,
        },
      ]);
    } else {
      setUserData([
        ...userData.map((el) => {
          if (el.id === item.id) {
            return { ...item };
          }
          return el; // return the unchanged element if the id doesn't match
        }),
      ]);
    }
  };
  return (
    <UserContextProvider>
      <div className="mainLayout">
        <div className="sidebar">
          <Sidebar date={userData} setFormValues={setFormValues} />
        </div>
        <Body className="text" setData={addJournalItems} selectedFormValues={formValues}>
          Текст
        </Body>
      </div>
    </UserContextProvider>
  );
}

export default App;
