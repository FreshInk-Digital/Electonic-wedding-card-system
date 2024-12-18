
import EventDetails from "../../components/EventDetails"; 
import { Box, SimpleGrid } from "@chakra-ui/react";
import React, {Suspense } from "react";

const eventSelectionGrid = [
    { 
        proceedButtonText: "Click here to Proceed",
        eventTitle: "Ceremonial Events",
        eventDescription: "Request here to choose your event",
        bgImage: "url(/images/ceremonial-events.png)",
    },
    {
        proceedButtonText: "Click here to Proceed",
        eventTitle: "Night Club",
        eventDescription: "Request here to choose your event",
        bgImage: "url(/images/night-club.png)",
    },
    {
        proceedButtonText: "Click here to Proceed",
        eventTitle: "Other",
        eventDescription: "Request here to choose your event",
        bgImage: "url(/images/other.png)",
    },
    {
        proceedButtonText: "Click here to Proceed",
        eventTitle: "Cooperate Events",
        eventDescription: "Request here to choose your event",
        bgImage: "url(/images/corporate-events.png)",
    },
    {
        proceedButtonText: "Click here to Proceed",
        eventTitle: "Night Club",
        eventDescription: "Request here to choose your event",
        bgImage: "url(/images/night-club.png)",
    },
    { 
        proceedButtonText: "Click here to Proceed",
        eventTitle: "Ceremonial Events",
        eventDescription: "Request here to choose your event",
        bgImage: "url(/images/ceremonial-events.png)",
    },
    {
        proceedButtonText: "Click here to Proceed",
        eventTitle: "Other",
        eventDescription: "Request here to choose your event",
        bgImage: "url(/images/other.png)",
    },
    {
        proceedButtonText: "Click here to Proceed",
        eventTitle: "Ceremonial Events",
        eventDescription: "Request here to choose your event",
        bgImage: "url(/images/corporate-events.png)",
    },
];


export default function Events() {
return (
        <>
            {/* events section */}
            <SimpleGrid ml="72px" mr="222px" gap="64px" columns={{ md: 4, base: 1, sm: 2 }} mx={{ md: 0, base: "0px" }}> 
                <Suspense fallback={<div>Loading feed...</div>}>
                {eventSelectionGrid.map((d, index) => (
                    <EventDetails {...d} key={"eventsGrid" + index} />
                ))}
                        </Suspense> 
            </SimpleGrid>
        </>
    );
}
       