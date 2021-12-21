const {Schema,model} = require ("mongoose");

const movieSchema = new Schema({
id:{type: Number, required: true},
movie_name:{type:String, required: true},
movie_genre: {type:String, required: true},
production_year: {type:Number, required:true},
budget: {type: Number, required: true}
},{
    versionKey: false,
    timestamps: true

});

module.exports = model("moviesdata", movieSchema);