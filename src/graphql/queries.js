"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
exports.__esModule = true;
exports.listLayers = exports.getLayer = exports.listAIModels = exports.getAIModel = exports.listUsers = exports.getUser = void 0;
exports.getUser = "\n  query GetUser($id: ID!) {\n    getUser(id: $id) {\n      id\n      name\n      models {\n        items {\n          id\n          name\n          source\n          data\n          createdAt\n          updatedAt\n          userModelsId\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.listUsers = "\n  query ListUsers(\n    $filter: ModelUserFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        name\n        models {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n";
exports.getAIModel = "\n  query GetAIModel($id: ID!) {\n    getAIModel(id: $id) {\n      id\n      name\n      source\n      data\n      layers {\n        items {\n          id\n          name\n          type\n          defaultParams\n          createdAt\n          updatedAt\n          aIModelLayersId\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n      userModelsId\n    }\n  }\n";
exports.listAIModels = "\n  query ListAIModels(\n    $filter: ModelAIModelFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listAIModels(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        name\n        source\n        data\n        layers {\n          nextToken\n        }\n        createdAt\n        updatedAt\n        userModelsId\n      }\n      nextToken\n    }\n  }\n";
exports.getLayer = "\n  query GetLayer($id: ID!) {\n    getLayer(id: $id) {\n      id\n      name\n      type\n      defaultParams\n      createdAt\n      updatedAt\n      aIModelLayersId\n    }\n  }\n";
exports.listLayers = "\n  query ListLayers(\n    $filter: ModelLayerFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listLayers(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        name\n        type\n        defaultParams\n        createdAt\n        updatedAt\n        aIModelLayersId\n      }\n      nextToken\n    }\n  }\n";