# asc-octo
A repository for configuring raspberry pi for the Adventure Science Center


##The constraints:

1. Raspberry Pi is small in storage and cannot hold a node application.
2. Per ASC, This had to be an on-prem service only. It should *_not_* be exposed to everyone. 
3. ASC would not allow us access to their Wordpress account to set up the pages.

The Solutions:

1. We wrote the application in Bootstrap, Vanilla JS, & JQuery.
2. Everything is locked to the Pi that is available on the network only. 
3. We tied the pages to the GitHub and the Pi. 
