CREATE POLICY "Allow public buckets to be selected" ON storage.buckets FOR SELECT USING (true);
CREATE POLICY "Allow public access to objects in property_images" ON storage.objects FOR SELECT USING (bucket_id = 'property_images');
