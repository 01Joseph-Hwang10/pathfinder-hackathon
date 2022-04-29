/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      models {
        items {
          id
          name
          source
          data
          createdAt
          updatedAt
          userModelsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        models {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAIModel = /* GraphQL */ `
  query GetAIModel($id: ID!) {
    getAIModel(id: $id) {
      id
      name
      source
      data
      layers {
        items {
          id
          name
          type
          defaultParams
          createdAt
          updatedAt
          aIModelLayersId
        }
        nextToken
      }
      createdAt
      updatedAt
      userModelsId
    }
  }
`;
export const listAIModels = /* GraphQL */ `
  query ListAIModels(
    $filter: ModelAIModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAIModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        source
        data
        layers {
          nextToken
        }
        createdAt
        updatedAt
        userModelsId
      }
      nextToken
    }
  }
`;
export const getLayer = /* GraphQL */ `
  query GetLayer($id: ID!) {
    getLayer(id: $id) {
      id
      name
      type
      defaultParams
      createdAt
      updatedAt
      aIModelLayersId
    }
  }
`;
export const listLayers = /* GraphQL */ `
  query ListLayers(
    $filter: ModelLayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        defaultParams
        createdAt
        updatedAt
        aIModelLayersId
      }
      nextToken
    }
  }
`;
