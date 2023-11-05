import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  FC,
  FormEvent,
  useState,
  useEffect,
  useReducer,
  useRef,
  useContext,
} from 'react';
import './Body.scss';
import cn from 'classnames';
import { Button } from '../../components/Button/Button';
import { DeleteSvg } from './DeleteSvg/DeleteSvg';
import { FolderSvg } from './FolderSvg/FolderSvg';
import { DataSvg } from './DataSvg/DataSvg';
import { INITIAL_FORM_STATE, IState, formRefucer } from './reducer';
import { Input } from '../../components/Input/Input';
import { UserContext } from '../../context/user.context';

interface BodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setData: any;
  formData: any;
}

interface ValidateValues {
  title: boolean;
  date: boolean;
  tag: boolean;
  text: boolean;
}
export const Body: FC<BodyProps> = ({ formData, setData, children, className, ...props }) => {
  const [formState, dispatchForm] = useReducer(formRefucer, INITIAL_FORM_STATE);
  const { validate, readyToSubmit, values } = formState;
  const { userId } = useContext(UserContext);
  const titleRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    let timeoutId: number;
    if (!validate.date || !validate.tag || !validate.text || !validate.title) {
      focusError(validate);
      timeoutId = setTimeout(() => {
        dispatchForm({ type: 'CLEAR_VALIDATE' });
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [validate]);

  useEffect(() => {
    console.log(1);
    if (readyToSubmit) {
      setData({ ...values, data: values.date });
      dispatchForm({ type: 'CLEAR' });
    }
  }, [readyToSubmit, values]);

  useEffect(() => {
    dispatchForm({ type: 'CHANGE_VALUE', payload: { userId } });
  }, [userId]);

  const focusError = (validate: ValidateValues) => {
    switch (true) {
      case !validate.title:
        titleRef.current?.focus();
        break;
      case !validate.date:
        dateRef.current?.focus();
        break;
      case !validate.text:
        textRef.current?.focus();
        break;
      default:
        break;
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  };

  const onChange = (e: any) => {
    dispatchForm({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.value } });
  };

  return (
    <div className={cn(className, 'body')}>
      <form className="form" action="" onSubmit={onSubmit}>
        <div className="titleContainer">
          <Input
            isValid={validate.title}
            appearence="title"
            ref={titleRef}
            name="title"
            type="text"
            placeholder="Заголовок"
            onChange={onChange}
            value={values.title}
          />
          <DeleteSvg />
        </div>
        <div className="dataContainer">
          <label htmlFor="data" className="labelData">
            <DataSvg />
            <span className="dataText">Дата</span>
          </label>
          <Input
            isValid={validate.date}
            ref={dateRef}
            id="data"
            type="date"
            name="date"
            value={values.date}
            onChange={onChange}
          />
        </div>

        <hr />

        <div className="folderContainer">
          <label htmlFor="tag" className="labelTag">
            <FolderSvg />
            <span className="dataText">Метки</span>
          </label>
          <Input
            isValid={validate.tag}
            onChange={onChange}
            value={values.tag}
            id="tag"
            type="text"
            name="tag"
            placeholder="Ключевые слова"
          />
        </div>

        <hr />

        <textarea
          ref={textRef}
          className="textArea"
          onChange={onChange}
          value={values.text}
          placeholder="Описание важего воспоминания"
          name="text"
          id=""
          style={{ outline: validate.text ? '' : '1px solid red' }}
          rows={25}
        ></textarea>
        <Button className="submitButton">Сохранить</Button>
      </form>
    </div>
  );
};
