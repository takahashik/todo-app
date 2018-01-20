// @flow

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { RawTodoForm as TodoForm } from '../TodoForm';

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

storiesOf(TodoForm.name)
.add('props',
  () => (<Provider><div>
    <div>value</div><TodoForm value={'mytodo1'} />
    <div>error</div><TodoForm value={''} error={'todo is required!'} />
  </div></Provider>),
);
