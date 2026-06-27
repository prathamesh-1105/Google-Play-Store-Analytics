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

Each task's deliverables (such as CSV summaries, static charts, and interactive HTML plots) are organized and stored inside its corresponding subfolder under the `tasks/` directory.

```text
Google-Play-Store-Analytics/
├── .gitignore                      # Git configuration to ignore temporary/cached files
├── README.md                       # Project documentation and guide
├── requirements.txt                # List of required python packages
├── data/                           # Folder containing play store CSV datasets
│   ├── Play Store Data.csv         # Raw applications dataset
│   └── User Reviews.csv            # Raw user reviews dataset
├── notebooks/                      # Jupyter Notebook files
│   ├── Google_Play_Store_Analytics.ipynb        # Main analysis notebook
│   ├── Analysis3.ipynb                          # Legacy dashboard plotting notebook
│   ├── Analysis2.ipynb                          # Legacy pipeline notebook
│   └── Analysis.ipynb                           # Legacy Tkinter experiment notebook
└── tasks/                          # Folder containing task-specific deliverables
    ├── Task_1/                     # Deliverables for Task 1
    │   ├── task1_chart.html        # Interactive chart (HTML)
    │   ├── task1_chart.png         # Static chart (PNG)
    │   └── task1_summary.csv       # Summary data table (CSV)
    ├── Task_2/                     # Deliverables for Task 2
    │   ├── task2_chart.html        # Interactive chart (HTML)
    │   ├── task2_chart.png         # Static chart (PNG)
    │   └── task2_summary.csv       # Summary data table (CSV)
    ├── Task_3/                     # Placeholder for Task 3
    ├── Task_4/                     # Placeholder for Task 4
    ├── Task_5/                     # Placeholder for Task 5
    └── Task_6/                     # Placeholder for Task 6
```

---

## ✅ Tasks Completed

### 🎯 Task 1: Top Categories Analysis [Completed]
* Analysed and visualized average rating and total review counts for the top 10 app categories based on installs under specific filters.

### 🎯 Task 2: Interactive Choropleth Map [Completed]
* Visualized global installations across representative countries for the top 5 app categories satisfying category exclusions and installation thresholds.

### 🎯 Task 3: Dual-Axis Category Analysis [Completed]
* Compared average installations and estimated revenue for the top 3 categories of paid applications that satisfy specific size, length, rating, and version rules.

### 🎯 Task 4: [Placeholder]
* *Description/Objective of Task 4 will be documented here.*

### 🎯 Task 5: [Placeholder]
* *Description/Objective of Task 5 will be documented here.*

### 🎯 Task 6: [Placeholder]
* *Description/Objective of Task 6 will be documented here.*

---

## 📈 Task 1: Top Categories Analysis

### Objective
Compare the average user rating and total review counts of the top 10 app categories (ranked by total installations) under strict business requirements and filtering rules.

### Filters Applied
* **Rating**: $\ge$ 4.0
* **Size**: $\ge$ 10 MB (converts the size text to megabytes, filtering out smaller apps)
* **Last Updated**: Month of update must be January (e.g., `df["Last Updated"].dt.month == 1`)

### Visualization Used
An interactive grouped chart featuring a dual y-axis:
* **Primary Y-Axis (Left)**: Average Rating (represented as blue bars, ranging from 0 to 4.5).
* **Secondary Y-Axis (Right)**: Total Reviews (represented as a red line trace, ranging from 0 to 4.5 million).
* **Scheduling Restriction**: The visualization is timezone-aware and only executes between 3:00 PM and 5:00 PM IST.

![Task 1 Chart](tasks/Task_1/task1_chart.png)

### Key Insights
* **Highest Engagement**: The `FAMILY` category accumulated by far the highest number of reviews (~4.54 million), demonstrating exceptionally high user interaction under these conditions.
* **Top Ratings**: `PERSONALIZATION` achieved the highest average rating of **4.47**, followed closely by `FAMILY` (4.40) and `EDUCATION` (4.40).
* **Lowest Ratings**: `PHOTOGRAPHY` recorded the lowest average rating (**4.15**) among the top 10 categories.
* **Review Disparity**: Categories like `SHOPPING` and `TOOLS` showed very low review totals under these filters, despite having high overall install volumes.

---

## 🌍 Task 2: Interactive Choropleth Map

### Objective
Create an interactive choropleth map using Plotly to visualize app installations across representative countries for the top 5 app categories under specific filtering criteria.

### Filters Applied
* **Category Exclusions**: Excludes categories starting with the letters `A`, `C`, `G`, or `S` (e.g., `ART_AND_DESIGN`, `COMMUNICATION`, `GAME`, `SHOPPING`, etc.).
* **Installation Threshold**: Only includes categories with total installs greater than 1,000,000.
* **Top Categories**: Selects the top 5 categories based on total installs after applying the above exclusions.

### Country Assignment (Assumptions)
Since the original dataset does not contain geographical information, representative countries were mapped as follows for visualization purposes:
* **PRODUCTIVITY** $\rightarrow$ United States (14.18B Installs)
* **TOOLS** $\rightarrow$ Canada (11.45B Installs)
* **FAMILY** $\rightarrow$ India (10.26B Installs)
* **PHOTOGRAPHY** $\rightarrow$ Australia (10.09B Installs)
* **NEWS_AND_MAGAZINES** $\rightarrow$ Germany (7.50B Installs)

### Visualization Used
An interactive global Plotly Choropleth map using the Viridis color scale.
* **Scheduling Restriction**: The visualization is timezone-aware and only executes between 6:00 PM and 8:00 PM IST.

![Task 2 Chart](tasks/Task_2/task2_chart.png)

### Key Insights
* **Productivity Dominance**: The `PRODUCTIVITY` category (mapped to the US) recorded the highest volume of installs under these rules, exceeding 14 billion.
* **Category Focus**: Excluding gaming and social categories shifts the focus to utility-focused applications (Tools, Productivity, and Photography) which account for massive volumes of installations.
* **Legacy Distribution**: Even with strict alphabetical exclusions, categories like `FAMILY` and `NEWS_AND_MAGAZINES` remain highly relevant.

---

## 📊 Task 3: Dual-Axis Category Analysis (Installs vs. Revenue)

### Objective
Compare the average installations and estimated revenue for the top 3 categories of paid applications under strict business filtering rules.

### Filters Applied
* **Min Installations**: $\ge$ 10,000
* **Content Rating**: Target rating must be `Everyone`
* **App Name Length**: App name must not exceed 30 characters
* **Application Size**: App size must be greater than 15 MB
* **Estimated Revenue**: Revenue must be $\ge$ $10,000. (Since Revenue = Price $\times$ Installs, this implicitly excludes all Free apps, focusing only on Paid apps).

### Visualization Used
A grouped dual-axis chart comparing installations and revenue side-by-side:
* **Primary Y-Axis (Left)**: Average installations represented as a steel blue bar chart.
* **Secondary Y-Axis (Right)**: Total estimated revenue represented as a red line trace with marker points.
* **Scheduling Restriction**: Time-gated to execute and render only between 1:00 PM and 2:00 PM IST.

![Task 3 Chart](tasks/Task_3/task3_chart.png)

### Key Insights
* **Photography Revenue Leader**: The `PHOTOGRAPHY` category generated the highest total estimated revenue (~$5.99 million) with an average of 1,000,000 installations per app.
* **Family Installs & Revenue**: The `FAMILY` category generated ~$796,900 in revenue with an average of ~381,429 installations.
* **Personalization Performance**: `PERSONALIZATION` generated ~$666,633 in revenue with an average of 670,000 installations.
* **Exclusion of Free Apps**: Due to the minimum revenue filter, all Free apps (which make up the majority of the Play Store) were excluded, showing the performance of high-value paid apps.

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
   * Open [Google_Play_Store_Analytics.ipynb](file:///c:/Users/Prathamesh/Desktop/Google_Playstore_Project/notebooks/Google_Play_Store_Analytics.ipynb).
   * Click **Cell -> Run All** from the top menu to run the analysis.

---

## 💡 Future Improvements

* **Interactive Web App**: Migrate the Plotly charts to a live dashboarding framework like Dash or Streamlit.
* **Auto-updating Pipelines**: Integrate the script with the Google Play Store API to fetch and analyze weekly app changes dynamically.
* **Machine Learning Integration**: Build predictive models to estimate an app's installation tier or rating based on size, category, and price.

---

## 👤 Author Information

* **Developer**: Prathamesh
* **GitHub Repository**: [Google-Play-Store-Analytics](https://github.com/prathamesh-1105/Google-Play-Store-Analytics)
