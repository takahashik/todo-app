// @flow

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { RawTodoList as TodoList } from '../TodoList';

class Provider extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
  }
  getChildContext() {
    return {
      insertCss: (...styles: any) => {
        // eslint-disable-next-line no-console
        styles.forEach(style => console.log(style));
      },
    };
  }
  render() {
    return Children.only(this.props.children);
  }
}

const todos = ['todo1', 'todo2', 'todo3'].map((t, i) => (
  {
    label: t,
    isDone: i % 2 === 0,
    key: String(i),
  }
));

storiesOf(TodoList.name)
.add('props',
  () => (<Provider><div>
    <TodoList todos={todos} />
  </div></Provider>),
);
