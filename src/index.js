import { engine, create } from 'express-handlebars';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import route from './routes/index.js';
import methodOveride from 'method-override';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

//Connect db
import connect from './config/db/index.js';
connect();

// Config ExpressHandlebars
const hbs = create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    sum: (a, b) => a + b,
  },
});

app.use(express.static(path.join(__dirname, 'public')));

// Để cho giá trị từ form có thể gán vô body
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP Logger
// app.use(morgan('combined'))

// Template Engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Overide method POST -> PUT, DELETE
app.use(methodOveride('_method'));

// Chỉnh sửa route cho các tuyến đường url sau này (nên để ở cuối file)
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
