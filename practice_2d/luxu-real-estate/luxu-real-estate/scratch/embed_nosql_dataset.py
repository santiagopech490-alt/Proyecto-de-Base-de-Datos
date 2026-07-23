import json

def generate_nosql_reader():
    json_path = r"c:\home\practice_2d\luxu-real-estate\luxu-real-estate\mongodb_nosql_dataset.json"
    target_ts = r"c:\home\practice_2d\luxu-real-estate\luxu-real-estate\lib\nosql-dataset-reader.ts"

    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Pick 200 diverse documents from the 10,000 dataset to include directly in TS runtime
    sample_docs = data[:300]

    ts_content = []
    ts_content.append("import { Property } from '@/types/property';\n")
    ts_content.append("// REAL NOSQL DOCUMENTS FROM MONGODB DATASET (10,000 RECORDS DATASET)")
    ts_content.append("const rawNoSQLDataset = " + json.dumps(sample_docs, indent=2, ensure_ascii=False) + ";\n")
    ts_content.append("""export function getRealNoSQLProperties(): Property[] {
  return rawNoSQLDataset.map((doc: any) => ({
    id: doc._id || doc.slug,
    slug: doc.slug || doc._id,
    title: doc.title,
    price: doc.price,
    location: doc.location?.city_state || 'Beverly Hills, CA',
    address: doc.location?.address || '100 Luxury Blvd',
    beds: doc.specs?.beds || 3,
    baths: doc.specs?.baths || 2,
    sqft: doc.specs?.sqft || 1500,
    garage: doc.specs?.garage_spaces || 2,
    description: `Propiedad NoSQL procedente de la colección MongoDB properties_nosql (Documento ID: ${doc._id}). Cuenta con ${doc.analytics?.views || 100} visualizaciones en tiempo real.`,
    amenities: doc.features?.amenities || ['Alberca Privada', 'Casa Inteligente'],
    images: [doc.media?.main_image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop'],
    agentId: doc.owner?.owner_id || 'user123',
    status: doc.status || 'ACTIVE'
  }));
}
""")

    with open(target_ts, "w", encoding="utf-8") as f:
        f.write("\n".join(ts_content))

    print(f"Created nosql-dataset-reader.ts with {len(sample_docs)} real MongoDB documents.")

generate_nosql_reader()
