// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START or_query_modular]
const query = query(collection(db, "cities"), and(
  where('name', '>', 'L'),   
  or(
    where('capital', '==', true),
    where('population', '>=', 1000000)
  )
));
// [END or_query_modular]