const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/dist/venturus-sports'));

router.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname + '/dist/venturus-sports/index.html'));
});

app.use('/*', router);
app.listen(process.env.PORT || 8000);