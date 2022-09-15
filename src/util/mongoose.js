function multipleMongooseToObject(mongooseArray) {
  return mongooseArray.map((mongoose) => mongoose.toObject());
}

function moongoseToObject(moongose) {
  return moongose ? moongose.toObject() : moongose;
}

export { multipleMongooseToObject, moongoseToObject };
