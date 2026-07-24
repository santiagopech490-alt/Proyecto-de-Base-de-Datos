const fs = require('fs');
const { MongoClient } = require('mongodb');

async function seedMongo() {
  const uri = "mongodb+srv://Asahelpe:CERhLzNuNy5AUCn3@cluster0.v1bxjpf.mongodb.net/luxedb?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true";
  const jsonPath = "mongodb_nosql_dataset.json";

  console.log("Connecting to MongoDB Atlas Cluster with tlsAllowInvalidCertificates...");
  const client = new MongoClient(uri, {
    tls: true,
    tlsAllowInvalidCertificates: true
  });

  try {
    await client.connect();
    console.log("Connected successfully!");

    const db = client.db("luxedb");
    const collection = db.collection("properties_nosql");

    console.log("Reading 10,000 documents from dataset...");
    const docs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    console.log(`Clearing collection...`);
    await collection.deleteMany({});

    console.log(`Inserting ${docs.length} documents in batches...`);
    const batchSize = 1000;
    for (let i = 0; i < docs.length; i += batchSize) {
      const batch = docs.slice(i, i + batchSize);
      await collection.insertMany(batch);
      console.log(`Inserted batch ${i / batchSize + 1} (${batch.length} docs)`);
    }

    const count = await collection.countDocuments();
    console.log(`SUCCESS! Total 10,000 documents uploaded to MongoDB Atlas collection 'luxedb.properties_nosql': ${count}`);
  } catch (err) {
    console.error("Error inserting into MongoDB:", err);
  } finally {
    await client.close();
  }
}

seedMongo();
