// @flow

import React from 'react';
import type { Element } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Button from '../Button';
import Input from '../Input';
import _theme from './TodoForm.css';

export type T = {
  value: any,
  error?: string | Element<*>,
  onSubmit?: (e: Event) => void,
};

type TodoFormPropType = T & $Shape<T>; // eslint-disable-line no-undef

function TodoForm(props: TodoFormPropType) {
  const {
    value,
    error,
    onSubmit,
  } = props;
  return (
    <div className={_theme.wrapper}>
      <form onSubmit={onSubmit} >
        <Input
          label={'Add New Todo'}
          value={value}
          error={error}
        />
        <Button
          type={'submit'}
          label={'Add'}
          raised
          primary
        />
      </form>
    </div>
  );
}

export { TodoForm as RawTodoForm };
export default withStyles(_theme)(TodoForm);
