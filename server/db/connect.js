const mongoose = require('mongoose');

const connectToDB = (uri) => {
  return mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    function (error) {
      // eslint-disable-next-line no-console
      console.log('Connected to DB successful!');
      if (error) {
        // eslint-disable-next-line no-console
        console.error(`Error in connection to ${uri}:`, error);
      }
    },
  );
};

module.exports = connectToDB;
