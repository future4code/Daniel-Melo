import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import TripDetails from '../components/TripDetails';
import CandidateList from '../components/CandidateList';
import axiosErrorHandler from '../utils/axiosErrorHandler';

const TripDetailsPage = () => {
  const { id } = useParams();
  const [tripDetails, setTripDetails] = useState({ trip: {} });

  useEffect(() => {
    api.get(`/trip/${id}`)
      .then(({ data }) => {
        setTripDetails(data);
      })
      .catch(axiosErrorHandler);
  }, [id]);

  return (
    <Layout>
      <Header isPrivatePage withBackButton />

      <Main>
        <PageTitle title={tripDetails.trip.name} justified />
        <TripDetails trip={tripDetails.trip} />
        <CandidateList
          approveds={tripDetails.trip.approved}
          candidates={tripDetails.trip.candidates}
          tripId={tripDetails.trip.id}
        />
      </Main>
    </Layout>
  );
};
export default TripDetailsPage;
