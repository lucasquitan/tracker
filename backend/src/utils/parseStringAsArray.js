module.exports= function parseStringAsString(arrayAsString) {
  return arrayAsString = arrayAsString.split(',').map(tech => tech.trim());
}