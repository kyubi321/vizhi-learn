import { Cloudinary } from "@cloudinary/url-gen";
import { upload } from 'cloudinary-react-native';
import { UploadApiOptions,UploadApiResponse } from "cloudinary-react-native/lib/typescript/src/api/upload/model/params/upload-params";

export const cld = new Cloudinary({
    cloud: {
        cloudName:process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
    url:{
        secure: true
    }
});
//this is the cloudinary instance 

export const uploadImage = async (file: string) => {
    const options: UploadApiOptions = {
        upload_preset: 'default',
        unsigned: true,
    };
    return new Promise<UploadApiResponse>(async(resolve,reject)=>{
        await upload(cld, {
            file,
            options: options,
            callback: (error, response) => {
                if (error || !response){
                    reject(error);
                } else {
                    resolve(response);
                }   
            },
        });


    });

    
};


