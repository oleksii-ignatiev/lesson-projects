import { commentsActions } from "../actions";
import { commentActions } from "../commentActions";

// comments actions
describe('startFetching', ()=>{
    it('should start fetching', ()=>{
        expect(commentsActions.startFetching()).toMatchSnapshot();
    });
});
describe('stopFetching', ()=>{
    it('should stop fetching', ()=>{
        expect(commentsActions.stopFetching()).toMatchSnapshot();
    });
});
describe('fetchAsync', ()=>{
    it('should fire acync fetching', ()=>{
        expect(commentsActions.fetchAsync()).toMatchSnapshot();
    });
});
describe('fill', ()=>{
    it('should start filling data', ()=>{
        expect(commentsActions.fill({name: 'Comments'})).toMatchSnapshot();
    });
});
describe('setFetchingError', ()=>{
    it('should output an error', ()=>{
        expect(commentsActions.setFetchingError('We have a problem')).toMatchSnapshot();
    });
});

// comment actions
describe('startFetching', ()=>{
    it('should start fetching', ()=>{
        expect(commentActions.startFetching()).toMatchSnapshot();
    });
});
describe('stopFetching', ()=>{
    it('should stop fetching', ()=>{
        expect(commentActions.stopFetching()).toMatchSnapshot();
    });
});
describe('fetchAsync', ()=>{
    it('should fire acync fetching', ()=>{
        expect(commentActions.fetchAsync()).toMatchSnapshot();
    });
});
describe('fill', ()=>{
    it('should start filling data', ()=>{
        expect(commentActions.fill({name: 'Comment'})).toMatchSnapshot();
    });
});
describe('setFetchingError', ()=>{
    it('should output an error', ()=>{
        expect(commentActions.setFetchingError('We have a problem')).toMatchSnapshot();
    });
});