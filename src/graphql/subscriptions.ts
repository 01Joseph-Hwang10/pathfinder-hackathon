/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateAIModel = /* GraphQL */ `
  subscription OnCreateAIModel {
    onCreateAIModel {
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
export const onUpdateAIModel = /* GraphQL */ `
  subscription OnUpdateAIModel {
    onUpdateAIModel {
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
export const onDeleteAIModel = /* GraphQL */ `
  subscription OnDeleteAIModel {
    onDeleteAIModel {
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
export const onCreateLayer = /* GraphQL */ `
  subscription OnCreateLayer {
    onCreateLayer {
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
export const onUpdateLayer = /* GraphQL */ `
  subscription OnUpdateLayer {
    onUpdateLayer {
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
export const onDeleteLayer = /* GraphQL */ `
  subscription OnDeleteLayer {
    onDeleteLayer {
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
