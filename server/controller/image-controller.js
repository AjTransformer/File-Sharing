import File from "../model/file.js";
// import fs from 'fs';


export const uploadImage = async (request,response)=>{
    // return response.status(200).json({msg: 'Hello'})
    try{
        console.log(request.file.path);
        const fileObj = {
            path:request.file.path,
            name:request.file.originalname,
        }
        const res = await File.create(fileObj);

        // fs.unlink(request.file.path , (err)=>{
        //     if(err){
        //         console.error("Error deleting file:", err.message);
        //     }else{
        //         console.log("Temporary file deleted:", request.file.path);
        //     }
        // })
        // console.log("response after saving data in db ",res);
        response.status(200).json({path: `https://file-sharing-fchi.onrender.com/shared_files/${res._id}`})
    }catch(error){
        console.log("Error, while doing db operation ",error.message);
        response.status(500).json({error: error.message});
    }
}

export const downloadImage = async(request,response)=>{
    try{
        const file = await File.findById(request.params.fileId);

        // Check if the file was found
        if (!file) {
            return response.status(404).json({ error: 'File not found' });
        }

        file.downloadContent++;
        await file.save();

        response.download(file.path , file.name);
    }catch(error){
        console.log("Error while downloading image ",error.message);
        response.status(500).json({error:error.message});
    }
}