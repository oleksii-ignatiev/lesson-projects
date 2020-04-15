import { commentsActions } from "../actions";
import { commentActions } from "../commentActions";

describe('Comments Actions', () => {
  test('startFetching', () => {
    expect(commentsActions.startFetching()).toMatchSnapshot();
    expect(commentActions.startFetching()).toMatchSnapshot();
  });
  test('stopFetching', () => {
    expect(commentsActions.stopFetching()).toMatchSnapshot();
    expect(commentsActions.stopFetching()).toMatchSnapshot();
  });
  test('fetchAsync', () => {
    expect(commentsActions.fetchAsync()).toMatchSnapshot();
    expect(commentsActions.fetchAsync()).toMatchSnapshot();
  });
  test('fill', () => {
    expect(commentsActions.fill({name: 'Comments'})).toMatchSnapshot();
    expect(commentsActions.fill({name: 'Comment'})).toMatchSnapshot();
  });
  test('setFetchingError', () => {
    expect(commentsActions.setFetchingError('We have a problem')).toMatchSnapshot();
    expect(commentsActions.setFetchingError('We have a problem')).toMatchSnapshot();
  });
});
