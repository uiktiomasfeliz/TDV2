var mongoose =  require('mongoose'),
    Schema = mongoose.Schema;

  var TranslateSchema = new Schema({
      translate: {
        idTranslate : String,//TITLE
        type: String,//es_ES
        contenido: String //txt a monstrar!
      }
  });

mongoose.model('Translate', TranslateSchema);
