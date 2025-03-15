/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

const convertAccToKmH2 = (acc) => acc * 12960;

if (vel < 0) throw new Error("Velocity cannot be negative.");
if (acc < 0) throw new Error("Acceleration cannot be negative.");
if (time <= 0) throw new Error("Time must be greater than zero.");
if (fuel < 0) throw new Error("Fuel cannot be negative.");
if (fbr < 0) throw new Error("Fuel burn rate cannot be negative.");


const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(vel, acc,  time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(vel, acc, time) {
  if (time <= 0) throw new Error("Time must be greater than zero.");
  if (acc < 0) throw new Error("Acceleration cannot be negative.");

  const accKmH2 = acc * 12960; 
  return vel + (accKmH2 * (time /3600))
}

function calcNewDist(d, vel, time) {
  return d + (vel * (time / 3600));
}

function calcRemainingFuel(fuel, fbr, time) {
  const remainingFuel = fuel - (fbr * time); // Subtract fuel used
  if (remainingFuel < 0) throw new Error("Not enough fuel to sustain burn rate.");
  return remainingFuel;
}


console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






