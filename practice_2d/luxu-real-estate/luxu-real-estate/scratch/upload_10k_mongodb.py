import json
import pymongo
from pymongo import MongoClient
import time

def upload_to_mongodb_atlas():
    uri = 'mongodb+srv://Asahelpe:CERhLzNuNy5AUCn3@cluster0.v1bxjpf.mongodb.net/luxedb?retryWrites=true&w=majority'
    json_path = r'c:\home\practice_2d\luxu-real-estate\luxu-real-estate\mongodb_nosql_dataset.json'

    print("Connecting to MongoDB Atlas Cluster0...")
    client = MongoClient(uri, tls=True, tlsAllowInvalidCertificates=True, serverSelectionTimeoutMS=20000)

    db = client.get_database('luxedb')
    collection = db.get_collection('properties_nosql')

    print("Reading 10,000 NoSQL BSON documents from mongodb_nosql_dataset.json...")
    with open(json_path, 'r', encoding='utf-8') as f:
        docs = json.load(f)

    print(f"Loaded {len(docs)} documents into memory.")

    print("Cleaning existing collection 'properties_nosql' in Atlas...")
    collection.delete_many({})

    print("Uploading 10,000 documents to MongoDB Atlas in batches of 1,000...")
    batch_size = 1000
    start_time = time.time()

    for i in range(0, len(docs), batch_size):
        batch = docs[i:i+batch_size]
        collection.insert_many(batch)
        print(f" -> Batch {i // batch_size + 1}/10 uploaded ({len(batch)} documents)")

    elapsed = round(time.time() - start_time, 2)
    final_count = collection.count_documents({})
    print(f"\n=======================================================")
    print(f"SUCCESS! {final_count} documents successfully stored in MongoDB Atlas.")
    print(f"Database: luxedb | Collection: properties_nosql")
    print(f"Time taken: {elapsed} seconds")
    print(f"=======================================================")

if __name__ == '__main__':
    upload_to_mongodb_atlas()
