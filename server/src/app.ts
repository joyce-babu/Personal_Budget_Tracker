import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript + Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
