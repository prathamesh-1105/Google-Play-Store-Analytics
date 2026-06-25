# 📊 Google Play Store Analytics

A comprehensive, portfolio-quality data analytics project that explores, cleans, and visualizes Google Play Store apps and user review sentiments. Built using **Python**, **Pandas**, **NumPy**, **Plotly**, and **NLTK VADER**, this project features interactive visualizations and an automatically generated dashboard report.

---

## 📖 Project Overview

App marketplaces are highly competitive. To succeed, developers and publishers must understand what drives installations, ratings, and user satisfaction. 

This project performs a complete end-to-end data pipeline:
1. **Data Cleaning & Preprocessing**: Handling missing values, formatting column types (ratings, reviews, installs, prices, sizes, and updates), and normalizing data.
2. **Feature Engineering**: Creating columns like revenue, log transformations for installs/reviews, and segmenting rating categories.
3. **Sentiment Analysis**: Analyzing the polarity of user reviews using the VADER sentiment intensity analyzer.
4. **Interactive Dashboard**: Building 10 interactive Plotly visualizations and exporting them into a cohesive, stand-alone HTML dashboard.
5. **Time-Gated Business Logic**: Implementing a timezone-aware grouped bar chart that renders dynamically based on specific scheduling rules.

---

## Dataset

The analysis uses two primary datasets (located in the `data/` folder):

1. **Play Store Data (`Play Store Data.csv`)**:
   * **Size**: 10,841 apps
   * **Features**: `App`, `Category`, `Rating`, `Reviews`, `Size`, `Installs`, `Type`, `Price`, `Content Rating`, `Genres`, `Last Updated`, `Current Ver`, `Android Ver`.
2. **User Reviews (`User Reviews.csv`)**:
   * **Size**: 64,295 reviews
   * **Features**: `App`, `Translated_Review`, `Sentiment`, `Sentiment_Polarity`, `Sentiment_Subjectivity`.

---

## ✨ Features

* **Data Normalization & Cleaning**: Converts messy text strings like `"10,000+"` installs, `"19M"` sizes, or `"$4.99"` prices into numeric values for analysis.
* **Sentiment Intensity Scoring**: Uses NLTK's VADER Sentiment Analyzer to compute compound polarity scores for thousands of reviews.
* **10 Interactive Visualizations**: Uses Plotly Express to generate high-fidelity charts:
  1. Top 10 App Categories (by count)
  2. Free vs. Paid App distribution (Pie Chart)
  3. App Ratings Distribution (Histogram)
  4. User Reviews Sentiment Distribution (Bar Chart)
  5. Total Installs per App Category (Bar Chart)
  6. App Update Activity Over the Years (Line Chart)
  7. Top App Categories by Revenue Generation (Bar Chart)
  8. Most Popular App Genres (Bar Chart)
  9. App Size vs. Rating Relationship (Scatter Plot)
  10. Rating Distribution by Content Rating Group (Box Plot)
* **HTML Dashboard Exporter**: Merges all interactive charts into a single styled HTML file (`docs/web page.html`) for easy presentation.
* **Time-Gated Chart Execution**: A customized script that evaluates the current local time in India Standard Time (IST) and only generates the restricted visualization between 3:00 PM and 5:00 PM.

---

## ✅ Tasks Completed

1. **Structured Repository**: Organized raw datasets into `data/`, Jupyter Notebooks into `notebooks/`, and dashboards into `docs/`.
2. **Cleaned Notebooks**: Created `Google_Play_Store_Analytics_Final.ipynb` as the single master notebook, consolidating EDA, sentiment analysis, dashboard generation, and scheduled visualization tasks.
3. **Robust Loading Paths**: Adjusted file paths across all legacy notebooks to ensure reproducibility from the `notebooks/` directory.
4. **Environment Setup**: Provided a `requirements.txt` containing clear definitions of external dependencies.
5. **Clean Version Control**: Initialized Git repository and set up a `.gitignore` file to prevent tracking checkpoint caches or unrelated files.

---

## 🛠️ Installation

### Prerequisites
Make sure you have Python 3.8+ installed.

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/prathamesh-1105/Google-Play-Store-Analytics.git
   cd Google-Play-Store-Analytics
   ```

2. **Create a Virtual Environment**:
   ```bash
   python -m venv venv
   # On Windows (PowerShell)
   .\venv\Scripts\Activate.ps1
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Download NLTK Lexicons**:
   ```bash
   python -c "import nltk; nltk.download('vader_lexicon')"
   ```

---

## 🚀 Usage

### Running the Notebooks
To run the main analysis and regenerate the dashboard, start Jupyter Notebook:
```bash
jupyter notebook
```
Navigate to `notebooks/Google_Play_Store_Analytics_Final.ipynb` and run all cells.

### Accessing the Interactive Dashboard
You can view the pre-generated interactive dashboard immediately without running any code:
1. Open the [docs/](file:///c:/Users/Prathamesh/Desktop/Google_Playstore_Project/docs) folder.
2. Double-click `web page.html` to open it in your web browser.

---

## 🧰 Technologies Used

* **Language**: Python
* **Data Wrangling**: Pandas, NumPy
* **Sentiment Analysis**: NLTK (VADER)
* **Data Visualization**: Plotly, Plotly Express
* **Development Environment**: Jupyter Notebook

---

## 📸 Screenshots

*Interactive visualizations are embedded inside the HTML report. Below are samples of the Plotly charts:*

* **Category Distribution & Sentiments**
  ![Dashboard Screenshot 1](screenshots/dashboard_preview1.png)

* **Revenue & Installations analysis**
  ![Dashboard Screenshot 2](screenshots/dashboard_preview2.png)

*(You can add screenshots of your running dashboard inside the `screenshots/` directory to display them in this section.)*
