/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabaseOpensearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables users access control for OpenSearch service. User access control rules will only be enforced if this attribute is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#access_control ManagedDatabaseOpensearch#access_control}
  */
  readonly accessControl?: boolean | cdktf.IResolvable;
  /**
  * Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs. Users are limited to perform operations on indices based on the user-specific access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#extended_access_control ManagedDatabaseOpensearch#extended_access_control}
  */
  readonly extendedAccessControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#maintenance_window_dow ManagedDatabaseOpensearch#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Maintenance window UTC time in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#maintenance_window_time ManagedDatabaseOpensearch#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}
  */
  readonly name: string;
  /**
  * Service plan to use. This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#plan ManagedDatabaseOpensearch#plan}
  */
  readonly plan: string;
  /**
  * The administrative power state of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#powered ManagedDatabaseOpensearch#powered}
  */
  readonly powered?: boolean | cdktf.IResolvable;
  /**
  * Title of a managed database instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#title ManagedDatabaseOpensearch#title}
  */
  readonly title: string;
  /**
  * Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#zone ManagedDatabaseOpensearch#zone}
  */
  readonly zone: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#network ManagedDatabaseOpensearch#network}
  */
  readonly network?: ManagedDatabaseOpensearchNetwork[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#properties ManagedDatabaseOpensearch#properties}
  */
  readonly properties?: ManagedDatabaseOpensearchProperties;
}
export interface ManagedDatabaseOpensearchComponents {
}

export function managedDatabaseOpensearchComponentsToTerraform(struct?: ManagedDatabaseOpensearchComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedDatabaseOpensearchComponentsToHclTerraform(struct?: ManagedDatabaseOpensearchComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedDatabaseOpensearchComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDatabaseOpensearchComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class ManagedDatabaseOpensearchComponentsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedDatabaseOpensearchComponentsOutputReference {
    return new ManagedDatabaseOpensearchComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseOpensearchNodeStates {
}

export function managedDatabaseOpensearchNodeStatesToTerraform(struct?: ManagedDatabaseOpensearchNodeStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedDatabaseOpensearchNodeStatesToHclTerraform(struct?: ManagedDatabaseOpensearchNodeStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedDatabaseOpensearchNodeStatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDatabaseOpensearchNodeStates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchNodeStates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ManagedDatabaseOpensearchNodeStatesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedDatabaseOpensearchNodeStatesOutputReference {
    return new ManagedDatabaseOpensearchNodeStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseOpensearchNetwork {
  /**
  * Network family. Currently only `IPv4` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#family ManagedDatabaseOpensearch#family}
  */
  readonly family: string;
  /**
  * The name of the network. Must be unique within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}
  */
  readonly name: string;
  /**
  * The type of the network. Must be private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}
  */
  readonly type: string;
  /**
  * Private network UUID. Must reside in the same zone as the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#uuid ManagedDatabaseOpensearch#uuid}
  */
  readonly uuid: string;
}

export function managedDatabaseOpensearchNetworkToTerraform(struct?: ManagedDatabaseOpensearchNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function managedDatabaseOpensearchNetworkToHclTerraform(struct?: ManagedDatabaseOpensearchNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDatabaseOpensearchNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._name = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._name = value.name;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class ManagedDatabaseOpensearchNetworkList extends cdktf.ComplexList {
  public internalValue? : ManagedDatabaseOpensearchNetwork[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedDatabaseOpensearchNetworkOutputReference {
    return new ManagedDatabaseOpensearchNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting {
  /**
  * The number of login attempts allowed before login is blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#allowed_tries ManagedDatabaseOpensearch#allowed_tries}
  */
  readonly allowedTries?: number;
  /**
  * The internal backend. Enter `internal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#authentication_backend ManagedDatabaseOpensearch#authentication_backend}
  */
  readonly authenticationBackend?: string;
  /**
  * The duration of time that login remains blocked after a failed login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#block_expiry_seconds ManagedDatabaseOpensearch#block_expiry_seconds}
  */
  readonly blockExpirySeconds?: number;
  /**
  * The maximum number of blocked IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#max_blocked_clients ManagedDatabaseOpensearch#max_blocked_clients}
  */
  readonly maxBlockedClients?: number;
  /**
  * The maximum number of tracked IP addresses that have failed login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#max_tracked_clients ManagedDatabaseOpensearch#max_tracked_clients}
  */
  readonly maxTrackedClients?: number;
  /**
  * The window of time in which the value for `allowed_tries` is enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#time_window_seconds ManagedDatabaseOpensearch#time_window_seconds}
  */
  readonly timeWindowSeconds?: number;
  /**
  * The type of rate limiting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}
  */
  readonly type?: string;
}

export function managedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingToTerraform(struct?: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference | ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_tries: cdktf.numberToTerraform(struct!.allowedTries),
    authentication_backend: cdktf.stringToTerraform(struct!.authenticationBackend),
    block_expiry_seconds: cdktf.numberToTerraform(struct!.blockExpirySeconds),
    max_blocked_clients: cdktf.numberToTerraform(struct!.maxBlockedClients),
    max_tracked_clients: cdktf.numberToTerraform(struct!.maxTrackedClients),
    time_window_seconds: cdktf.numberToTerraform(struct!.timeWindowSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function managedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference | ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_tries: {
      value: cdktf.numberToHclTerraform(struct!.allowedTries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_backend: {
      value: cdktf.stringToHclTerraform(struct!.authenticationBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_expiry_seconds: {
      value: cdktf.numberToHclTerraform(struct!.blockExpirySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_blocked_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxBlockedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_tracked_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxTrackedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedTries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTries = this._allowedTries;
    }
    if (this._authenticationBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationBackend = this._authenticationBackend;
    }
    if (this._blockExpirySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockExpirySeconds = this._blockExpirySeconds;
    }
    if (this._maxBlockedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBlockedClients = this._maxBlockedClients;
    }
    if (this._maxTrackedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTrackedClients = this._maxTrackedClients;
    }
    if (this._timeWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowSeconds = this._timeWindowSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedTries = undefined;
      this._authenticationBackend = undefined;
      this._blockExpirySeconds = undefined;
      this._maxBlockedClients = undefined;
      this._maxTrackedClients = undefined;
      this._timeWindowSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedTries = value.allowedTries;
      this._authenticationBackend = value.authenticationBackend;
      this._blockExpirySeconds = value.blockExpirySeconds;
      this._maxBlockedClients = value.maxBlockedClients;
      this._maxTrackedClients = value.maxTrackedClients;
      this._timeWindowSeconds = value.timeWindowSeconds;
      this._type = value.type;
    }
  }

  // allowed_tries - computed: true, optional: true, required: false
  private _allowedTries?: number; 
  public get allowedTries() {
    return this.getNumberAttribute('allowed_tries');
  }
  public set allowedTries(value: number) {
    this._allowedTries = value;
  }
  public resetAllowedTries() {
    this._allowedTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTriesInput() {
    return this._allowedTries;
  }

  // authentication_backend - computed: true, optional: true, required: false
  private _authenticationBackend?: string; 
  public get authenticationBackend() {
    return this.getStringAttribute('authentication_backend');
  }
  public set authenticationBackend(value: string) {
    this._authenticationBackend = value;
  }
  public resetAuthenticationBackend() {
    this._authenticationBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBackendInput() {
    return this._authenticationBackend;
  }

  // block_expiry_seconds - computed: true, optional: true, required: false
  private _blockExpirySeconds?: number; 
  public get blockExpirySeconds() {
    return this.getNumberAttribute('block_expiry_seconds');
  }
  public set blockExpirySeconds(value: number) {
    this._blockExpirySeconds = value;
  }
  public resetBlockExpirySeconds() {
    this._blockExpirySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExpirySecondsInput() {
    return this._blockExpirySeconds;
  }

  // max_blocked_clients - computed: true, optional: true, required: false
  private _maxBlockedClients?: number; 
  public get maxBlockedClients() {
    return this.getNumberAttribute('max_blocked_clients');
  }
  public set maxBlockedClients(value: number) {
    this._maxBlockedClients = value;
  }
  public resetMaxBlockedClients() {
    this._maxBlockedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockedClientsInput() {
    return this._maxBlockedClients;
  }

  // max_tracked_clients - computed: true, optional: true, required: false
  private _maxTrackedClients?: number; 
  public get maxTrackedClients() {
    return this.getNumberAttribute('max_tracked_clients');
  }
  public set maxTrackedClients(value: number) {
    this._maxTrackedClients = value;
  }
  public resetMaxTrackedClients() {
    this._maxTrackedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrackedClientsInput() {
    return this._maxTrackedClients;
  }

  // time_window_seconds - computed: true, optional: true, required: false
  private _timeWindowSeconds?: number; 
  public get timeWindowSeconds() {
    return this.getNumberAttribute('time_window_seconds');
  }
  public set timeWindowSeconds(value: number) {
    this._timeWindowSeconds = value;
  }
  public resetTimeWindowSeconds() {
    this._timeWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowSecondsInput() {
    return this._timeWindowSeconds;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting {
  /**
  * The number of login attempts allowed before login is blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#allowed_tries ManagedDatabaseOpensearch#allowed_tries}
  */
  readonly allowedTries?: number;
  /**
  * The duration of time that login remains blocked after a failed login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#block_expiry_seconds ManagedDatabaseOpensearch#block_expiry_seconds}
  */
  readonly blockExpirySeconds?: number;
  /**
  * The maximum number of blocked IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#max_blocked_clients ManagedDatabaseOpensearch#max_blocked_clients}
  */
  readonly maxBlockedClients?: number;
  /**
  * The maximum number of tracked IP addresses that have failed login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#max_tracked_clients ManagedDatabaseOpensearch#max_tracked_clients}
  */
  readonly maxTrackedClients?: number;
  /**
  * The window of time in which the value for `allowed_tries` is enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#time_window_seconds ManagedDatabaseOpensearch#time_window_seconds}
  */
  readonly timeWindowSeconds?: number;
  /**
  * The type of rate limiting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}
  */
  readonly type?: string;
}

export function managedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingToTerraform(struct?: ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference | ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_tries: cdktf.numberToTerraform(struct!.allowedTries),
    block_expiry_seconds: cdktf.numberToTerraform(struct!.blockExpirySeconds),
    max_blocked_clients: cdktf.numberToTerraform(struct!.maxBlockedClients),
    max_tracked_clients: cdktf.numberToTerraform(struct!.maxTrackedClients),
    time_window_seconds: cdktf.numberToTerraform(struct!.timeWindowSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function managedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference | ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_tries: {
      value: cdktf.numberToHclTerraform(struct!.allowedTries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_expiry_seconds: {
      value: cdktf.numberToHclTerraform(struct!.blockExpirySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_blocked_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxBlockedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_tracked_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxTrackedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedTries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTries = this._allowedTries;
    }
    if (this._blockExpirySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockExpirySeconds = this._blockExpirySeconds;
    }
    if (this._maxBlockedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBlockedClients = this._maxBlockedClients;
    }
    if (this._maxTrackedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTrackedClients = this._maxTrackedClients;
    }
    if (this._timeWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowSeconds = this._timeWindowSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedTries = undefined;
      this._blockExpirySeconds = undefined;
      this._maxBlockedClients = undefined;
      this._maxTrackedClients = undefined;
      this._timeWindowSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedTries = value.allowedTries;
      this._blockExpirySeconds = value.blockExpirySeconds;
      this._maxBlockedClients = value.maxBlockedClients;
      this._maxTrackedClients = value.maxTrackedClients;
      this._timeWindowSeconds = value.timeWindowSeconds;
      this._type = value.type;
    }
  }

  // allowed_tries - computed: true, optional: true, required: false
  private _allowedTries?: number; 
  public get allowedTries() {
    return this.getNumberAttribute('allowed_tries');
  }
  public set allowedTries(value: number) {
    this._allowedTries = value;
  }
  public resetAllowedTries() {
    this._allowedTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTriesInput() {
    return this._allowedTries;
  }

  // block_expiry_seconds - computed: true, optional: true, required: false
  private _blockExpirySeconds?: number; 
  public get blockExpirySeconds() {
    return this.getNumberAttribute('block_expiry_seconds');
  }
  public set blockExpirySeconds(value: number) {
    this._blockExpirySeconds = value;
  }
  public resetBlockExpirySeconds() {
    this._blockExpirySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExpirySecondsInput() {
    return this._blockExpirySeconds;
  }

  // max_blocked_clients - computed: true, optional: true, required: false
  private _maxBlockedClients?: number; 
  public get maxBlockedClients() {
    return this.getNumberAttribute('max_blocked_clients');
  }
  public set maxBlockedClients(value: number) {
    this._maxBlockedClients = value;
  }
  public resetMaxBlockedClients() {
    this._maxBlockedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockedClientsInput() {
    return this._maxBlockedClients;
  }

  // max_tracked_clients - computed: true, optional: true, required: false
  private _maxTrackedClients?: number; 
  public get maxTrackedClients() {
    return this.getNumberAttribute('max_tracked_clients');
  }
  public set maxTrackedClients(value: number) {
    this._maxTrackedClients = value;
  }
  public resetMaxTrackedClients() {
    this._maxTrackedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrackedClientsInput() {
    return this._maxTrackedClients;
  }

  // time_window_seconds - computed: true, optional: true, required: false
  private _timeWindowSeconds?: number; 
  public get timeWindowSeconds() {
    return this.getNumberAttribute('time_window_seconds');
  }
  public set timeWindowSeconds(value: number) {
    this._timeWindowSeconds = value;
  }
  public resetTimeWindowSeconds() {
    this._timeWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowSecondsInput() {
    return this._timeWindowSeconds;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ManagedDatabaseOpensearchPropertiesAuthFailureListeners {
  /**
  * internal_authentication_backend_limiting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#internal_authentication_backend_limiting ManagedDatabaseOpensearch#internal_authentication_backend_limiting}
  */
  readonly internalAuthenticationBackendLimiting?: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting;
  /**
  * ip_rate_limiting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#ip_rate_limiting ManagedDatabaseOpensearch#ip_rate_limiting}
  */
  readonly ipRateLimiting?: ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting;
}

export function managedDatabaseOpensearchPropertiesAuthFailureListenersToTerraform(struct?: ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference | ManagedDatabaseOpensearchPropertiesAuthFailureListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_authentication_backend_limiting: managedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingToTerraform(struct!.internalAuthenticationBackendLimiting),
    ip_rate_limiting: managedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingToTerraform(struct!.ipRateLimiting),
  }
}


export function managedDatabaseOpensearchPropertiesAuthFailureListenersToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference | ManagedDatabaseOpensearchPropertiesAuthFailureListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_authentication_backend_limiting: {
      value: managedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingToHclTerraform(struct!.internalAuthenticationBackendLimiting),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingList",
    },
    ip_rate_limiting: {
      value: managedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingToHclTerraform(struct!.ipRateLimiting),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesAuthFailureListeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalAuthenticationBackendLimiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAuthenticationBackendLimiting = this._internalAuthenticationBackendLimiting?.internalValue;
    }
    if (this._ipRateLimiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRateLimiting = this._ipRateLimiting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesAuthFailureListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalAuthenticationBackendLimiting.internalValue = undefined;
      this._ipRateLimiting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalAuthenticationBackendLimiting.internalValue = value.internalAuthenticationBackendLimiting;
      this._ipRateLimiting.internalValue = value.ipRateLimiting;
    }
  }

  // internal_authentication_backend_limiting - computed: false, optional: true, required: false
  private _internalAuthenticationBackendLimiting = new ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference(this, "internal_authentication_backend_limiting");
  public get internalAuthenticationBackendLimiting() {
    return this._internalAuthenticationBackendLimiting;
  }
  public putInternalAuthenticationBackendLimiting(value: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting) {
    this._internalAuthenticationBackendLimiting.internalValue = value;
  }
  public resetInternalAuthenticationBackendLimiting() {
    this._internalAuthenticationBackendLimiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAuthenticationBackendLimitingInput() {
    return this._internalAuthenticationBackendLimiting.internalValue;
  }

  // ip_rate_limiting - computed: false, optional: true, required: false
  private _ipRateLimiting = new ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference(this, "ip_rate_limiting");
  public get ipRateLimiting() {
    return this._ipRateLimiting;
  }
  public putIpRateLimiting(value: ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting) {
    this._ipRateLimiting.internalValue = value;
  }
  public resetIpRateLimiting() {
    this._ipRateLimiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRateLimitingInput() {
    return this._ipRateLimiting.internalValue;
  }
}
export interface ManagedDatabaseOpensearchPropertiesIndexTemplate {
  /**
  * index.mapping.nested_objects.limit. The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#mapping_nested_objects_limit ManagedDatabaseOpensearch#mapping_nested_objects_limit}
  */
  readonly mappingNestedObjectsLimit?: number;
  /**
  * The number of replicas each primary shard has.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#number_of_replicas ManagedDatabaseOpensearch#number_of_replicas}
  */
  readonly numberOfReplicas?: number;
  /**
  * The number of primary shards that an index should have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#number_of_shards ManagedDatabaseOpensearch#number_of_shards}
  */
  readonly numberOfShards?: number;
}

export function managedDatabaseOpensearchPropertiesIndexTemplateToTerraform(struct?: ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference | ManagedDatabaseOpensearchPropertiesIndexTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_nested_objects_limit: cdktf.numberToTerraform(struct!.mappingNestedObjectsLimit),
    number_of_replicas: cdktf.numberToTerraform(struct!.numberOfReplicas),
    number_of_shards: cdktf.numberToTerraform(struct!.numberOfShards),
  }
}


export function managedDatabaseOpensearchPropertiesIndexTemplateToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference | ManagedDatabaseOpensearchPropertiesIndexTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapping_nested_objects_limit: {
      value: cdktf.numberToHclTerraform(struct!.mappingNestedObjectsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_replicas: {
      value: cdktf.numberToHclTerraform(struct!.numberOfReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_shards: {
      value: cdktf.numberToHclTerraform(struct!.numberOfShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesIndexTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingNestedObjectsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingNestedObjectsLimit = this._mappingNestedObjectsLimit;
    }
    if (this._numberOfReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfReplicas = this._numberOfReplicas;
    }
    if (this._numberOfShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfShards = this._numberOfShards;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesIndexTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mappingNestedObjectsLimit = undefined;
      this._numberOfReplicas = undefined;
      this._numberOfShards = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mappingNestedObjectsLimit = value.mappingNestedObjectsLimit;
      this._numberOfReplicas = value.numberOfReplicas;
      this._numberOfShards = value.numberOfShards;
    }
  }

  // mapping_nested_objects_limit - computed: true, optional: true, required: false
  private _mappingNestedObjectsLimit?: number; 
  public get mappingNestedObjectsLimit() {
    return this.getNumberAttribute('mapping_nested_objects_limit');
  }
  public set mappingNestedObjectsLimit(value: number) {
    this._mappingNestedObjectsLimit = value;
  }
  public resetMappingNestedObjectsLimit() {
    this._mappingNestedObjectsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingNestedObjectsLimitInput() {
    return this._mappingNestedObjectsLimit;
  }

  // number_of_replicas - computed: true, optional: true, required: false
  private _numberOfReplicas?: number; 
  public get numberOfReplicas() {
    return this.getNumberAttribute('number_of_replicas');
  }
  public set numberOfReplicas(value: number) {
    this._numberOfReplicas = value;
  }
  public resetNumberOfReplicas() {
    this._numberOfReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfReplicasInput() {
    return this._numberOfReplicas;
  }

  // number_of_shards - computed: true, optional: true, required: false
  private _numberOfShards?: number; 
  public get numberOfShards() {
    return this.getNumberAttribute('number_of_shards');
  }
  public set numberOfShards(value: number) {
    this._numberOfShards = value;
  }
  public resetNumberOfShards() {
    this._numberOfShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfShardsInput() {
    return this._numberOfShards;
  }
}
export interface ManagedDatabaseOpensearchPropertiesOpenid {
  /**
  * The ID of the OpenID Connect client. The ID of the OpenID Connect client configured in your IdP. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#client_id ManagedDatabaseOpensearch#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret of the OpenID Connect. The client secret of the OpenID Connect client configured in your IdP. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#client_secret ManagedDatabaseOpensearch#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OpenID Connect metadata/configuration URL. The URL of your IdP where the Security plugin can find the OpenID Connect metadata/configuration settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#connect_url ManagedDatabaseOpensearch#connect_url}
  */
  readonly connectUrl?: string;
  /**
  * Enable or disable OpenSearch OpenID Connect authentication. Enables or disables OpenID Connect authentication for OpenSearch. When enabled, users can authenticate using OpenID Connect with an Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * HTTP header name of the JWT token. HTTP header name of the JWT token. Optional. Default is Authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#header ManagedDatabaseOpensearch#header}
  */
  readonly header?: string;
  /**
  * The HTTP header that stores the token. The HTTP header that stores the token. Typically the Authorization header with the Bearer schema: Authorization: Bearer <token>. Optional. Default is Authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#jwt_header ManagedDatabaseOpensearch#jwt_header}
  */
  readonly jwtHeader?: string;
  /**
  * URL JWT token. If the token is not transmitted in the HTTP header, but as an URL parameter, define the name of the parameter here. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#jwt_url_parameter ManagedDatabaseOpensearch#jwt_url_parameter}
  */
  readonly jwtUrlParameter?: string;
  /**
  * The maximum number of unknown key IDs in the time frame. The maximum number of unknown key IDs in the time frame. Default is 10. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#refresh_rate_limit_count ManagedDatabaseOpensearch#refresh_rate_limit_count}
  */
  readonly refreshRateLimitCount?: number;
  /**
  * The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. Optional.Default is 10000 (10 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#refresh_rate_limit_time_window_ms ManagedDatabaseOpensearch#refresh_rate_limit_time_window_ms}
  */
  readonly refreshRateLimitTimeWindowMs?: number;
  /**
  * The key in the JSON payload that stores the user’s roles. The key in the JSON payload that stores the user’s roles. The value of this key must be a comma-separated list of roles. Required only if you want to use roles in the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#roles_key ManagedDatabaseOpensearch#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * The scope of the identity token issued by the IdP. The scope of the identity token issued by the IdP. Optional. Default is openid profile email address phone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#scope ManagedDatabaseOpensearch#scope}
  */
  readonly scope?: string;
  /**
  * The key in the JSON payload that stores the user’s name. The key in the JSON payload that stores the user’s name. If not defined, the subject registered claim is used. Most IdP providers use the preferred_username claim. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#subject_key ManagedDatabaseOpensearch#subject_key}
  */
  readonly subjectKey?: string;
}

export function managedDatabaseOpensearchPropertiesOpenidToTerraform(struct?: ManagedDatabaseOpensearchPropertiesOpenidOutputReference | ManagedDatabaseOpensearchPropertiesOpenid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connect_url: cdktf.stringToTerraform(struct!.connectUrl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    header: cdktf.stringToTerraform(struct!.header),
    jwt_header: cdktf.stringToTerraform(struct!.jwtHeader),
    jwt_url_parameter: cdktf.stringToTerraform(struct!.jwtUrlParameter),
    refresh_rate_limit_count: cdktf.numberToTerraform(struct!.refreshRateLimitCount),
    refresh_rate_limit_time_window_ms: cdktf.numberToTerraform(struct!.refreshRateLimitTimeWindowMs),
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    scope: cdktf.stringToTerraform(struct!.scope),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
  }
}


export function managedDatabaseOpensearchPropertiesOpenidToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesOpenidOutputReference | ManagedDatabaseOpensearchPropertiesOpenid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_url: {
      value: cdktf.stringToHclTerraform(struct!.connectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_header: {
      value: cdktf.stringToHclTerraform(struct!.jwtHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_url_parameter: {
      value: cdktf.stringToHclTerraform(struct!.jwtUrlParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_rate_limit_count: {
      value: cdktf.numberToHclTerraform(struct!.refreshRateLimitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_rate_limit_time_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.refreshRateLimitTimeWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    roles_key: {
      value: cdktf.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_key: {
      value: cdktf.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesOpenidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesOpenid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._connectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectUrl = this._connectUrl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._jwtHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtHeader = this._jwtHeader;
    }
    if (this._jwtUrlParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtUrlParameter = this._jwtUrlParameter;
    }
    if (this._refreshRateLimitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRateLimitCount = this._refreshRateLimitCount;
    }
    if (this._refreshRateLimitTimeWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRateLimitTimeWindowMs = this._refreshRateLimitTimeWindowMs;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesOpenid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._connectUrl = undefined;
      this._enabled = undefined;
      this._header = undefined;
      this._jwtHeader = undefined;
      this._jwtUrlParameter = undefined;
      this._refreshRateLimitCount = undefined;
      this._refreshRateLimitTimeWindowMs = undefined;
      this._rolesKey = undefined;
      this._scope = undefined;
      this._subjectKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._connectUrl = value.connectUrl;
      this._enabled = value.enabled;
      this._header = value.header;
      this._jwtHeader = value.jwtHeader;
      this._jwtUrlParameter = value.jwtUrlParameter;
      this._refreshRateLimitCount = value.refreshRateLimitCount;
      this._refreshRateLimitTimeWindowMs = value.refreshRateLimitTimeWindowMs;
      this._rolesKey = value.rolesKey;
      this._scope = value.scope;
      this._subjectKey = value.subjectKey;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // connect_url - computed: true, optional: true, required: false
  private _connectUrl?: string; 
  public get connectUrl() {
    return this.getStringAttribute('connect_url');
  }
  public set connectUrl(value: string) {
    this._connectUrl = value;
  }
  public resetConnectUrl() {
    this._connectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectUrlInput() {
    return this._connectUrl;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // jwt_header - computed: true, optional: true, required: false
  private _jwtHeader?: string; 
  public get jwtHeader() {
    return this.getStringAttribute('jwt_header');
  }
  public set jwtHeader(value: string) {
    this._jwtHeader = value;
  }
  public resetJwtHeader() {
    this._jwtHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtHeaderInput() {
    return this._jwtHeader;
  }

  // jwt_url_parameter - computed: true, optional: true, required: false
  private _jwtUrlParameter?: string; 
  public get jwtUrlParameter() {
    return this.getStringAttribute('jwt_url_parameter');
  }
  public set jwtUrlParameter(value: string) {
    this._jwtUrlParameter = value;
  }
  public resetJwtUrlParameter() {
    this._jwtUrlParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtUrlParameterInput() {
    return this._jwtUrlParameter;
  }

  // refresh_rate_limit_count - computed: true, optional: true, required: false
  private _refreshRateLimitCount?: number; 
  public get refreshRateLimitCount() {
    return this.getNumberAttribute('refresh_rate_limit_count');
  }
  public set refreshRateLimitCount(value: number) {
    this._refreshRateLimitCount = value;
  }
  public resetRefreshRateLimitCount() {
    this._refreshRateLimitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateLimitCountInput() {
    return this._refreshRateLimitCount;
  }

  // refresh_rate_limit_time_window_ms - computed: true, optional: true, required: false
  private _refreshRateLimitTimeWindowMs?: number; 
  public get refreshRateLimitTimeWindowMs() {
    return this.getNumberAttribute('refresh_rate_limit_time_window_ms');
  }
  public set refreshRateLimitTimeWindowMs(value: number) {
    this._refreshRateLimitTimeWindowMs = value;
  }
  public resetRefreshRateLimitTimeWindowMs() {
    this._refreshRateLimitTimeWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateLimitTimeWindowMsInput() {
    return this._refreshRateLimitTimeWindowMs;
  }

  // roles_key - computed: true, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // subject_key - computed: true, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface ManagedDatabaseOpensearchPropertiesOpensearchDashboards {
  /**
  * Enable or disable OpenSearch Dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use. This sets the max_old_space_size option of the nodejs running the OpenSearch Dashboards. Note: the memory reserved by OpenSearch Dashboards is not available for OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#max_old_space_size ManagedDatabaseOpensearch#max_old_space_size}
  */
  readonly maxOldSpaceSize?: number;
  /**
  * Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#opensearch_request_timeout ManagedDatabaseOpensearch#opensearch_request_timeout}
  */
  readonly opensearchRequestTimeout?: number;
}

export function managedDatabaseOpensearchPropertiesOpensearchDashboardsToTerraform(struct?: ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference | ManagedDatabaseOpensearchPropertiesOpensearchDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_old_space_size: cdktf.numberToTerraform(struct!.maxOldSpaceSize),
    opensearch_request_timeout: cdktf.numberToTerraform(struct!.opensearchRequestTimeout),
  }
}


export function managedDatabaseOpensearchPropertiesOpensearchDashboardsToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference | ManagedDatabaseOpensearchPropertiesOpensearchDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_old_space_size: {
      value: cdktf.numberToHclTerraform(struct!.maxOldSpaceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opensearch_request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.opensearchRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesOpensearchDashboards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxOldSpaceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOldSpaceSize = this._maxOldSpaceSize;
    }
    if (this._opensearchRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchRequestTimeout = this._opensearchRequestTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesOpensearchDashboards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maxOldSpaceSize = undefined;
      this._opensearchRequestTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maxOldSpaceSize = value.maxOldSpaceSize;
      this._opensearchRequestTimeout = value.opensearchRequestTimeout;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_old_space_size - computed: true, optional: true, required: false
  private _maxOldSpaceSize?: number; 
  public get maxOldSpaceSize() {
    return this.getNumberAttribute('max_old_space_size');
  }
  public set maxOldSpaceSize(value: number) {
    this._maxOldSpaceSize = value;
  }
  public resetMaxOldSpaceSize() {
    this._maxOldSpaceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOldSpaceSizeInput() {
    return this._maxOldSpaceSize;
  }

  // opensearch_request_timeout - computed: true, optional: true, required: false
  private _opensearchRequestTimeout?: number; 
  public get opensearchRequestTimeout() {
    return this.getNumberAttribute('opensearch_request_timeout');
  }
  public set opensearchRequestTimeout(value: number) {
    this._opensearchRequestTimeout = value;
  }
  public resetOpensearchRequestTimeout() {
    this._opensearchRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchRequestTimeoutInput() {
    return this._opensearchRequestTimeout;
  }
}
export interface ManagedDatabaseOpensearchPropertiesSaml {
  /**
  * Enable or disable OpenSearch SAML authentication. Enables or disables SAML-based authentication for OpenSearch. When enabled, users can authenticate using SAML with an Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Identity Provider Entity ID. The unique identifier for the Identity Provider (IdP) entity that is used for SAML authentication. This value is typically provided by the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#idp_entity_id ManagedDatabaseOpensearch#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Identity Provider (IdP) SAML metadata URL. The URL of the SAML metadata for the Identity Provider (IdP). This is used to configure SAML-based authentication with the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#idp_metadata_url ManagedDatabaseOpensearch#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * PEM-encoded root CA Content for SAML IdP server verification. This parameter specifies the PEM-encoded root certificate authority (CA) content for the SAML identity provider (IdP) server verification. The root CA content is used to verify the SSL/TLS certificate presented by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#idp_pemtrustedcas_content ManagedDatabaseOpensearch#idp_pemtrustedcas_content}
  */
  readonly idpPemtrustedcasContent?: string;
  /**
  * SAML response role attribute. Optional. Specifies the attribute in the SAML response where role information is stored, if available. Role attributes are not required for SAML authentication, but can be included in SAML assertions by most Identity Providers (IdPs) to determine user access levels or permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#roles_key ManagedDatabaseOpensearch#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Service Provider Entity ID. The unique identifier for the Service Provider (SP) entity that is used for SAML authentication. This value is typically provided by the SP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#sp_entity_id ManagedDatabaseOpensearch#sp_entity_id}
  */
  readonly spEntityId?: string;
  /**
  * SAML response subject attribute. Optional. Specifies the attribute in the SAML response where the subject identifier is stored. If not configured, the NameID attribute is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#subject_key ManagedDatabaseOpensearch#subject_key}
  */
  readonly subjectKey?: string;
}

export function managedDatabaseOpensearchPropertiesSamlToTerraform(struct?: ManagedDatabaseOpensearchPropertiesSamlOutputReference | ManagedDatabaseOpensearchPropertiesSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    idp_metadata_url: cdktf.stringToTerraform(struct!.idpMetadataUrl),
    idp_pemtrustedcas_content: cdktf.stringToTerraform(struct!.idpPemtrustedcasContent),
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
  }
}


export function managedDatabaseOpensearchPropertiesSamlToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesSamlOutputReference | ManagedDatabaseOpensearchPropertiesSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.idpEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.idpMetadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_pemtrustedcas_content: {
      value: cdktf.stringToHclTerraform(struct!.idpPemtrustedcasContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_key: {
      value: cdktf.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.spEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_key: {
      value: cdktf.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idpEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpEntityId = this._idpEntityId;
    }
    if (this._idpMetadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataUrl = this._idpMetadataUrl;
    }
    if (this._idpPemtrustedcasContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpPemtrustedcasContent = this._idpPemtrustedcasContent;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._idpEntityId = undefined;
      this._idpMetadataUrl = undefined;
      this._idpPemtrustedcasContent = undefined;
      this._rolesKey = undefined;
      this._spEntityId = undefined;
      this._subjectKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._idpEntityId = value.idpEntityId;
      this._idpMetadataUrl = value.idpMetadataUrl;
      this._idpPemtrustedcasContent = value.idpPemtrustedcasContent;
      this._rolesKey = value.rolesKey;
      this._spEntityId = value.spEntityId;
      this._subjectKey = value.subjectKey;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idp_entity_id - computed: true, optional: true, required: false
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  public resetIdpEntityId() {
    this._idpEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_metadata_url - computed: true, optional: true, required: false
  private _idpMetadataUrl?: string; 
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }
  public set idpMetadataUrl(value: string) {
    this._idpMetadataUrl = value;
  }
  public resetIdpMetadataUrl() {
    this._idpMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataUrlInput() {
    return this._idpMetadataUrl;
  }

  // idp_pemtrustedcas_content - computed: true, optional: true, required: false
  private _idpPemtrustedcasContent?: string; 
  public get idpPemtrustedcasContent() {
    return this.getStringAttribute('idp_pemtrustedcas_content');
  }
  public set idpPemtrustedcasContent(value: string) {
    this._idpPemtrustedcasContent = value;
  }
  public resetIdpPemtrustedcasContent() {
    this._idpPemtrustedcasContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpPemtrustedcasContentInput() {
    return this._idpPemtrustedcasContent;
  }

  // roles_key - computed: true, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // sp_entity_id - computed: true, optional: true, required: false
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  public resetSpEntityId() {
    this._spEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }

  // subject_key - computed: true, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface ManagedDatabaseOpensearchProperties {
  /**
  * action.auto_create_index. Explicitly allow or block automatic creation of indices. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#action_auto_create_index_enabled ManagedDatabaseOpensearch#action_auto_create_index_enabled}
  */
  readonly actionAutoCreateIndexEnabled?: boolean | cdktf.IResolvable;
  /**
  * Require explicit index names when deleting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#action_destructive_requires_name ManagedDatabaseOpensearch#action_destructive_requires_name}
  */
  readonly actionDestructiveRequiresName?: boolean | cdktf.IResolvable;
  /**
  * Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#automatic_utility_network_ip_filter ManagedDatabaseOpensearch#automatic_utility_network_ip_filter}
  */
  readonly automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable;
  /**
  * Controls the number of shards allowed in the cluster per data node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#cluster_max_shards_per_node ManagedDatabaseOpensearch#cluster_max_shards_per_node}
  */
  readonly clusterMaxShardsPerNode?: number;
  /**
  * Concurrent incoming/outgoing shard recoveries per node. How many concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen on a node. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#cluster_routing_allocation_node_concurrent_recoveries ManagedDatabaseOpensearch#cluster_routing_allocation_node_concurrent_recoveries}
  */
  readonly clusterRoutingAllocationNodeConcurrentRecoveries?: number;
  /**
  * Custom domain. Serve the web frontend using a custom CNAME pointing to the Aiven DNS name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#custom_domain ManagedDatabaseOpensearch#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Sender name placeholder to be used in Opensearch Dashboards and Opensearch keystore. This should be identical to the Sender name defined in Opensearch dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#email_sender_name ManagedDatabaseOpensearch#email_sender_name}
  */
  readonly emailSenderName?: string;
  /**
  * Sender password for Opensearch alerts to authenticate with SMTP server. Sender password for Opensearch alerts to authenticate with SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#email_sender_password ManagedDatabaseOpensearch#email_sender_password}
  */
  readonly emailSenderPassword?: string;
  /**
  * Sender username for Opensearch alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#email_sender_username ManagedDatabaseOpensearch#email_sender_username}
  */
  readonly emailSenderUsername?: string;
  /**
  * Enable/Disable security audit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#enable_security_audit ManagedDatabaseOpensearch#enable_security_audit}
  */
  readonly enableSecurityAudit?: boolean | cdktf.IResolvable;
  /**
  * Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#http_max_content_length ManagedDatabaseOpensearch#http_max_content_length}
  */
  readonly httpMaxContentLength?: number;
  /**
  * The max size of allowed headers, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#http_max_header_size ManagedDatabaseOpensearch#http_max_header_size}
  */
  readonly httpMaxHeaderSize?: number;
  /**
  * The max length of an HTTP URL, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#http_max_initial_line_length ManagedDatabaseOpensearch#http_max_initial_line_length}
  */
  readonly httpMaxInitialLineLength?: number;
  /**
  * Index patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#index_patterns ManagedDatabaseOpensearch#index_patterns}
  */
  readonly indexPatterns?: string[];
  /**
  * Relative amount. Maximum amount of heap memory used for field data cache. This is an expert setting; decreasing the value too much will increase overhead of loading field data; too much memory used for field data cache will decrease amount of heap available for other operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#indices_fielddata_cache_size ManagedDatabaseOpensearch#indices_fielddata_cache_size}
  */
  readonly indicesFielddataCacheSize?: number;
  /**
  * Percentage value. Default is 10%. Total amount of heap used for indexing buffer, before writing segments to disk. This is an expert setting. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#indices_memory_index_buffer_size ManagedDatabaseOpensearch#indices_memory_index_buffer_size}
  */
  readonly indicesMemoryIndexBufferSize?: number;
  /**
  * Absolute value. Default is unbound. Doesn't work without indices.memory.index_buffer_size. Maximum amount of heap used for query cache, an absolute indices.memory.index_buffer_size maximum hard limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#indices_memory_max_index_buffer_size ManagedDatabaseOpensearch#indices_memory_max_index_buffer_size}
  */
  readonly indicesMemoryMaxIndexBufferSize?: number;
  /**
  * Absolute value. Default is 48mb. Doesn't work without indices.memory.index_buffer_size. Minimum amount of heap used for query cache, an absolute indices.memory.index_buffer_size minimal hard limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#indices_memory_min_index_buffer_size ManagedDatabaseOpensearch#indices_memory_min_index_buffer_size}
  */
  readonly indicesMemoryMinIndexBufferSize?: number;
  /**
  * Percentage value. Default is 10%. Maximum amount of heap used for query cache. This is an expert setting. Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other OpenSearch functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#indices_queries_cache_size ManagedDatabaseOpensearch#indices_queries_cache_size}
  */
  readonly indicesQueriesCacheSize?: number;
  /**
  * Maximum number of clauses Lucene BooleanQuery can have. The default value (1024) is relatively high, and increasing it may cause performance issues. Investigate other approaches first before increasing this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#indices_query_bool_max_clause_count ManagedDatabaseOpensearch#indices_query_bool_max_clause_count}
  */
  readonly indicesQueryBoolMaxClauseCount?: number;
  /**
  * Limits total inbound and outbound recovery traffic for each node. Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). Defaults to 40mb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#indices_recovery_max_bytes_per_sec ManagedDatabaseOpensearch#indices_recovery_max_bytes_per_sec}
  */
  readonly indicesRecoveryMaxBytesPerSec?: number;
  /**
  * Number of file chunks sent in parallel for each recovery. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#indices_recovery_max_concurrent_file_chunks ManagedDatabaseOpensearch#indices_recovery_max_concurrent_file_chunks}
  */
  readonly indicesRecoveryMaxConcurrentFileChunks?: number;
  /**
  * IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#ip_filter ManagedDatabaseOpensearch#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Specifies whether ISM is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#ism_enabled ManagedDatabaseOpensearch#ism_enabled}
  */
  readonly ismEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#ism_history_enabled ManagedDatabaseOpensearch#ism_history_enabled}
  */
  readonly ismHistoryEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum age before rolling over the audit history index in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#ism_history_max_age ManagedDatabaseOpensearch#ism_history_max_age}
  */
  readonly ismHistoryMaxAge?: number;
  /**
  * The maximum number of documents before rolling over the audit history index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#ism_history_max_docs ManagedDatabaseOpensearch#ism_history_max_docs}
  */
  readonly ismHistoryMaxDocs?: number;
  /**
  * The time between rollover checks for the audit history index in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#ism_history_rollover_check_period ManagedDatabaseOpensearch#ism_history_rollover_check_period}
  */
  readonly ismHistoryRolloverCheckPeriod?: number;
  /**
  * How long audit history indices are kept in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#ism_history_rollover_retention_period ManagedDatabaseOpensearch#ism_history_rollover_retention_period}
  */
  readonly ismHistoryRolloverRetentionPeriod?: number;
  /**
  * Don't reset index.refresh_interval to the default value. Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#keep_index_refresh_interval ManagedDatabaseOpensearch#keep_index_refresh_interval}
  */
  readonly keepIndexRefreshInterval?: boolean | cdktf.IResolvable;
  /**
  * Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#override_main_response_version ManagedDatabaseOpensearch#override_main_response_version}
  */
  readonly overrideMainResponseVersion?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable filtering of alerting by backend roles. Requires Security plugin. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#plugins_alerting_filter_by_backend_roles ManagedDatabaseOpensearch#plugins_alerting_filter_by_backend_roles}
  */
  readonly pluginsAlertingFilterByBackendRoles?: boolean | cdktf.IResolvable;
  /**
  * Public Access. Allow access to the service from the public Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#public_access ManagedDatabaseOpensearch#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
  /**
  * Whitelisted addresses for reindexing. Changing this value will cause all OpenSearch instances to restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#reindex_remote_whitelist ManagedDatabaseOpensearch#reindex_remote_whitelist}
  */
  readonly reindexRemoteWhitelist?: string[];
  /**
  * Script max compilation rate - circuit breaker to prevent/minimize OOMs. Script compilation circuit breaker limits the number of inline script compilations within a period of time. Default is use-context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#script_max_compilations_rate ManagedDatabaseOpensearch#script_max_compilations_rate}
  */
  readonly scriptMaxCompilationsRate?: string;
  /**
  * Maximum number of aggregation buckets allowed in a single response. OpenSearch default value is used when this is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#search_max_buckets ManagedDatabaseOpensearch#search_max_buckets}
  */
  readonly searchMaxBuckets?: number;
  /**
  * Service logging. Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#service_log ManagedDatabaseOpensearch#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * analyze thread pool queue size. Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_analyze_queue_size ManagedDatabaseOpensearch#thread_pool_analyze_queue_size}
  */
  readonly threadPoolAnalyzeQueueSize?: number;
  /**
  * analyze thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_analyze_size ManagedDatabaseOpensearch#thread_pool_analyze_size}
  */
  readonly threadPoolAnalyzeSize?: number;
  /**
  * force_merge thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_force_merge_size ManagedDatabaseOpensearch#thread_pool_force_merge_size}
  */
  readonly threadPoolForceMergeSize?: number;
  /**
  * get thread pool queue size. Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_get_queue_size ManagedDatabaseOpensearch#thread_pool_get_queue_size}
  */
  readonly threadPoolGetQueueSize?: number;
  /**
  * get thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_get_size ManagedDatabaseOpensearch#thread_pool_get_size}
  */
  readonly threadPoolGetSize?: number;
  /**
  * search thread pool queue size. Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_search_queue_size ManagedDatabaseOpensearch#thread_pool_search_queue_size}
  */
  readonly threadPoolSearchQueueSize?: number;
  /**
  * search thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_search_size ManagedDatabaseOpensearch#thread_pool_search_size}
  */
  readonly threadPoolSearchSize?: number;
  /**
  * search_throttled thread pool queue size. Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_search_throttled_queue_size ManagedDatabaseOpensearch#thread_pool_search_throttled_queue_size}
  */
  readonly threadPoolSearchThrottledQueueSize?: number;
  /**
  * search_throttled thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_search_throttled_size ManagedDatabaseOpensearch#thread_pool_search_throttled_size}
  */
  readonly threadPoolSearchThrottledSize?: number;
  /**
  * write thread pool queue size. Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_write_queue_size ManagedDatabaseOpensearch#thread_pool_write_queue_size}
  */
  readonly threadPoolWriteQueueSize?: number;
  /**
  * write thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#thread_pool_write_size ManagedDatabaseOpensearch#thread_pool_write_size}
  */
  readonly threadPoolWriteSize?: number;
  /**
  * OpenSearch major version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#version ManagedDatabaseOpensearch#version}
  */
  readonly version?: string;
  /**
  * auth_failure_listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#auth_failure_listeners ManagedDatabaseOpensearch#auth_failure_listeners}
  */
  readonly authFailureListeners?: ManagedDatabaseOpensearchPropertiesAuthFailureListeners;
  /**
  * index_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#index_template ManagedDatabaseOpensearch#index_template}
  */
  readonly indexTemplate?: ManagedDatabaseOpensearchPropertiesIndexTemplate;
  /**
  * openid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#openid ManagedDatabaseOpensearch#openid}
  */
  readonly openid?: ManagedDatabaseOpensearchPropertiesOpenid;
  /**
  * opensearch_dashboards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#opensearch_dashboards ManagedDatabaseOpensearch#opensearch_dashboards}
  */
  readonly opensearchDashboards?: ManagedDatabaseOpensearchPropertiesOpensearchDashboards;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#saml ManagedDatabaseOpensearch#saml}
  */
  readonly saml?: ManagedDatabaseOpensearchPropertiesSaml;
}

export function managedDatabaseOpensearchPropertiesToTerraform(struct?: ManagedDatabaseOpensearchPropertiesOutputReference | ManagedDatabaseOpensearchProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_auto_create_index_enabled: cdktf.booleanToTerraform(struct!.actionAutoCreateIndexEnabled),
    action_destructive_requires_name: cdktf.booleanToTerraform(struct!.actionDestructiveRequiresName),
    automatic_utility_network_ip_filter: cdktf.booleanToTerraform(struct!.automaticUtilityNetworkIpFilter),
    cluster_max_shards_per_node: cdktf.numberToTerraform(struct!.clusterMaxShardsPerNode),
    cluster_routing_allocation_node_concurrent_recoveries: cdktf.numberToTerraform(struct!.clusterRoutingAllocationNodeConcurrentRecoveries),
    custom_domain: cdktf.stringToTerraform(struct!.customDomain),
    email_sender_name: cdktf.stringToTerraform(struct!.emailSenderName),
    email_sender_password: cdktf.stringToTerraform(struct!.emailSenderPassword),
    email_sender_username: cdktf.stringToTerraform(struct!.emailSenderUsername),
    enable_security_audit: cdktf.booleanToTerraform(struct!.enableSecurityAudit),
    http_max_content_length: cdktf.numberToTerraform(struct!.httpMaxContentLength),
    http_max_header_size: cdktf.numberToTerraform(struct!.httpMaxHeaderSize),
    http_max_initial_line_length: cdktf.numberToTerraform(struct!.httpMaxInitialLineLength),
    index_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.indexPatterns),
    indices_fielddata_cache_size: cdktf.numberToTerraform(struct!.indicesFielddataCacheSize),
    indices_memory_index_buffer_size: cdktf.numberToTerraform(struct!.indicesMemoryIndexBufferSize),
    indices_memory_max_index_buffer_size: cdktf.numberToTerraform(struct!.indicesMemoryMaxIndexBufferSize),
    indices_memory_min_index_buffer_size: cdktf.numberToTerraform(struct!.indicesMemoryMinIndexBufferSize),
    indices_queries_cache_size: cdktf.numberToTerraform(struct!.indicesQueriesCacheSize),
    indices_query_bool_max_clause_count: cdktf.numberToTerraform(struct!.indicesQueryBoolMaxClauseCount),
    indices_recovery_max_bytes_per_sec: cdktf.numberToTerraform(struct!.indicesRecoveryMaxBytesPerSec),
    indices_recovery_max_concurrent_file_chunks: cdktf.numberToTerraform(struct!.indicesRecoveryMaxConcurrentFileChunks),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ism_enabled: cdktf.booleanToTerraform(struct!.ismEnabled),
    ism_history_enabled: cdktf.booleanToTerraform(struct!.ismHistoryEnabled),
    ism_history_max_age: cdktf.numberToTerraform(struct!.ismHistoryMaxAge),
    ism_history_max_docs: cdktf.numberToTerraform(struct!.ismHistoryMaxDocs),
    ism_history_rollover_check_period: cdktf.numberToTerraform(struct!.ismHistoryRolloverCheckPeriod),
    ism_history_rollover_retention_period: cdktf.numberToTerraform(struct!.ismHistoryRolloverRetentionPeriod),
    keep_index_refresh_interval: cdktf.booleanToTerraform(struct!.keepIndexRefreshInterval),
    override_main_response_version: cdktf.booleanToTerraform(struct!.overrideMainResponseVersion),
    plugins_alerting_filter_by_backend_roles: cdktf.booleanToTerraform(struct!.pluginsAlertingFilterByBackendRoles),
    public_access: cdktf.booleanToTerraform(struct!.publicAccess),
    reindex_remote_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reindexRemoteWhitelist),
    script_max_compilations_rate: cdktf.stringToTerraform(struct!.scriptMaxCompilationsRate),
    search_max_buckets: cdktf.numberToTerraform(struct!.searchMaxBuckets),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    thread_pool_analyze_queue_size: cdktf.numberToTerraform(struct!.threadPoolAnalyzeQueueSize),
    thread_pool_analyze_size: cdktf.numberToTerraform(struct!.threadPoolAnalyzeSize),
    thread_pool_force_merge_size: cdktf.numberToTerraform(struct!.threadPoolForceMergeSize),
    thread_pool_get_queue_size: cdktf.numberToTerraform(struct!.threadPoolGetQueueSize),
    thread_pool_get_size: cdktf.numberToTerraform(struct!.threadPoolGetSize),
    thread_pool_search_queue_size: cdktf.numberToTerraform(struct!.threadPoolSearchQueueSize),
    thread_pool_search_size: cdktf.numberToTerraform(struct!.threadPoolSearchSize),
    thread_pool_search_throttled_queue_size: cdktf.numberToTerraform(struct!.threadPoolSearchThrottledQueueSize),
    thread_pool_search_throttled_size: cdktf.numberToTerraform(struct!.threadPoolSearchThrottledSize),
    thread_pool_write_queue_size: cdktf.numberToTerraform(struct!.threadPoolWriteQueueSize),
    thread_pool_write_size: cdktf.numberToTerraform(struct!.threadPoolWriteSize),
    version: cdktf.stringToTerraform(struct!.version),
    auth_failure_listeners: managedDatabaseOpensearchPropertiesAuthFailureListenersToTerraform(struct!.authFailureListeners),
    index_template: managedDatabaseOpensearchPropertiesIndexTemplateToTerraform(struct!.indexTemplate),
    openid: managedDatabaseOpensearchPropertiesOpenidToTerraform(struct!.openid),
    opensearch_dashboards: managedDatabaseOpensearchPropertiesOpensearchDashboardsToTerraform(struct!.opensearchDashboards),
    saml: managedDatabaseOpensearchPropertiesSamlToTerraform(struct!.saml),
  }
}


export function managedDatabaseOpensearchPropertiesToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesOutputReference | ManagedDatabaseOpensearchProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_auto_create_index_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.actionAutoCreateIndexEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_destructive_requires_name: {
      value: cdktf.booleanToHclTerraform(struct!.actionDestructiveRequiresName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_utility_network_ip_filter: {
      value: cdktf.booleanToHclTerraform(struct!.automaticUtilityNetworkIpFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_max_shards_per_node: {
      value: cdktf.numberToHclTerraform(struct!.clusterMaxShardsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_routing_allocation_node_concurrent_recoveries: {
      value: cdktf.numberToHclTerraform(struct!.clusterRoutingAllocationNodeConcurrentRecoveries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_domain: {
      value: cdktf.stringToHclTerraform(struct!.customDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_sender_name: {
      value: cdktf.stringToHclTerraform(struct!.emailSenderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_sender_password: {
      value: cdktf.stringToHclTerraform(struct!.emailSenderPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_sender_username: {
      value: cdktf.stringToHclTerraform(struct!.emailSenderUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_security_audit: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecurityAudit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_max_content_length: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxContentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_max_header_size: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxHeaderSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_max_initial_line_length: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxInitialLineLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    index_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.indexPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    indices_fielddata_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.indicesFielddataCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_memory_index_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.indicesMemoryIndexBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_memory_max_index_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.indicesMemoryMaxIndexBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_memory_min_index_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.indicesMemoryMinIndexBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_queries_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.indicesQueriesCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_query_bool_max_clause_count: {
      value: cdktf.numberToHclTerraform(struct!.indicesQueryBoolMaxClauseCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_recovery_max_bytes_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.indicesRecoveryMaxBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_recovery_max_concurrent_file_chunks: {
      value: cdktf.numberToHclTerraform(struct!.indicesRecoveryMaxConcurrentFileChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ism_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ismEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ism_history_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ismHistoryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ism_history_max_age: {
      value: cdktf.numberToHclTerraform(struct!.ismHistoryMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ism_history_max_docs: {
      value: cdktf.numberToHclTerraform(struct!.ismHistoryMaxDocs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ism_history_rollover_check_period: {
      value: cdktf.numberToHclTerraform(struct!.ismHistoryRolloverCheckPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ism_history_rollover_retention_period: {
      value: cdktf.numberToHclTerraform(struct!.ismHistoryRolloverRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_index_refresh_interval: {
      value: cdktf.booleanToHclTerraform(struct!.keepIndexRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_main_response_version: {
      value: cdktf.booleanToHclTerraform(struct!.overrideMainResponseVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plugins_alerting_filter_by_backend_roles: {
      value: cdktf.booleanToHclTerraform(struct!.pluginsAlertingFilterByBackendRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_access: {
      value: cdktf.booleanToHclTerraform(struct!.publicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reindex_remote_whitelist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reindexRemoteWhitelist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    script_max_compilations_rate: {
      value: cdktf.stringToHclTerraform(struct!.scriptMaxCompilationsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_max_buckets: {
      value: cdktf.numberToHclTerraform(struct!.searchMaxBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_log: {
      value: cdktf.booleanToHclTerraform(struct!.serviceLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    thread_pool_analyze_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolAnalyzeQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_analyze_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolAnalyzeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_force_merge_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolForceMergeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_get_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolGetQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_get_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolGetSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_search_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolSearchQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_search_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolSearchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_search_throttled_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolSearchThrottledQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_search_throttled_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolSearchThrottledSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_write_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolWriteQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_write_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolWriteSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_failure_listeners: {
      value: managedDatabaseOpensearchPropertiesAuthFailureListenersToHclTerraform(struct!.authFailureListeners),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesAuthFailureListenersList",
    },
    index_template: {
      value: managedDatabaseOpensearchPropertiesIndexTemplateToHclTerraform(struct!.indexTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesIndexTemplateList",
    },
    openid: {
      value: managedDatabaseOpensearchPropertiesOpenidToHclTerraform(struct!.openid),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesOpenidList",
    },
    opensearch_dashboards: {
      value: managedDatabaseOpensearchPropertiesOpensearchDashboardsToHclTerraform(struct!.opensearchDashboards),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesOpensearchDashboardsList",
    },
    saml: {
      value: managedDatabaseOpensearchPropertiesSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionAutoCreateIndexEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionAutoCreateIndexEnabled = this._actionAutoCreateIndexEnabled;
    }
    if (this._actionDestructiveRequiresName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDestructiveRequiresName = this._actionDestructiveRequiresName;
    }
    if (this._automaticUtilityNetworkIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUtilityNetworkIpFilter = this._automaticUtilityNetworkIpFilter;
    }
    if (this._clusterMaxShardsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMaxShardsPerNode = this._clusterMaxShardsPerNode;
    }
    if (this._clusterRoutingAllocationNodeConcurrentRecoveries !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoutingAllocationNodeConcurrentRecoveries = this._clusterRoutingAllocationNodeConcurrentRecoveries;
    }
    if (this._customDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomain = this._customDomain;
    }
    if (this._emailSenderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSenderName = this._emailSenderName;
    }
    if (this._emailSenderPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSenderPassword = this._emailSenderPassword;
    }
    if (this._emailSenderUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSenderUsername = this._emailSenderUsername;
    }
    if (this._enableSecurityAudit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecurityAudit = this._enableSecurityAudit;
    }
    if (this._httpMaxContentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxContentLength = this._httpMaxContentLength;
    }
    if (this._httpMaxHeaderSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxHeaderSize = this._httpMaxHeaderSize;
    }
    if (this._httpMaxInitialLineLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxInitialLineLength = this._httpMaxInitialLineLength;
    }
    if (this._indexPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexPatterns = this._indexPatterns;
    }
    if (this._indicesFielddataCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesFielddataCacheSize = this._indicesFielddataCacheSize;
    }
    if (this._indicesMemoryIndexBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesMemoryIndexBufferSize = this._indicesMemoryIndexBufferSize;
    }
    if (this._indicesMemoryMaxIndexBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesMemoryMaxIndexBufferSize = this._indicesMemoryMaxIndexBufferSize;
    }
    if (this._indicesMemoryMinIndexBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesMemoryMinIndexBufferSize = this._indicesMemoryMinIndexBufferSize;
    }
    if (this._indicesQueriesCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesQueriesCacheSize = this._indicesQueriesCacheSize;
    }
    if (this._indicesQueryBoolMaxClauseCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesQueryBoolMaxClauseCount = this._indicesQueryBoolMaxClauseCount;
    }
    if (this._indicesRecoveryMaxBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesRecoveryMaxBytesPerSec = this._indicesRecoveryMaxBytesPerSec;
    }
    if (this._indicesRecoveryMaxConcurrentFileChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesRecoveryMaxConcurrentFileChunks = this._indicesRecoveryMaxConcurrentFileChunks;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ismEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismEnabled = this._ismEnabled;
    }
    if (this._ismHistoryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismHistoryEnabled = this._ismHistoryEnabled;
    }
    if (this._ismHistoryMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismHistoryMaxAge = this._ismHistoryMaxAge;
    }
    if (this._ismHistoryMaxDocs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismHistoryMaxDocs = this._ismHistoryMaxDocs;
    }
    if (this._ismHistoryRolloverCheckPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismHistoryRolloverCheckPeriod = this._ismHistoryRolloverCheckPeriod;
    }
    if (this._ismHistoryRolloverRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismHistoryRolloverRetentionPeriod = this._ismHistoryRolloverRetentionPeriod;
    }
    if (this._keepIndexRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepIndexRefreshInterval = this._keepIndexRefreshInterval;
    }
    if (this._overrideMainResponseVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideMainResponseVersion = this._overrideMainResponseVersion;
    }
    if (this._pluginsAlertingFilterByBackendRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginsAlertingFilterByBackendRoles = this._pluginsAlertingFilterByBackendRoles;
    }
    if (this._publicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess;
    }
    if (this._reindexRemoteWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.reindexRemoteWhitelist = this._reindexRemoteWhitelist;
    }
    if (this._scriptMaxCompilationsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptMaxCompilationsRate = this._scriptMaxCompilationsRate;
    }
    if (this._searchMaxBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchMaxBuckets = this._searchMaxBuckets;
    }
    if (this._serviceLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLog = this._serviceLog;
    }
    if (this._threadPoolAnalyzeQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolAnalyzeQueueSize = this._threadPoolAnalyzeQueueSize;
    }
    if (this._threadPoolAnalyzeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolAnalyzeSize = this._threadPoolAnalyzeSize;
    }
    if (this._threadPoolForceMergeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolForceMergeSize = this._threadPoolForceMergeSize;
    }
    if (this._threadPoolGetQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolGetQueueSize = this._threadPoolGetQueueSize;
    }
    if (this._threadPoolGetSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolGetSize = this._threadPoolGetSize;
    }
    if (this._threadPoolSearchQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolSearchQueueSize = this._threadPoolSearchQueueSize;
    }
    if (this._threadPoolSearchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolSearchSize = this._threadPoolSearchSize;
    }
    if (this._threadPoolSearchThrottledQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolSearchThrottledQueueSize = this._threadPoolSearchThrottledQueueSize;
    }
    if (this._threadPoolSearchThrottledSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolSearchThrottledSize = this._threadPoolSearchThrottledSize;
    }
    if (this._threadPoolWriteQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolWriteQueueSize = this._threadPoolWriteQueueSize;
    }
    if (this._threadPoolWriteSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolWriteSize = this._threadPoolWriteSize;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._authFailureListeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFailureListeners = this._authFailureListeners?.internalValue;
    }
    if (this._indexTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexTemplate = this._indexTemplate?.internalValue;
    }
    if (this._openid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openid = this._openid?.internalValue;
    }
    if (this._opensearchDashboards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchDashboards = this._opensearchDashboards?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionAutoCreateIndexEnabled = undefined;
      this._actionDestructiveRequiresName = undefined;
      this._automaticUtilityNetworkIpFilter = undefined;
      this._clusterMaxShardsPerNode = undefined;
      this._clusterRoutingAllocationNodeConcurrentRecoveries = undefined;
      this._customDomain = undefined;
      this._emailSenderName = undefined;
      this._emailSenderPassword = undefined;
      this._emailSenderUsername = undefined;
      this._enableSecurityAudit = undefined;
      this._httpMaxContentLength = undefined;
      this._httpMaxHeaderSize = undefined;
      this._httpMaxInitialLineLength = undefined;
      this._indexPatterns = undefined;
      this._indicesFielddataCacheSize = undefined;
      this._indicesMemoryIndexBufferSize = undefined;
      this._indicesMemoryMaxIndexBufferSize = undefined;
      this._indicesMemoryMinIndexBufferSize = undefined;
      this._indicesQueriesCacheSize = undefined;
      this._indicesQueryBoolMaxClauseCount = undefined;
      this._indicesRecoveryMaxBytesPerSec = undefined;
      this._indicesRecoveryMaxConcurrentFileChunks = undefined;
      this._ipFilter = undefined;
      this._ismEnabled = undefined;
      this._ismHistoryEnabled = undefined;
      this._ismHistoryMaxAge = undefined;
      this._ismHistoryMaxDocs = undefined;
      this._ismHistoryRolloverCheckPeriod = undefined;
      this._ismHistoryRolloverRetentionPeriod = undefined;
      this._keepIndexRefreshInterval = undefined;
      this._overrideMainResponseVersion = undefined;
      this._pluginsAlertingFilterByBackendRoles = undefined;
      this._publicAccess = undefined;
      this._reindexRemoteWhitelist = undefined;
      this._scriptMaxCompilationsRate = undefined;
      this._searchMaxBuckets = undefined;
      this._serviceLog = undefined;
      this._threadPoolAnalyzeQueueSize = undefined;
      this._threadPoolAnalyzeSize = undefined;
      this._threadPoolForceMergeSize = undefined;
      this._threadPoolGetQueueSize = undefined;
      this._threadPoolGetSize = undefined;
      this._threadPoolSearchQueueSize = undefined;
      this._threadPoolSearchSize = undefined;
      this._threadPoolSearchThrottledQueueSize = undefined;
      this._threadPoolSearchThrottledSize = undefined;
      this._threadPoolWriteQueueSize = undefined;
      this._threadPoolWriteSize = undefined;
      this._version = undefined;
      this._authFailureListeners.internalValue = undefined;
      this._indexTemplate.internalValue = undefined;
      this._openid.internalValue = undefined;
      this._opensearchDashboards.internalValue = undefined;
      this._saml.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionAutoCreateIndexEnabled = value.actionAutoCreateIndexEnabled;
      this._actionDestructiveRequiresName = value.actionDestructiveRequiresName;
      this._automaticUtilityNetworkIpFilter = value.automaticUtilityNetworkIpFilter;
      this._clusterMaxShardsPerNode = value.clusterMaxShardsPerNode;
      this._clusterRoutingAllocationNodeConcurrentRecoveries = value.clusterRoutingAllocationNodeConcurrentRecoveries;
      this._customDomain = value.customDomain;
      this._emailSenderName = value.emailSenderName;
      this._emailSenderPassword = value.emailSenderPassword;
      this._emailSenderUsername = value.emailSenderUsername;
      this._enableSecurityAudit = value.enableSecurityAudit;
      this._httpMaxContentLength = value.httpMaxContentLength;
      this._httpMaxHeaderSize = value.httpMaxHeaderSize;
      this._httpMaxInitialLineLength = value.httpMaxInitialLineLength;
      this._indexPatterns = value.indexPatterns;
      this._indicesFielddataCacheSize = value.indicesFielddataCacheSize;
      this._indicesMemoryIndexBufferSize = value.indicesMemoryIndexBufferSize;
      this._indicesMemoryMaxIndexBufferSize = value.indicesMemoryMaxIndexBufferSize;
      this._indicesMemoryMinIndexBufferSize = value.indicesMemoryMinIndexBufferSize;
      this._indicesQueriesCacheSize = value.indicesQueriesCacheSize;
      this._indicesQueryBoolMaxClauseCount = value.indicesQueryBoolMaxClauseCount;
      this._indicesRecoveryMaxBytesPerSec = value.indicesRecoveryMaxBytesPerSec;
      this._indicesRecoveryMaxConcurrentFileChunks = value.indicesRecoveryMaxConcurrentFileChunks;
      this._ipFilter = value.ipFilter;
      this._ismEnabled = value.ismEnabled;
      this._ismHistoryEnabled = value.ismHistoryEnabled;
      this._ismHistoryMaxAge = value.ismHistoryMaxAge;
      this._ismHistoryMaxDocs = value.ismHistoryMaxDocs;
      this._ismHistoryRolloverCheckPeriod = value.ismHistoryRolloverCheckPeriod;
      this._ismHistoryRolloverRetentionPeriod = value.ismHistoryRolloverRetentionPeriod;
      this._keepIndexRefreshInterval = value.keepIndexRefreshInterval;
      this._overrideMainResponseVersion = value.overrideMainResponseVersion;
      this._pluginsAlertingFilterByBackendRoles = value.pluginsAlertingFilterByBackendRoles;
      this._publicAccess = value.publicAccess;
      this._reindexRemoteWhitelist = value.reindexRemoteWhitelist;
      this._scriptMaxCompilationsRate = value.scriptMaxCompilationsRate;
      this._searchMaxBuckets = value.searchMaxBuckets;
      this._serviceLog = value.serviceLog;
      this._threadPoolAnalyzeQueueSize = value.threadPoolAnalyzeQueueSize;
      this._threadPoolAnalyzeSize = value.threadPoolAnalyzeSize;
      this._threadPoolForceMergeSize = value.threadPoolForceMergeSize;
      this._threadPoolGetQueueSize = value.threadPoolGetQueueSize;
      this._threadPoolGetSize = value.threadPoolGetSize;
      this._threadPoolSearchQueueSize = value.threadPoolSearchQueueSize;
      this._threadPoolSearchSize = value.threadPoolSearchSize;
      this._threadPoolSearchThrottledQueueSize = value.threadPoolSearchThrottledQueueSize;
      this._threadPoolSearchThrottledSize = value.threadPoolSearchThrottledSize;
      this._threadPoolWriteQueueSize = value.threadPoolWriteQueueSize;
      this._threadPoolWriteSize = value.threadPoolWriteSize;
      this._version = value.version;
      this._authFailureListeners.internalValue = value.authFailureListeners;
      this._indexTemplate.internalValue = value.indexTemplate;
      this._openid.internalValue = value.openid;
      this._opensearchDashboards.internalValue = value.opensearchDashboards;
      this._saml.internalValue = value.saml;
    }
  }

  // action_auto_create_index_enabled - computed: true, optional: true, required: false
  private _actionAutoCreateIndexEnabled?: boolean | cdktf.IResolvable; 
  public get actionAutoCreateIndexEnabled() {
    return this.getBooleanAttribute('action_auto_create_index_enabled');
  }
  public set actionAutoCreateIndexEnabled(value: boolean | cdktf.IResolvable) {
    this._actionAutoCreateIndexEnabled = value;
  }
  public resetActionAutoCreateIndexEnabled() {
    this._actionAutoCreateIndexEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionAutoCreateIndexEnabledInput() {
    return this._actionAutoCreateIndexEnabled;
  }

  // action_destructive_requires_name - computed: true, optional: true, required: false
  private _actionDestructiveRequiresName?: boolean | cdktf.IResolvable; 
  public get actionDestructiveRequiresName() {
    return this.getBooleanAttribute('action_destructive_requires_name');
  }
  public set actionDestructiveRequiresName(value: boolean | cdktf.IResolvable) {
    this._actionDestructiveRequiresName = value;
  }
  public resetActionDestructiveRequiresName() {
    this._actionDestructiveRequiresName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDestructiveRequiresNameInput() {
    return this._actionDestructiveRequiresName;
  }

  // automatic_utility_network_ip_filter - computed: false, optional: true, required: false
  private _automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable; 
  public get automaticUtilityNetworkIpFilter() {
    return this.getBooleanAttribute('automatic_utility_network_ip_filter');
  }
  public set automaticUtilityNetworkIpFilter(value: boolean | cdktf.IResolvable) {
    this._automaticUtilityNetworkIpFilter = value;
  }
  public resetAutomaticUtilityNetworkIpFilter() {
    this._automaticUtilityNetworkIpFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUtilityNetworkIpFilterInput() {
    return this._automaticUtilityNetworkIpFilter;
  }

  // cluster_max_shards_per_node - computed: true, optional: true, required: false
  private _clusterMaxShardsPerNode?: number; 
  public get clusterMaxShardsPerNode() {
    return this.getNumberAttribute('cluster_max_shards_per_node');
  }
  public set clusterMaxShardsPerNode(value: number) {
    this._clusterMaxShardsPerNode = value;
  }
  public resetClusterMaxShardsPerNode() {
    this._clusterMaxShardsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxShardsPerNodeInput() {
    return this._clusterMaxShardsPerNode;
  }

  // cluster_routing_allocation_node_concurrent_recoveries - computed: true, optional: true, required: false
  private _clusterRoutingAllocationNodeConcurrentRecoveries?: number; 
  public get clusterRoutingAllocationNodeConcurrentRecoveries() {
    return this.getNumberAttribute('cluster_routing_allocation_node_concurrent_recoveries');
  }
  public set clusterRoutingAllocationNodeConcurrentRecoveries(value: number) {
    this._clusterRoutingAllocationNodeConcurrentRecoveries = value;
  }
  public resetClusterRoutingAllocationNodeConcurrentRecoveries() {
    this._clusterRoutingAllocationNodeConcurrentRecoveries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationNodeConcurrentRecoveriesInput() {
    return this._clusterRoutingAllocationNodeConcurrentRecoveries;
  }

  // custom_domain - computed: true, optional: true, required: false
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
  }

  // email_sender_name - computed: true, optional: true, required: false
  private _emailSenderName?: string; 
  public get emailSenderName() {
    return this.getStringAttribute('email_sender_name');
  }
  public set emailSenderName(value: string) {
    this._emailSenderName = value;
  }
  public resetEmailSenderName() {
    this._emailSenderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSenderNameInput() {
    return this._emailSenderName;
  }

  // email_sender_password - computed: true, optional: true, required: false
  private _emailSenderPassword?: string; 
  public get emailSenderPassword() {
    return this.getStringAttribute('email_sender_password');
  }
  public set emailSenderPassword(value: string) {
    this._emailSenderPassword = value;
  }
  public resetEmailSenderPassword() {
    this._emailSenderPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSenderPasswordInput() {
    return this._emailSenderPassword;
  }

  // email_sender_username - computed: true, optional: true, required: false
  private _emailSenderUsername?: string; 
  public get emailSenderUsername() {
    return this.getStringAttribute('email_sender_username');
  }
  public set emailSenderUsername(value: string) {
    this._emailSenderUsername = value;
  }
  public resetEmailSenderUsername() {
    this._emailSenderUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSenderUsernameInput() {
    return this._emailSenderUsername;
  }

  // enable_security_audit - computed: false, optional: true, required: false
  private _enableSecurityAudit?: boolean | cdktf.IResolvable; 
  public get enableSecurityAudit() {
    return this.getBooleanAttribute('enable_security_audit');
  }
  public set enableSecurityAudit(value: boolean | cdktf.IResolvable) {
    this._enableSecurityAudit = value;
  }
  public resetEnableSecurityAudit() {
    this._enableSecurityAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecurityAuditInput() {
    return this._enableSecurityAudit;
  }

  // http_max_content_length - computed: true, optional: true, required: false
  private _httpMaxContentLength?: number; 
  public get httpMaxContentLength() {
    return this.getNumberAttribute('http_max_content_length');
  }
  public set httpMaxContentLength(value: number) {
    this._httpMaxContentLength = value;
  }
  public resetHttpMaxContentLength() {
    this._httpMaxContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxContentLengthInput() {
    return this._httpMaxContentLength;
  }

  // http_max_header_size - computed: true, optional: true, required: false
  private _httpMaxHeaderSize?: number; 
  public get httpMaxHeaderSize() {
    return this.getNumberAttribute('http_max_header_size');
  }
  public set httpMaxHeaderSize(value: number) {
    this._httpMaxHeaderSize = value;
  }
  public resetHttpMaxHeaderSize() {
    this._httpMaxHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxHeaderSizeInput() {
    return this._httpMaxHeaderSize;
  }

  // http_max_initial_line_length - computed: true, optional: true, required: false
  private _httpMaxInitialLineLength?: number; 
  public get httpMaxInitialLineLength() {
    return this.getNumberAttribute('http_max_initial_line_length');
  }
  public set httpMaxInitialLineLength(value: number) {
    this._httpMaxInitialLineLength = value;
  }
  public resetHttpMaxInitialLineLength() {
    this._httpMaxInitialLineLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxInitialLineLengthInput() {
    return this._httpMaxInitialLineLength;
  }

  // index_patterns - computed: true, optional: true, required: false
  private _indexPatterns?: string[]; 
  public get indexPatterns() {
    return this.getListAttribute('index_patterns');
  }
  public set indexPatterns(value: string[]) {
    this._indexPatterns = value;
  }
  public resetIndexPatterns() {
    this._indexPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPatternsInput() {
    return this._indexPatterns;
  }

  // indices_fielddata_cache_size - computed: true, optional: true, required: false
  private _indicesFielddataCacheSize?: number; 
  public get indicesFielddataCacheSize() {
    return this.getNumberAttribute('indices_fielddata_cache_size');
  }
  public set indicesFielddataCacheSize(value: number) {
    this._indicesFielddataCacheSize = value;
  }
  public resetIndicesFielddataCacheSize() {
    this._indicesFielddataCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesFielddataCacheSizeInput() {
    return this._indicesFielddataCacheSize;
  }

  // indices_memory_index_buffer_size - computed: true, optional: true, required: false
  private _indicesMemoryIndexBufferSize?: number; 
  public get indicesMemoryIndexBufferSize() {
    return this.getNumberAttribute('indices_memory_index_buffer_size');
  }
  public set indicesMemoryIndexBufferSize(value: number) {
    this._indicesMemoryIndexBufferSize = value;
  }
  public resetIndicesMemoryIndexBufferSize() {
    this._indicesMemoryIndexBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesMemoryIndexBufferSizeInput() {
    return this._indicesMemoryIndexBufferSize;
  }

  // indices_memory_max_index_buffer_size - computed: true, optional: true, required: false
  private _indicesMemoryMaxIndexBufferSize?: number; 
  public get indicesMemoryMaxIndexBufferSize() {
    return this.getNumberAttribute('indices_memory_max_index_buffer_size');
  }
  public set indicesMemoryMaxIndexBufferSize(value: number) {
    this._indicesMemoryMaxIndexBufferSize = value;
  }
  public resetIndicesMemoryMaxIndexBufferSize() {
    this._indicesMemoryMaxIndexBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesMemoryMaxIndexBufferSizeInput() {
    return this._indicesMemoryMaxIndexBufferSize;
  }

  // indices_memory_min_index_buffer_size - computed: true, optional: true, required: false
  private _indicesMemoryMinIndexBufferSize?: number; 
  public get indicesMemoryMinIndexBufferSize() {
    return this.getNumberAttribute('indices_memory_min_index_buffer_size');
  }
  public set indicesMemoryMinIndexBufferSize(value: number) {
    this._indicesMemoryMinIndexBufferSize = value;
  }
  public resetIndicesMemoryMinIndexBufferSize() {
    this._indicesMemoryMinIndexBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesMemoryMinIndexBufferSizeInput() {
    return this._indicesMemoryMinIndexBufferSize;
  }

  // indices_queries_cache_size - computed: true, optional: true, required: false
  private _indicesQueriesCacheSize?: number; 
  public get indicesQueriesCacheSize() {
    return this.getNumberAttribute('indices_queries_cache_size');
  }
  public set indicesQueriesCacheSize(value: number) {
    this._indicesQueriesCacheSize = value;
  }
  public resetIndicesQueriesCacheSize() {
    this._indicesQueriesCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesQueriesCacheSizeInput() {
    return this._indicesQueriesCacheSize;
  }

  // indices_query_bool_max_clause_count - computed: true, optional: true, required: false
  private _indicesQueryBoolMaxClauseCount?: number; 
  public get indicesQueryBoolMaxClauseCount() {
    return this.getNumberAttribute('indices_query_bool_max_clause_count');
  }
  public set indicesQueryBoolMaxClauseCount(value: number) {
    this._indicesQueryBoolMaxClauseCount = value;
  }
  public resetIndicesQueryBoolMaxClauseCount() {
    this._indicesQueryBoolMaxClauseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesQueryBoolMaxClauseCountInput() {
    return this._indicesQueryBoolMaxClauseCount;
  }

  // indices_recovery_max_bytes_per_sec - computed: true, optional: true, required: false
  private _indicesRecoveryMaxBytesPerSec?: number; 
  public get indicesRecoveryMaxBytesPerSec() {
    return this.getNumberAttribute('indices_recovery_max_bytes_per_sec');
  }
  public set indicesRecoveryMaxBytesPerSec(value: number) {
    this._indicesRecoveryMaxBytesPerSec = value;
  }
  public resetIndicesRecoveryMaxBytesPerSec() {
    this._indicesRecoveryMaxBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesRecoveryMaxBytesPerSecInput() {
    return this._indicesRecoveryMaxBytesPerSec;
  }

  // indices_recovery_max_concurrent_file_chunks - computed: true, optional: true, required: false
  private _indicesRecoveryMaxConcurrentFileChunks?: number; 
  public get indicesRecoveryMaxConcurrentFileChunks() {
    return this.getNumberAttribute('indices_recovery_max_concurrent_file_chunks');
  }
  public set indicesRecoveryMaxConcurrentFileChunks(value: number) {
    this._indicesRecoveryMaxConcurrentFileChunks = value;
  }
  public resetIndicesRecoveryMaxConcurrentFileChunks() {
    this._indicesRecoveryMaxConcurrentFileChunks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesRecoveryMaxConcurrentFileChunksInput() {
    return this._indicesRecoveryMaxConcurrentFileChunks;
  }

  // ip_filter - computed: true, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return this.getListAttribute('ip_filter');
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // ism_enabled - computed: false, optional: true, required: false
  private _ismEnabled?: boolean | cdktf.IResolvable; 
  public get ismEnabled() {
    return this.getBooleanAttribute('ism_enabled');
  }
  public set ismEnabled(value: boolean | cdktf.IResolvable) {
    this._ismEnabled = value;
  }
  public resetIsmEnabled() {
    this._ismEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismEnabledInput() {
    return this._ismEnabled;
  }

  // ism_history_enabled - computed: false, optional: true, required: false
  private _ismHistoryEnabled?: boolean | cdktf.IResolvable; 
  public get ismHistoryEnabled() {
    return this.getBooleanAttribute('ism_history_enabled');
  }
  public set ismHistoryEnabled(value: boolean | cdktf.IResolvable) {
    this._ismHistoryEnabled = value;
  }
  public resetIsmHistoryEnabled() {
    this._ismHistoryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryEnabledInput() {
    return this._ismHistoryEnabled;
  }

  // ism_history_max_age - computed: true, optional: true, required: false
  private _ismHistoryMaxAge?: number; 
  public get ismHistoryMaxAge() {
    return this.getNumberAttribute('ism_history_max_age');
  }
  public set ismHistoryMaxAge(value: number) {
    this._ismHistoryMaxAge = value;
  }
  public resetIsmHistoryMaxAge() {
    this._ismHistoryMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryMaxAgeInput() {
    return this._ismHistoryMaxAge;
  }

  // ism_history_max_docs - computed: true, optional: true, required: false
  private _ismHistoryMaxDocs?: number; 
  public get ismHistoryMaxDocs() {
    return this.getNumberAttribute('ism_history_max_docs');
  }
  public set ismHistoryMaxDocs(value: number) {
    this._ismHistoryMaxDocs = value;
  }
  public resetIsmHistoryMaxDocs() {
    this._ismHistoryMaxDocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryMaxDocsInput() {
    return this._ismHistoryMaxDocs;
  }

  // ism_history_rollover_check_period - computed: true, optional: true, required: false
  private _ismHistoryRolloverCheckPeriod?: number; 
  public get ismHistoryRolloverCheckPeriod() {
    return this.getNumberAttribute('ism_history_rollover_check_period');
  }
  public set ismHistoryRolloverCheckPeriod(value: number) {
    this._ismHistoryRolloverCheckPeriod = value;
  }
  public resetIsmHistoryRolloverCheckPeriod() {
    this._ismHistoryRolloverCheckPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryRolloverCheckPeriodInput() {
    return this._ismHistoryRolloverCheckPeriod;
  }

  // ism_history_rollover_retention_period - computed: true, optional: true, required: false
  private _ismHistoryRolloverRetentionPeriod?: number; 
  public get ismHistoryRolloverRetentionPeriod() {
    return this.getNumberAttribute('ism_history_rollover_retention_period');
  }
  public set ismHistoryRolloverRetentionPeriod(value: number) {
    this._ismHistoryRolloverRetentionPeriod = value;
  }
  public resetIsmHistoryRolloverRetentionPeriod() {
    this._ismHistoryRolloverRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryRolloverRetentionPeriodInput() {
    return this._ismHistoryRolloverRetentionPeriod;
  }

  // keep_index_refresh_interval - computed: true, optional: true, required: false
  private _keepIndexRefreshInterval?: boolean | cdktf.IResolvable; 
  public get keepIndexRefreshInterval() {
    return this.getBooleanAttribute('keep_index_refresh_interval');
  }
  public set keepIndexRefreshInterval(value: boolean | cdktf.IResolvable) {
    this._keepIndexRefreshInterval = value;
  }
  public resetKeepIndexRefreshInterval() {
    this._keepIndexRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepIndexRefreshIntervalInput() {
    return this._keepIndexRefreshInterval;
  }

  // override_main_response_version - computed: true, optional: true, required: false
  private _overrideMainResponseVersion?: boolean | cdktf.IResolvable; 
  public get overrideMainResponseVersion() {
    return this.getBooleanAttribute('override_main_response_version');
  }
  public set overrideMainResponseVersion(value: boolean | cdktf.IResolvable) {
    this._overrideMainResponseVersion = value;
  }
  public resetOverrideMainResponseVersion() {
    this._overrideMainResponseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideMainResponseVersionInput() {
    return this._overrideMainResponseVersion;
  }

  // plugins_alerting_filter_by_backend_roles - computed: true, optional: true, required: false
  private _pluginsAlertingFilterByBackendRoles?: boolean | cdktf.IResolvable; 
  public get pluginsAlertingFilterByBackendRoles() {
    return this.getBooleanAttribute('plugins_alerting_filter_by_backend_roles');
  }
  public set pluginsAlertingFilterByBackendRoles(value: boolean | cdktf.IResolvable) {
    this._pluginsAlertingFilterByBackendRoles = value;
  }
  public resetPluginsAlertingFilterByBackendRoles() {
    this._pluginsAlertingFilterByBackendRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsAlertingFilterByBackendRolesInput() {
    return this._pluginsAlertingFilterByBackendRoles;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess?: boolean | cdktf.IResolvable; 
  public get publicAccess() {
    return this.getBooleanAttribute('public_access');
  }
  public set publicAccess(value: boolean | cdktf.IResolvable) {
    this._publicAccess = value;
  }
  public resetPublicAccess() {
    this._publicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess;
  }

  // reindex_remote_whitelist - computed: true, optional: true, required: false
  private _reindexRemoteWhitelist?: string[]; 
  public get reindexRemoteWhitelist() {
    return this.getListAttribute('reindex_remote_whitelist');
  }
  public set reindexRemoteWhitelist(value: string[]) {
    this._reindexRemoteWhitelist = value;
  }
  public resetReindexRemoteWhitelist() {
    this._reindexRemoteWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reindexRemoteWhitelistInput() {
    return this._reindexRemoteWhitelist;
  }

  // script_max_compilations_rate - computed: true, optional: true, required: false
  private _scriptMaxCompilationsRate?: string; 
  public get scriptMaxCompilationsRate() {
    return this.getStringAttribute('script_max_compilations_rate');
  }
  public set scriptMaxCompilationsRate(value: string) {
    this._scriptMaxCompilationsRate = value;
  }
  public resetScriptMaxCompilationsRate() {
    this._scriptMaxCompilationsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptMaxCompilationsRateInput() {
    return this._scriptMaxCompilationsRate;
  }

  // search_max_buckets - computed: true, optional: true, required: false
  private _searchMaxBuckets?: number; 
  public get searchMaxBuckets() {
    return this.getNumberAttribute('search_max_buckets');
  }
  public set searchMaxBuckets(value: number) {
    this._searchMaxBuckets = value;
  }
  public resetSearchMaxBuckets() {
    this._searchMaxBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchMaxBucketsInput() {
    return this._searchMaxBuckets;
  }

  // service_log - computed: true, optional: true, required: false
  private _serviceLog?: boolean | cdktf.IResolvable; 
  public get serviceLog() {
    return this.getBooleanAttribute('service_log');
  }
  public set serviceLog(value: boolean | cdktf.IResolvable) {
    this._serviceLog = value;
  }
  public resetServiceLog() {
    this._serviceLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLogInput() {
    return this._serviceLog;
  }

  // thread_pool_analyze_queue_size - computed: true, optional: true, required: false
  private _threadPoolAnalyzeQueueSize?: number; 
  public get threadPoolAnalyzeQueueSize() {
    return this.getNumberAttribute('thread_pool_analyze_queue_size');
  }
  public set threadPoolAnalyzeQueueSize(value: number) {
    this._threadPoolAnalyzeQueueSize = value;
  }
  public resetThreadPoolAnalyzeQueueSize() {
    this._threadPoolAnalyzeQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolAnalyzeQueueSizeInput() {
    return this._threadPoolAnalyzeQueueSize;
  }

  // thread_pool_analyze_size - computed: true, optional: true, required: false
  private _threadPoolAnalyzeSize?: number; 
  public get threadPoolAnalyzeSize() {
    return this.getNumberAttribute('thread_pool_analyze_size');
  }
  public set threadPoolAnalyzeSize(value: number) {
    this._threadPoolAnalyzeSize = value;
  }
  public resetThreadPoolAnalyzeSize() {
    this._threadPoolAnalyzeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolAnalyzeSizeInput() {
    return this._threadPoolAnalyzeSize;
  }

  // thread_pool_force_merge_size - computed: true, optional: true, required: false
  private _threadPoolForceMergeSize?: number; 
  public get threadPoolForceMergeSize() {
    return this.getNumberAttribute('thread_pool_force_merge_size');
  }
  public set threadPoolForceMergeSize(value: number) {
    this._threadPoolForceMergeSize = value;
  }
  public resetThreadPoolForceMergeSize() {
    this._threadPoolForceMergeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolForceMergeSizeInput() {
    return this._threadPoolForceMergeSize;
  }

  // thread_pool_get_queue_size - computed: true, optional: true, required: false
  private _threadPoolGetQueueSize?: number; 
  public get threadPoolGetQueueSize() {
    return this.getNumberAttribute('thread_pool_get_queue_size');
  }
  public set threadPoolGetQueueSize(value: number) {
    this._threadPoolGetQueueSize = value;
  }
  public resetThreadPoolGetQueueSize() {
    this._threadPoolGetQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolGetQueueSizeInput() {
    return this._threadPoolGetQueueSize;
  }

  // thread_pool_get_size - computed: true, optional: true, required: false
  private _threadPoolGetSize?: number; 
  public get threadPoolGetSize() {
    return this.getNumberAttribute('thread_pool_get_size');
  }
  public set threadPoolGetSize(value: number) {
    this._threadPoolGetSize = value;
  }
  public resetThreadPoolGetSize() {
    this._threadPoolGetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolGetSizeInput() {
    return this._threadPoolGetSize;
  }

  // thread_pool_search_queue_size - computed: true, optional: true, required: false
  private _threadPoolSearchQueueSize?: number; 
  public get threadPoolSearchQueueSize() {
    return this.getNumberAttribute('thread_pool_search_queue_size');
  }
  public set threadPoolSearchQueueSize(value: number) {
    this._threadPoolSearchQueueSize = value;
  }
  public resetThreadPoolSearchQueueSize() {
    this._threadPoolSearchQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchQueueSizeInput() {
    return this._threadPoolSearchQueueSize;
  }

  // thread_pool_search_size - computed: true, optional: true, required: false
  private _threadPoolSearchSize?: number; 
  public get threadPoolSearchSize() {
    return this.getNumberAttribute('thread_pool_search_size');
  }
  public set threadPoolSearchSize(value: number) {
    this._threadPoolSearchSize = value;
  }
  public resetThreadPoolSearchSize() {
    this._threadPoolSearchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchSizeInput() {
    return this._threadPoolSearchSize;
  }

  // thread_pool_search_throttled_queue_size - computed: true, optional: true, required: false
  private _threadPoolSearchThrottledQueueSize?: number; 
  public get threadPoolSearchThrottledQueueSize() {
    return this.getNumberAttribute('thread_pool_search_throttled_queue_size');
  }
  public set threadPoolSearchThrottledQueueSize(value: number) {
    this._threadPoolSearchThrottledQueueSize = value;
  }
  public resetThreadPoolSearchThrottledQueueSize() {
    this._threadPoolSearchThrottledQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchThrottledQueueSizeInput() {
    return this._threadPoolSearchThrottledQueueSize;
  }

  // thread_pool_search_throttled_size - computed: true, optional: true, required: false
  private _threadPoolSearchThrottledSize?: number; 
  public get threadPoolSearchThrottledSize() {
    return this.getNumberAttribute('thread_pool_search_throttled_size');
  }
  public set threadPoolSearchThrottledSize(value: number) {
    this._threadPoolSearchThrottledSize = value;
  }
  public resetThreadPoolSearchThrottledSize() {
    this._threadPoolSearchThrottledSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchThrottledSizeInput() {
    return this._threadPoolSearchThrottledSize;
  }

  // thread_pool_write_queue_size - computed: true, optional: true, required: false
  private _threadPoolWriteQueueSize?: number; 
  public get threadPoolWriteQueueSize() {
    return this.getNumberAttribute('thread_pool_write_queue_size');
  }
  public set threadPoolWriteQueueSize(value: number) {
    this._threadPoolWriteQueueSize = value;
  }
  public resetThreadPoolWriteQueueSize() {
    this._threadPoolWriteQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolWriteQueueSizeInput() {
    return this._threadPoolWriteQueueSize;
  }

  // thread_pool_write_size - computed: true, optional: true, required: false
  private _threadPoolWriteSize?: number; 
  public get threadPoolWriteSize() {
    return this.getNumberAttribute('thread_pool_write_size');
  }
  public set threadPoolWriteSize(value: number) {
    this._threadPoolWriteSize = value;
  }
  public resetThreadPoolWriteSize() {
    this._threadPoolWriteSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolWriteSizeInput() {
    return this._threadPoolWriteSize;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // auth_failure_listeners - computed: false, optional: true, required: false
  private _authFailureListeners = new ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference(this, "auth_failure_listeners");
  public get authFailureListeners() {
    return this._authFailureListeners;
  }
  public putAuthFailureListeners(value: ManagedDatabaseOpensearchPropertiesAuthFailureListeners) {
    this._authFailureListeners.internalValue = value;
  }
  public resetAuthFailureListeners() {
    this._authFailureListeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailureListenersInput() {
    return this._authFailureListeners.internalValue;
  }

  // index_template - computed: false, optional: true, required: false
  private _indexTemplate = new ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference(this, "index_template");
  public get indexTemplate() {
    return this._indexTemplate;
  }
  public putIndexTemplate(value: ManagedDatabaseOpensearchPropertiesIndexTemplate) {
    this._indexTemplate.internalValue = value;
  }
  public resetIndexTemplate() {
    this._indexTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTemplateInput() {
    return this._indexTemplate.internalValue;
  }

  // openid - computed: false, optional: true, required: false
  private _openid = new ManagedDatabaseOpensearchPropertiesOpenidOutputReference(this, "openid");
  public get openid() {
    return this._openid;
  }
  public putOpenid(value: ManagedDatabaseOpensearchPropertiesOpenid) {
    this._openid.internalValue = value;
  }
  public resetOpenid() {
    this._openid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidInput() {
    return this._openid.internalValue;
  }

  // opensearch_dashboards - computed: false, optional: true, required: false
  private _opensearchDashboards = new ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference(this, "opensearch_dashboards");
  public get opensearchDashboards() {
    return this._opensearchDashboards;
  }
  public putOpensearchDashboards(value: ManagedDatabaseOpensearchPropertiesOpensearchDashboards) {
    this._opensearchDashboards.internalValue = value;
  }
  public resetOpensearchDashboards() {
    this._opensearchDashboards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchDashboardsInput() {
    return this._opensearchDashboards.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new ManagedDatabaseOpensearchPropertiesSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ManagedDatabaseOpensearchPropertiesSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch upcloud_managed_database_opensearch}
*/
export class ManagedDatabaseOpensearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_opensearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedDatabaseOpensearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedDatabaseOpensearch to import
  * @param importFromId The id of the existing ManagedDatabaseOpensearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDatabaseOpensearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_database_opensearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_database_opensearch upcloud_managed_database_opensearch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDatabaseOpensearchConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDatabaseOpensearchConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_opensearch',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.6.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControl = config.accessControl;
    this._extendedAccessControl = config.extendedAccessControl;
    this._id = config.id;
    this._maintenanceWindowDow = config.maintenanceWindowDow;
    this._maintenanceWindowTime = config.maintenanceWindowTime;
    this._name = config.name;
    this._plan = config.plan;
    this._powered = config.powered;
    this._title = config.title;
    this._zone = config.zone;
    this._network.internalValue = config.network;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control - computed: true, optional: true, required: false
  private _accessControl?: boolean | cdktf.IResolvable; 
  public get accessControl() {
    return this.getBooleanAttribute('access_control');
  }
  public set accessControl(value: boolean | cdktf.IResolvable) {
    this._accessControl = value;
  }
  public resetAccessControl() {
    this._accessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl;
  }

  // components - computed: true, optional: false, required: false
  private _components = new ManagedDatabaseOpensearchComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // extended_access_control - computed: true, optional: true, required: false
  private _extendedAccessControl?: boolean | cdktf.IResolvable; 
  public get extendedAccessControl() {
    return this.getBooleanAttribute('extended_access_control');
  }
  public set extendedAccessControl(value: boolean | cdktf.IResolvable) {
    this._extendedAccessControl = value;
  }
  public resetExtendedAccessControl() {
    this._extendedAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAccessControlInput() {
    return this._extendedAccessControl;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // maintenance_window_dow - computed: true, optional: true, required: false
  private _maintenanceWindowDow?: string; 
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }
  public set maintenanceWindowDow(value: string) {
    this._maintenanceWindowDow = value;
  }
  public resetMaintenanceWindowDow() {
    this._maintenanceWindowDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDowInput() {
    return this._maintenanceWindowDow;
  }

  // maintenance_window_time - computed: true, optional: true, required: false
  private _maintenanceWindowTime?: string; 
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }
  public set maintenanceWindowTime(value: string) {
    this._maintenanceWindowTime = value;
  }
  public resetMaintenanceWindowTime() {
    this._maintenanceWindowTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowTimeInput() {
    return this._maintenanceWindowTime;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_states - computed: true, optional: false, required: false
  private _nodeStates = new ManagedDatabaseOpensearchNodeStatesList(this, "node_states", false);
  public get nodeStates() {
    return this._nodeStates;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // powered - computed: false, optional: true, required: false
  private _powered?: boolean | cdktf.IResolvable; 
  public get powered() {
    return this.getBooleanAttribute('powered');
  }
  public set powered(value: boolean | cdktf.IResolvable) {
    this._powered = value;
  }
  public resetPowered() {
    this._powered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poweredInput() {
    return this._powered;
  }

  // primary_database - computed: true, optional: false, required: false
  public get primaryDatabase() {
    return this.getStringAttribute('primary_database');
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
  }

  // service_password - computed: true, optional: false, required: false
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // service_username - computed: true, optional: false, required: false
  public get serviceUsername() {
    return this.getStringAttribute('service_username');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ManagedDatabaseOpensearchNetworkList(this, "network", true);
  public get network() {
    return this._network;
  }
  public putNetwork(value: ManagedDatabaseOpensearchNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new ManagedDatabaseOpensearchPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ManagedDatabaseOpensearchProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control: cdktf.booleanToTerraform(this._accessControl),
      extended_access_control: cdktf.booleanToTerraform(this._extendedAccessControl),
      id: cdktf.stringToTerraform(this._id),
      maintenance_window_dow: cdktf.stringToTerraform(this._maintenanceWindowDow),
      maintenance_window_time: cdktf.stringToTerraform(this._maintenanceWindowTime),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      powered: cdktf.booleanToTerraform(this._powered),
      title: cdktf.stringToTerraform(this._title),
      zone: cdktf.stringToTerraform(this._zone),
      network: cdktf.listMapper(managedDatabaseOpensearchNetworkToTerraform, true)(this._network.internalValue),
      properties: managedDatabaseOpensearchPropertiesToTerraform(this._properties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control: {
        value: cdktf.booleanToHclTerraform(this._accessControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extended_access_control: {
        value: cdktf.booleanToHclTerraform(this._extendedAccessControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_dow: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowDow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      powered: {
        value: cdktf.booleanToHclTerraform(this._powered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.listMapperHcl(managedDatabaseOpensearchNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedDatabaseOpensearchNetworkList",
      },
      properties: {
        value: managedDatabaseOpensearchPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDatabaseOpensearchPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
