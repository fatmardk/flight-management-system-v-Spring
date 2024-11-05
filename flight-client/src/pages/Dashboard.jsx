import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faHotel,
  faCar,
  faRightLong,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Dashboard() {
  const [tripType, setTripType] = useState("roundTrip");

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('./dashboardbg.jpg')` }}
    >
      <Navbar />
      <main className="container mx-auto px-6 py-64">
        <div className="text-left mb-36 -mt-24">
          <h2 className="text-4xl font-semibold text-gray-800">
            Hey Buddy! Where are you{" "}
            <span className="text-black font-bold">Flying</span> to?
          </h2>
          <button className="text-gray-600 mt-3 flex items-center space-x-2 hover:text-black">
            <span>Explore Now </span>
            <FontAwesomeIcon icon={faRightLong} />
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex space-x-14 mb-4">
            <button className="text-black font-black flex items-center space-x-2">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flight</span>
            </button>
            <button className="text-gray-500 flex items-center space-x-2">
              <FontAwesomeIcon icon={faHotel} />
              <span>Hotel</span>
            </button>
            <button className="text-gray-500 flex items-center space-x-2">
              <FontAwesomeIcon icon={faCar} />
              <span>Rent a Car</span>
            </button>
          </div>

          {/* Trip Type Selector */}
          <div className="flex space-x-4 mb-4">
            <label className="text-gray-600 font-semibold flex items-center">
              <input
                type="radio"
                name="tripType"
                value="roundTrip"
                checked={tripType === "roundTrip"}
                onChange={() => setTripType("roundTrip")}
                className="mr-2"
                aria-label="Round Trip"
              />
              Round Trip
            </label>
            <label className="text-gray-600 font-semibold flex items-center">
              <input
                type="radio"
                name="tripType"
                value="oneWay"
                checked={tripType === "oneWay"}
                onChange={() => setTripType("oneWay")}
                className="mr-2"
                aria-label="One Way"
              />
              One Way
            </label>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="flex flex-col">
                <label className="text-gray-600">From</label>
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="border p-3 rounded"
                  aria-label="From"
                />
              </div>
              {tripType === "roundTrip" && (
                <FontAwesomeIcon
                  className="ml-4 mt-4"
                  icon={faArrowRightArrowLeft}
                  aria-label="Round Trip Indicator"
                />
              )}
              <div className="flex flex-col ml-4">
                <label className="text-gray-600">To</label>
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="border p-3 rounded"
                  aria-label="To"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600">Departure</label>
              <input
                type="date"
                className="border p-2 rounded"
                aria-label="Departure Date"
              />
            </div>

            {/* Return Date (Only shows if Round Trip is selected) */}
            {tripType === "roundTrip" && (
              <div className="flex flex-col">
                <label className="text-gray-600">Return</label>
                <input
                  type="date"
                  className="border p-2 rounded"
                  aria-label="Return Date"
                />
              </div>
            )}

            <div className="flex flex-col">
              <label className="text-gray-600">Passengers</label>
              <input
                type="number"
                min="1"
                max="10"
                placeholder="Number of Passengers"
                className="border p-2 rounded"
                aria-label="Number of Passengers"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600">Class</label>
              <select className="border p-2 rounded" aria-label="Travel Class">
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
          </form>

          {/* Search Flights Button */}
          <button className="bg-black text-white px-8 py-3 rounded-lg flex absolute right-40 items-center space-x-2 hover:bg-gray-800">
            <span>Search Flights</span>
          </button>
        </div>

        <div className="mt-24">
          <div className="flex justify-between mb-2">
            <p className="font-bold">Popular Destinations</p>
            <p className="font-bold underline cursor-pointer">Explore All</p>
          </div>
          <p className="text-center">
            Discover amazing places to visit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempore quod voluptatem est distinctio
            dolorum eius animi. Natus facilis magni qui cum nesciunt unde,
            rerum aliquam commodi. Vitae nihil optio voluptatum?
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
