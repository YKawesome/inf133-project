# [Currently-Unnamed]

A dashboard for UCI students, including a task list and login workflow. We use a Supabase Postgres SQL database for authentication.

Partners: Yousef Khan and David Kang

Technologies Used:
	•	React.js + Vite
	•	TailwindCSS + DaisyUI
	•	Supabase

Installation Guide

## 1. Prerequisites

Ensure you have the following installed:
	•	Node.js (v16+ recommended)
	•	Git

## 2. Clone the Repository

git clone https://github.com/YKawesome/inf133-project/
cd your-repository

## 3. Install Dependencies

npm install


## 4. Environment Variables Setup

Create a .env file in the root directory and add the following variables:

VITE_SUPABASE_PROJECT_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

Note: Keep the .env file in .gitignore to avoid exposing sensitive information.

## 5. Run the Development Server

npm run dev
