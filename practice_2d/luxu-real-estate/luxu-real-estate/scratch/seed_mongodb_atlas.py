import json
import ssl
from pymongo import MongoClient

def seed_mongodb():
    uri = "mongodb+srv://Asahelpe:CERhLzNuNy5AUCn3@cluster0.v1bxjpf.mongodb.net/luxedb?retryWrites=true&w=majority&appName=Cluster0"
    json_file = r"c:\home\practice_2d\luxu-real-estate\luxu-real-estate\mongodb_nosql_dataset.json"

    print("Connecting to MongoDB Atlas Cluster with SSL tlsAllowInvalidCertificates...")
    client = MongoClient(uri, tls=True, tlsAllowInvalidCertificates=True)
    db = client.get_database("luxedb")
    collection = db.get_collection("properties_nosql")

    print("Reading 10,000 NoSQL BSON documents from dataset...")
    with open(json_file, 'r', encoding='utf-8') as f:
        docs = json.load(f)

    print(f"Total documents read: {len(docs)}")

    print("Clearing existing collection if any...")
    collection.delete_many({})

    print("Inserting 10,000 documents in batches into MongoDB Atlas...")
    batch_size = 1000
    for i in range(0, len(docs), batch_size):
        batch = docs[i:i+batch_size]
        collection.insert_many(batch)
        print(f"Inserted batch {i // batch_size + 1} ({len(batch)} documents)")

    count = collection.count_documents({})
    print(f"SUCCESS: Total documents stored in MongoDB Atlas 'luxedb.properties_nosql': {count}")

if __name__ == "__main__":
    seed_mongodb()
