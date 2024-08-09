import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(400).json({ message: "Method not allowed" });
  }

  const form = formidable({
    allowEmptyFiles: true,
    minFileSize: 0,
  });

  form.parse(request, async (error, fields, files) => {
    if (error) {
      console.error("Formular-Parsing-Fehler:", error);
      return response.status(500).json({ error: error.message });
    }
    // console.log("files.imageUrl: ", files.imageUrl);
    // console.log("fields.currentImageUrl: ", fields.currentImageUrl);
    // console.log("Fields:", fields);
    // console.log("Files:", files);

    let file;
    if (files.imageUrl && files.imageUrl[0].size > 0) {
      // When a new file is uploaded
      file = files.imageUrl[0];

      const uploadResult = await cloudinary.v2.uploader.upload(file.filepath, {
        public_id: file.newFilename,
        folder: "nf",
      });

      console.log("Cloudinary Upload-Ergebnis:", uploadResult);
      return response.status(200).json({ url: uploadResult.secure_url });
    } else if (fields.currentImageUrl) {
      console.log("Verwende aktuelle Bild-URL:", fields.currentImageUrl);
      // If no new image is uploaded, use the existing image
      return response.status(200).json({ url: fields.currentImageUrl[0] });
    } else {
      console.log("Verwende Standardbild");
      // Use default image
      return response.status(200).json({
        url: "https://images.unsplash.com/photo-1657434743747-07cbb4ddd5ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      });
    }
  });
}
