// flow-typed signature: f3589003f529b61c82cbde03cbc9b96b
// flow-typed version: 26279ba7bf/graphql-server-module-graphiql_v0.7.x/flow_>=v0.34.x

declare module 'graphql-server-module-graphiql' {

  declare export type GraphiQLData = {
      endpointURL: string;
      subscriptionsEndpoint?: string;
      query?: string;
      variables?: { [mixed] : mixed };
      operationName?: string;
      result?: { [mixed] : mixed };
      passHeader?: string;
  }

  declare export function renderGraphiQL(data: GraphiQLData): string;

}
