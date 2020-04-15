import { postsActions } from "../actions";
import { postActions } from "../postActions";

describe('posts Actions', () => {
  test('startFetching', () => {
    expect(postsActions.startFetching()).toMatchSnapshot();
    expect(postActions.startFetching()).toMatchSnapshot();
  });
  test('stopFetching', () => {
    expect(postsActions.stopFetching()).toMatchSnapshot();
    expect(postActions.stopFetching()).toMatchSnapshot();
  });
  test('fetchAsync', () => {
    expect(postsActions.fetchAsync()).toMatchSnapshot();
    expect(postActions.fetchPost()).toMatchSnapshot();
  });
  test('fill', () => {
    expect(postsActions.fill({name: 'posts'})).toMatchSnapshot();
    expect(postActions.fill({name: 'post'})).toMatchSnapshot();
  });
  test('setFetchingError', () => {
    expect(postsActions.setFetchingError('We have a problem')).toMatchSnapshot();
    expect(postActions.setFetchingError('We have a problem')).toMatchSnapshot();
  });
});
