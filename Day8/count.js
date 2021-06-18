window.onload=function(){
    const bookedSeatsElement = document.querySelector(`.h1`);
const remainingSeatsElement = document.querySelector(`.h2`);
const seats = document.querySelectorAll(`.checkbox`);

let bookedSeats = 0;
let reaminingSeats = seats.length;

bookedSeatsElement.innerText = bookedSeats;
remainingSeatsElement.innerText = reaminingSeats;

seats.forEach((seat) => {
	seat.addEventListener(`click`, () => {
	  // console.log(`you clicked`);
	  seat.classList.toggle(`booked`);
	  seat.classList.contains(`booked`) ? bookeSeats() : unBookSeats();
	});
  });

  const bookeSeats = () => {
	bookedSeats += 1;
	reaminingSeats -= 1;
  
	bookedSeatsElement.innerText = bookedSeats;
	remainingSeatsElement.innerText = reaminingSeats;
  };

  const unBookSeats = () => {
	  bookedSeats -= 1;
	   reaminingSeats += 1;
	
	   bookedSeatsElement.innerText = bookedSeats;
	   remainingSeatsElement.innerText = reaminingSeats;
	 };
}