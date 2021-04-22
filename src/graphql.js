import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache()
});

export const LAUNCH_QUERY = gql`
      query GetLaunches {
  launches(limit: 5) {
    launch_date_utc
    launch_success
    rocket {
      rocket_name
    }
    links {
      video_link
    }
    details
  }
}
    `;