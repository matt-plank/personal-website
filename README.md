# Personal Website

This is the git repository for my personal portfolio website. It is built using JavaScript / React and Python / Django.

## Installation

### Backend & Pre-commit

To install the backend, you will need to have Python 3.8 installed. You can install the required packages by running the following command:

```bash
pip install -r requirements.txt
pre-commit install
```

### Frontend

To install the frontend, you will need to have Node.js installed. You can install the required packages by running the following command:

```bash
cd frontend
npm install
```

## Usage

### Backend

To run the backend, you will need to have a PostgreSQL database running. You can run the backend by running the following command:

```bash
python manage.py runserver
```

### Frontend

To run the frontend, you need to configure a `config.json` file in `frontend/src/config`. This tells the frontend where to find the backend. In future versions, the `config.json` file will be created by Terraform after resource provisioning. An example `config.json` file is shown below:

```json
{
    "API_ROOT": "http://localhost:8000/"
}
```

You can run the frontend by running the following command:

```bash
cd frontend
npm start
```
