import multer from "multer";

const Storage=multer.diskStorage({
    destination: "data",
    filename: (req,file,cb)=>{
        console.log(file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filenames=file.originalname.split(".");
        console.log(filenames);
        cb(null, filenames[0] + '-' + uniqueSuffix +"." + filenames[1]);
    },
});

const Uploader = multer({
    storage:Storage,
}).single("uploadImage")


export default Uploader;