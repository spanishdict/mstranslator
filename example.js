var MsTranslator = require('./mstranslator');

var client_secret=process.env.MSCLIENT_SECRET;
var client_id=process.env.MSCLIENT_ID;

if (!client_secret || !client_id) {
  console.log('client_secret and client_id missing');
  process.exit(1);
}

var params = {
  text: 'How\'s it going?',
  from: 'en',
  to: 'es'
};

var addParams = {
  originalText:   'Esto es una prueba',
  translatedText: 'This is a quiz',
  from:           'es',
  to:             'en',
  rating:           9
  // user:           'samwolo'
};

var getParams = {
  text:   'Esto es una prueba',
  from:           'es',
  to:             'en',
  maxTranslations: 200
};

var client = new MsTranslator({
  client_id: client_id,
  client_secret: client_secret
});

client.initialize_token(function(){
  client.addTranslation(addParams, function(err, data) {
    if (err) console.log('error:' + err.message);
    console.log(data);
  });

  client.getTranslations(getParams, function(err, data) {
    if (err) console.log('error:' + err.message);
    console.log(data);
    process.exit();
  });
});
