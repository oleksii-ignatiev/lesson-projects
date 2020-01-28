import React from 'react';

import './styles/index.scss';

export const Empty = () => {
  return (
    <>
      <main>
        <div className="controls">
          <button className="button-create-task">New Task</button>
        </div>
        <div className="list empty">
        </div>
      </main>
      <footer>
        <span>© 2019 Lectrum LLC - All Rights Reserved.</span>
      </footer>
    </>
  )
};
