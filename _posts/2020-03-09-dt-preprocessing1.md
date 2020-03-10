---
layout: post
title: "Statistic in Python Beginner"
date: 2020-03-09
---
prerequisites:
1, you are familiar with basic coding in Python, eg. import library, use module name as ;
2, 

We are exploring Python library, pandas today. We will see how it can help us to preprocess the dataset.

The popular usages in pandas are as follow:
import pandas as pd
import numpy as np
dt = pd.read_csv('path/to/file') #pd is abbreviation of pandas library;
dt.shape    # The result is a tuple. It gives you the dimension of the data.
    (125, 61)  #125 rows, 61 columns
df.head(10)   # getting top 10 records from the dataset; You can change numbers inside the parentheses
df.columns   # Return the column information
df.describe()

Handling missing data:
dt.isnull().any().value_counts()  #Return
    True 34
    False 27
    dtype: int64

dt.isnull().sum().sort_values()     #sorting the number of NaN values for each feature(column)

Sometimes your dataset uses ? for NaN values.
df.replace('?', np.nan)  #here np is numpy;
df.dropna(axis=0, np.nan)


You want to extract one column to plot or other analysis:
targets = df['color'].astype('category') # 'color is one of the column name in the dataset'
#?category ?
    the result is one column information
You want to label column value to other string or number:
label_color = ['red' if i=='My_love' else 'I_dont_like' for i in targets]
    
Labeling data is useful.