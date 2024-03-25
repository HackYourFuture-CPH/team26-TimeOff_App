const express = require('express');
const cors = require('cors');
const loginRouter = require('./API/login');
const teamsRouter = require('./API/teams');

const app = express();

app.use(cors({
  origin: 'http://localhost:4051',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

app.use('/api/login', loginRouter); 
app.use('/api/teams', teamsRouter);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
