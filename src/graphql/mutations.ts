/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAIModel = /* GraphQL */ `
  mutation CreateAIModel(
    $input: CreateAIModelInput!
    $condition: ModelAIModelConditionInput
  ) {
    createAIModel(input: $input, condition: $condition) {
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
export const updateAIModel = /* GraphQL */ `
  mutation UpdateAIModel(
    $input: UpdateAIModelInput!
    $condition: ModelAIModelConditionInput
  ) {
    updateAIModel(input: $input, condition: $condition) {
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
export const deleteAIModel = /* GraphQL */ `
  mutation DeleteAIModel(
    $input: DeleteAIModelInput!
    $condition: ModelAIModelConditionInput
  ) {
    deleteAIModel(input: $input, condition: $condition) {
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
export const createLayer = /* GraphQL */ `
  mutation CreateLayer(
    $input: CreateLayerInput!
    $condition: ModelLayerConditionInput
  ) {
    createLayer(input: $input, condition: $condition) {
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
export const updateLayer = /* GraphQL */ `
  mutation UpdateLayer(
    $input: UpdateLayerInput!
    $condition: ModelLayerConditionInput
  ) {
    updateLayer(input: $input, condition: $condition) {
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
export const deleteLayer = /* GraphQL */ `
  mutation DeleteLayer(
    $input: DeleteLayerInput!
    $condition: ModelLayerConditionInput
  ) {
    deleteLayer(input: $input, condition: $condition) {
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
