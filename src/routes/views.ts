// libraries
import * as express from 'express';

// classes, interfaces & functions
const router: express.Router = express.Router();

// middleware for post request from ejs forms
router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
	const content: object = { title: 'Hello Express & EJS Forms' };
	res.render('index', content);
});

router.post('/', async (req, res) => {
	const body: any = req.body;
	console.table(body);

	const items: string[] = [];

	// a simple loop all can understand <3
	for (let i = 0; i < body?.amount; i++) {
		items.push(`item ${i}`);
	}

	const content: object = { title: body?.header, items };

	res.render('items', content);
});

export default router;
