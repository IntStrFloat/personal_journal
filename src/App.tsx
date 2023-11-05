import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { JournalItem } from './components/JournalList/JournalItem/JournalItem';
import { Body } from './layouts/Body/Body';
import { Sidebar } from './layouts/Sidebar/Sidebar';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { UserContext, UserContextProvider } from './context/user.context';
import { Header } from './components/Header/Header';

interface IJournalItem {
  title: string;
  text: string;
  data: Date;
  id: number;
}

function App() {
  const [userData, setUserData] = useLocalStorage('data');
  const addJournalItems = (item: IJournalItem) => {
    setUserData([
      ...userData,
      {
        ...item,
        data: new Date(item.data),
      },
    ]);
  };
  return (
    <UserContextProvider>
      <div className="mainLayout">
        <div className="sidebar">
          <Sidebar date={userData} />
        </div>
        <Body className="text" setData={addJournalItems}>
          Текст
        </Body>
      </div>
    </UserContextProvider>
  );
}

export default App;
