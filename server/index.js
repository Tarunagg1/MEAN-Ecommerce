const { PORT } = require("./config/config");
const app = require("./config/server");



app.listen(PORT, function () {
    console.log('server listening on port ' + PORT);
})










