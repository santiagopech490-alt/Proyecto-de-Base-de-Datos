"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageIcon, X } from "lucide-react";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { usePropertyForm } from "@/lib/hooks/usePropertyForm";

interface MediaCardProps {
  form: ReturnType<typeof usePropertyForm>;
}

export function MediaCard({ form }: MediaCardProps) {
  const { setValue, watch } = form;
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const existingImages = watch("images"); // Assuming 'images' field in schema stores URLs/identifiers

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newUrls = acceptedFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...newUrls]);
    // In a real application, you would upload these files to Supabase Storage
    // and then update the form's 'images' field with the URLs or file identifiers.
    // For now, we'll simulate adding URLs.
    setValue("images", [...existingImages, ...acceptedFiles.map(file => file.name)]); // Simulate adding file names
  }, [setValue, existingImages]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
      "image/gif": [".gif"],
      "image/webp": [".webp"],
    },
    maxFiles: 5, // Limit number of files
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const removeImage = (index: number, urlToRemove?: string) => {
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
    if (urlToRemove) {
      URL.revokeObjectURL(urlToRemove); // Clean up the object URL
    }
    // Update form value: Remove the corresponding image identifier/URL
    const currentImages = watch("images");
    setValue("images", currentImages.filter((_, i) => i !== index));
  };

  // Clean up object URLs when component unmounts
  React.useEffect(() => {
    return () => {
      previewUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gallery & Media</CardTitle>
        <CardDescription>Upload images for the property. Max 5 images, 5MB each.</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          {...getRootProps()}
          className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
            isDragActive ? "border-primary bg-primary/10" : "border-muted"
          }`}
        >
          <input {...getInputProps()} />
          <ImageIcon className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-center text-muted-foreground">
            {isDragActive ? (
              <span className="text-primary">Drop the files here ...</span>
            ) : (
              "Drag 'n' drop some files here, or click to select files"
            )}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            (Supports: PNG, JPG, GIF, WEBP - Max 5MB each)
          </p>
        </div>

        {/* Image Previews */}
        {previewUrls.length > 0 || (existingImages && existingImages.length > 0) ? (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative group">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded-md aspect-square"
                />
                <button
                  onClick={() => removeImage(index, url)}
                  className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1 cursor-pointer hover:bg-opacity-75 transition-colors"
                  aria-label="Remove image"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
            {/* Display existing images if any (e.g., loaded from server) */}
            {existingImages.map((imageUrl, index) => (
                // This part assumes 'imageUrl' is a valid URL. In a real app, you'd need a way to map
                // these to actual object URLs for removal, or handle removal differently.
                // For now, just displaying placeholders or assuming they are URLs.
                <div key={`existing-${index}`} className="relative group">
                  <img
                    src={imageUrl} // This might need adjustment if it's not a direct URL
                    alt={`Existing Image ${index + 1}`}
                    className="w-full h-24 object-cover rounded-md aspect-square"
                  />
                  <button
                    onClick={() => {
                      // Handle removal of existing images - this is a placeholder
                      console.log("Remove existing image:", imageUrl);
                      const currentImages = watch("images");
                      setValue("images", currentImages.filter((_, i) => i !== index));
                    }}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1 cursor-pointer hover:bg-opacity-75 transition-colors"
                    aria-label="Remove existing image"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center text-sm mt-4">No images uploaded yet.</p>
        )}
      </CardContent>
    </Card>
  );
}
