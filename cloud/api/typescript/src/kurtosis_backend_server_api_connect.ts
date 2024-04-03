// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file kurtosis_backend_server_api.proto (package kurtosis_cloud, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { CancelPaymentSubscriptionArgs, GetCloudInstanceConfigArgs, GetCloudInstanceConfigResponse, GetOrCreateApiKeyRequest, GetOrCreateApiKeyResponse, GetOrCreateInstanceRequest, GetOrCreateInstanceResponse, GetOrCreatePaymentConfigArgs, GetOrCreatePaymentConfigResponse, RefreshDefaultPaymentMethodArgs, UpdateAddressArgs } from "./kurtosis_backend_server_api_pb.js";

/**
 * @generated from service kurtosis_cloud.KurtosisCloudBackendServer
 */
export const KurtosisCloudBackendServer = {
  typeName: "kurtosis_cloud.KurtosisCloudBackendServer",
  methods: {
    /**
     * @generated from rpc kurtosis_cloud.KurtosisCloudBackendServer.IsAvailable
     */
    isAvailable: {
      name: "IsAvailable",
      I: Empty,
      O: Empty,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc kurtosis_cloud.KurtosisCloudBackendServer.GetCloudInstanceConfig
     */
    getCloudInstanceConfig: {
      name: "GetCloudInstanceConfig",
      I: GetCloudInstanceConfigArgs,
      O: GetCloudInstanceConfigResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc kurtosis_cloud.KurtosisCloudBackendServer.GetOrCreateApiKey
     */
    getOrCreateApiKey: {
      name: "GetOrCreateApiKey",
      I: GetOrCreateApiKeyRequest,
      O: GetOrCreateApiKeyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kurtosis_cloud.KurtosisCloudBackendServer.GetOrCreateInstance
     */
    getOrCreateInstance: {
      name: "GetOrCreateInstance",
      I: GetOrCreateInstanceRequest,
      O: GetOrCreateInstanceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kurtosis_cloud.KurtosisCloudBackendServer.GetOrCreatePaymentConfig
     */
    getOrCreatePaymentConfig: {
      name: "GetOrCreatePaymentConfig",
      I: GetOrCreatePaymentConfigArgs,
      O: GetOrCreatePaymentConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kurtosis_cloud.KurtosisCloudBackendServer.RefreshDefaultPaymentMethod
     */
    refreshDefaultPaymentMethod: {
      name: "RefreshDefaultPaymentMethod",
      I: RefreshDefaultPaymentMethodArgs,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kurtosis_cloud.KurtosisCloudBackendServer.CancelPaymentSubscription
     */
    cancelPaymentSubscription: {
      name: "CancelPaymentSubscription",
      I: CancelPaymentSubscriptionArgs,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kurtosis_cloud.KurtosisCloudBackendServer.UpdateAddress
     */
    updateAddress: {
      name: "UpdateAddress",
      I: UpdateAddressArgs,
      O: Empty,
      kind: MethodKind.Unary,
    },
  }
} as const;
