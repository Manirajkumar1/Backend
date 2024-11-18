import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // cloudinary url
            rerequired: true,

        },
        thumbnail:{
            type: String, // cloudinary url
            rerequired: true,
        },
        title:{
            type: String, 
            rerequired: true,
        },
        description:{
            type: String, 
            rerequired: true,
        },
        duration:{
            type: Number, 
            rerequired: true,
        },
        views:{
            type:Number,
            default: 0
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        owner: {
            type:Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)