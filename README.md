# Night Coders Landing Page

## Installation

### Using `uv` for Virtual Environment Setup

1. **Install `uv`**  
   Follow the instructions in the official [`uv` documentation](https://docs.astral.sh/uv/getting-started/installation/).

2. **Create a Virtual Environment**  
   Use `uv` to set up a new virtual environment:

   ```bash
   uv venv
   ```

3. **Activate the Virtual Environment**

   - On **Linux/macOS**:
     ```bash
     source venv/bin/activate
     ```
   - On **Windows**:
     ```bash
     venv\Scripts\activate
     ```

4. **Install Dependencies**  
   After activating the virtual environment, install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. **Deactivate the Virtual Environment**  
   To exit the environment when you're done:

   ```bash
   deactivate
   ```

---

## Usage

1. **Run the Application**  
   Start the application with the following command:

   ```bash
   uvicorn app.main:app --reload
   ```

2. **Access the Application**  
   Open your browser and navigate to [http://127.0.0.1:8000](http://127.0.0.1:8000).

3. **API Endpoints**  
   The application includes these endpoints for handling contact-related requests:
   - `GET /api/contact`
   - `POST /api/contact`

---

## Configuration

- **Static Files**  
  Serve your CSS, JavaScript, and image assets from the `static/` directory.

- **Templates**  
  Place or modify your HTML templates in the `templates/` directory (e.g., `index.html`).

- **Environment Variables**  
  Use a `.env` file or direct environment variables to manage sensitive settings like database credentials.

---

## Events

The application uses lifecycle events to manage MongoDB connections:

- **Startup**: Establish a MongoDB connection.
- **Shutdown**: Close the MongoDB connection.

---

## Dependencies

- **FastAPI**
- **Jinja2**
- **Motor** (for MongoDB)
- **Uvicorn**
- **uv**

Install all dependencies with:

```bash
pip install -r requirements.txt
```
