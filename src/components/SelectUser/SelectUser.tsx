import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

export const SelectUser = () => {
  const { userId, setUserId } = useContext(UserContext);
  const changeUser = (e: any) => {
    setUserId(e.target.value);
  };
  return (
    <select name="user" id="user" value={userId} onChange={changeUser}>
      {userId}
      <option value="1">Алексей</option>
      <option value="2">Дмитрий</option>
    </select>
  );
};
