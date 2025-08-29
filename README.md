# 📦 Bajaj Backend API

A simple **Node.js REST API** built with Express and deployed on **Vercel**.  
It takes in an input array and returns categorized data such as numbers, alphabets, special characters, sum, and a processed string — as required in the Bajaj Backend Assignment.

## 🚀 Features

* **Data Categorization** → Splits input into different categories
   * ✅ Odd numbers (returned as strings)
   * ✅ Even numbers (returned as strings)
   * ✅ Alphabets (converted to uppercase)
   * ✅ Special characters
* **Summation** → Returns the **sum of all numeric values** as a string
* **String Processing** → Concatenates all alphabets in **reverse order with alternating caps**
* **User Identification** → Always includes:
   * ✅ `user_id` in `{full_name_ddmmyyyy}` format
   * ✅ Email ID
   * ✅ Roll number
* **Health Check** → Simple endpoint to confirm the server is running

## 🛠️ Tech Stack

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Body-Parser](https://www.npmjs.com/package/body-parser)
* [Vercel](https://vercel.com/) for deployment

## 📂 Project Structure

```
.
├── api/
│   └── server.js       # Main server code
├── package.json        # Project config & dependencies
├── vercel.json         # Vercel deployment config
├── .gitignore         # Ignored files for git
└── README.md          # Project documentation
```

## ⚙️ Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/YVSMurthy/Bajaj_backend.git
cd Bajaj_backend
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run dev
```

Application will be available at → `http://localhost:3000`

## 🧪 Testing

### Manual Testing

#### Health Check
**Endpoint: GET /**

**Response:**

```json
{
  "message": "Server is up and running! Go to /bfhl"
}
```

#### Data Processing
**Endpoint: POST /bfhl**

**Request:**

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### Running Tests

```bash
npm test
```

## 🚀 Deployment

**Deployed on Vercel**.

1. Install Vercel CLI (if not installed):

```bash
npm install -g vercel
```

2. Deploy the project:

```bash
vercel
```

3. Your application will be live at: `https://your-app.vercel.app/bfhl`

## 📖 API Documentation

### Endpoints

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/` | Health check | None |
| POST | `/bfhl` | Process input array data | `data: array` |

## 🔧 Configuration

Key configuration options:

* `PORT`: Server port (default: 3000, auto-handled by Vercel)
* `NODE_ENV`: Environment (`development` / `production`)


## 👤 Author

* **Name**: *Y V Suyash Murthy*
* **Email**: *suyash.murthy@gmail.com*
* **GitHub**: [@YVSMurthy](https://github.com/YVSMurthy)
* **LinkedIn**: [suyash-yv](https://linkedin.com/in/suyash-yv)

## 🙏 Acknowledgments

* Bajaj Backend Assignment guidelines
* Express.js and Node.js documentation
* Vercel for seamless deployment

---

⭐ **Star this repository if it helped you!**
