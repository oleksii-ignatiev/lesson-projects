import { commentsActions } from "../actions";
import { commentActions } from "../commentActions";

// comments actions
describe('#startFetching', () => { 
    it('should start fetching process', () => { 
        const action = commentsActions.startFetching(); 
        expect(action).toMatchSnapshot(); 
    }); 
});
describe('#stopFetching', () => { 
    it('should stop fetching process', () => { 
        const action = commentsActions.stopFetching(); 
        expect(action).toMatchSnapshot(); 
    }); 
});
describe('#fetchAsync', () => { 
    it('should fire async fetching process', () => { 
        const action = commentsActions.fetchAsync(); 
        expect(action).toMatchSnapshot(); 
    }); 
});
describe('#fill', () => { 
    it('should fill with fetched data', () => { 
        const action = commentsActions.fill({name: 'Payload'}); 
        expect(action).toMatchSnapshot(); 
    }); 
});
describe('#setFetchingError', () => { 
    it('should throw an error', () => { 
        const action = commentsActions.setFetchingError('We have a problem'); 
        expect(action).toMatchSnapshot(); 
    }); 
});


// comment actions
describe('#startFetching', () => { 
    it('should start fetching process', () => { 
        const action = commentActions.startFetching(); 
        expect(action).toMatchSnapshot(); 
    }); 
});
describe('#stopFetching', () => { 
    it('should stop fetching process', () => { 
        const action = commentActions.stopFetching(); 
        expect(action).toMatchSnapshot(); 
    }); 
});
describe('#fetchAsync', () => { 
    it('should fire async fetching process', () => { 
        const action = commentActions.fetchAsync(); 
        expect(action).toMatchSnapshot(); 
    }); 
});
describe('#fill', () => { 
    it('should fill with fetched data', () => { 
        const action = commentActions.fill({name: 'Payload'}); 
        expect(action).toMatchSnapshot(); 
    }); 
});
describe('#setFetchingError', () => { 
    it('should throw an error', () => { 
        const action = commentActions.setFetchingError('We have a problem'); 
        expect(action).toMatchSnapshot(); 
    }); 
});