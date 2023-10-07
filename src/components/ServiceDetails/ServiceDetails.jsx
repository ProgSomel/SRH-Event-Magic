import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const ServiceDetails = () => {

    const [service, setService] = useState([]);

    const {id} = useParams();
    const idInt = parseInt(id);
    
    const services = useLoaderData();

    useEffect(() =>{
        const clickedService = services.find(service => service.id === idInt);
        setService(clickedService);
    },[id, services]);

    
    
    return (
        <div>
            {
                <ServiceDetail service={service}></ServiceDetail>
            }
        </div>
    );
};

export default ServiceDetails;