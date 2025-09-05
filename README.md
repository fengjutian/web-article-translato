cd backend

pip install -r requirements.txt

uvicorn main:app --reload --port 8000




cd frontend

npm create vite@latest .

npm install

npm install tailwindcss postcss autoprefixer

npx tailwindcss init -p
