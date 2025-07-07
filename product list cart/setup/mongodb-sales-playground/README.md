# MongoDB Sales Playground

This project contains a MongoDB playground for inserting and querying sales data. The playground is designed to demonstrate basic MongoDB operations such as inserting documents, querying data, and performing aggregations.

## Project Structure

- `playground/sales-playground.mongodb.js`: This file contains the MongoDB playground code for inserting and querying sales data. It includes commands to insert multiple documents into the `sales` collection, query the number of sales that occurred on a specific date, and perform an aggregation to group total sales by product.

## Usage

1. **Setup**: Ensure you have MongoDB installed and running on your machine.
2. **Connect to MongoDB**: Open the MongoDB playground file in your MongoDB client.
3. **Run the Playground**: Execute the commands in `sales-playground.mongodb.js` to insert sample sales data and perform queries.
4. **View Results**: Check the output for the number of sales on the specified date and the aggregated sales data by product.

## Sales Data

The sales data includes the following fields:
- `item`: The name of the product sold.
- `price`: The price of the product.
- `quantity`: The number of units sold.
- `date`: The date of the sale.

Feel free to modify the data and queries to explore different scenarios and gain insights from the sales data.