import {firebaseDatabase, firebaseStorage, firebaseAuth} from '../utils/firebaseUtils'

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath)
                                   .limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        ref.set(objToSubmit);
        return id;
    };

    static storageFile = (file, path) => {
        return firebaseStorage.ref(path).put(file);
    }

    static login = (email, senha) => {
        return firebaseAuth.signInWithEmailAndPassword(email, senha)
    }

    static logout = () => {
        return firebaseAuth.signOut()
    }

    static createUser = (email, senha) => {
        return firebaseAuth.createUserWithEmailAndPassword(email, senha)
    }

    static sendEmailRecover = (email) => {
        return firebaseAuth.sendPasswordResetEmail(email)
    }

}   