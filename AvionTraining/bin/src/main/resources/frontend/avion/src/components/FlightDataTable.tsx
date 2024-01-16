import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flightDataList, deleteFlight } from "@/services/flight-data";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";

type Flight = {
    fid: string;
    forigin: string;
    flayover: string;
    fdestination: string;
    fdistance: number;
    ffuel: number;
    fcraft: string;
    fintime: string;
    fouttime: string;
};

const FlightDataTable = () => {
    const [flights, setFlights] = useState<Flight[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        flightDataList().then((response) => {
            setFlights(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const addFlight = () => {
        navigate('/avion/add-flight');
    }

    const updateFlightInfo = (flight: Flight) => {
        navigate(`/avion/update-flight/${flight.fid}`, { state: { flight } });
    };

    
// same function as below but dosent auto refresh the page after hitting the API
    // // const handleDeleteFlight = async (fid: any) => {
    // //     try {
    // //         await deleteFlight(fid);
    // //         const updatedFlights = (await flightDataList()).data;
    // //         setFlights(updatedFlights); // Refresh flight data and update state
    // //     } catch (error) {
    // //         console.error("Error deleting flight:", error);
    // //         // Display an error message to the user
    // //     }
    // // };

    const handleDeleteFlight = async (fid: any) => {
        try {
            await deleteFlight(fid);
            // Perform a hard refresh of the page
            window.location.reload();
        } catch (error) {
            console.error("Error deleting flight:", error);
            // Display an error message to the user
        }
    };


    return (
        <>
            <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
                    Flight Details
                </h1>
                
                <div className="flex justify-end">
                    <Button onClick={addFlight} className="flex items-center gap-4 rouded-lg">
                        <PlusCircle className="p-1" />
                        Add New Flight
                    </Button>
                </div>
                <br />
                
            </div>

            <div>
                <Table>
                    <TableCaption>Have a Look at your Flight Data</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Flight ID</TableHead>
                            <TableHead>Origin</TableHead>
                            <TableHead>Layover</TableHead>
                            <TableHead>Destination</TableHead>
                            <TableHead>Distance</TableHead>
                            <TableHead>Fuel</TableHead>
                            <TableHead>Craft</TableHead>
                            <TableHead>In-Time</TableHead>
                            <TableHead>Out-Time</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {flights.map((flight) => (
                            <TableRow key={flight.fid}>
                                <TableCell>{flight.fid}</TableCell>
                                <TableCell>{flight.forigin}</TableCell>
                                <TableCell>{flight.flayover}</TableCell>
                                <TableCell>{flight.fdestination}</TableCell>
                                <TableCell>{flight.fdistance} Km</TableCell>
                                <TableCell>{flight.ffuel} Kg</TableCell>
                                <TableCell>{flight.fcraft}</TableCell>
                                <TableCell>{flight.fintime}</TableCell>
                                <TableCell>{flight.fouttime}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => updateFlightInfo(flight)}
                                        className=" m-0.5 sm:mr-5 md:mr-6 lg:mr-7 xl:mr-8 rounded-full"
                                    >
                                        Update Info
                                    </Button>
                                    <Button
                                        onClick={() => handleDeleteFlight(flight.fid)}
                                        className="rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl"
                                        variant="destructive"
                                    >
                                        Delete Flight Data
                                    </Button>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
export default FlightDataTable;


