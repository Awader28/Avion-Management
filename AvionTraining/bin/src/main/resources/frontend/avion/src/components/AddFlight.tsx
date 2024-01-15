import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { addNewFlight, updateFlight, getFlightByDestination } from "@/services/flight-data";
import { useNavigate, useParams } from "react-router-dom";

const AddFlight = () => {
    const [origin, setOrigin] = useState('');
    const [layover, setLayover] = useState('');
    const [destination, setDestination] = useState('');
    const [distance, setDistance] = useState('');
    const [fuel, setFuel] = useState('');
    const [craft, setCraft] = useState('');
    const [inTime, setInTime] = useState('');
    const [outTime, setOutTime] = useState('');

    const navigator = useNavigate();

    const { fid } = useParams();
    const { fdestination } = useParams()


    // useEffect(() => {
    //     if (fid) {
    //         const flightData = {
    //             forigin: origin,
    //             flayover: layover,
    //             fdestination: destination,
    //             fdistance: distance,
    //             ffuel: fuel,
    //             fcraft: craft,
    //             fintime: inTime,
    //             fouttime: outTime
    //         };

    //         updateFlight(fid, flightData).then((response) => {
    //             // Todo
    //         });
    //     }
    // }, [fid]);

    useEffect(() => {
        if (fdestination) {
            getFlightByDestination(fdestination).then((response) => {
                const flight = response.data;
                setOrigin(flight.forigin);
                setLayover(flight.flayover);
                setDestination(flight.fdestination);
                setDistance(flight.fdistance);
                setFuel(flight.ffuel);
                setCraft(flight.fcraft);
                setInTime(flight.fintime);
                setOutTime(flight.fouttime);
            }).catch((error) => {
                console.error("Failed to fetch flight data by destination:", error);
            });
        }
    }, [fdestination]);



    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const flightData = {
            forigin: origin,
            flayover: layover,
            fdestination: destination,
            fdistance: distance,
            ffuel: fuel,
            fcraft: craft,
            fintime: inTime,
            fouttime: outTime
        };

        if (fid) {
            updateFlight(fid, flightData)
                .then(() => {
                    navigator('/avion/all');
                }).catch((error) => {
                    console.log(error);
                });
        } else {
            addNewFlight(flightData)
                .then(() => {
                    navigator('/avion/all');
                }).catch((error) => {
                    console.log(error);
                });
        }
    };

    const pageTitle = () => {
        return fid ?
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Update Flight Data</h1> :
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Enter Flight Data</h1>;
    };

    return (
        <div className="p-9 space-y-6">
            {pageTitle()}
            <div className="space-y-4 m-auto">
                <label className="block text-lg font-medium">
                    Enter Flight Origin
                    <Input
                        value={origin}
                        onChange={e => setOrigin(e.target.value)}
                        placeholder="Departure Location"
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-800 "

                    />
                </label>

                <label className="block text-lg font-medium">
                    Enter Layover
                    <Input
                        value={layover}
                        onChange={e => setLayover(e.target.value)}
                        placeholder="Layover Location..."
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-800"
                    />
                </label>

                <label className="block text-lg font-medium">
                    Enter Destination
                    <Input
                        value={destination}
                        onChange={e => setDestination(e.target.value)}
                        placeholder="Arrival Location..."
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-800"
                    />
                </label>

                <label className="block text-lg font-medium">
                    Enter Distance (In Kilometers)
                    <Input
                        type="number"
                        value={distance}
                        onChange={e => setDistance(e.target.value)}
                        placeholder="Total Flight Distance ..."
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-800"
                    />
                </label>

                <label className="block text-lg font-medium">
                    Enter Fuel (In Kilograms)
                    <Input
                        type="number"
                        value={fuel}
                        onChange={e => setFuel(e.target.value)}
                        placeholder="Fuel Required for the Flight..."
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-800"
                    />
                </label>

                <label className="block text-lg font-medium">
                    Enter Craft Model
                    <Input
                        value={craft}
                        onChange={e => setCraft(e.target.value)}
                        placeholder="Model of the Craft..."
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-800"
                    />
                </label>

                <label className="block text-lg font-medium">
                    In-Time
                    <Input
                    
                        value={inTime}
                        onChange={e => setInTime(e.target.value)}
                        placeholder="Time of Arrival"
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-800"
                    />
                </label>

                <label className="block text-lg font-medium">
                    Out-Time
                    <Input

                        value={outTime}
                        onChange={e => setOutTime(e.target.value)}
                        placeholder="Time of Arrival ..."
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-800"
                    />
                </label>
            </div>

            <Button type="submit" onClick={handleSubmit}>
                {fid ? 'Update Flight Data' : 'Submit Data'}
            </Button>
        </div>
    );
}

export default AddFlight