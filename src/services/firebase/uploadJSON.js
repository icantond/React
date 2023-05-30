const admin = require("firebase-admin");
const serviceAccount = require ("./key-service-account.json");
const data = require ("../../data/productos.json");
const collectionKey = "products";
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings = {timeStampsInSnapshots: true};
firestore.settings(settings);
if (data && (typeof data === "object")) {
    Object.keys(data).forEach(docKey => {
        firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res)=> {
            console.log("Document " + docKey + " succesfully written!") 
        }).catch((error) => {
            console.error("Error while writing document: ", error);
        });

    });
}