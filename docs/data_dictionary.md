# 📖 Data Dictionary

This document provides a detailed description of the columns present in the datasets used for this project.

## 1. Apps Dataset (`Play Store Data.csv`)

| Column Name | Data Type | Description |
| :--- | :--- | :--- |
| **App** | String | The name of the application. |
| **Category** | String | The category the app belongs to (e.g., GAME, FAMILY, FINANCE). |
| **Rating** | Float | The average user rating of the app (on a scale of 1.0 to 5.0). |
| **Reviews** | Integer | The number of user reviews submitted for the app. |
| **Size** | String/Float | The size of the app (e.g., "19M" or numeric size in MB). |
| **Installs** | Integer | The total number of times the app has been installed (e.g., "10,000+"). |
| **Type** | String | Whether the app is "Free" or "Paid". |
| **Price** | Float | The price of the app in USD (0.0 if Free). |
| **Content Rating** | String | The age group target of the app (e.g., Everyone, Teen, Mature 17+). |
| **Genres** | String | The genres associated with the app (can belong to multiple sub-genres). |
| **Last Updated** | Datetime | The date when the app was last updated on the Play Store. |
| **Current Ver** | String | The current version of the app. |
| **Android Ver** | String | The minimum required Android version to run the app. |

## 2. User Reviews Dataset (`User Reviews.csv`)

| Column Name | Data Type | Description |
| :--- | :--- | :--- |
| **App** | String | The name of the application. |
| **Translated_Review** | String | The text of the user review translated to English. |
| **Sentiment** | String | The labeled sentiment class of the review (Positive, Negative, Neutral). |
| **Sentiment_Polarity** | Float | The numerical polarity score of the review (typically between -1.0 and 1.0). |
| **Sentiment_Subjectivity**| Float | The subjectivity score of the review (typically between 0.0 and 1.0). |
