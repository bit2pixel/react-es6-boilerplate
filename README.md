# dohop-hackathon
Dohop hackathon project
===
## The Team:
	- Arnar Þór Sveinsson
	- Axel Máni Gíslason
	- Guðmundur Egill Bergsteinsson
	- Sólberg Bjarki Valdimarsson
	- Sölvi Logason

===
## About
	We created a solution allowing users to create a tour around the world
	combining factors like price, travel time and distance.
	This basically means combining Dohop and Kilroy into one.

	It is extremely cool because you can see your trip being made live
	on the map, see how it changes to watch what is happening.
	When it is ready you can drop into street view and see the city
	you are about to visit, see tourist attraction and even book hotels!
===
## How to run

If you want you can clone the project from [github](https://github.com/arnarthor/dohop-hackathon) and follow these instruction

	Make sure you have mongodb installed before trying to run this.

	```
	make bootstrap
	make run-sever // In one terminal
	make run // In another terminal
	```

===
## Walkthrough
	This is a gif of our beautiful solution
![Frontpage](img/movie.gif "Our beautiful solution")
	On our frontpage you choose a starting airport and length of a trip.
	IMG
	P.S. we have blinking stars !

![Frontpage](img/start.png "Our beautiful frontpage")
![Autofill](img/Kef.png "We select KEF airport")

	Once selected you can click create journey to begin your adventure.
	You will see our backend trying to create the best trip for you live and
	displaying it for you on the map.
![Generating trips](img/generating.png "Our server generates trips for you")

	When ready you can see all the places you are going to via the sidebar on the right.
	You can also see tourist attraction, drop into streetview and book hotels for each place
	and of course the total price.

![Our created trip](img/done.png "When done you can see all sort of information")


===
## Why is it cool
	There isn't any solution out there that creates a tours like ours.
	It takes many factors into consideration, length and other factors
	and creates trips and information about places to go to. The fact that you can drop in, see tourist attraction and book the hotels makes it even so more cooler !  
===
