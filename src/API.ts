/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  models?: ModelAIModelConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAIModelConnection = {
  __typename: "ModelAIModelConnection",
  items:  Array<AIModel | null >,
  nextToken?: string | null,
};

export type AIModel = {
  __typename: "AIModel",
  id: string,
  name: string,
  source: string,
  data: string,
  layers?: ModelLayerConnection | null,
  createdAt: string,
  updatedAt: string,
  userModelsId: string,
};

export type ModelLayerConnection = {
  __typename: "ModelLayerConnection",
  items:  Array<Layer | null >,
  nextToken?: string | null,
};

export type Layer = {
  __typename: "Layer",
  id: string,
  name?: string | null,
  type: LayerType,
  defaultParams?: string | null,
  createdAt: string,
  updatedAt: string,
  aIModelLayersId: string,
};

export enum LayerType {
  Dense = "Dense",
  Conv2D = "Conv2D",
  MaxPooling2D = "MaxPooling2D",
  Flatten = "Flatten",
  Dropout = "Dropout",
  BatchNormalization = "BatchNormalization",
}


export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAIModelInput = {
  id?: string | null,
  name: string,
  source: string,
  data: string,
  userModelsId: string,
};

export type ModelAIModelConditionInput = {
  name?: ModelStringInput | null,
  source?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelAIModelConditionInput | null > | null,
  or?: Array< ModelAIModelConditionInput | null > | null,
  not?: ModelAIModelConditionInput | null,
  userModelsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAIModelInput = {
  id: string,
  name?: string | null,
  source?: string | null,
  data?: string | null,
  userModelsId?: string | null,
};

export type DeleteAIModelInput = {
  id: string,
};

export type CreateLayerInput = {
  id?: string | null,
  name?: string | null,
  type: LayerType,
  defaultParams?: string | null,
  aIModelLayersId: string,
};

export type ModelLayerConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelLayerTypeInput | null,
  defaultParams?: ModelStringInput | null,
  and?: Array< ModelLayerConditionInput | null > | null,
  or?: Array< ModelLayerConditionInput | null > | null,
  not?: ModelLayerConditionInput | null,
  aIModelLayersId?: ModelIDInput | null,
};

export type ModelLayerTypeInput = {
  eq?: LayerType | null,
  ne?: LayerType | null,
};

export type UpdateLayerInput = {
  id: string,
  name?: string | null,
  type?: LayerType | null,
  defaultParams?: string | null,
  aIModelLayersId?: string | null,
};

export type DeleteLayerInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelAIModelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  source?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelAIModelFilterInput | null > | null,
  or?: Array< ModelAIModelFilterInput | null > | null,
  not?: ModelAIModelFilterInput | null,
  userModelsId?: ModelIDInput | null,
};

export type ModelLayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelLayerTypeInput | null,
  defaultParams?: ModelStringInput | null,
  and?: Array< ModelLayerFilterInput | null > | null,
  or?: Array< ModelLayerFilterInput | null > | null,
  not?: ModelLayerFilterInput | null,
  aIModelLayersId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    models?:  {
      __typename: "ModelAIModelConnection",
      items:  Array< {
        __typename: "AIModel",
        id: string,
        name: string,
        source: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userModelsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    models?:  {
      __typename: "ModelAIModelConnection",
      items:  Array< {
        __typename: "AIModel",
        id: string,
        name: string,
        source: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userModelsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    models?:  {
      __typename: "ModelAIModelConnection",
      items:  Array< {
        __typename: "AIModel",
        id: string,
        name: string,
        source: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userModelsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAIModelMutationVariables = {
  input: CreateAIModelInput,
  condition?: ModelAIModelConditionInput | null,
};

export type CreateAIModelMutation = {
  createAIModel?:  {
    __typename: "AIModel",
    id: string,
    name: string,
    source: string,
    data: string,
    layers?:  {
      __typename: "ModelLayerConnection",
      items:  Array< {
        __typename: "Layer",
        id: string,
        name?: string | null,
        type: LayerType,
        defaultParams?: string | null,
        createdAt: string,
        updatedAt: string,
        aIModelLayersId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userModelsId: string,
  } | null,
};

export type UpdateAIModelMutationVariables = {
  input: UpdateAIModelInput,
  condition?: ModelAIModelConditionInput | null,
};

export type UpdateAIModelMutation = {
  updateAIModel?:  {
    __typename: "AIModel",
    id: string,
    name: string,
    source: string,
    data: string,
    layers?:  {
      __typename: "ModelLayerConnection",
      items:  Array< {
        __typename: "Layer",
        id: string,
        name?: string | null,
        type: LayerType,
        defaultParams?: string | null,
        createdAt: string,
        updatedAt: string,
        aIModelLayersId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userModelsId: string,
  } | null,
};

export type DeleteAIModelMutationVariables = {
  input: DeleteAIModelInput,
  condition?: ModelAIModelConditionInput | null,
};

export type DeleteAIModelMutation = {
  deleteAIModel?:  {
    __typename: "AIModel",
    id: string,
    name: string,
    source: string,
    data: string,
    layers?:  {
      __typename: "ModelLayerConnection",
      items:  Array< {
        __typename: "Layer",
        id: string,
        name?: string | null,
        type: LayerType,
        defaultParams?: string | null,
        createdAt: string,
        updatedAt: string,
        aIModelLayersId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userModelsId: string,
  } | null,
};

export type CreateLayerMutationVariables = {
  input: CreateLayerInput,
  condition?: ModelLayerConditionInput | null,
};

export type CreateLayerMutation = {
  createLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    type: LayerType,
    defaultParams?: string | null,
    createdAt: string,
    updatedAt: string,
    aIModelLayersId: string,
  } | null,
};

export type UpdateLayerMutationVariables = {
  input: UpdateLayerInput,
  condition?: ModelLayerConditionInput | null,
};

export type UpdateLayerMutation = {
  updateLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    type: LayerType,
    defaultParams?: string | null,
    createdAt: string,
    updatedAt: string,
    aIModelLayersId: string,
  } | null,
};

export type DeleteLayerMutationVariables = {
  input: DeleteLayerInput,
  condition?: ModelLayerConditionInput | null,
};

export type DeleteLayerMutation = {
  deleteLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    type: LayerType,
    defaultParams?: string | null,
    createdAt: string,
    updatedAt: string,
    aIModelLayersId: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    models?:  {
      __typename: "ModelAIModelConnection",
      items:  Array< {
        __typename: "AIModel",
        id: string,
        name: string,
        source: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userModelsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      models?:  {
        __typename: "ModelAIModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAIModelQueryVariables = {
  id: string,
};

export type GetAIModelQuery = {
  getAIModel?:  {
    __typename: "AIModel",
    id: string,
    name: string,
    source: string,
    data: string,
    layers?:  {
      __typename: "ModelLayerConnection",
      items:  Array< {
        __typename: "Layer",
        id: string,
        name?: string | null,
        type: LayerType,
        defaultParams?: string | null,
        createdAt: string,
        updatedAt: string,
        aIModelLayersId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userModelsId: string,
  } | null,
};

export type ListAIModelsQueryVariables = {
  filter?: ModelAIModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAIModelsQuery = {
  listAIModels?:  {
    __typename: "ModelAIModelConnection",
    items:  Array< {
      __typename: "AIModel",
      id: string,
      name: string,
      source: string,
      data: string,
      layers?:  {
        __typename: "ModelLayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userModelsId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLayerQueryVariables = {
  id: string,
};

export type GetLayerQuery = {
  getLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    type: LayerType,
    defaultParams?: string | null,
    createdAt: string,
    updatedAt: string,
    aIModelLayersId: string,
  } | null,
};

export type ListLayersQueryVariables = {
  filter?: ModelLayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLayersQuery = {
  listLayers?:  {
    __typename: "ModelLayerConnection",
    items:  Array< {
      __typename: "Layer",
      id: string,
      name?: string | null,
      type: LayerType,
      defaultParams?: string | null,
      createdAt: string,
      updatedAt: string,
      aIModelLayersId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    models?:  {
      __typename: "ModelAIModelConnection",
      items:  Array< {
        __typename: "AIModel",
        id: string,
        name: string,
        source: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userModelsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    models?:  {
      __typename: "ModelAIModelConnection",
      items:  Array< {
        __typename: "AIModel",
        id: string,
        name: string,
        source: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userModelsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    models?:  {
      __typename: "ModelAIModelConnection",
      items:  Array< {
        __typename: "AIModel",
        id: string,
        name: string,
        source: string,
        data: string,
        createdAt: string,
        updatedAt: string,
        userModelsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAIModelSubscription = {
  onCreateAIModel?:  {
    __typename: "AIModel",
    id: string,
    name: string,
    source: string,
    data: string,
    layers?:  {
      __typename: "ModelLayerConnection",
      items:  Array< {
        __typename: "Layer",
        id: string,
        name?: string | null,
        type: LayerType,
        defaultParams?: string | null,
        createdAt: string,
        updatedAt: string,
        aIModelLayersId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userModelsId: string,
  } | null,
};

export type OnUpdateAIModelSubscription = {
  onUpdateAIModel?:  {
    __typename: "AIModel",
    id: string,
    name: string,
    source: string,
    data: string,
    layers?:  {
      __typename: "ModelLayerConnection",
      items:  Array< {
        __typename: "Layer",
        id: string,
        name?: string | null,
        type: LayerType,
        defaultParams?: string | null,
        createdAt: string,
        updatedAt: string,
        aIModelLayersId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userModelsId: string,
  } | null,
};

export type OnDeleteAIModelSubscription = {
  onDeleteAIModel?:  {
    __typename: "AIModel",
    id: string,
    name: string,
    source: string,
    data: string,
    layers?:  {
      __typename: "ModelLayerConnection",
      items:  Array< {
        __typename: "Layer",
        id: string,
        name?: string | null,
        type: LayerType,
        defaultParams?: string | null,
        createdAt: string,
        updatedAt: string,
        aIModelLayersId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userModelsId: string,
  } | null,
};

export type OnCreateLayerSubscription = {
  onCreateLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    type: LayerType,
    defaultParams?: string | null,
    createdAt: string,
    updatedAt: string,
    aIModelLayersId: string,
  } | null,
};

export type OnUpdateLayerSubscription = {
  onUpdateLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    type: LayerType,
    defaultParams?: string | null,
    createdAt: string,
    updatedAt: string,
    aIModelLayersId: string,
  } | null,
};

export type OnDeleteLayerSubscription = {
  onDeleteLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    type: LayerType,
    defaultParams?: string | null,
    createdAt: string,
    updatedAt: string,
    aIModelLayersId: string,
  } | null,
};
