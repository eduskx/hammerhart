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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Method not allowed" });
  }

  const form = formidable({
    allowEmptyFiles: true,
    minFileSize: 0,
  });

  form.parse(req, async (error, fields, files) => {
    if (error) {
      return res.status(500).json({ error: err.message });
    }
    console.log("FILeS", files);

    let file;
    if (
      !files.imageUrl ||
      files.imageUrl.length === 0 ||
      files.imageUrl[0].size === 0
    ) {
      // Use a default image if no image is uploaded
      file = {
        filepath:
          "https://images.unsplash.com/photo-1657434743747-07cbb4ddd5ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        newFilename: "default_image",
      };
    } else {
      file = files.imageUrl[0];
    }

    const { newFilename, filepath } = file;

    let result;
    if (newFilename === "default_image") {
      result = { url: filepath }; // Use the default image URL directly
    } else {
      result = await cloudinary.v2.uploader.upload(filepath, {
        public_id: newFilename,
        folder: "nf",
      });
    }

    console.log("result", result);
    return res.status(200).json(result);
  });
}

// export default async function handler(request, response) {
//   if (request.method !== "POST") {
//     return response.status(400).json({ message: "Method not allowed" });
//   }
//   const form = formidable({});

//   const [fields, files] = await form.parse(request);

//   const file = files.imageUrl[0];
//   const { newFilename, filepath } = file;

//   const result = await cloudinary.v2.uploader.upload(filepath, {
//     public_id: newFilename,
//     folder: "nf",
//   });

//   response.status(200).json(result);
// }
