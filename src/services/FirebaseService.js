import {firebaseDatabase} from '../FireConection';

export default class FirebaseService {
    
    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        console.log(id, ref);
    };

}