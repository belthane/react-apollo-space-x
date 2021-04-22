import { useQuery } from '@apollo/client';
import {LAUNCH_QUERY } from './graphql';

const Launch = () => {
  const { loading, error, data } = useQuery(LAUNCH_QUERY);
 if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data);
return data.launches.map(({ launch_date_utc, launch_success, rocket, links, details }) => (
    <div key={launch_date_utc}>
      <p>
        Name : {rocket.rocket_name}
      </p>
      <p>
        Launch Date UTC: {launch_date_utc}
      </p>
      <p>
        Launch Success: {launch_success ? 'success' : 'failure'}
      </p>
      <p>
        Launch Video: {links.video_link}
      </p>
      <p>
        Details: {details}
      </p>
    </div>
))
};

export default Launch;