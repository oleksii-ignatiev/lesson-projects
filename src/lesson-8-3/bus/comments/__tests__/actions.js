import { commentsActions } from "../actions";
import { commentActions } from "../commentActions";

describe('Comments Actions', () => {

    // comments actions
    test('Comments startFetching', () => {
        expect(commentsActions.startFetching()).toMatchSnapshot();
    });
    test('Comments stopFetching', () => {
        expect(commentsActions.stopFetching()).toMatchSnapshot();
    });
    test('Comments fetchAsync', () => {
        expect(commentsActions.fetchAsync()).toMatchSnapshot();
    });
    test('Comments fill', () => {
        expect(commentsActions.fill({name: 'Comments'})).toMatchSnapshot();
    });
    test('Comments setFetchingError', () => {
        expect(commentsActions.setFetchingError('We have a problem')).toMatchSnapshot();
    });

    // comment actions
    test('Comment startFetching', () => {
        expect(commentActions.startFetching()).toMatchSnapshot();
    });
    test('Comment stopFetching', () => {
        expect(commentsActions.stopFetching()).toMatchSnapshot();
    });
    test('Comment fetchAsync', () => {
        expect(commentsActions.fetchAsync()).toMatchSnapshot();
    });
    test('Comment fill', () => {
        expect(commentsActions.fill({name: 'Comment'})).toMatchSnapshot();
    });
    test('Comment setFetchingError', () => {
        expect(commentsActions.setFetchingError('We have a problem')).toMatchSnapshot();
    });
});
