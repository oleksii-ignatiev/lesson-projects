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
          <div className="tasks">
            <div className="task">
              <span className="title">Template description</span>
              <div className="meta">
                <span className="deadline">27 Nov 2020</span>
                <span className="label first">Sketch</span>
              </div>
            </div>
            <div className="task">
              <span className="title">Budget and contract</span>
              <div className="meta">
                <span className="deadline">03 Sep 2020</span>
                <span className="label first">Sketch</span>
              </div>
            </div>
            <div className="task completed">
              <span className="title">Search for a UI kit</span>
              <div className="meta">
                <span className="deadline">14 Aug 2020</span>
                <span className="label second">Spotify</span>
              </div>
            </div>
            <div className="task">
              <span className="title">Design new dashboard</span>
              <div className="meta">
                <span className="deadline">02 Nov 2020</span>
                <span className="label second">Spotify</span>
              </div>
            </div>
            <div className="task completed">
              <span className="title">Design search page</span>
              <div className="meta">
                <span className="deadline">23 Sep 2020</span>
                <span className="label second">Spotify</span>
              </div>
            </div>
            <div className="task">
              <span className="title">Template description</span>
              <div className="meta">
                <span className="deadline">27 Nov 2020</span>
                <span className="label third">Dribble</span>
              </div>
            </div>
            <div className="task">
              <span className="title">Budget and contract</span>
              <div className="meta">
                <span className="deadline">03 Sep 2020</span>
                <span className="label third">Dribble</span>
              </div>
            </div>
            <div className="task">
              <span className="title">Search for a UI kit</span>
              <div className="meta">
                <span className="deadline">14 Aug 2020</span>
                <span className="label third">Dribble</span>
              </div>
            </div>
            <div className="task completed">
              <span className="title">Design new dashboard</span>
              <div className="meta">
                <span className="deadline">02 Nov 2020</span>
                <span className="label third">Dribble</span>
              </div>
            </div>
            <div className="task">
              <span className="title">Design search page</span>
              <div className="meta">
                <span className="deadline">23 Sep 2020</span>
                <span className="label third">Dribble</span>
              </div>
            </div>
            <div className="task">
              <span className="title">Design new dashboard</span>
              <div className="meta">
                <span className="deadline">02 Nov 2020</span>
                <span className="label fourth">Behance</span>
              </div>
            </div>
            <div className="task">
              <span className="title">Design search page</span>
              <div className="meta">
                <span className="deadline">23 Sep 2020</span>
                <span className="label fourth">Behance</span>
              </div>
            </div>
            <div className="task">
              <span className="title">Design new dashboard</span>
              <div className="meta">
                <span className="deadline">02 Nov 2020</span>
                <span className="label fifth">UX</span>
              </div>
            </div>
            <div className="task">
              <span className="title">Design search page</span>
              <div className="meta">
                <span className="deadline">23 Sep 2020</span>
                <span className="label fifth">UX</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <span>© 2019 Lectrum LLC - All Rights Reserved.</span>
      </footer>
    </>
  )
};
