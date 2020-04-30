import {firebaseDatabase, firebaseStorage, firebaseAuth} from '../utils/firebaseUtils'

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size);
        
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

    static getUniqueDataBy = (node, id, callback) => {
        const ref = firebaseDatabase.ref(node + '/' + id);
        let newData = {};
        ref.once('value', (dataSnapshot) => {

            if (!dataSnapshot || dataSnapshot === undefined || !dataSnapshot.val() || dataSnapshot.val() === undefined) {
                callback(null);
                return;
            }

            const snap = dataSnapshot.val();
            const keys = Object.keys(snap);
            keys.forEach((key) => {
                newData[key] = snap[key]
            });
        }).then(() => {
            callback(newData);
        });
    };

    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        ref.set(objToSubmit);
        return id;
    };

    static insertDataWithCustomId = (node, objToSubmit) => {
        const id = firebaseDatabase.ref(node).push().key;
        firebaseDatabase
        .ref(node+id)
        .set(objToSubmit)
        return id;
    }

    static setData = (node, objToSubmit) => {
        return firebaseDatabase
        .ref(node)
        .set(objToSubmit)
    }; 

    static changeData = (node, objToSubmit) => {
        return firebaseDatabase
        .ref(node)
        .update(objToSubmit)
    }; 
    
    static editData = (node, key, obj) => {
        let ref = firebaseDatabase.ref(node);
        return ref.child(key).update(obj);
    };

    static updateData = (node, objToSubmit) => {
        return firebaseDatabase.ref(node).update(objToSubmit);
    };

    static storageFile = (file, path) => {
        return firebaseStorage.ref(path).put(file)
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
