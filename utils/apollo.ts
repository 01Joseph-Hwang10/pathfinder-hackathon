import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import withApollo from "next-with-apollo";
import { GRAPHQL_ENDPOINT } from "@modules/constants";

export const initWithApollo = withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache().restore(initialState || {}),
  });
});

export interface ApolloClientProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}
