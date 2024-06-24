## Details on what I built:

I built this Help Desk app built using Next.js, utilizing the server actions for data fetching and app router to organize the different pages. I utilized Supabase for the database, creating a simple SQL table to manage ticket the ticket. 

- I used Next.js's `Image` for optimized image handling and `Link` for navigation.
- I chose supabase as it's well documented and easy to use,  and it's simple to integrate with Next.js.
- I wanted to keep the components modular and reusable, allowing me to reuse the components throughout the app. 
- I created a copy file to store content and form input data for easy maintenance.

## What I would improve:

   - Although I did add some media queries for mobile responsiveness, I would like to add more and improve the responsiveness on mobile and tablet. 

   - I started building the '/create-a-ticket' page first, and kept all of the functionality at the parent level and prop passed everything down into lower level child components, but when I began building the '/admin-panel', I moved functionality for changing ticket status and emailing customers into the TicketContainer and the Ticket component, but I would for this to be consistent across the application and move it higher into the structure.

   - Instead of fetching ticket data on page load for the `/admin-panel`, I would use `getServerSideProps` and/or implement caching to speed up the hydration of the '/admin-panel' page. Additionally, I would add checks to refetch data when a new ticket is created or when a ticket's status changes.

   - I added a column to the database that is currently not being used (`resolved_date`) to future proof resolving tickets. I would like to move the changing of ticket status to 'completed' to the form where you can email the customer. I would also like to either move completed tickets to another section or add a filter to the TicketContainer to filter by ticket status, including 'completed'. 


