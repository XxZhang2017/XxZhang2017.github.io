---
layout: post
title: "Xinyi Zhang, Pandas in depth"
date: 2020-03-15
---

# Exploring Pandas in Depth


What pandas can do ?
It contains high-level data structures and manipulation tools designed to make data analysis fast and easy.

In this post, I am going to discuss the most frequently used pandas features. 



##  1, dataframe usage

   * dataframe with Mapy object (element-wise on a Series)
   
Each of the column is pandas.Series Object. Map object to do something for you:

    titan = pd.read_csv('data.csv')
   
Filling NaN value before using map and inplace = True means the change takes effect in the original dataframe;
    
    titan['age'].fillna(titan['age'].mean(), inplace = True) 
    # column 'age' becomes to int value
    titan.age = titan.age.map(lambda x: int(x))
    titan.head()
    
   * dataframe with Apply function (row/column basic of DataFrame)
 It applies a function along any axis of the Dataframe
    test_data = pd.DataFrame(np.random.randn(5, 2))

The list contains name of the column. Here column1 is name 0, column2 is named 1.

    column_list = [0, 1]
    df = test_data[column_list].apply(lambda x: x * 100.00)
    df.head()


## 2, Plotting

    titan['column'].plot(kind = 'bar')

or

    titan['column'].plot().bar()

Pandas also can plot hist(), pie()......

## 3, Statistic

  * Groupping
  * Aggregation

