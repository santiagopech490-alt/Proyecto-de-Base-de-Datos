import mongoose from 'mongoose';

const testURIs = [
  "mongodb+srv://Asahelpe:CERhLzNuNy5AUCn3@cluster0.v1bxjpf.mongodb.net/luxedb?retryWrites=true&w=majority&appName=Cluster0",
  "mongodb+srv://Asahelpe:CERhLzNuNy5%40UCn3@cluster0.v1bxjpf.mongodb.net/luxedb?retryWrites=true&w=majority&appName=Cluster0",
  "mongodb+srv://db_Asahelpe:CERhLzNuNy5AUCn3@cluster0.v1bxjpf.mongodb.net/luxedb?retryWrites=true&w=majority&appName=Cluster0",
  "mongodb+srv://Asahelpe:CERhLzNuNy5AUCn3@cluster0.v1bxjpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
];

async function runTest() {
  for (const uri of testURIs) {
    try {
      console.log("Probando URI:", uri.replace(/:[^@]+@/, ':****@'));
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
      console.log("✅ ¡CONEXIÓN EXITOSA EN VIVO A MONGODB ATLAS!");
      
      const testDoc = await mongoose.connection.db?.collection('test').insertOne({
        message: 'LuxeEstate MongoDB Live Connection Active',
        createdAt: new Date()
      });
      console.log("🎉 Documento insertado con éxito ID:", testDoc?.insertedId);

      await mongoose.disconnect();
      return uri;
    } catch (err: any) {
      console.log("❌ Fallo:", err.message);
    }
  }
}

runTest();
