// import formidable from "formidable";
// import cloudinary from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(request, response) {
//   if (request.method !== "POST") {
//     return response.status(400).json({ message: "Method not allowed" });
//   }

//   const form = formidable({
//     allowEmptyFiles: true,
//     minFileSize: 0,
//   });

//   form.parse(request, async (error, fields, files) => {
//     if (error) {
//       return response.status(500).json({ error: error.message });
//     }

//     console.log("Fields:", fields);
//     console.log("Files:", files);
//     console.log("imageUrl:", fields.imageUrl);

//     let file;
//     if (files.imageUrl[0].size === 0)
//       if (fields.imageUrl) {
//         file = {
//           filepath: fields.imageUrl,
//           newFilename: "current_image",
//         };
//       } else {
//         file = {
//           filepath:
//             "https://images.unsplash.com/photo-1657434743747-07cbb4ddd5ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           newFilename: "default_image",
//         };
//       }
//     else {
//       file = files.imageUrl[0];
//     }

//     const { newFilename, filepath } = file;

//     let result;
//     if (newFilename === "current_image") {
//       result = { url: filepath };
//     } else if (newFilename === "default_image") {
//       result = {
//         url: "https://images.unsplash.com/photo-1657434743747-07cbb4ddd5ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       };
//     } else {
//       result = await cloudinary.v2.uploader.upload(filepath, {
//         public_id: newFilename,
//         folder: "nf",
//       });
//     }

//     console.log("Result:", result);

//     return response.status(200).json(result);
//   });
// }

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

    console.log("Fields:", fields);
    console.log("Files:", files);

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
      return response.status(200).json({ url: fields.currentImageUrl });
    }
    // else {
    //   console.log("Verwende Standardbild");
    //   // Use default image
    //   return response.status(200).json({
    //     url: "",
    //     // url: "https://images.unsplash.com/photo-1657434743747-07cbb4ddd5ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   });
    // }
  });
}
