## Startlist Dashboard

### What am I doing?/What are my goals?

For this project, I aim to create a simple dashboard that allows organisers to see who is participating in their races alongside any relevant information. In addition, organisers will also be able to filter booking so they can see only their startlist entries and the amount they made in ticket sales.

#### The requirements for this project are listed below:

You have been asked to build a dashboard that makes it easy for organisers to view race startlist entries and ticket sale revenue.

1. It must be possible for organisers to apply a filter so that they can see only their startlist entries.
2. It must also be possible for each organiser to see how much they have made in ticket sales.

#### Technologies 
I aim to use React JS to create a Front End application, I aim to make the dashboard on a single page. I also created a server using node and express JS.

- React JS
- HTML
- CSS (Designing is not great but you did say not to focus on UI styling)
- Node JS
- Express JS

### How to install this software?
Step 1:
  - Please clone this repo

Step 2: 
  - navigate into the api folder and install all necessary dependencies using the following commands:
  
  ```
  cd LDT-tech-test/api
  
  npm install
  ```
  
Step 3: 
  - from the /LDT-tech-test folder and navigate into the client folder and install all necessary dependencies using the following commands:

  ```
  cd LDT-tech-test/client

  npm install
  ```

### How to run this software?

Step 1:
  - Navigate to the api folder from the /LDT-tech-test folder and begin running the server using the following commands:
  
  ```
  cd LDT-tech-test/api
  
  npm start
  ```

Step 2:
  - Navigate to the client folder from the /LDT-tech-test folder and begin running the React app using the following commands:
  
  ```
  cd LDT-tech-test/client
  
  npm start
  ```


### My approach
This section details my approach to this tech test

#### Stage 1 - Planning

Researched examples of race startlists from other companies such as runbritain and findarace

most important information included are:
  - First Name 
  - Last Name
  - Gender
  - Club/affiliation

I will include the following information to begin:
  - First Name
  - Last Name
  - Status
  - Event Name
  - Organiser Name

I also researched an example of a dashboard made using React. I hope to include a side panel which will include various filters that an organiser can use to customise the table of results. 

From this, I quickly made a mockup of how I wanted the app to look.

#### Stage 2 - What I accomplished

I created a filter that allows organisers to only see the participants in their races
  - The buttons for each organiser are generated dynamically depending on which organisers are present in the original dataset
  - I used an onClick with the buttons which sends a fetch request with a query string attached to the backend server
    - This query string is used to filter the results and send them back 
    - This can reduce the amount of data I need to request as I only need the data that matches the query string
    - This can also be expanded to handle additional filters 
 
The revenue is displayed on the screen and changes depending on what filters the user has used i.e. it shows the amount of revenue for the bookings shown in the table
  - Currently, the revenue is only displayed for filtered results, so for the entire dataset the revenue is £0

#### Stage 3 - If I had time I would:

- Expand on the filter feature by:
  - Adding the ability to filter out pending status participants
  - Be able to filter for certain Events
  - Be able to overlap multiple filters together, so be able to the show only the confirmed participants of the 'The Great North Run' race

- Expand on the revenue feature by:
  - Showing organisers the percentage of sales that were early bird discount vs stand ticket price sales
  - Maybe even have a separate page showing analytics of sales using a graph, organisers can see the volume of sales for an event by date. For example, they could see an increase in sales leading up to the weekend.
  - Similar to Ebay and Amazon promotions we could take the sales data we accumulate and find the ideal times to offer early bird discounts and advise organisers on when to offer these promotions increasing revenue.

- Lastly, I noticed that I did not want to overflow my table with too much information, if I had time I was hoping to have a drop down for each participant that displayed additional data that the organiser could view.
