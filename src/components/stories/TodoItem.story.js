import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { RawTodoItem as TodoItem } from '../TodoItem';

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

storiesOf(TodoItem.name)
.add('props',
  () => (<Provider><div>
    <div>label</div><TodoItem label={'this is todo.'} />
    <div>isDone</div><TodoItem label={'isDone'} isDone />
  </div></Provider>),
);
