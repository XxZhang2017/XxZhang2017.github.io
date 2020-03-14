---
layout: post
title: "Process dataset in Python -- Beginner"
date: 2020-03-09
---
prerequisites:
You are familiar with basic coding in Python, eg. import library, use module name as ;

We are exploring Python library, pandas today. We will see how it can help us to preprocess the dataset.

The popular usages in pandas are as follow:
    
    import pandas as pd
    import numpy as np
     
    dt = pd.read_csv('path/to/file')
    #  'pd' is abbreviation of pandas library;
    
    dt.shape  
    >>(125, 61)  
    #   The result is a tuple. It gives you the dimension of the data. 125 rows, 61 columns.
    
    df.head(10)
    #   Getting top 10 records from the dataset; You can change numbers inside the parentheses
    df.columns
    #   Return the column information
    df.describe()
    
Handling missing data:

    dt.isnull().any().value_counts()
    >>True 34
    >>False 27
    >>dtype: int64

    dt.isnull().sum().sort_values()
    #   Sorting the number of NaN values for each feature(column)

Sometimes your dataset uses ? for NaN values:

    df.replace('?', np.nan)  #here np is numpy;
    df.dropna(axis=0, np.nan)


You want to extract one column to plot or other analysis:

    targets = df['color'].astype('category')
    #   Changing the column data type to category.
    
You want to label column value to other string or number:

    label_color = ['red' if i=='My_love' else 'I_dont_like' for i in targets]
    
Labeling data is useful.