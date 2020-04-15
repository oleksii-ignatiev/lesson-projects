import { postsActions } from "../actions";
import { postActions } from "../postActions";

// posts actions
describe('startFetching', ()=>{
    it('should start fetching', ()=>{
        expect(postsActions.startFetching()).toMatchSnapshot();
    });
});
describe('stopFetching', ()=>{
    it('should stop fetching', ()=>{
        expect(postsActions.stopFetching()).toMatchSnapshot();
    });
});
describe('fetchAsync', ()=>{
    it('should fire acync fetching', ()=>{
        expect(postsActions.fetchAsync()).toMatchSnapshot();
    });
});
describe('fill', ()=>{
    it('should start filling data', ()=>{
        expect(postsActions.fill({name: 'posts'})).toMatchSnapshot();
    });
});
describe('setFetchingError', ()=>{
    it('should output an error', ()=>{
        expect(postsActions.setFetchingError('We have a problem')).toMatchSnapshot();
    });
});

// post actions
describe('startFetching', ()=>{
    it('should start fetching', ()=>{
        expect(postActions.startFetching()).toMatchSnapshot();
    });
});
describe('stopFetching', ()=>{
    it('should stop fetching', ()=>{
        expect(postActions.stopFetching()).toMatchSnapshot();
    });
});
describe('fetchPost', ()=>{
    it('should fire acync fetching', ()=>{
        expect(postActions.fetchPost()).toMatchSnapshot();
    });
});
describe('fill', ()=>{
    it('should start filling data', ()=>{
        expect(postActions.fill({name: 'post'})).toMatchSnapshot();
    });
});
describe('setFetchingError', ()=>{
    it('should output an error', ()=>{
        expect(postActions.setFetchingError('We have a problem')).toMatchSnapshot();
    });
});