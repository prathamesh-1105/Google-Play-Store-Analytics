# 📊 Google Play Store Analytics

A comprehensive data analytics project that explores, cleans, and visualizes Google Play Store applications and user reviews. Built using Python, Jupyter Notebooks, Pandas, NumPy, and Plotly, this project provides interactive insights and an automated HTML dashboard.

---

## 📝 Project Overview

The objective of this project is to perform end-to-end data analytics on the Google Play Store marketplace. We clean the dataset, merge applications with their user sentiment scores, perform exploratory data analysis (EDA), and build interactive visualizations. These visualizations are compiled into a dashboard to help developers and businesses understand critical marketplace trends (such as installations, ratings, pricing, and sentiments).

---

## 🗄️ Dataset Description

The analysis uses two primary datasets:

1. **Apps Dataset (`data/Play Store Data.csv`)**: Contains metadata for 10,841 apps on the Google Play Store, including details like category, rating, size, installations, type (free vs. paid), pricing, target content ratings, genres, and last update times.
2. **User Reviews Dataset (`data/User Reviews.csv`)**: Contains the top 100 user reviews for each app, including translated English text and pre-calculated sentiment scores (sentiment classification, polarity, and subjectivity).

---

## 🧰 Technologies Used

* **Programming Language**: Python 3.8+
* **Data Manipulation**: Pandas, NumPy
* **Data Visualization**: Plotly, Plotly Express
* **Interactive Environment**: Jupyter Notebook

---

## 📁 Project Structure

```text
Google-Play-Store-Analytics/
├── .gitignore                      # Git configuration to ignore temporary/cached files
├── README.md                       # Project documentation and guide
├── requirements.txt                # List of required python packages
├── assets/                         # Folder for storing design and image assets
├── screenshots/                    # Folder for saving dashboard screenshots
├── data/                           # Folder containing play store CSV datasets
│   ├── Play Store Data.csv         # Raw applications dataset
│   └── User Reviews.csv            # Raw user reviews dataset
├── docs/                           # Documentation and compiled dashboard reports
│   ├── data_dictionary.md          # Placeholder detailing dataset columns
│   ├── business_requirements.md    # Placeholder detailing analysis objectives
│   ├── web page.html               # Main interactive compiled HTML dashboard
│   └── *.html                      # Individual interactive Plotly charts
└── notebooks/                      # Jupyter Notebook files
    ├── Google_Play_Store_Analytics_Final.ipynb  # Comprehensive master analysis notebook
    ├── Google_Play_Store_Analytics.ipynb        # Task-specific analysis notebook
    ├── Analysis3.ipynb                          # Legacy dashboard plotting notebook
    ├── Analysis2.ipynb                          # Legacy pipeline notebook
    └── Analysis.ipynb                           # Legacy Tkinter experiment notebook
```

---

## ✅ Tasks Completed

### 🎯 Task 1: [Placeholder]
* *Description/Objective of Task 1 will be documented here.*

### 🎯 Task 2: [Placeholder]
* *Description/Objective of Task 2 will be documented here.*

### 🎯 Task 3: [Placeholder]
* *Description/Objective of Task 3 will be documented here.*

### 🎯 Task 4: [Placeholder]
* *Description/Objective of Task 4 will be documented here.*

### 🎯 Task 5: [Placeholder]
* *Description/Objective of Task 5 will be documented here.*

### 🎯 Task 6: [Placeholder]
* *Description/Objective of Task 6 will be documented here.*

---

## ⚙️ Installation Instructions

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/prathamesh-1105/Google-Play-Store-Analytics.git
   cd Google-Play-Store-Analytics
   ```

2. **Create and Activate a Virtual Environment**:
   * **Windows (PowerShell)**:
     ```powershell
     python -m venv venv
     .\venv\Scripts\Activate.ps1
     ```
   * **macOS/Linux**:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. **Install Required Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

---

## 🚀 How to Run the Notebook

1. **Start the Jupyter Notebook Server**:
   ```bash
   jupyter notebook
   ```

2. **Run the Notebook**:
   * Navigate to the `notebooks/` folder inside the Jupyter browser.
   * Open [Google_Play_Store_Analytics_Final.ipynb](file:///c:/Users/Prathamesh/Desktop/Google_Playstore_Project/notebooks/Google_Play_Store_Analytics_Final.ipynb).
   * Click **Cell -> Run All** from the top menu to run the entire analysis.

3. **View the Compiled Dashboard**:
   * Open the [docs/](file:///c:/Users/Prathamesh/Desktop/Google_Playstore_Project/docs) folder.
   * Double-click `web page.html` to open and interact with the full analytics dashboard directly in your web browser.

---

## 💡 Future Improvements

* **Interactive Web App**: Migrate the Plotly charts to a live dashboarding framework like Dash or Streamlit.
* **Auto-updating Pipelines**: Integrate the script with the Google Play Store API to fetch and analyze weekly app changes dynamically.
* **Machine Learning Integration**: Build predictive models to estimate an app's installation tier or rating based on size, category, and price.

---

## 👤 Author Information

* **Developer**: Prathamesh
* **GitHub Repository**: [Google-Play-Store-Analytics](https://github.com/prathamesh-1105/Google-Play-Store-Analytics)
