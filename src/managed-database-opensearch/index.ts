/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabaseOpensearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables users access control for OpenSearch service. User access control rules will only be enforced if this attribute is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#access_control ManagedDatabaseOpensearch#access_control}
  */
  readonly accessControl?: boolean | cdktf.IResolvable;
  /**
  * Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs. Users are limited to perform operations on indices based on the user-specific access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#extended_access_control ManagedDatabaseOpensearch#extended_access_control}
  */
  readonly extendedAccessControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User defined key-value pairs to classify the managed database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#labels ManagedDatabaseOpensearch#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#maintenance_window_dow ManagedDatabaseOpensearch#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Maintenance window UTC time in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#maintenance_window_time ManagedDatabaseOpensearch#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}
  */
  readonly name: string;
  /**
  * Service plan to use. This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#plan ManagedDatabaseOpensearch#plan}
  */
  readonly plan: string;
  /**
  * The administrative power state of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#powered ManagedDatabaseOpensearch#powered}
  */
  readonly powered?: boolean | cdktf.IResolvable;
  /**
  * If set to true, prevents the managed service from being powered off, or deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#termination_protection ManagedDatabaseOpensearch#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * Title of a managed database instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#title ManagedDatabaseOpensearch#title}
  */
  readonly title: string;
  /**
  * Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#zone ManagedDatabaseOpensearch#zone}
  */
  readonly zone: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#network ManagedDatabaseOpensearch#network}
  */
  readonly network?: ManagedDatabaseOpensearchNetwork[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#properties ManagedDatabaseOpensearch#properties}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#family ManagedDatabaseOpensearch#family}
  */
  readonly family: string;
  /**
  * The name of the network. Must be unique within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}
  */
  readonly name: string;
  /**
  * The type of the network. Must be private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}
  */
  readonly type: string;
  /**
  * Private network UUID. Must reside in the same zone as the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#uuid ManagedDatabaseOpensearch#uuid}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#allowed_tries ManagedDatabaseOpensearch#allowed_tries}
  */
  readonly allowedTries?: number;
  /**
  * The internal backend. Enter `internal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#authentication_backend ManagedDatabaseOpensearch#authentication_backend}
  */
  readonly authenticationBackend?: string;
  /**
  * The duration of time that login remains blocked after a failed login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#block_expiry_seconds ManagedDatabaseOpensearch#block_expiry_seconds}
  */
  readonly blockExpirySeconds?: number;
  /**
  * The maximum number of blocked IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#max_blocked_clients ManagedDatabaseOpensearch#max_blocked_clients}
  */
  readonly maxBlockedClients?: number;
  /**
  * The maximum number of tracked IP addresses that have failed login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#max_tracked_clients ManagedDatabaseOpensearch#max_tracked_clients}
  */
  readonly maxTrackedClients?: number;
  /**
  * The window of time in which the value for `allowed_tries` is enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#time_window_seconds ManagedDatabaseOpensearch#time_window_seconds}
  */
  readonly timeWindowSeconds?: number;
  /**
  * The type of rate limiting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}
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
export interface ManagedDatabaseOpensearchPropertiesAuthFailureListeners {
  /**
  * internal_authentication_backend_limiting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#internal_authentication_backend_limiting ManagedDatabaseOpensearch#internal_authentication_backend_limiting}
  */
  readonly internalAuthenticationBackendLimiting?: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting;
}

export function managedDatabaseOpensearchPropertiesAuthFailureListenersToTerraform(struct?: ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference | ManagedDatabaseOpensearchPropertiesAuthFailureListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_authentication_backend_limiting: managedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingToTerraform(struct!.internalAuthenticationBackendLimiting),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesAuthFailureListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalAuthenticationBackendLimiting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalAuthenticationBackendLimiting.internalValue = value.internalAuthenticationBackendLimiting;
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
}
export interface ManagedDatabaseOpensearchPropertiesClusterRemoteStore {
  /**
  * The amount of time to wait for the cluster state upload to complete. The amount of time to wait for the cluster state upload to complete. Defaults to 20s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#state_global_metadata_upload_timeout ManagedDatabaseOpensearch#state_global_metadata_upload_timeout}
  */
  readonly stateGlobalMetadataUploadTimeout?: string;
  /**
  * The amount of time to wait for the manifest file upload to complete. The amount of time to wait for the manifest file upload to complete. The manifest file contains the details of each of the files uploaded for a single cluster state, both index metadata files and global metadata files. Defaults to 20s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#state_metadata_manifest_upload_timeout ManagedDatabaseOpensearch#state_metadata_manifest_upload_timeout}
  */
  readonly stateMetadataManifestUploadTimeout?: string;
  /**
  * The default value of the translog buffer interval. The default value of the translog buffer interval used when performing periodic translog updates. This setting is only effective when the index setting `index.remote_store.translog.buffer_interval` is not present. Defaults to 650ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#translog_buffer_interval ManagedDatabaseOpensearch#translog_buffer_interval}
  */
  readonly translogBufferInterval?: string;
  /**
  * The maximum number of open translog files for remote-backed indexes. Sets the maximum number of open translog files for remote-backed indexes. This limits the total number of translog files per shard. After reaching this limit, the remote store flushes the translog files. Default is 1000. The minimum required is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#translog_max_readers ManagedDatabaseOpensearch#translog_max_readers}
  */
  readonly translogMaxReaders?: number;
}

export function managedDatabaseOpensearchPropertiesClusterRemoteStoreToTerraform(struct?: ManagedDatabaseOpensearchPropertiesClusterRemoteStoreOutputReference | ManagedDatabaseOpensearchPropertiesClusterRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state_global_metadata_upload_timeout: cdktf.stringToTerraform(struct!.stateGlobalMetadataUploadTimeout),
    state_metadata_manifest_upload_timeout: cdktf.stringToTerraform(struct!.stateMetadataManifestUploadTimeout),
    translog_buffer_interval: cdktf.stringToTerraform(struct!.translogBufferInterval),
    translog_max_readers: cdktf.numberToTerraform(struct!.translogMaxReaders),
  }
}


export function managedDatabaseOpensearchPropertiesClusterRemoteStoreToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesClusterRemoteStoreOutputReference | ManagedDatabaseOpensearchPropertiesClusterRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state_global_metadata_upload_timeout: {
      value: cdktf.stringToHclTerraform(struct!.stateGlobalMetadataUploadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_metadata_manifest_upload_timeout: {
      value: cdktf.stringToHclTerraform(struct!.stateMetadataManifestUploadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translog_buffer_interval: {
      value: cdktf.stringToHclTerraform(struct!.translogBufferInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translog_max_readers: {
      value: cdktf.numberToHclTerraform(struct!.translogMaxReaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesClusterRemoteStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesClusterRemoteStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stateGlobalMetadataUploadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateGlobalMetadataUploadTimeout = this._stateGlobalMetadataUploadTimeout;
    }
    if (this._stateMetadataManifestUploadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMetadataManifestUploadTimeout = this._stateMetadataManifestUploadTimeout;
    }
    if (this._translogBufferInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.translogBufferInterval = this._translogBufferInterval;
    }
    if (this._translogMaxReaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.translogMaxReaders = this._translogMaxReaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesClusterRemoteStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stateGlobalMetadataUploadTimeout = undefined;
      this._stateMetadataManifestUploadTimeout = undefined;
      this._translogBufferInterval = undefined;
      this._translogMaxReaders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stateGlobalMetadataUploadTimeout = value.stateGlobalMetadataUploadTimeout;
      this._stateMetadataManifestUploadTimeout = value.stateMetadataManifestUploadTimeout;
      this._translogBufferInterval = value.translogBufferInterval;
      this._translogMaxReaders = value.translogMaxReaders;
    }
  }

  // state_global_metadata_upload_timeout - computed: true, optional: true, required: false
  private _stateGlobalMetadataUploadTimeout?: string; 
  public get stateGlobalMetadataUploadTimeout() {
    return this.getStringAttribute('state_global_metadata_upload_timeout');
  }
  public set stateGlobalMetadataUploadTimeout(value: string) {
    this._stateGlobalMetadataUploadTimeout = value;
  }
  public resetStateGlobalMetadataUploadTimeout() {
    this._stateGlobalMetadataUploadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateGlobalMetadataUploadTimeoutInput() {
    return this._stateGlobalMetadataUploadTimeout;
  }

  // state_metadata_manifest_upload_timeout - computed: true, optional: true, required: false
  private _stateMetadataManifestUploadTimeout?: string; 
  public get stateMetadataManifestUploadTimeout() {
    return this.getStringAttribute('state_metadata_manifest_upload_timeout');
  }
  public set stateMetadataManifestUploadTimeout(value: string) {
    this._stateMetadataManifestUploadTimeout = value;
  }
  public resetStateMetadataManifestUploadTimeout() {
    this._stateMetadataManifestUploadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMetadataManifestUploadTimeoutInput() {
    return this._stateMetadataManifestUploadTimeout;
  }

  // translog_buffer_interval - computed: true, optional: true, required: false
  private _translogBufferInterval?: string; 
  public get translogBufferInterval() {
    return this.getStringAttribute('translog_buffer_interval');
  }
  public set translogBufferInterval(value: string) {
    this._translogBufferInterval = value;
  }
  public resetTranslogBufferInterval() {
    this._translogBufferInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translogBufferIntervalInput() {
    return this._translogBufferInterval;
  }

  // translog_max_readers - computed: true, optional: true, required: false
  private _translogMaxReaders?: number; 
  public get translogMaxReaders() {
    return this.getNumberAttribute('translog_max_readers');
  }
  public set translogMaxReaders(value: number) {
    this._translogMaxReaders = value;
  }
  public resetTranslogMaxReaders() {
    this._translogMaxReaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translogMaxReadersInput() {
    return this._translogMaxReaders;
  }
}
export interface ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold {
  /**
  * Debug threshold for total request took time. The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#debug ManagedDatabaseOpensearch#debug}
  */
  readonly debug?: string;
  /**
  * Info threshold for total request took time. The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#info ManagedDatabaseOpensearch#info}
  */
  readonly info?: string;
  /**
  * Trace threshold for total request took time. The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#trace ManagedDatabaseOpensearch#trace}
  */
  readonly trace?: string;
  /**
  * Warning threshold for total request took time. The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#warn ManagedDatabaseOpensearch#warn}
  */
  readonly warn?: string;
}

export function managedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdToTerraform(struct?: ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference | ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: cdktf.stringToTerraform(struct!.debug),
    info: cdktf.stringToTerraform(struct!.info),
    trace: cdktf.stringToTerraform(struct!.trace),
    warn: cdktf.stringToTerraform(struct!.warn),
  }
}


export function managedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference | ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: cdktf.stringToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info: {
      value: cdktf.stringToHclTerraform(struct!.info),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trace: {
      value: cdktf.stringToHclTerraform(struct!.trace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warn: {
      value: cdktf.stringToHclTerraform(struct!.warn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._info !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info;
    }
    if (this._trace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trace = this._trace;
    }
    if (this._warn !== undefined) {
      hasAnyValues = true;
      internalValueResult.warn = this._warn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debug = undefined;
      this._info = undefined;
      this._trace = undefined;
      this._warn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debug = value.debug;
      this._info = value.info;
      this._trace = value.trace;
      this._warn = value.warn;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: string; 
  public get debug() {
    return this.getStringAttribute('debug');
  }
  public set debug(value: string) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // info - computed: false, optional: true, required: false
  private _info?: string; 
  public get info() {
    return this.getStringAttribute('info');
  }
  public set info(value: string) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: string; 
  public get trace() {
    return this.getStringAttribute('trace');
  }
  public set trace(value: string) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace;
  }

  // warn - computed: false, optional: true, required: false
  private _warn?: string; 
  public get warn() {
    return this.getStringAttribute('warn');
  }
  public set warn(value: string) {
    this._warn = value;
  }
  public resetWarn() {
    this._warn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnInput() {
    return this._warn;
  }
}
export interface ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog {
  /**
  * Log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#level ManagedDatabaseOpensearch#level}
  */
  readonly level?: string;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#threshold ManagedDatabaseOpensearch#threshold}
  */
  readonly threshold?: ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold;
}

export function managedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogToTerraform(struct?: ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference | ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    threshold: managedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdToTerraform(struct!.threshold),
  }
}


export function managedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference | ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: managedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._threshold.internalValue = value.threshold;
    }
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface ManagedDatabaseOpensearchPropertiesDiskWatermarks {
  /**
  * Flood stage watermark (percentage). The flood stage watermark for disk usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#flood_stage ManagedDatabaseOpensearch#flood_stage}
  */
  readonly floodStage?: number;
  /**
  * High watermark (percentage). The high watermark for disk usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#high ManagedDatabaseOpensearch#high}
  */
  readonly high?: number;
  /**
  * Low watermark (percentage). The low watermark for disk usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#low ManagedDatabaseOpensearch#low}
  */
  readonly low?: number;
}

export function managedDatabaseOpensearchPropertiesDiskWatermarksToTerraform(struct?: ManagedDatabaseOpensearchPropertiesDiskWatermarksOutputReference | ManagedDatabaseOpensearchPropertiesDiskWatermarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flood_stage: cdktf.numberToTerraform(struct!.floodStage),
    high: cdktf.numberToTerraform(struct!.high),
    low: cdktf.numberToTerraform(struct!.low),
  }
}


export function managedDatabaseOpensearchPropertiesDiskWatermarksToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesDiskWatermarksOutputReference | ManagedDatabaseOpensearchPropertiesDiskWatermarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flood_stage: {
      value: cdktf.numberToHclTerraform(struct!.floodStage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesDiskWatermarksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesDiskWatermarks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floodStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodStage = this._floodStage;
    }
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesDiskWatermarks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._floodStage = undefined;
      this._high = undefined;
      this._low = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._floodStage = value.floodStage;
      this._high = value.high;
      this._low = value.low;
    }
  }

  // flood_stage - computed: true, optional: true, required: false
  private _floodStage?: number; 
  public get floodStage() {
    return this.getNumberAttribute('flood_stage');
  }
  public set floodStage(value: number) {
    this._floodStage = value;
  }
  public resetFloodStage() {
    this._floodStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodStageInput() {
    return this._floodStage;
  }

  // high - computed: true, optional: true, required: false
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: true, optional: true, required: false
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }
}
export interface ManagedDatabaseOpensearchPropertiesIndexRollup {
  /**
  * plugins.rollup.dashboards.enabled. Whether rollups are enabled in OpenSearch Dashboards. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#rollup_dashboards_enabled ManagedDatabaseOpensearch#rollup_dashboards_enabled}
  */
  readonly rollupDashboardsEnabled?: boolean | cdktf.IResolvable;
  /**
  * plugins.rollup.enabled. Whether the rollup plugin is enabled. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#rollup_enabled ManagedDatabaseOpensearch#rollup_enabled}
  */
  readonly rollupEnabled?: boolean | cdktf.IResolvable;
  /**
  * plugins.rollup.search.backoff_count. How many retries the plugin should attempt for failed rollup jobs. Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#rollup_search_backoff_count ManagedDatabaseOpensearch#rollup_search_backoff_count}
  */
  readonly rollupSearchBackoffCount?: number;
  /**
  * plugins.rollup.search.backoff_millis. The backoff time between retries for failed rollup jobs. Defaults to 1000ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#rollup_search_backoff_millis ManagedDatabaseOpensearch#rollup_search_backoff_millis}
  */
  readonly rollupSearchBackoffMillis?: number;
  /**
  * plugins.rollup.search.all_jobs. Whether OpenSearch should return all jobs that match all specified search terms. If disabled, OpenSearch returns just one, as opposed to all, of the jobs that matches the search terms. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#rollup_search_search_all_jobs ManagedDatabaseOpensearch#rollup_search_search_all_jobs}
  */
  readonly rollupSearchSearchAllJobs?: boolean | cdktf.IResolvable;
}

export function managedDatabaseOpensearchPropertiesIndexRollupToTerraform(struct?: ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference | ManagedDatabaseOpensearchPropertiesIndexRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rollup_dashboards_enabled: cdktf.booleanToTerraform(struct!.rollupDashboardsEnabled),
    rollup_enabled: cdktf.booleanToTerraform(struct!.rollupEnabled),
    rollup_search_backoff_count: cdktf.numberToTerraform(struct!.rollupSearchBackoffCount),
    rollup_search_backoff_millis: cdktf.numberToTerraform(struct!.rollupSearchBackoffMillis),
    rollup_search_search_all_jobs: cdktf.booleanToTerraform(struct!.rollupSearchSearchAllJobs),
  }
}


export function managedDatabaseOpensearchPropertiesIndexRollupToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference | ManagedDatabaseOpensearchPropertiesIndexRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rollup_dashboards_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rollupDashboardsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rollup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rollupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rollup_search_backoff_count: {
      value: cdktf.numberToHclTerraform(struct!.rollupSearchBackoffCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollup_search_backoff_millis: {
      value: cdktf.numberToHclTerraform(struct!.rollupSearchBackoffMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollup_search_search_all_jobs: {
      value: cdktf.booleanToHclTerraform(struct!.rollupSearchSearchAllJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesIndexRollup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollupDashboardsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupDashboardsEnabled = this._rollupDashboardsEnabled;
    }
    if (this._rollupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupEnabled = this._rollupEnabled;
    }
    if (this._rollupSearchBackoffCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupSearchBackoffCount = this._rollupSearchBackoffCount;
    }
    if (this._rollupSearchBackoffMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupSearchBackoffMillis = this._rollupSearchBackoffMillis;
    }
    if (this._rollupSearchSearchAllJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupSearchSearchAllJobs = this._rollupSearchSearchAllJobs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesIndexRollup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rollupDashboardsEnabled = undefined;
      this._rollupEnabled = undefined;
      this._rollupSearchBackoffCount = undefined;
      this._rollupSearchBackoffMillis = undefined;
      this._rollupSearchSearchAllJobs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rollupDashboardsEnabled = value.rollupDashboardsEnabled;
      this._rollupEnabled = value.rollupEnabled;
      this._rollupSearchBackoffCount = value.rollupSearchBackoffCount;
      this._rollupSearchBackoffMillis = value.rollupSearchBackoffMillis;
      this._rollupSearchSearchAllJobs = value.rollupSearchSearchAllJobs;
    }
  }

  // rollup_dashboards_enabled - computed: true, optional: true, required: false
  private _rollupDashboardsEnabled?: boolean | cdktf.IResolvable; 
  public get rollupDashboardsEnabled() {
    return this.getBooleanAttribute('rollup_dashboards_enabled');
  }
  public set rollupDashboardsEnabled(value: boolean | cdktf.IResolvable) {
    this._rollupDashboardsEnabled = value;
  }
  public resetRollupDashboardsEnabled() {
    this._rollupDashboardsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupDashboardsEnabledInput() {
    return this._rollupDashboardsEnabled;
  }

  // rollup_enabled - computed: true, optional: true, required: false
  private _rollupEnabled?: boolean | cdktf.IResolvable; 
  public get rollupEnabled() {
    return this.getBooleanAttribute('rollup_enabled');
  }
  public set rollupEnabled(value: boolean | cdktf.IResolvable) {
    this._rollupEnabled = value;
  }
  public resetRollupEnabled() {
    this._rollupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupEnabledInput() {
    return this._rollupEnabled;
  }

  // rollup_search_backoff_count - computed: true, optional: true, required: false
  private _rollupSearchBackoffCount?: number; 
  public get rollupSearchBackoffCount() {
    return this.getNumberAttribute('rollup_search_backoff_count');
  }
  public set rollupSearchBackoffCount(value: number) {
    this._rollupSearchBackoffCount = value;
  }
  public resetRollupSearchBackoffCount() {
    this._rollupSearchBackoffCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupSearchBackoffCountInput() {
    return this._rollupSearchBackoffCount;
  }

  // rollup_search_backoff_millis - computed: true, optional: true, required: false
  private _rollupSearchBackoffMillis?: number; 
  public get rollupSearchBackoffMillis() {
    return this.getNumberAttribute('rollup_search_backoff_millis');
  }
  public set rollupSearchBackoffMillis(value: number) {
    this._rollupSearchBackoffMillis = value;
  }
  public resetRollupSearchBackoffMillis() {
    this._rollupSearchBackoffMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupSearchBackoffMillisInput() {
    return this._rollupSearchBackoffMillis;
  }

  // rollup_search_search_all_jobs - computed: true, optional: true, required: false
  private _rollupSearchSearchAllJobs?: boolean | cdktf.IResolvable; 
  public get rollupSearchSearchAllJobs() {
    return this.getBooleanAttribute('rollup_search_search_all_jobs');
  }
  public set rollupSearchSearchAllJobs(value: boolean | cdktf.IResolvable) {
    this._rollupSearchSearchAllJobs = value;
  }
  public resetRollupSearchSearchAllJobs() {
    this._rollupSearchSearchAllJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupSearchSearchAllJobsInput() {
    return this._rollupSearchSearchAllJobs;
  }
}
export interface ManagedDatabaseOpensearchPropertiesIndexTemplate {
  /**
  * index.mapping.nested_objects.limit. The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#mapping_nested_objects_limit ManagedDatabaseOpensearch#mapping_nested_objects_limit}
  */
  readonly mappingNestedObjectsLimit?: number;
  /**
  * The number of replicas each primary shard has.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#number_of_replicas ManagedDatabaseOpensearch#number_of_replicas}
  */
  readonly numberOfReplicas?: number;
  /**
  * The number of primary shards that an index should have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#number_of_shards ManagedDatabaseOpensearch#number_of_shards}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#client_id ManagedDatabaseOpensearch#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret of the OpenID Connect. The client secret of the OpenID Connect client configured in your IdP. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#client_secret ManagedDatabaseOpensearch#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OpenID Connect metadata/configuration URL. The URL of your IdP where the Security plugin can find the OpenID Connect metadata/configuration settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#connect_url ManagedDatabaseOpensearch#connect_url}
  */
  readonly connectUrl?: string;
  /**
  * Enable or disable OpenSearch OpenID Connect authentication. Enables or disables OpenID Connect authentication for OpenSearch. When enabled, users can authenticate using OpenID Connect with an Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * HTTP header name of the JWT token. HTTP header name of the JWT token. Optional. Default is Authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#header ManagedDatabaseOpensearch#header}
  */
  readonly header?: string;
  /**
  * The HTTP header that stores the token. The HTTP header that stores the token. Typically the Authorization header with the Bearer schema: Authorization: Bearer <token>. Optional. Default is Authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#jwt_header ManagedDatabaseOpensearch#jwt_header}
  */
  readonly jwtHeader?: string;
  /**
  * URL JWT token. If the token is not transmitted in the HTTP header, but as an URL parameter, define the name of the parameter here. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#jwt_url_parameter ManagedDatabaseOpensearch#jwt_url_parameter}
  */
  readonly jwtUrlParameter?: string;
  /**
  * The maximum number of unknown key IDs in the time frame. The maximum number of unknown key IDs in the time frame. Default is 10. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#refresh_rate_limit_count ManagedDatabaseOpensearch#refresh_rate_limit_count}
  */
  readonly refreshRateLimitCount?: number;
  /**
  * The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. Optional.Default is 10000 (10 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#refresh_rate_limit_time_window_ms ManagedDatabaseOpensearch#refresh_rate_limit_time_window_ms}
  */
  readonly refreshRateLimitTimeWindowMs?: number;
  /**
  * The key in the JSON payload that stores the user’s roles. The key in the JSON payload that stores the user’s roles. The value of this key must be a comma-separated list of roles. Required only if you want to use roles in the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#roles_key ManagedDatabaseOpensearch#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * The scope of the identity token issued by the IdP. The scope of the identity token issued by the IdP. Optional. Default is openid profile email address phone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#scope ManagedDatabaseOpensearch#scope}
  */
  readonly scope?: string;
  /**
  * The key in the JSON payload that stores the user’s name. The key in the JSON payload that stores the user’s name. If not defined, the subject registered claim is used. Most IdP providers use the preferred_username claim. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#subject_key ManagedDatabaseOpensearch#subject_key}
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

  // connect_url - computed: false, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use. This sets the max_old_space_size option of the nodejs running the OpenSearch Dashboards. Note: the memory reserved by OpenSearch Dashboards is not available for OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#max_old_space_size ManagedDatabaseOpensearch#max_old_space_size}
  */
  readonly maxOldSpaceSize?: number;
  /**
  * Enable or disable multiple data sources in OpenSearch Dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#multiple_data_source_enabled ManagedDatabaseOpensearch#multiple_data_source_enabled}
  */
  readonly multipleDataSourceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#opensearch_request_timeout ManagedDatabaseOpensearch#opensearch_request_timeout}
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
    multiple_data_source_enabled: cdktf.booleanToTerraform(struct!.multipleDataSourceEnabled),
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
    multiple_data_source_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.multipleDataSourceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    if (this._multipleDataSourceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleDataSourceEnabled = this._multipleDataSourceEnabled;
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
      this._multipleDataSourceEnabled = undefined;
      this._opensearchRequestTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maxOldSpaceSize = value.maxOldSpaceSize;
      this._multipleDataSourceEnabled = value.multipleDataSourceEnabled;
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

  // multiple_data_source_enabled - computed: true, optional: true, required: false
  private _multipleDataSourceEnabled?: boolean | cdktf.IResolvable; 
  public get multipleDataSourceEnabled() {
    return this.getBooleanAttribute('multiple_data_source_enabled');
  }
  public set multipleDataSourceEnabled(value: boolean | cdktf.IResolvable) {
    this._multipleDataSourceEnabled = value;
  }
  public resetMultipleDataSourceEnabled() {
    this._multipleDataSourceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleDataSourceEnabledInput() {
    return this._multipleDataSourceEnabled;
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
export interface ManagedDatabaseOpensearchPropertiesRemoteStore {
  /**
  * The variance factor that is used to calculate the dynamic bytes lag threshold. The variance factor that is used together with the moving average to calculate the dynamic bytes lag threshold for activating remote segment backpressure. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#segment_pressure_bytes_lag_variance_factor ManagedDatabaseOpensearch#segment_pressure_bytes_lag_variance_factor}
  */
  readonly segmentPressureBytesLagVarianceFactor?: number;
  /**
  * The minimum consecutive failure count for activating remote segment backpressure. The minimum consecutive failure count for activating remote segment backpressure. Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#segment_pressure_consecutive_failures_limit ManagedDatabaseOpensearch#segment_pressure_consecutive_failures_limit}
  */
  readonly segmentPressureConsecutiveFailuresLimit?: number;
  /**
  * Enables remote segment backpressure. Enables remote segment backpressure. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#segment_pressure_enabled ManagedDatabaseOpensearch#segment_pressure_enabled}
  */
  readonly segmentPressureEnabled?: boolean | cdktf.IResolvable;
  /**
  * The variance factor that is used to calculate the dynamic bytes lag threshold. The variance factor that is used together with the moving average to calculate the dynamic time lag threshold for activating remote segment backpressure. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#segment_pressure_time_lag_variance_factor ManagedDatabaseOpensearch#segment_pressure_time_lag_variance_factor}
  */
  readonly segmentPressureTimeLagVarianceFactor?: number;
}

export function managedDatabaseOpensearchPropertiesRemoteStoreToTerraform(struct?: ManagedDatabaseOpensearchPropertiesRemoteStoreOutputReference | ManagedDatabaseOpensearchPropertiesRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segment_pressure_bytes_lag_variance_factor: cdktf.numberToTerraform(struct!.segmentPressureBytesLagVarianceFactor),
    segment_pressure_consecutive_failures_limit: cdktf.numberToTerraform(struct!.segmentPressureConsecutiveFailuresLimit),
    segment_pressure_enabled: cdktf.booleanToTerraform(struct!.segmentPressureEnabled),
    segment_pressure_time_lag_variance_factor: cdktf.numberToTerraform(struct!.segmentPressureTimeLagVarianceFactor),
  }
}


export function managedDatabaseOpensearchPropertiesRemoteStoreToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesRemoteStoreOutputReference | ManagedDatabaseOpensearchPropertiesRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segment_pressure_bytes_lag_variance_factor: {
      value: cdktf.numberToHclTerraform(struct!.segmentPressureBytesLagVarianceFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_pressure_consecutive_failures_limit: {
      value: cdktf.numberToHclTerraform(struct!.segmentPressureConsecutiveFailuresLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_pressure_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.segmentPressureEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_pressure_time_lag_variance_factor: {
      value: cdktf.numberToHclTerraform(struct!.segmentPressureTimeLagVarianceFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesRemoteStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesRemoteStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentPressureBytesLagVarianceFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentPressureBytesLagVarianceFactor = this._segmentPressureBytesLagVarianceFactor;
    }
    if (this._segmentPressureConsecutiveFailuresLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentPressureConsecutiveFailuresLimit = this._segmentPressureConsecutiveFailuresLimit;
    }
    if (this._segmentPressureEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentPressureEnabled = this._segmentPressureEnabled;
    }
    if (this._segmentPressureTimeLagVarianceFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentPressureTimeLagVarianceFactor = this._segmentPressureTimeLagVarianceFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesRemoteStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segmentPressureBytesLagVarianceFactor = undefined;
      this._segmentPressureConsecutiveFailuresLimit = undefined;
      this._segmentPressureEnabled = undefined;
      this._segmentPressureTimeLagVarianceFactor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segmentPressureBytesLagVarianceFactor = value.segmentPressureBytesLagVarianceFactor;
      this._segmentPressureConsecutiveFailuresLimit = value.segmentPressureConsecutiveFailuresLimit;
      this._segmentPressureEnabled = value.segmentPressureEnabled;
      this._segmentPressureTimeLagVarianceFactor = value.segmentPressureTimeLagVarianceFactor;
    }
  }

  // segment_pressure_bytes_lag_variance_factor - computed: true, optional: true, required: false
  private _segmentPressureBytesLagVarianceFactor?: number; 
  public get segmentPressureBytesLagVarianceFactor() {
    return this.getNumberAttribute('segment_pressure_bytes_lag_variance_factor');
  }
  public set segmentPressureBytesLagVarianceFactor(value: number) {
    this._segmentPressureBytesLagVarianceFactor = value;
  }
  public resetSegmentPressureBytesLagVarianceFactor() {
    this._segmentPressureBytesLagVarianceFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPressureBytesLagVarianceFactorInput() {
    return this._segmentPressureBytesLagVarianceFactor;
  }

  // segment_pressure_consecutive_failures_limit - computed: true, optional: true, required: false
  private _segmentPressureConsecutiveFailuresLimit?: number; 
  public get segmentPressureConsecutiveFailuresLimit() {
    return this.getNumberAttribute('segment_pressure_consecutive_failures_limit');
  }
  public set segmentPressureConsecutiveFailuresLimit(value: number) {
    this._segmentPressureConsecutiveFailuresLimit = value;
  }
  public resetSegmentPressureConsecutiveFailuresLimit() {
    this._segmentPressureConsecutiveFailuresLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPressureConsecutiveFailuresLimitInput() {
    return this._segmentPressureConsecutiveFailuresLimit;
  }

  // segment_pressure_enabled - computed: true, optional: true, required: false
  private _segmentPressureEnabled?: boolean | cdktf.IResolvable; 
  public get segmentPressureEnabled() {
    return this.getBooleanAttribute('segment_pressure_enabled');
  }
  public set segmentPressureEnabled(value: boolean | cdktf.IResolvable) {
    this._segmentPressureEnabled = value;
  }
  public resetSegmentPressureEnabled() {
    this._segmentPressureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPressureEnabledInput() {
    return this._segmentPressureEnabled;
  }

  // segment_pressure_time_lag_variance_factor - computed: true, optional: true, required: false
  private _segmentPressureTimeLagVarianceFactor?: number; 
  public get segmentPressureTimeLagVarianceFactor() {
    return this.getNumberAttribute('segment_pressure_time_lag_variance_factor');
  }
  public set segmentPressureTimeLagVarianceFactor(value: number) {
    this._segmentPressureTimeLagVarianceFactor = value;
  }
  public resetSegmentPressureTimeLagVarianceFactor() {
    this._segmentPressureTimeLagVarianceFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPressureTimeLagVarianceFactorInput() {
    return this._segmentPressureTimeLagVarianceFactor;
  }
}
export interface ManagedDatabaseOpensearchPropertiesSaml {
  /**
  * Enable or disable OpenSearch SAML authentication. Enables or disables SAML-based authentication for OpenSearch. When enabled, users can authenticate using SAML with an Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Identity Provider Entity ID. The unique identifier for the Identity Provider (IdP) entity that is used for SAML authentication. This value is typically provided by the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#idp_entity_id ManagedDatabaseOpensearch#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Identity Provider (IdP) SAML metadata URL. The URL of the SAML metadata for the Identity Provider (IdP). This is used to configure SAML-based authentication with the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#idp_metadata_url ManagedDatabaseOpensearch#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * PEM-encoded root CA Content for SAML IdP server verification. This parameter specifies the PEM-encoded root certificate authority (CA) content for the SAML identity provider (IdP) server verification. The root CA content is used to verify the SSL/TLS certificate presented by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#idp_pemtrustedcas_content ManagedDatabaseOpensearch#idp_pemtrustedcas_content}
  */
  readonly idpPemtrustedcasContent?: string;
  /**
  * SAML response role attribute. Optional. Specifies the attribute in the SAML response where role information is stored, if available. Role attributes are not required for SAML authentication, but can be included in SAML assertions by most Identity Providers (IdPs) to determine user access levels or permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#roles_key ManagedDatabaseOpensearch#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Service Provider Entity ID. The unique identifier for the Service Provider (SP) entity that is used for SAML authentication. This value is typically provided by the SP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#sp_entity_id ManagedDatabaseOpensearch#sp_entity_id}
  */
  readonly spEntityId?: string;
  /**
  * SAML response subject attribute. Optional. Specifies the attribute in the SAML response where the subject identifier is stored. If not configured, the NameID attribute is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#subject_key ManagedDatabaseOpensearch#subject_key}
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
export interface ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress {
  /**
  * The CPU usage threshold (as a percentage) required for a node to be considered to be under duress. The CPU usage threshold (as a percentage) required for a node to be considered to be under duress. Default is 0.9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cpu_threshold ManagedDatabaseOpensearch#cpu_threshold}
  */
  readonly cpuThreshold?: number;
  /**
  * The heap usage threshold (as a percentage) required for a node to be considered to be under duress. The heap usage threshold (as a percentage) required for a node to be considered to be under duress. Default is 0.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#heap_threshold ManagedDatabaseOpensearch#heap_threshold}
  */
  readonly heapThreshold?: number;
  /**
  * The number of successive limit breaches after which the node is considered to be under duress. The number of successive limit breaches after which the node is considered to be under duress. Default is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#num_successive_breaches ManagedDatabaseOpensearch#num_successive_breaches}
  */
  readonly numSuccessiveBreaches?: number;
}

export function managedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressToTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference | ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_threshold: cdktf.numberToTerraform(struct!.cpuThreshold),
    heap_threshold: cdktf.numberToTerraform(struct!.heapThreshold),
    num_successive_breaches: cdktf.numberToTerraform(struct!.numSuccessiveBreaches),
  }
}


export function managedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference | ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_threshold: {
      value: cdktf.numberToHclTerraform(struct!.heapThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_successive_breaches: {
      value: cdktf.numberToHclTerraform(struct!.numSuccessiveBreaches),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuThreshold = this._cpuThreshold;
    }
    if (this._heapThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapThreshold = this._heapThreshold;
    }
    if (this._numSuccessiveBreaches !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSuccessiveBreaches = this._numSuccessiveBreaches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuThreshold = undefined;
      this._heapThreshold = undefined;
      this._numSuccessiveBreaches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuThreshold = value.cpuThreshold;
      this._heapThreshold = value.heapThreshold;
      this._numSuccessiveBreaches = value.numSuccessiveBreaches;
    }
  }

  // cpu_threshold - computed: true, optional: true, required: false
  private _cpuThreshold?: number; 
  public get cpuThreshold() {
    return this.getNumberAttribute('cpu_threshold');
  }
  public set cpuThreshold(value: number) {
    this._cpuThreshold = value;
  }
  public resetCpuThreshold() {
    this._cpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThresholdInput() {
    return this._cpuThreshold;
  }

  // heap_threshold - computed: true, optional: true, required: false
  private _heapThreshold?: number; 
  public get heapThreshold() {
    return this.getNumberAttribute('heap_threshold');
  }
  public set heapThreshold(value: number) {
    this._heapThreshold = value;
  }
  public resetHeapThreshold() {
    this._heapThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapThresholdInput() {
    return this._heapThreshold;
  }

  // num_successive_breaches - computed: true, optional: true, required: false
  private _numSuccessiveBreaches?: number; 
  public get numSuccessiveBreaches() {
    return this.getNumberAttribute('num_successive_breaches');
  }
  public set numSuccessiveBreaches(value: number) {
    this._numSuccessiveBreaches = value;
  }
  public resetNumSuccessiveBreaches() {
    this._numSuccessiveBreaches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSuccessiveBreachesInput() {
    return this._numSuccessiveBreaches;
  }
}
export interface ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask {
  /**
  * The maximum number of search tasks to cancel in a single iteration of the observer thread. The maximum number of search tasks to cancel in a single iteration of the observer thread. Default is 10.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cancellation_burst ManagedDatabaseOpensearch#cancellation_burst}
  */
  readonly cancellationBurst?: number;
  /**
  * The maximum number of tasks to cancel per millisecond of elapsed time. The maximum number of tasks to cancel per millisecond of elapsed time. Default is 0.003.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cancellation_rate ManagedDatabaseOpensearch#cancellation_rate}
  */
  readonly cancellationRate?: number;
  /**
  * The maximum number of tasks to cancel. The maximum number of tasks to cancel, as a percentage of successful task completions. Default is 0.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cancellation_ratio ManagedDatabaseOpensearch#cancellation_ratio}
  */
  readonly cancellationRatio?: number;
  /**
  * The CPU usage threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. The CPU usage threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. Default is 15000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cpu_time_millis_threshold ManagedDatabaseOpensearch#cpu_time_millis_threshold}
  */
  readonly cpuTimeMillisThreshold?: number;
  /**
  * The elapsed time threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. The elapsed time threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. Default is 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#elapsed_time_millis_threshold ManagedDatabaseOpensearch#elapsed_time_millis_threshold}
  */
  readonly elapsedTimeMillisThreshold?: number;
  /**
  * The number of previously completed search shard tasks to consider when calculating the rolling average of heap usage. The number of previously completed search shard tasks to consider when calculating the rolling average of heap usage. Default is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#heap_moving_average_window_size ManagedDatabaseOpensearch#heap_moving_average_window_size}
  */
  readonly heapMovingAverageWindowSize?: number;
  /**
  * The heap usage threshold (as a percentage) required for a single search shard task before it is considered for cancellation. The heap usage threshold (as a percentage) required for a single search shard task before it is considered for cancellation. Default is 0.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#heap_percent_threshold ManagedDatabaseOpensearch#heap_percent_threshold}
  */
  readonly heapPercentThreshold?: number;
  /**
  * The minimum variance required for a single search shard task’s heap usage compared to the rolling average of previously completed tasks before it is considered for cancellation. The minimum variance required for a single search shard task’s heap usage compared to the rolling average of previously completed tasks before it is considered for cancellation. Default is 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#heap_variance ManagedDatabaseOpensearch#heap_variance}
  */
  readonly heapVariance?: number;
  /**
  * The heap usage threshold (as a percentage) required for the sum of heap usages of all search shard tasks before cancellation is applied. The heap usage threshold (as a percentage) required for the sum of heap usages of all search shard tasks before cancellation is applied. Default is 0.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#total_heap_percent_threshold ManagedDatabaseOpensearch#total_heap_percent_threshold}
  */
  readonly totalHeapPercentThreshold?: number;
}

export function managedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskToTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference | ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancellation_burst: cdktf.numberToTerraform(struct!.cancellationBurst),
    cancellation_rate: cdktf.numberToTerraform(struct!.cancellationRate),
    cancellation_ratio: cdktf.numberToTerraform(struct!.cancellationRatio),
    cpu_time_millis_threshold: cdktf.numberToTerraform(struct!.cpuTimeMillisThreshold),
    elapsed_time_millis_threshold: cdktf.numberToTerraform(struct!.elapsedTimeMillisThreshold),
    heap_moving_average_window_size: cdktf.numberToTerraform(struct!.heapMovingAverageWindowSize),
    heap_percent_threshold: cdktf.numberToTerraform(struct!.heapPercentThreshold),
    heap_variance: cdktf.numberToTerraform(struct!.heapVariance),
    total_heap_percent_threshold: cdktf.numberToTerraform(struct!.totalHeapPercentThreshold),
  }
}


export function managedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference | ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancellation_burst: {
      value: cdktf.numberToHclTerraform(struct!.cancellationBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancellation_rate: {
      value: cdktf.numberToHclTerraform(struct!.cancellationRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancellation_ratio: {
      value: cdktf.numberToHclTerraform(struct!.cancellationRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_time_millis_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuTimeMillisThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elapsed_time_millis_threshold: {
      value: cdktf.numberToHclTerraform(struct!.elapsedTimeMillisThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_moving_average_window_size: {
      value: cdktf.numberToHclTerraform(struct!.heapMovingAverageWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_percent_threshold: {
      value: cdktf.numberToHclTerraform(struct!.heapPercentThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_variance: {
      value: cdktf.numberToHclTerraform(struct!.heapVariance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_heap_percent_threshold: {
      value: cdktf.numberToHclTerraform(struct!.totalHeapPercentThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancellationBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationBurst = this._cancellationBurst;
    }
    if (this._cancellationRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationRate = this._cancellationRate;
    }
    if (this._cancellationRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationRatio = this._cancellationRatio;
    }
    if (this._cpuTimeMillisThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuTimeMillisThreshold = this._cpuTimeMillisThreshold;
    }
    if (this._elapsedTimeMillisThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.elapsedTimeMillisThreshold = this._elapsedTimeMillisThreshold;
    }
    if (this._heapMovingAverageWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapMovingAverageWindowSize = this._heapMovingAverageWindowSize;
    }
    if (this._heapPercentThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapPercentThreshold = this._heapPercentThreshold;
    }
    if (this._heapVariance !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapVariance = this._heapVariance;
    }
    if (this._totalHeapPercentThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHeapPercentThreshold = this._totalHeapPercentThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cancellationBurst = undefined;
      this._cancellationRate = undefined;
      this._cancellationRatio = undefined;
      this._cpuTimeMillisThreshold = undefined;
      this._elapsedTimeMillisThreshold = undefined;
      this._heapMovingAverageWindowSize = undefined;
      this._heapPercentThreshold = undefined;
      this._heapVariance = undefined;
      this._totalHeapPercentThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cancellationBurst = value.cancellationBurst;
      this._cancellationRate = value.cancellationRate;
      this._cancellationRatio = value.cancellationRatio;
      this._cpuTimeMillisThreshold = value.cpuTimeMillisThreshold;
      this._elapsedTimeMillisThreshold = value.elapsedTimeMillisThreshold;
      this._heapMovingAverageWindowSize = value.heapMovingAverageWindowSize;
      this._heapPercentThreshold = value.heapPercentThreshold;
      this._heapVariance = value.heapVariance;
      this._totalHeapPercentThreshold = value.totalHeapPercentThreshold;
    }
  }

  // cancellation_burst - computed: true, optional: true, required: false
  private _cancellationBurst?: number; 
  public get cancellationBurst() {
    return this.getNumberAttribute('cancellation_burst');
  }
  public set cancellationBurst(value: number) {
    this._cancellationBurst = value;
  }
  public resetCancellationBurst() {
    this._cancellationBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationBurstInput() {
    return this._cancellationBurst;
  }

  // cancellation_rate - computed: true, optional: true, required: false
  private _cancellationRate?: number; 
  public get cancellationRate() {
    return this.getNumberAttribute('cancellation_rate');
  }
  public set cancellationRate(value: number) {
    this._cancellationRate = value;
  }
  public resetCancellationRate() {
    this._cancellationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationRateInput() {
    return this._cancellationRate;
  }

  // cancellation_ratio - computed: true, optional: true, required: false
  private _cancellationRatio?: number; 
  public get cancellationRatio() {
    return this.getNumberAttribute('cancellation_ratio');
  }
  public set cancellationRatio(value: number) {
    this._cancellationRatio = value;
  }
  public resetCancellationRatio() {
    this._cancellationRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationRatioInput() {
    return this._cancellationRatio;
  }

  // cpu_time_millis_threshold - computed: true, optional: true, required: false
  private _cpuTimeMillisThreshold?: number; 
  public get cpuTimeMillisThreshold() {
    return this.getNumberAttribute('cpu_time_millis_threshold');
  }
  public set cpuTimeMillisThreshold(value: number) {
    this._cpuTimeMillisThreshold = value;
  }
  public resetCpuTimeMillisThreshold() {
    this._cpuTimeMillisThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTimeMillisThresholdInput() {
    return this._cpuTimeMillisThreshold;
  }

  // elapsed_time_millis_threshold - computed: true, optional: true, required: false
  private _elapsedTimeMillisThreshold?: number; 
  public get elapsedTimeMillisThreshold() {
    return this.getNumberAttribute('elapsed_time_millis_threshold');
  }
  public set elapsedTimeMillisThreshold(value: number) {
    this._elapsedTimeMillisThreshold = value;
  }
  public resetElapsedTimeMillisThreshold() {
    this._elapsedTimeMillisThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elapsedTimeMillisThresholdInput() {
    return this._elapsedTimeMillisThreshold;
  }

  // heap_moving_average_window_size - computed: true, optional: true, required: false
  private _heapMovingAverageWindowSize?: number; 
  public get heapMovingAverageWindowSize() {
    return this.getNumberAttribute('heap_moving_average_window_size');
  }
  public set heapMovingAverageWindowSize(value: number) {
    this._heapMovingAverageWindowSize = value;
  }
  public resetHeapMovingAverageWindowSize() {
    this._heapMovingAverageWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapMovingAverageWindowSizeInput() {
    return this._heapMovingAverageWindowSize;
  }

  // heap_percent_threshold - computed: true, optional: true, required: false
  private _heapPercentThreshold?: number; 
  public get heapPercentThreshold() {
    return this.getNumberAttribute('heap_percent_threshold');
  }
  public set heapPercentThreshold(value: number) {
    this._heapPercentThreshold = value;
  }
  public resetHeapPercentThreshold() {
    this._heapPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapPercentThresholdInput() {
    return this._heapPercentThreshold;
  }

  // heap_variance - computed: true, optional: true, required: false
  private _heapVariance?: number; 
  public get heapVariance() {
    return this.getNumberAttribute('heap_variance');
  }
  public set heapVariance(value: number) {
    this._heapVariance = value;
  }
  public resetHeapVariance() {
    this._heapVariance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapVarianceInput() {
    return this._heapVariance;
  }

  // total_heap_percent_threshold - computed: true, optional: true, required: false
  private _totalHeapPercentThreshold?: number; 
  public get totalHeapPercentThreshold() {
    return this.getNumberAttribute('total_heap_percent_threshold');
  }
  public set totalHeapPercentThreshold(value: number) {
    this._totalHeapPercentThreshold = value;
  }
  public resetTotalHeapPercentThreshold() {
    this._totalHeapPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHeapPercentThresholdInput() {
    return this._totalHeapPercentThreshold;
  }
}
export interface ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask {
  /**
  * The maximum number of search tasks to cancel in a single iteration of the observer thread. The maximum number of search tasks to cancel in a single iteration of the observer thread. Default is 5.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cancellation_burst ManagedDatabaseOpensearch#cancellation_burst}
  */
  readonly cancellationBurst?: number;
  /**
  * The maximum number of search tasks to cancel per millisecond of elapsed time. The maximum number of search tasks to cancel per millisecond of elapsed time. Default is 0.003.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cancellation_rate ManagedDatabaseOpensearch#cancellation_rate}
  */
  readonly cancellationRate?: number;
  /**
  * The maximum number of search tasks to cancel, as a percentage of successful search task completions. The maximum number of search tasks to cancel, as a percentage of successful search task completions. Default is 0.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cancellation_ratio ManagedDatabaseOpensearch#cancellation_ratio}
  */
  readonly cancellationRatio?: number;
  /**
  * The CPU usage threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. The CPU usage threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. Default is 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cpu_time_millis_threshold ManagedDatabaseOpensearch#cpu_time_millis_threshold}
  */
  readonly cpuTimeMillisThreshold?: number;
  /**
  * The elapsed time threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. The elapsed time threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. Default is 45000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#elapsed_time_millis_threshold ManagedDatabaseOpensearch#elapsed_time_millis_threshold}
  */
  readonly elapsedTimeMillisThreshold?: number;
  /**
  * The window size used to calculate the rolling average of the heap usage for the completed parent tasks. The window size used to calculate the rolling average of the heap usage for the completed parent tasks. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#heap_moving_average_window_size ManagedDatabaseOpensearch#heap_moving_average_window_size}
  */
  readonly heapMovingAverageWindowSize?: number;
  /**
  * The heap usage threshold (as a percentage) required for an individual parent task before it is considered for cancellation. The heap usage threshold (as a percentage) required for an individual parent task before it is considered for cancellation. Default is 0.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#heap_percent_threshold ManagedDatabaseOpensearch#heap_percent_threshold}
  */
  readonly heapPercentThreshold?: number;
  /**
  * The heap usage variance required for an individual parent task before it is considered for cancellation. The heap usage variance required for an individual parent task before it is considered for cancellation. A task is considered for cancellation when taskHeapUsage is greater than or equal to heapUsageMovingAverage * variance. Default is 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#heap_variance ManagedDatabaseOpensearch#heap_variance}
  */
  readonly heapVariance?: number;
  /**
  * The heap usage threshold (as a percentage) required for the sum of heap usages of all search tasks before cancellation is applied. The heap usage threshold (as a percentage) required for the sum of heap usages of all search tasks before cancellation is applied. Default is 0.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#total_heap_percent_threshold ManagedDatabaseOpensearch#total_heap_percent_threshold}
  */
  readonly totalHeapPercentThreshold?: number;
}

export function managedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskToTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference | ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancellation_burst: cdktf.numberToTerraform(struct!.cancellationBurst),
    cancellation_rate: cdktf.numberToTerraform(struct!.cancellationRate),
    cancellation_ratio: cdktf.numberToTerraform(struct!.cancellationRatio),
    cpu_time_millis_threshold: cdktf.numberToTerraform(struct!.cpuTimeMillisThreshold),
    elapsed_time_millis_threshold: cdktf.numberToTerraform(struct!.elapsedTimeMillisThreshold),
    heap_moving_average_window_size: cdktf.numberToTerraform(struct!.heapMovingAverageWindowSize),
    heap_percent_threshold: cdktf.numberToTerraform(struct!.heapPercentThreshold),
    heap_variance: cdktf.numberToTerraform(struct!.heapVariance),
    total_heap_percent_threshold: cdktf.numberToTerraform(struct!.totalHeapPercentThreshold),
  }
}


export function managedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference | ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancellation_burst: {
      value: cdktf.numberToHclTerraform(struct!.cancellationBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancellation_rate: {
      value: cdktf.numberToHclTerraform(struct!.cancellationRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancellation_ratio: {
      value: cdktf.numberToHclTerraform(struct!.cancellationRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_time_millis_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuTimeMillisThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elapsed_time_millis_threshold: {
      value: cdktf.numberToHclTerraform(struct!.elapsedTimeMillisThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_moving_average_window_size: {
      value: cdktf.numberToHclTerraform(struct!.heapMovingAverageWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_percent_threshold: {
      value: cdktf.numberToHclTerraform(struct!.heapPercentThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_variance: {
      value: cdktf.numberToHclTerraform(struct!.heapVariance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_heap_percent_threshold: {
      value: cdktf.numberToHclTerraform(struct!.totalHeapPercentThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancellationBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationBurst = this._cancellationBurst;
    }
    if (this._cancellationRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationRate = this._cancellationRate;
    }
    if (this._cancellationRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationRatio = this._cancellationRatio;
    }
    if (this._cpuTimeMillisThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuTimeMillisThreshold = this._cpuTimeMillisThreshold;
    }
    if (this._elapsedTimeMillisThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.elapsedTimeMillisThreshold = this._elapsedTimeMillisThreshold;
    }
    if (this._heapMovingAverageWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapMovingAverageWindowSize = this._heapMovingAverageWindowSize;
    }
    if (this._heapPercentThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapPercentThreshold = this._heapPercentThreshold;
    }
    if (this._heapVariance !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapVariance = this._heapVariance;
    }
    if (this._totalHeapPercentThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHeapPercentThreshold = this._totalHeapPercentThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cancellationBurst = undefined;
      this._cancellationRate = undefined;
      this._cancellationRatio = undefined;
      this._cpuTimeMillisThreshold = undefined;
      this._elapsedTimeMillisThreshold = undefined;
      this._heapMovingAverageWindowSize = undefined;
      this._heapPercentThreshold = undefined;
      this._heapVariance = undefined;
      this._totalHeapPercentThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cancellationBurst = value.cancellationBurst;
      this._cancellationRate = value.cancellationRate;
      this._cancellationRatio = value.cancellationRatio;
      this._cpuTimeMillisThreshold = value.cpuTimeMillisThreshold;
      this._elapsedTimeMillisThreshold = value.elapsedTimeMillisThreshold;
      this._heapMovingAverageWindowSize = value.heapMovingAverageWindowSize;
      this._heapPercentThreshold = value.heapPercentThreshold;
      this._heapVariance = value.heapVariance;
      this._totalHeapPercentThreshold = value.totalHeapPercentThreshold;
    }
  }

  // cancellation_burst - computed: true, optional: true, required: false
  private _cancellationBurst?: number; 
  public get cancellationBurst() {
    return this.getNumberAttribute('cancellation_burst');
  }
  public set cancellationBurst(value: number) {
    this._cancellationBurst = value;
  }
  public resetCancellationBurst() {
    this._cancellationBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationBurstInput() {
    return this._cancellationBurst;
  }

  // cancellation_rate - computed: true, optional: true, required: false
  private _cancellationRate?: number; 
  public get cancellationRate() {
    return this.getNumberAttribute('cancellation_rate');
  }
  public set cancellationRate(value: number) {
    this._cancellationRate = value;
  }
  public resetCancellationRate() {
    this._cancellationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationRateInput() {
    return this._cancellationRate;
  }

  // cancellation_ratio - computed: true, optional: true, required: false
  private _cancellationRatio?: number; 
  public get cancellationRatio() {
    return this.getNumberAttribute('cancellation_ratio');
  }
  public set cancellationRatio(value: number) {
    this._cancellationRatio = value;
  }
  public resetCancellationRatio() {
    this._cancellationRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationRatioInput() {
    return this._cancellationRatio;
  }

  // cpu_time_millis_threshold - computed: true, optional: true, required: false
  private _cpuTimeMillisThreshold?: number; 
  public get cpuTimeMillisThreshold() {
    return this.getNumberAttribute('cpu_time_millis_threshold');
  }
  public set cpuTimeMillisThreshold(value: number) {
    this._cpuTimeMillisThreshold = value;
  }
  public resetCpuTimeMillisThreshold() {
    this._cpuTimeMillisThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTimeMillisThresholdInput() {
    return this._cpuTimeMillisThreshold;
  }

  // elapsed_time_millis_threshold - computed: true, optional: true, required: false
  private _elapsedTimeMillisThreshold?: number; 
  public get elapsedTimeMillisThreshold() {
    return this.getNumberAttribute('elapsed_time_millis_threshold');
  }
  public set elapsedTimeMillisThreshold(value: number) {
    this._elapsedTimeMillisThreshold = value;
  }
  public resetElapsedTimeMillisThreshold() {
    this._elapsedTimeMillisThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elapsedTimeMillisThresholdInput() {
    return this._elapsedTimeMillisThreshold;
  }

  // heap_moving_average_window_size - computed: true, optional: true, required: false
  private _heapMovingAverageWindowSize?: number; 
  public get heapMovingAverageWindowSize() {
    return this.getNumberAttribute('heap_moving_average_window_size');
  }
  public set heapMovingAverageWindowSize(value: number) {
    this._heapMovingAverageWindowSize = value;
  }
  public resetHeapMovingAverageWindowSize() {
    this._heapMovingAverageWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapMovingAverageWindowSizeInput() {
    return this._heapMovingAverageWindowSize;
  }

  // heap_percent_threshold - computed: true, optional: true, required: false
  private _heapPercentThreshold?: number; 
  public get heapPercentThreshold() {
    return this.getNumberAttribute('heap_percent_threshold');
  }
  public set heapPercentThreshold(value: number) {
    this._heapPercentThreshold = value;
  }
  public resetHeapPercentThreshold() {
    this._heapPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapPercentThresholdInput() {
    return this._heapPercentThreshold;
  }

  // heap_variance - computed: true, optional: true, required: false
  private _heapVariance?: number; 
  public get heapVariance() {
    return this.getNumberAttribute('heap_variance');
  }
  public set heapVariance(value: number) {
    this._heapVariance = value;
  }
  public resetHeapVariance() {
    this._heapVariance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapVarianceInput() {
    return this._heapVariance;
  }

  // total_heap_percent_threshold - computed: true, optional: true, required: false
  private _totalHeapPercentThreshold?: number; 
  public get totalHeapPercentThreshold() {
    return this.getNumberAttribute('total_heap_percent_threshold');
  }
  public set totalHeapPercentThreshold(value: number) {
    this._totalHeapPercentThreshold = value;
  }
  public resetTotalHeapPercentThreshold() {
    this._totalHeapPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHeapPercentThresholdInput() {
    return this._totalHeapPercentThreshold;
  }
}
export interface ManagedDatabaseOpensearchPropertiesSearchBackpressure {
  /**
  * The search backpressure mode. The search backpressure mode. Valid values are monitor_only, enforced, or disabled. Default is monitor_only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#mode ManagedDatabaseOpensearch#mode}
  */
  readonly mode?: string;
  /**
  * node_duress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#node_duress ManagedDatabaseOpensearch#node_duress}
  */
  readonly nodeDuress?: ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress;
  /**
  * search_shard_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#search_shard_task ManagedDatabaseOpensearch#search_shard_task}
  */
  readonly searchShardTask?: ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask;
  /**
  * search_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#search_task ManagedDatabaseOpensearch#search_task}
  */
  readonly searchTask?: ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask;
}

export function managedDatabaseOpensearchPropertiesSearchBackpressureToTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference | ManagedDatabaseOpensearchPropertiesSearchBackpressure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    node_duress: managedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressToTerraform(struct!.nodeDuress),
    search_shard_task: managedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskToTerraform(struct!.searchShardTask),
    search_task: managedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskToTerraform(struct!.searchTask),
  }
}


export function managedDatabaseOpensearchPropertiesSearchBackpressureToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference | ManagedDatabaseOpensearchPropertiesSearchBackpressure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_duress: {
      value: managedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressToHclTerraform(struct!.nodeDuress),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressList",
    },
    search_shard_task: {
      value: managedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskToHclTerraform(struct!.searchShardTask),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskList",
    },
    search_task: {
      value: managedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskToHclTerraform(struct!.searchTask),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesSearchBackpressure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nodeDuress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDuress = this._nodeDuress?.internalValue;
    }
    if (this._searchShardTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchShardTask = this._searchShardTask?.internalValue;
    }
    if (this._searchTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchTask = this._searchTask?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesSearchBackpressure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._nodeDuress.internalValue = undefined;
      this._searchShardTask.internalValue = undefined;
      this._searchTask.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._nodeDuress.internalValue = value.nodeDuress;
      this._searchShardTask.internalValue = value.searchShardTask;
      this._searchTask.internalValue = value.searchTask;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // node_duress - computed: false, optional: true, required: false
  private _nodeDuress = new ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference(this, "node_duress");
  public get nodeDuress() {
    return this._nodeDuress;
  }
  public putNodeDuress(value: ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress) {
    this._nodeDuress.internalValue = value;
  }
  public resetNodeDuress() {
    this._nodeDuress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDuressInput() {
    return this._nodeDuress.internalValue;
  }

  // search_shard_task - computed: false, optional: true, required: false
  private _searchShardTask = new ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference(this, "search_shard_task");
  public get searchShardTask() {
    return this._searchShardTask;
  }
  public putSearchShardTask(value: ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask) {
    this._searchShardTask.internalValue = value;
  }
  public resetSearchShardTask() {
    this._searchShardTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchShardTaskInput() {
    return this._searchShardTask.internalValue;
  }

  // search_task - computed: false, optional: true, required: false
  private _searchTask = new ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference(this, "search_task");
  public get searchTask() {
    return this._searchTask;
  }
  public putSearchTask(value: ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask) {
    this._searchTask.internalValue = value;
  }
  public resetSearchTask() {
    this._searchTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTaskInput() {
    return this._searchTask.internalValue;
  }
}
export interface ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu {
  /**
  * Enable or disable top N query monitoring by the metric. Enable or disable top N query monitoring by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the value of N for the top N queries by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#top_n_size ManagedDatabaseOpensearch#top_n_size}
  */
  readonly topNSize?: number;
  /**
  * The window size of the top N queries by the metric. Configure the window size of the top N queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#window_size ManagedDatabaseOpensearch#window_size}
  */
  readonly windowSize?: string;
}

export function managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuToTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference | ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    top_n_size: cdktf.numberToTerraform(struct!.topNSize),
    window_size: cdktf.stringToTerraform(struct!.windowSize),
  }
}


export function managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference | ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu): any {
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
    top_n_size: {
      value: cdktf.numberToHclTerraform(struct!.topNSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_size: {
      value: cdktf.stringToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topNSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.topNSize = this._topNSize;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topNSize = undefined;
      this._windowSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topNSize = value.topNSize;
      this._windowSize = value.windowSize;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // top_n_size - computed: true, optional: true, required: false
  private _topNSize?: number; 
  public get topNSize() {
    return this.getNumberAttribute('top_n_size');
  }
  public set topNSize(value: number) {
    this._topNSize = value;
  }
  public resetTopNSize() {
    this._topNSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topNSizeInput() {
    return this._topNSize;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}
export interface ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency {
  /**
  * Enable or disable top N query monitoring by the metric. Enable or disable top N query monitoring by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the value of N for the top N queries by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#top_n_size ManagedDatabaseOpensearch#top_n_size}
  */
  readonly topNSize?: number;
  /**
  * The window size of the top N queries by the metric. Configure the window size of the top N queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#window_size ManagedDatabaseOpensearch#window_size}
  */
  readonly windowSize?: string;
}

export function managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyToTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference | ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    top_n_size: cdktf.numberToTerraform(struct!.topNSize),
    window_size: cdktf.stringToTerraform(struct!.windowSize),
  }
}


export function managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference | ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency): any {
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
    top_n_size: {
      value: cdktf.numberToHclTerraform(struct!.topNSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_size: {
      value: cdktf.stringToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topNSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.topNSize = this._topNSize;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topNSize = undefined;
      this._windowSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topNSize = value.topNSize;
      this._windowSize = value.windowSize;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // top_n_size - computed: true, optional: true, required: false
  private _topNSize?: number; 
  public get topNSize() {
    return this.getNumberAttribute('top_n_size');
  }
  public set topNSize(value: number) {
    this._topNSize = value;
  }
  public resetTopNSize() {
    this._topNSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topNSizeInput() {
    return this._topNSize;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}
export interface ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory {
  /**
  * Enable or disable top N query monitoring by the metric. Enable or disable top N query monitoring by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the value of N for the top N queries by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#top_n_size ManagedDatabaseOpensearch#top_n_size}
  */
  readonly topNSize?: number;
  /**
  * The window size of the top N queries by the metric. Configure the window size of the top N queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#window_size ManagedDatabaseOpensearch#window_size}
  */
  readonly windowSize?: string;
}

export function managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryToTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference | ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    top_n_size: cdktf.numberToTerraform(struct!.topNSize),
    window_size: cdktf.stringToTerraform(struct!.windowSize),
  }
}


export function managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference | ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory): any {
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
    top_n_size: {
      value: cdktf.numberToHclTerraform(struct!.topNSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_size: {
      value: cdktf.stringToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topNSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.topNSize = this._topNSize;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topNSize = undefined;
      this._windowSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topNSize = value.topNSize;
      this._windowSize = value.windowSize;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // top_n_size - computed: true, optional: true, required: false
  private _topNSize?: number; 
  public get topNSize() {
    return this.getNumberAttribute('top_n_size');
  }
  public set topNSize(value: number) {
    this._topNSize = value;
  }
  public resetTopNSize() {
    this._topNSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topNSizeInput() {
    return this._topNSize;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}
export interface ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries {
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cpu ManagedDatabaseOpensearch#cpu}
  */
  readonly cpu?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu;
  /**
  * latency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#latency ManagedDatabaseOpensearch#latency}
  */
  readonly latency?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#memory ManagedDatabaseOpensearch#memory}
  */
  readonly memory?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory;
}

export function managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesToTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference | ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuToTerraform(struct!.cpu),
    latency: managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyToTerraform(struct!.latency),
    memory: managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryToTerraform(struct!.memory),
  }
}


export function managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference | ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuList",
    },
    latency: {
      value: managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyToHclTerraform(struct!.latency),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyList",
    },
    memory: {
      value: managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._latency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu.internalValue = undefined;
      this._latency.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu.internalValue = value.cpu;
      this._latency.internalValue = value.latency;
      this._memory.internalValue = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // latency - computed: false, optional: true, required: false
  private _latency = new ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference(this, "latency");
  public get latency() {
    return this._latency;
  }
  public putLatency(value: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency) {
    this._latency.internalValue = value;
  }
  public resetLatency() {
    this._latency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}
export interface ManagedDatabaseOpensearchPropertiesSegrep {
  /**
  * The maximum number of indexing checkpoints that a replica shard can fall behind when copying from primary. Once `segrep.pressure.checkpoint.limit` is breached along with `segrep.pressure.time.limit`, the segment replication backpressure mechanism is initiated. Default is 4 checkpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#pressure_checkpoint_limit ManagedDatabaseOpensearch#pressure_checkpoint_limit}
  */
  readonly pressureCheckpointLimit?: number;
  /**
  * Enables the segment replication backpressure mechanism. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#pressure_enabled ManagedDatabaseOpensearch#pressure_enabled}
  */
  readonly pressureEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of stale replica shards that can exist in a replication group. Once `segrep.pressure.replica.stale.limit` is breached, the segment replication backpressure mechanism is initiated. Default is .5, which is 50% of a replication group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#pressure_replica_stale_limit ManagedDatabaseOpensearch#pressure_replica_stale_limit}
  */
  readonly pressureReplicaStaleLimit?: number;
  /**
  * The maximum amount of time that a replica shard can take to copy from the primary shard. Once segrep.pressure.time.limit is breached along with segrep.pressure.checkpoint.limit, the segment replication backpressure mechanism is initiated. Default is 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#pressure_time_limit ManagedDatabaseOpensearch#pressure_time_limit}
  */
  readonly pressureTimeLimit?: string;
}

export function managedDatabaseOpensearchPropertiesSegrepToTerraform(struct?: ManagedDatabaseOpensearchPropertiesSegrepOutputReference | ManagedDatabaseOpensearchPropertiesSegrep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pressure_checkpoint_limit: cdktf.numberToTerraform(struct!.pressureCheckpointLimit),
    pressure_enabled: cdktf.booleanToTerraform(struct!.pressureEnabled),
    pressure_replica_stale_limit: cdktf.numberToTerraform(struct!.pressureReplicaStaleLimit),
    pressure_time_limit: cdktf.stringToTerraform(struct!.pressureTimeLimit),
  }
}


export function managedDatabaseOpensearchPropertiesSegrepToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesSegrepOutputReference | ManagedDatabaseOpensearchPropertiesSegrep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pressure_checkpoint_limit: {
      value: cdktf.numberToHclTerraform(struct!.pressureCheckpointLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pressure_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pressureEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pressure_replica_stale_limit: {
      value: cdktf.numberToHclTerraform(struct!.pressureReplicaStaleLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pressure_time_limit: {
      value: cdktf.stringToHclTerraform(struct!.pressureTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesSegrepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesSegrep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pressureCheckpointLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pressureCheckpointLimit = this._pressureCheckpointLimit;
    }
    if (this._pressureEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pressureEnabled = this._pressureEnabled;
    }
    if (this._pressureReplicaStaleLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pressureReplicaStaleLimit = this._pressureReplicaStaleLimit;
    }
    if (this._pressureTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pressureTimeLimit = this._pressureTimeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesSegrep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pressureCheckpointLimit = undefined;
      this._pressureEnabled = undefined;
      this._pressureReplicaStaleLimit = undefined;
      this._pressureTimeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pressureCheckpointLimit = value.pressureCheckpointLimit;
      this._pressureEnabled = value.pressureEnabled;
      this._pressureReplicaStaleLimit = value.pressureReplicaStaleLimit;
      this._pressureTimeLimit = value.pressureTimeLimit;
    }
  }

  // pressure_checkpoint_limit - computed: true, optional: true, required: false
  private _pressureCheckpointLimit?: number; 
  public get pressureCheckpointLimit() {
    return this.getNumberAttribute('pressure_checkpoint_limit');
  }
  public set pressureCheckpointLimit(value: number) {
    this._pressureCheckpointLimit = value;
  }
  public resetPressureCheckpointLimit() {
    this._pressureCheckpointLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pressureCheckpointLimitInput() {
    return this._pressureCheckpointLimit;
  }

  // pressure_enabled - computed: true, optional: true, required: false
  private _pressureEnabled?: boolean | cdktf.IResolvable; 
  public get pressureEnabled() {
    return this.getBooleanAttribute('pressure_enabled');
  }
  public set pressureEnabled(value: boolean | cdktf.IResolvable) {
    this._pressureEnabled = value;
  }
  public resetPressureEnabled() {
    this._pressureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pressureEnabledInput() {
    return this._pressureEnabled;
  }

  // pressure_replica_stale_limit - computed: true, optional: true, required: false
  private _pressureReplicaStaleLimit?: number; 
  public get pressureReplicaStaleLimit() {
    return this.getNumberAttribute('pressure_replica_stale_limit');
  }
  public set pressureReplicaStaleLimit(value: number) {
    this._pressureReplicaStaleLimit = value;
  }
  public resetPressureReplicaStaleLimit() {
    this._pressureReplicaStaleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pressureReplicaStaleLimitInput() {
    return this._pressureReplicaStaleLimit;
  }

  // pressure_time_limit - computed: true, optional: true, required: false
  private _pressureTimeLimit?: string; 
  public get pressureTimeLimit() {
    return this.getStringAttribute('pressure_time_limit');
  }
  public set pressureTimeLimit(value: string) {
    this._pressureTimeLimit = value;
  }
  public resetPressureTimeLimit() {
    this._pressureTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pressureTimeLimitInput() {
    return this._pressureTimeLimit;
  }
}
export interface ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor {
  /**
  * Lower occupancy limit of the allocated quota of memory for the shard. Specify the lower occupancy limit of the allocated quota of memory for the shard.
  *                     If the total memory usage of a shard is below this limit,
  *                     shard indexing backpressure decreases the current allocated memory for that shard.
  *                     Default is 0.75.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#lower ManagedDatabaseOpensearch#lower}
  */
  readonly lower?: number;
  /**
  * Optimal occupancy of the allocated quota of memory for the shard. Specify the optimal occupancy of the allocated quota of memory for the shard.
  *                     If the total memory usage of a shard is at this level,
  *                     shard indexing backpressure doesn’t change the current allocated memory for that shard.
  *                     Default is 0.85.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#optimal ManagedDatabaseOpensearch#optimal}
  */
  readonly optimal?: number;
  /**
  * Upper occupancy limit of the allocated quota of memory for the shard. Specify the upper occupancy limit of the allocated quota of memory for the shard.
  *                     If the total memory usage of a shard is above this limit,
  *                     shard indexing backpressure increases the current allocated memory for that shard.
  *                     Default is 0.95.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#upper ManagedDatabaseOpensearch#upper}
  */
  readonly upper?: number;
}

export function managedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorToTerraform(struct?: ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference | ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lower: cdktf.numberToTerraform(struct!.lower),
    optimal: cdktf.numberToTerraform(struct!.optimal),
    upper: cdktf.numberToTerraform(struct!.upper),
  }
}


export function managedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference | ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lower: {
      value: cdktf.numberToHclTerraform(struct!.lower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    optimal: {
      value: cdktf.numberToHclTerraform(struct!.optimal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper: {
      value: cdktf.numberToHclTerraform(struct!.upper),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lower !== undefined) {
      hasAnyValues = true;
      internalValueResult.lower = this._lower;
    }
    if (this._optimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimal = this._optimal;
    }
    if (this._upper !== undefined) {
      hasAnyValues = true;
      internalValueResult.upper = this._upper;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lower = undefined;
      this._optimal = undefined;
      this._upper = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lower = value.lower;
      this._optimal = value.optimal;
      this._upper = value.upper;
    }
  }

  // lower - computed: true, optional: true, required: false
  private _lower?: number; 
  public get lower() {
    return this.getNumberAttribute('lower');
  }
  public set lower(value: number) {
    this._lower = value;
  }
  public resetLower() {
    this._lower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInput() {
    return this._lower;
  }

  // optimal - computed: true, optional: true, required: false
  private _optimal?: number; 
  public get optimal() {
    return this.getNumberAttribute('optimal');
  }
  public set optimal(value: number) {
    this._optimal = value;
  }
  public resetOptimal() {
    this._optimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimalInput() {
    return this._optimal;
  }

  // upper - computed: true, optional: true, required: false
  private _upper?: number; 
  public get upper() {
    return this.getNumberAttribute('upper');
  }
  public set upper(value: number) {
    this._upper = value;
  }
  public resetUpper() {
    this._upper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInput() {
    return this._upper;
  }
}
export interface ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode {
  /**
  * Node soft limit. Define the percentage of the node-level memory
  *                             threshold that acts as a soft indicator for strain on a node.
  *                             Default is 0.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#soft_limit ManagedDatabaseOpensearch#soft_limit}
  */
  readonly softLimit?: number;
}

export function managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeToTerraform(struct?: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference | ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    soft_limit: cdktf.numberToTerraform(struct!.softLimit),
  }
}


export function managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference | ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    soft_limit: {
      value: cdktf.numberToHclTerraform(struct!.softLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._softLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.softLimit = this._softLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._softLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._softLimit = value.softLimit;
    }
  }

  // soft_limit - computed: true, optional: true, required: false
  private _softLimit?: number; 
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
  public set softLimit(value: number) {
    this._softLimit = value;
  }
  public resetSoftLimit() {
    this._softLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softLimitInput() {
    return this._softLimit;
  }
}
export interface ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard {
  /**
  * Shard min limit. Specify the minimum assigned quota for a new shard in any role (coordinator, primary, or replica).
  *                             Shard indexing backpressure increases or decreases this allocated quota based on the inflow of traffic for the shard.
  *                             Default is 0.001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#min_limit ManagedDatabaseOpensearch#min_limit}
  */
  readonly minLimit?: number;
}

export function managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardToTerraform(struct?: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference | ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_limit: cdktf.numberToTerraform(struct!.minLimit),
  }
}


export function managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference | ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_limit: {
      value: cdktf.numberToHclTerraform(struct!.minLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLimit = this._minLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minLimit = value.minLimit;
    }
  }

  // min_limit - computed: true, optional: true, required: false
  private _minLimit?: number; 
  public get minLimit() {
    return this.getNumberAttribute('min_limit');
  }
  public set minLimit(value: number) {
    this._minLimit = value;
  }
  public resetMinLimit() {
    this._minLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLimitInput() {
    return this._minLimit;
  }
}
export interface ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter {
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#node ManagedDatabaseOpensearch#node}
  */
  readonly nodeAttribute?: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode;
  /**
  * shard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#shard ManagedDatabaseOpensearch#shard}
  */
  readonly shard?: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard;
}

export function managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterToTerraform(struct?: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference | ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeToTerraform(struct!.nodeAttribute),
    shard: managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardToTerraform(struct!.shard),
  }
}


export function managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference | ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeToHclTerraform(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeList",
    },
    shard: {
      value: managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardToHclTerraform(struct!.shard),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    if (this._shard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shard = this._shard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._node.internalValue = undefined;
      this._shard.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._node.internalValue = value.nodeAttribute;
      this._shard.internalValue = value.shard;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node = new ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference(this, "node");
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode) {
    this._node.internalValue = value;
  }
  public resetNodeAttribute() {
    this._node.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }

  // shard - computed: false, optional: true, required: false
  private _shard = new ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference(this, "shard");
  public get shard() {
    return this._shard;
  }
  public putShard(value: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard) {
    this._shard.internalValue = value;
  }
  public resetShard() {
    this._shard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInput() {
    return this._shard.internalValue;
  }
}
export interface ManagedDatabaseOpensearchPropertiesShardIndexingPressure {
  /**
  * Enable or disable shard indexing backpressure. Enable or disable shard indexing backpressure. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Run shard indexing backpressure in shadow mode or enforced mode. Run shard indexing backpressure in shadow mode or enforced mode.
  *             In shadow mode (value set as false), shard indexing backpressure tracks all granular-level metrics,
  *             but it doesn’t actually reject any indexing requests.
  *             In enforced mode (value set as true),
  *             shard indexing backpressure rejects any requests to the cluster that might cause a dip in its performance.
  *             Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enforced ManagedDatabaseOpensearch#enforced}
  */
  readonly enforced?: boolean | cdktf.IResolvable;
  /**
  * operating_factor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#operating_factor ManagedDatabaseOpensearch#operating_factor}
  */
  readonly operatingFactor?: ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor;
  /**
  * primary_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#primary_parameter ManagedDatabaseOpensearch#primary_parameter}
  */
  readonly primaryParameter?: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter;
}

export function managedDatabaseOpensearchPropertiesShardIndexingPressureToTerraform(struct?: ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference | ManagedDatabaseOpensearchPropertiesShardIndexingPressure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enforced: cdktf.booleanToTerraform(struct!.enforced),
    operating_factor: managedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorToTerraform(struct!.operatingFactor),
    primary_parameter: managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterToTerraform(struct!.primaryParameter),
  }
}


export function managedDatabaseOpensearchPropertiesShardIndexingPressureToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference | ManagedDatabaseOpensearchPropertiesShardIndexingPressure): any {
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
    enforced: {
      value: cdktf.booleanToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operating_factor: {
      value: managedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorToHclTerraform(struct!.operatingFactor),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorList",
    },
    primary_parameter: {
      value: managedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterToHclTerraform(struct!.primaryParameter),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesShardIndexingPressure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    if (this._operatingFactor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingFactor = this._operatingFactor?.internalValue;
    }
    if (this._primaryParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryParameter = this._primaryParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesShardIndexingPressure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._enforced = undefined;
      this._operatingFactor.internalValue = undefined;
      this._primaryParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._enforced = value.enforced;
      this._operatingFactor.internalValue = value.operatingFactor;
      this._primaryParameter.internalValue = value.primaryParameter;
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

  // enforced - computed: true, optional: true, required: false
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }

  // operating_factor - computed: false, optional: true, required: false
  private _operatingFactor = new ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference(this, "operating_factor");
  public get operatingFactor() {
    return this._operatingFactor;
  }
  public putOperatingFactor(value: ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor) {
    this._operatingFactor.internalValue = value;
  }
  public resetOperatingFactor() {
    this._operatingFactor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingFactorInput() {
    return this._operatingFactor.internalValue;
  }

  // primary_parameter - computed: false, optional: true, required: false
  private _primaryParameter = new ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference(this, "primary_parameter");
  public get primaryParameter() {
    return this._primaryParameter;
  }
  public putPrimaryParameter(value: ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter) {
    this._primaryParameter.internalValue = value;
  }
  public resetPrimaryParameter() {
    this._primaryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryParameterInput() {
    return this._primaryParameter.internalValue;
  }
}
export interface ManagedDatabaseOpensearchProperties {
  /**
  * action.auto_create_index. Explicitly allow or block automatic creation of indices. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#action_auto_create_index_enabled ManagedDatabaseOpensearch#action_auto_create_index_enabled}
  */
  readonly actionAutoCreateIndexEnabled?: boolean | cdktf.IResolvable;
  /**
  * Require explicit index names when deleting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#action_destructive_requires_name ManagedDatabaseOpensearch#action_destructive_requires_name}
  */
  readonly actionDestructiveRequiresName?: boolean | cdktf.IResolvable;
  /**
  * Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#automatic_utility_network_ip_filter ManagedDatabaseOpensearch#automatic_utility_network_ip_filter}
  */
  readonly automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable;
  /**
  * The limit of how much total remote data can be referenced. Defines a limit of how much total remote data can be referenced as a ratio of the size of the disk reserved for the file cache. This is designed to be a safeguard to prevent oversubscribing a cluster. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cluster_filecache_remote_data_ratio ManagedDatabaseOpensearch#cluster_filecache_remote_data_ratio}
  */
  readonly clusterFilecacheRemoteDataRatio?: number;
  /**
  * Controls the number of shards allowed in the cluster per data node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cluster_max_shards_per_node ManagedDatabaseOpensearch#cluster_max_shards_per_node}
  */
  readonly clusterMaxShardsPerNode?: number;
  /**
  * When set to true, OpenSearch attempts to evenly distribute the primary shards between the cluster nodes. Enabling this setting does not always guarantee an equal number of primary shards on each node, especially in the event of a failover. Changing this setting to false after it was set to true does not invoke redistribution of primary shards. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cluster_routing_allocation_balance_prefer_primary ManagedDatabaseOpensearch#cluster_routing_allocation_balance_prefer_primary}
  */
  readonly clusterRoutingAllocationBalancePreferPrimary?: boolean | cdktf.IResolvable;
  /**
  * Concurrent incoming/outgoing shard recoveries per node. How many concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen on a node. Defaults to node cpu count * 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cluster_routing_allocation_node_concurrent_recoveries ManagedDatabaseOpensearch#cluster_routing_allocation_node_concurrent_recoveries}
  */
  readonly clusterRoutingAllocationNodeConcurrentRecoveries?: number;
  /**
  * Custom domain. Serve the web frontend using a custom CNAME pointing to the Aiven DNS name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#custom_domain ManagedDatabaseOpensearch#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Elasticsearch major version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#elasticsearch_version ManagedDatabaseOpensearch#elasticsearch_version}
  */
  readonly elasticsearchVersion?: string;
  /**
  * Sender name placeholder to be used in Opensearch Dashboards and Opensearch keystore. This should be identical to the Sender name defined in Opensearch dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#email_sender_name ManagedDatabaseOpensearch#email_sender_name}
  */
  readonly emailSenderName?: string;
  /**
  * Sender password for Opensearch alerts to authenticate with SMTP server. Sender password for Opensearch alerts to authenticate with SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#email_sender_password ManagedDatabaseOpensearch#email_sender_password}
  */
  readonly emailSenderPassword?: string;
  /**
  * Sender username for Opensearch alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#email_sender_username ManagedDatabaseOpensearch#email_sender_username}
  */
  readonly emailSenderUsername?: string;
  /**
  * Enable remote-backed storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enable_remote_backed_storage ManagedDatabaseOpensearch#enable_remote_backed_storage}
  */
  readonly enableRemoteBackedStorage?: boolean | cdktf.IResolvable;
  /**
  * Enable searchable snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enable_searchable_snapshots ManagedDatabaseOpensearch#enable_searchable_snapshots}
  */
  readonly enableSearchableSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable security audit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enable_security_audit ManagedDatabaseOpensearch#enable_security_audit}
  */
  readonly enableSecurityAudit?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable snapshot API. Enable/Disable snapshot API for custom repositories, this requires security management to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#enable_snapshot_api ManagedDatabaseOpensearch#enable_snapshot_api}
  */
  readonly enableSnapshotApi?: boolean | cdktf.IResolvable;
  /**
  * Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#http_max_content_length ManagedDatabaseOpensearch#http_max_content_length}
  */
  readonly httpMaxContentLength?: number;
  /**
  * The max size of allowed headers, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#http_max_header_size ManagedDatabaseOpensearch#http_max_header_size}
  */
  readonly httpMaxHeaderSize?: number;
  /**
  * The max length of an HTTP URL, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#http_max_initial_line_length ManagedDatabaseOpensearch#http_max_initial_line_length}
  */
  readonly httpMaxInitialLineLength?: number;
  /**
  * Index patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#index_patterns ManagedDatabaseOpensearch#index_patterns}
  */
  readonly indexPatterns?: string[];
  /**
  * Relative amount. Maximum amount of heap memory used for field data cache. This is an expert setting; decreasing the value too much will increase overhead of loading field data; too much memory used for field data cache will decrease amount of heap available for other operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#indices_fielddata_cache_size ManagedDatabaseOpensearch#indices_fielddata_cache_size}
  */
  readonly indicesFielddataCacheSize?: number;
  /**
  * Percentage value. Default is 10%. Total amount of heap used for indexing buffer, before writing segments to disk. This is an expert setting. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#indices_memory_index_buffer_size ManagedDatabaseOpensearch#indices_memory_index_buffer_size}
  */
  readonly indicesMemoryIndexBufferSize?: number;
  /**
  * Absolute value. Default is unbound. Doesn't work without indices.memory.index_buffer_size. Maximum amount of heap used for query cache, an absolute indices.memory.index_buffer_size maximum hard limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#indices_memory_max_index_buffer_size ManagedDatabaseOpensearch#indices_memory_max_index_buffer_size}
  */
  readonly indicesMemoryMaxIndexBufferSize?: number;
  /**
  * Absolute value. Default is 48mb. Doesn't work without indices.memory.index_buffer_size. Minimum amount of heap used for query cache, an absolute indices.memory.index_buffer_size minimal hard limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#indices_memory_min_index_buffer_size ManagedDatabaseOpensearch#indices_memory_min_index_buffer_size}
  */
  readonly indicesMemoryMinIndexBufferSize?: number;
  /**
  * Percentage value. Default is 10%. Maximum amount of heap used for query cache. This is an expert setting. Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other OpenSearch functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#indices_queries_cache_size ManagedDatabaseOpensearch#indices_queries_cache_size}
  */
  readonly indicesQueriesCacheSize?: number;
  /**
  * Maximum number of clauses Lucene BooleanQuery can have. The default value (1024) is relatively high, and increasing it may cause performance issues. Investigate other approaches first before increasing this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#indices_query_bool_max_clause_count ManagedDatabaseOpensearch#indices_query_bool_max_clause_count}
  */
  readonly indicesQueryBoolMaxClauseCount?: number;
  /**
  * Limits total inbound and outbound recovery traffic for each node. Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). Defaults to 40mb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#indices_recovery_max_bytes_per_sec ManagedDatabaseOpensearch#indices_recovery_max_bytes_per_sec}
  */
  readonly indicesRecoveryMaxBytesPerSec?: number;
  /**
  * Number of file chunks sent in parallel for each recovery. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#indices_recovery_max_concurrent_file_chunks ManagedDatabaseOpensearch#indices_recovery_max_concurrent_file_chunks}
  */
  readonly indicesRecoveryMaxConcurrentFileChunks?: number;
  /**
  * IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#ip_filter ManagedDatabaseOpensearch#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Specifies whether ISM is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#ism_enabled ManagedDatabaseOpensearch#ism_enabled}
  */
  readonly ismEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#ism_history_enabled ManagedDatabaseOpensearch#ism_history_enabled}
  */
  readonly ismHistoryEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum age before rolling over the audit history index in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#ism_history_max_age ManagedDatabaseOpensearch#ism_history_max_age}
  */
  readonly ismHistoryMaxAge?: number;
  /**
  * The maximum number of documents before rolling over the audit history index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#ism_history_max_docs ManagedDatabaseOpensearch#ism_history_max_docs}
  */
  readonly ismHistoryMaxDocs?: number;
  /**
  * The time between rollover checks for the audit history index in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#ism_history_rollover_check_period ManagedDatabaseOpensearch#ism_history_rollover_check_period}
  */
  readonly ismHistoryRolloverCheckPeriod?: number;
  /**
  * How long audit history indices are kept in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#ism_history_rollover_retention_period ManagedDatabaseOpensearch#ism_history_rollover_retention_period}
  */
  readonly ismHistoryRolloverRetentionPeriod?: number;
  /**
  * Don't reset index.refresh_interval to the default value. Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#keep_index_refresh_interval ManagedDatabaseOpensearch#keep_index_refresh_interval}
  */
  readonly keepIndexRefreshInterval?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable KNN memory circuit breaker. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#knn_memory_circuit_breaker_enabled ManagedDatabaseOpensearch#knn_memory_circuit_breaker_enabled}
  */
  readonly knnMemoryCircuitBreakerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum amount of memory that can be used for KNN index. Defaults to 50% of the JVM heap size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#knn_memory_circuit_breaker_limit ManagedDatabaseOpensearch#knn_memory_circuit_breaker_limit}
  */
  readonly knnMemoryCircuitBreakerLimit?: number;
  /**
  * The limit of how much total remote data can be referenced. Defines a limit of how much total remote data can be referenced as a ratio of the size of the disk reserved for the file cache. This is designed to be a safeguard to prevent oversubscribing a cluster. Defaults to 5gb. Requires restarting all OpenSearch nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#node_search_cache_size ManagedDatabaseOpensearch#node_search_cache_size}
  */
  readonly nodeSearchCacheSize?: string;
  /**
  * Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#override_main_response_version ManagedDatabaseOpensearch#override_main_response_version}
  */
  readonly overrideMainResponseVersion?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable filtering of alerting by backend roles. Requires Security plugin. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#plugins_alerting_filter_by_backend_roles ManagedDatabaseOpensearch#plugins_alerting_filter_by_backend_roles}
  */
  readonly pluginsAlertingFilterByBackendRoles?: boolean | cdktf.IResolvable;
  /**
  * Public Access. Allow access to the service from the public Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#public_access ManagedDatabaseOpensearch#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
  /**
  * Whitelisted addresses for reindexing. Changing this value will cause all OpenSearch instances to restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#reindex_remote_whitelist ManagedDatabaseOpensearch#reindex_remote_whitelist}
  */
  readonly reindexRemoteWhitelist?: string[];
  /**
  * Script max compilation rate - circuit breaker to prevent/minimize OOMs. Script compilation circuit breaker limits the number of inline script compilations within a period of time. Default is use-context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#script_max_compilations_rate ManagedDatabaseOpensearch#script_max_compilations_rate}
  */
  readonly scriptMaxCompilationsRate?: string;
  /**
  * Maximum number of aggregation buckets allowed in a single response. OpenSearch default value is used when this is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#search_max_buckets ManagedDatabaseOpensearch#search_max_buckets}
  */
  readonly searchMaxBuckets?: number;
  /**
  * Service logging. Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#service_log ManagedDatabaseOpensearch#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * analyze thread pool queue size. Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_analyze_queue_size ManagedDatabaseOpensearch#thread_pool_analyze_queue_size}
  */
  readonly threadPoolAnalyzeQueueSize?: number;
  /**
  * analyze thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_analyze_size ManagedDatabaseOpensearch#thread_pool_analyze_size}
  */
  readonly threadPoolAnalyzeSize?: number;
  /**
  * force_merge thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_force_merge_size ManagedDatabaseOpensearch#thread_pool_force_merge_size}
  */
  readonly threadPoolForceMergeSize?: number;
  /**
  * get thread pool queue size. Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_get_queue_size ManagedDatabaseOpensearch#thread_pool_get_queue_size}
  */
  readonly threadPoolGetQueueSize?: number;
  /**
  * get thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_get_size ManagedDatabaseOpensearch#thread_pool_get_size}
  */
  readonly threadPoolGetSize?: number;
  /**
  * search thread pool queue size. Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_search_queue_size ManagedDatabaseOpensearch#thread_pool_search_queue_size}
  */
  readonly threadPoolSearchQueueSize?: number;
  /**
  * search thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_search_size ManagedDatabaseOpensearch#thread_pool_search_size}
  */
  readonly threadPoolSearchSize?: number;
  /**
  * search_throttled thread pool queue size. Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_search_throttled_queue_size ManagedDatabaseOpensearch#thread_pool_search_throttled_queue_size}
  */
  readonly threadPoolSearchThrottledQueueSize?: number;
  /**
  * search_throttled thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_search_throttled_size ManagedDatabaseOpensearch#thread_pool_search_throttled_size}
  */
  readonly threadPoolSearchThrottledSize?: number;
  /**
  * write thread pool queue size. Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_write_queue_size ManagedDatabaseOpensearch#thread_pool_write_queue_size}
  */
  readonly threadPoolWriteQueueSize?: number;
  /**
  * write thread pool size. Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#thread_pool_write_size ManagedDatabaseOpensearch#thread_pool_write_size}
  */
  readonly threadPoolWriteSize?: number;
  /**
  * OpenSearch major version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#version ManagedDatabaseOpensearch#version}
  */
  readonly version?: string;
  /**
  * auth_failure_listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#auth_failure_listeners ManagedDatabaseOpensearch#auth_failure_listeners}
  */
  readonly authFailureListeners?: ManagedDatabaseOpensearchPropertiesAuthFailureListeners;
  /**
  * cluster_remote_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cluster_remote_store ManagedDatabaseOpensearch#cluster_remote_store}
  */
  readonly clusterRemoteStore?: ManagedDatabaseOpensearchPropertiesClusterRemoteStore;
  /**
  * cluster_search_request_slowlog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#cluster_search_request_slowlog ManagedDatabaseOpensearch#cluster_search_request_slowlog}
  */
  readonly clusterSearchRequestSlowlog?: ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog;
  /**
  * disk_watermarks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#disk_watermarks ManagedDatabaseOpensearch#disk_watermarks}
  */
  readonly diskWatermarks?: ManagedDatabaseOpensearchPropertiesDiskWatermarks;
  /**
  * index_rollup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#index_rollup ManagedDatabaseOpensearch#index_rollup}
  */
  readonly indexRollup?: ManagedDatabaseOpensearchPropertiesIndexRollup;
  /**
  * index_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#index_template ManagedDatabaseOpensearch#index_template}
  */
  readonly indexTemplate?: ManagedDatabaseOpensearchPropertiesIndexTemplate;
  /**
  * openid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#openid ManagedDatabaseOpensearch#openid}
  */
  readonly openid?: ManagedDatabaseOpensearchPropertiesOpenid;
  /**
  * opensearch_dashboards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#opensearch_dashboards ManagedDatabaseOpensearch#opensearch_dashboards}
  */
  readonly opensearchDashboards?: ManagedDatabaseOpensearchPropertiesOpensearchDashboards;
  /**
  * remote_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#remote_store ManagedDatabaseOpensearch#remote_store}
  */
  readonly remoteStore?: ManagedDatabaseOpensearchPropertiesRemoteStore;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#saml ManagedDatabaseOpensearch#saml}
  */
  readonly saml?: ManagedDatabaseOpensearchPropertiesSaml;
  /**
  * search_backpressure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#search_backpressure ManagedDatabaseOpensearch#search_backpressure}
  */
  readonly searchBackpressure?: ManagedDatabaseOpensearchPropertiesSearchBackpressure;
  /**
  * search_insights_top_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#search_insights_top_queries ManagedDatabaseOpensearch#search_insights_top_queries}
  */
  readonly searchInsightsTopQueries?: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries;
  /**
  * segrep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#segrep ManagedDatabaseOpensearch#segrep}
  */
  readonly segrep?: ManagedDatabaseOpensearchPropertiesSegrep;
  /**
  * shard_indexing_pressure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#shard_indexing_pressure ManagedDatabaseOpensearch#shard_indexing_pressure}
  */
  readonly shardIndexingPressure?: ManagedDatabaseOpensearchPropertiesShardIndexingPressure;
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
    cluster_filecache_remote_data_ratio: cdktf.numberToTerraform(struct!.clusterFilecacheRemoteDataRatio),
    cluster_max_shards_per_node: cdktf.numberToTerraform(struct!.clusterMaxShardsPerNode),
    cluster_routing_allocation_balance_prefer_primary: cdktf.booleanToTerraform(struct!.clusterRoutingAllocationBalancePreferPrimary),
    cluster_routing_allocation_node_concurrent_recoveries: cdktf.numberToTerraform(struct!.clusterRoutingAllocationNodeConcurrentRecoveries),
    custom_domain: cdktf.stringToTerraform(struct!.customDomain),
    elasticsearch_version: cdktf.stringToTerraform(struct!.elasticsearchVersion),
    email_sender_name: cdktf.stringToTerraform(struct!.emailSenderName),
    email_sender_password: cdktf.stringToTerraform(struct!.emailSenderPassword),
    email_sender_username: cdktf.stringToTerraform(struct!.emailSenderUsername),
    enable_remote_backed_storage: cdktf.booleanToTerraform(struct!.enableRemoteBackedStorage),
    enable_searchable_snapshots: cdktf.booleanToTerraform(struct!.enableSearchableSnapshots),
    enable_security_audit: cdktf.booleanToTerraform(struct!.enableSecurityAudit),
    enable_snapshot_api: cdktf.booleanToTerraform(struct!.enableSnapshotApi),
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
    knn_memory_circuit_breaker_enabled: cdktf.booleanToTerraform(struct!.knnMemoryCircuitBreakerEnabled),
    knn_memory_circuit_breaker_limit: cdktf.numberToTerraform(struct!.knnMemoryCircuitBreakerLimit),
    node_search_cache_size: cdktf.stringToTerraform(struct!.nodeSearchCacheSize),
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
    cluster_remote_store: managedDatabaseOpensearchPropertiesClusterRemoteStoreToTerraform(struct!.clusterRemoteStore),
    cluster_search_request_slowlog: managedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogToTerraform(struct!.clusterSearchRequestSlowlog),
    disk_watermarks: managedDatabaseOpensearchPropertiesDiskWatermarksToTerraform(struct!.diskWatermarks),
    index_rollup: managedDatabaseOpensearchPropertiesIndexRollupToTerraform(struct!.indexRollup),
    index_template: managedDatabaseOpensearchPropertiesIndexTemplateToTerraform(struct!.indexTemplate),
    openid: managedDatabaseOpensearchPropertiesOpenidToTerraform(struct!.openid),
    opensearch_dashboards: managedDatabaseOpensearchPropertiesOpensearchDashboardsToTerraform(struct!.opensearchDashboards),
    remote_store: managedDatabaseOpensearchPropertiesRemoteStoreToTerraform(struct!.remoteStore),
    saml: managedDatabaseOpensearchPropertiesSamlToTerraform(struct!.saml),
    search_backpressure: managedDatabaseOpensearchPropertiesSearchBackpressureToTerraform(struct!.searchBackpressure),
    search_insights_top_queries: managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesToTerraform(struct!.searchInsightsTopQueries),
    segrep: managedDatabaseOpensearchPropertiesSegrepToTerraform(struct!.segrep),
    shard_indexing_pressure: managedDatabaseOpensearchPropertiesShardIndexingPressureToTerraform(struct!.shardIndexingPressure),
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
    cluster_filecache_remote_data_ratio: {
      value: cdktf.numberToHclTerraform(struct!.clusterFilecacheRemoteDataRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_max_shards_per_node: {
      value: cdktf.numberToHclTerraform(struct!.clusterMaxShardsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_routing_allocation_balance_prefer_primary: {
      value: cdktf.booleanToHclTerraform(struct!.clusterRoutingAllocationBalancePreferPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    elasticsearch_version: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchVersion),
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
    enable_remote_backed_storage: {
      value: cdktf.booleanToHclTerraform(struct!.enableRemoteBackedStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_searchable_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.enableSearchableSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_security_audit: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecurityAudit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_snapshot_api: {
      value: cdktf.booleanToHclTerraform(struct!.enableSnapshotApi),
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
    knn_memory_circuit_breaker_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.knnMemoryCircuitBreakerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    knn_memory_circuit_breaker_limit: {
      value: cdktf.numberToHclTerraform(struct!.knnMemoryCircuitBreakerLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_search_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSearchCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    cluster_remote_store: {
      value: managedDatabaseOpensearchPropertiesClusterRemoteStoreToHclTerraform(struct!.clusterRemoteStore),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesClusterRemoteStoreList",
    },
    cluster_search_request_slowlog: {
      value: managedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogToHclTerraform(struct!.clusterSearchRequestSlowlog),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogList",
    },
    disk_watermarks: {
      value: managedDatabaseOpensearchPropertiesDiskWatermarksToHclTerraform(struct!.diskWatermarks),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesDiskWatermarksList",
    },
    index_rollup: {
      value: managedDatabaseOpensearchPropertiesIndexRollupToHclTerraform(struct!.indexRollup),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesIndexRollupList",
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
    remote_store: {
      value: managedDatabaseOpensearchPropertiesRemoteStoreToHclTerraform(struct!.remoteStore),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesRemoteStoreList",
    },
    saml: {
      value: managedDatabaseOpensearchPropertiesSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSamlList",
    },
    search_backpressure: {
      value: managedDatabaseOpensearchPropertiesSearchBackpressureToHclTerraform(struct!.searchBackpressure),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSearchBackpressureList",
    },
    search_insights_top_queries: {
      value: managedDatabaseOpensearchPropertiesSearchInsightsTopQueriesToHclTerraform(struct!.searchInsightsTopQueries),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesList",
    },
    segrep: {
      value: managedDatabaseOpensearchPropertiesSegrepToHclTerraform(struct!.segrep),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesSegrepList",
    },
    shard_indexing_pressure: {
      value: managedDatabaseOpensearchPropertiesShardIndexingPressureToHclTerraform(struct!.shardIndexingPressure),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesShardIndexingPressureList",
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
    if (this._clusterFilecacheRemoteDataRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterFilecacheRemoteDataRatio = this._clusterFilecacheRemoteDataRatio;
    }
    if (this._clusterMaxShardsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMaxShardsPerNode = this._clusterMaxShardsPerNode;
    }
    if (this._clusterRoutingAllocationBalancePreferPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoutingAllocationBalancePreferPrimary = this._clusterRoutingAllocationBalancePreferPrimary;
    }
    if (this._clusterRoutingAllocationNodeConcurrentRecoveries !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoutingAllocationNodeConcurrentRecoveries = this._clusterRoutingAllocationNodeConcurrentRecoveries;
    }
    if (this._customDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomain = this._customDomain;
    }
    if (this._elasticsearchVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchVersion = this._elasticsearchVersion;
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
    if (this._enableRemoteBackedStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRemoteBackedStorage = this._enableRemoteBackedStorage;
    }
    if (this._enableSearchableSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSearchableSnapshots = this._enableSearchableSnapshots;
    }
    if (this._enableSecurityAudit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecurityAudit = this._enableSecurityAudit;
    }
    if (this._enableSnapshotApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSnapshotApi = this._enableSnapshotApi;
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
    if (this._knnMemoryCircuitBreakerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.knnMemoryCircuitBreakerEnabled = this._knnMemoryCircuitBreakerEnabled;
    }
    if (this._knnMemoryCircuitBreakerLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.knnMemoryCircuitBreakerLimit = this._knnMemoryCircuitBreakerLimit;
    }
    if (this._nodeSearchCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSearchCacheSize = this._nodeSearchCacheSize;
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
    if (this._clusterRemoteStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRemoteStore = this._clusterRemoteStore?.internalValue;
    }
    if (this._clusterSearchRequestSlowlog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSearchRequestSlowlog = this._clusterSearchRequestSlowlog?.internalValue;
    }
    if (this._diskWatermarks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskWatermarks = this._diskWatermarks?.internalValue;
    }
    if (this._indexRollup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRollup = this._indexRollup?.internalValue;
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
    if (this._remoteStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteStore = this._remoteStore?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    if (this._searchBackpressure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBackpressure = this._searchBackpressure?.internalValue;
    }
    if (this._searchInsightsTopQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchInsightsTopQueries = this._searchInsightsTopQueries?.internalValue;
    }
    if (this._segrep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segrep = this._segrep?.internalValue;
    }
    if (this._shardIndexingPressure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardIndexingPressure = this._shardIndexingPressure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionAutoCreateIndexEnabled = undefined;
      this._actionDestructiveRequiresName = undefined;
      this._automaticUtilityNetworkIpFilter = undefined;
      this._clusterFilecacheRemoteDataRatio = undefined;
      this._clusterMaxShardsPerNode = undefined;
      this._clusterRoutingAllocationBalancePreferPrimary = undefined;
      this._clusterRoutingAllocationNodeConcurrentRecoveries = undefined;
      this._customDomain = undefined;
      this._elasticsearchVersion = undefined;
      this._emailSenderName = undefined;
      this._emailSenderPassword = undefined;
      this._emailSenderUsername = undefined;
      this._enableRemoteBackedStorage = undefined;
      this._enableSearchableSnapshots = undefined;
      this._enableSecurityAudit = undefined;
      this._enableSnapshotApi = undefined;
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
      this._knnMemoryCircuitBreakerEnabled = undefined;
      this._knnMemoryCircuitBreakerLimit = undefined;
      this._nodeSearchCacheSize = undefined;
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
      this._clusterRemoteStore.internalValue = undefined;
      this._clusterSearchRequestSlowlog.internalValue = undefined;
      this._diskWatermarks.internalValue = undefined;
      this._indexRollup.internalValue = undefined;
      this._indexTemplate.internalValue = undefined;
      this._openid.internalValue = undefined;
      this._opensearchDashboards.internalValue = undefined;
      this._remoteStore.internalValue = undefined;
      this._saml.internalValue = undefined;
      this._searchBackpressure.internalValue = undefined;
      this._searchInsightsTopQueries.internalValue = undefined;
      this._segrep.internalValue = undefined;
      this._shardIndexingPressure.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionAutoCreateIndexEnabled = value.actionAutoCreateIndexEnabled;
      this._actionDestructiveRequiresName = value.actionDestructiveRequiresName;
      this._automaticUtilityNetworkIpFilter = value.automaticUtilityNetworkIpFilter;
      this._clusterFilecacheRemoteDataRatio = value.clusterFilecacheRemoteDataRatio;
      this._clusterMaxShardsPerNode = value.clusterMaxShardsPerNode;
      this._clusterRoutingAllocationBalancePreferPrimary = value.clusterRoutingAllocationBalancePreferPrimary;
      this._clusterRoutingAllocationNodeConcurrentRecoveries = value.clusterRoutingAllocationNodeConcurrentRecoveries;
      this._customDomain = value.customDomain;
      this._elasticsearchVersion = value.elasticsearchVersion;
      this._emailSenderName = value.emailSenderName;
      this._emailSenderPassword = value.emailSenderPassword;
      this._emailSenderUsername = value.emailSenderUsername;
      this._enableRemoteBackedStorage = value.enableRemoteBackedStorage;
      this._enableSearchableSnapshots = value.enableSearchableSnapshots;
      this._enableSecurityAudit = value.enableSecurityAudit;
      this._enableSnapshotApi = value.enableSnapshotApi;
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
      this._knnMemoryCircuitBreakerEnabled = value.knnMemoryCircuitBreakerEnabled;
      this._knnMemoryCircuitBreakerLimit = value.knnMemoryCircuitBreakerLimit;
      this._nodeSearchCacheSize = value.nodeSearchCacheSize;
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
      this._clusterRemoteStore.internalValue = value.clusterRemoteStore;
      this._clusterSearchRequestSlowlog.internalValue = value.clusterSearchRequestSlowlog;
      this._diskWatermarks.internalValue = value.diskWatermarks;
      this._indexRollup.internalValue = value.indexRollup;
      this._indexTemplate.internalValue = value.indexTemplate;
      this._openid.internalValue = value.openid;
      this._opensearchDashboards.internalValue = value.opensearchDashboards;
      this._remoteStore.internalValue = value.remoteStore;
      this._saml.internalValue = value.saml;
      this._searchBackpressure.internalValue = value.searchBackpressure;
      this._searchInsightsTopQueries.internalValue = value.searchInsightsTopQueries;
      this._segrep.internalValue = value.segrep;
      this._shardIndexingPressure.internalValue = value.shardIndexingPressure;
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

  // cluster_filecache_remote_data_ratio - computed: true, optional: true, required: false
  private _clusterFilecacheRemoteDataRatio?: number; 
  public get clusterFilecacheRemoteDataRatio() {
    return this.getNumberAttribute('cluster_filecache_remote_data_ratio');
  }
  public set clusterFilecacheRemoteDataRatio(value: number) {
    this._clusterFilecacheRemoteDataRatio = value;
  }
  public resetClusterFilecacheRemoteDataRatio() {
    this._clusterFilecacheRemoteDataRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFilecacheRemoteDataRatioInput() {
    return this._clusterFilecacheRemoteDataRatio;
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

  // cluster_routing_allocation_balance_prefer_primary - computed: true, optional: true, required: false
  private _clusterRoutingAllocationBalancePreferPrimary?: boolean | cdktf.IResolvable; 
  public get clusterRoutingAllocationBalancePreferPrimary() {
    return this.getBooleanAttribute('cluster_routing_allocation_balance_prefer_primary');
  }
  public set clusterRoutingAllocationBalancePreferPrimary(value: boolean | cdktf.IResolvable) {
    this._clusterRoutingAllocationBalancePreferPrimary = value;
  }
  public resetClusterRoutingAllocationBalancePreferPrimary() {
    this._clusterRoutingAllocationBalancePreferPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationBalancePreferPrimaryInput() {
    return this._clusterRoutingAllocationBalancePreferPrimary;
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

  // elasticsearch_version - computed: true, optional: true, required: false
  private _elasticsearchVersion?: string; 
  public get elasticsearchVersion() {
    return this.getStringAttribute('elasticsearch_version');
  }
  public set elasticsearchVersion(value: string) {
    this._elasticsearchVersion = value;
  }
  public resetElasticsearchVersion() {
    this._elasticsearchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchVersionInput() {
    return this._elasticsearchVersion;
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

  // enable_remote_backed_storage - computed: true, optional: true, required: false
  private _enableRemoteBackedStorage?: boolean | cdktf.IResolvable; 
  public get enableRemoteBackedStorage() {
    return this.getBooleanAttribute('enable_remote_backed_storage');
  }
  public set enableRemoteBackedStorage(value: boolean | cdktf.IResolvable) {
    this._enableRemoteBackedStorage = value;
  }
  public resetEnableRemoteBackedStorage() {
    this._enableRemoteBackedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteBackedStorageInput() {
    return this._enableRemoteBackedStorage;
  }

  // enable_searchable_snapshots - computed: true, optional: true, required: false
  private _enableSearchableSnapshots?: boolean | cdktf.IResolvable; 
  public get enableSearchableSnapshots() {
    return this.getBooleanAttribute('enable_searchable_snapshots');
  }
  public set enableSearchableSnapshots(value: boolean | cdktf.IResolvable) {
    this._enableSearchableSnapshots = value;
  }
  public resetEnableSearchableSnapshots() {
    this._enableSearchableSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSearchableSnapshotsInput() {
    return this._enableSearchableSnapshots;
  }

  // enable_security_audit - computed: true, optional: true, required: false
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

  // enable_snapshot_api - computed: true, optional: true, required: false
  private _enableSnapshotApi?: boolean | cdktf.IResolvable; 
  public get enableSnapshotApi() {
    return this.getBooleanAttribute('enable_snapshot_api');
  }
  public set enableSnapshotApi(value: boolean | cdktf.IResolvable) {
    this._enableSnapshotApi = value;
  }
  public resetEnableSnapshotApi() {
    this._enableSnapshotApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnapshotApiInput() {
    return this._enableSnapshotApi;
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

  // ism_enabled - computed: true, optional: true, required: false
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

  // ism_history_enabled - computed: true, optional: true, required: false
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

  // knn_memory_circuit_breaker_enabled - computed: true, optional: true, required: false
  private _knnMemoryCircuitBreakerEnabled?: boolean | cdktf.IResolvable; 
  public get knnMemoryCircuitBreakerEnabled() {
    return this.getBooleanAttribute('knn_memory_circuit_breaker_enabled');
  }
  public set knnMemoryCircuitBreakerEnabled(value: boolean | cdktf.IResolvable) {
    this._knnMemoryCircuitBreakerEnabled = value;
  }
  public resetKnnMemoryCircuitBreakerEnabled() {
    this._knnMemoryCircuitBreakerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knnMemoryCircuitBreakerEnabledInput() {
    return this._knnMemoryCircuitBreakerEnabled;
  }

  // knn_memory_circuit_breaker_limit - computed: true, optional: true, required: false
  private _knnMemoryCircuitBreakerLimit?: number; 
  public get knnMemoryCircuitBreakerLimit() {
    return this.getNumberAttribute('knn_memory_circuit_breaker_limit');
  }
  public set knnMemoryCircuitBreakerLimit(value: number) {
    this._knnMemoryCircuitBreakerLimit = value;
  }
  public resetKnnMemoryCircuitBreakerLimit() {
    this._knnMemoryCircuitBreakerLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knnMemoryCircuitBreakerLimitInput() {
    return this._knnMemoryCircuitBreakerLimit;
  }

  // node_search_cache_size - computed: true, optional: true, required: false
  private _nodeSearchCacheSize?: string; 
  public get nodeSearchCacheSize() {
    return this.getStringAttribute('node_search_cache_size');
  }
  public set nodeSearchCacheSize(value: string) {
    this._nodeSearchCacheSize = value;
  }
  public resetNodeSearchCacheSize() {
    this._nodeSearchCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSearchCacheSizeInput() {
    return this._nodeSearchCacheSize;
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

  // script_max_compilations_rate - computed: false, optional: true, required: false
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

  // cluster_remote_store - computed: false, optional: true, required: false
  private _clusterRemoteStore = new ManagedDatabaseOpensearchPropertiesClusterRemoteStoreOutputReference(this, "cluster_remote_store");
  public get clusterRemoteStore() {
    return this._clusterRemoteStore;
  }
  public putClusterRemoteStore(value: ManagedDatabaseOpensearchPropertiesClusterRemoteStore) {
    this._clusterRemoteStore.internalValue = value;
  }
  public resetClusterRemoteStore() {
    this._clusterRemoteStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRemoteStoreInput() {
    return this._clusterRemoteStore.internalValue;
  }

  // cluster_search_request_slowlog - computed: false, optional: true, required: false
  private _clusterSearchRequestSlowlog = new ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference(this, "cluster_search_request_slowlog");
  public get clusterSearchRequestSlowlog() {
    return this._clusterSearchRequestSlowlog;
  }
  public putClusterSearchRequestSlowlog(value: ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog) {
    this._clusterSearchRequestSlowlog.internalValue = value;
  }
  public resetClusterSearchRequestSlowlog() {
    this._clusterSearchRequestSlowlog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSearchRequestSlowlogInput() {
    return this._clusterSearchRequestSlowlog.internalValue;
  }

  // disk_watermarks - computed: false, optional: true, required: false
  private _diskWatermarks = new ManagedDatabaseOpensearchPropertiesDiskWatermarksOutputReference(this, "disk_watermarks");
  public get diskWatermarks() {
    return this._diskWatermarks;
  }
  public putDiskWatermarks(value: ManagedDatabaseOpensearchPropertiesDiskWatermarks) {
    this._diskWatermarks.internalValue = value;
  }
  public resetDiskWatermarks() {
    this._diskWatermarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskWatermarksInput() {
    return this._diskWatermarks.internalValue;
  }

  // index_rollup - computed: false, optional: true, required: false
  private _indexRollup = new ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference(this, "index_rollup");
  public get indexRollup() {
    return this._indexRollup;
  }
  public putIndexRollup(value: ManagedDatabaseOpensearchPropertiesIndexRollup) {
    this._indexRollup.internalValue = value;
  }
  public resetIndexRollup() {
    this._indexRollup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRollupInput() {
    return this._indexRollup.internalValue;
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

  // remote_store - computed: false, optional: true, required: false
  private _remoteStore = new ManagedDatabaseOpensearchPropertiesRemoteStoreOutputReference(this, "remote_store");
  public get remoteStore() {
    return this._remoteStore;
  }
  public putRemoteStore(value: ManagedDatabaseOpensearchPropertiesRemoteStore) {
    this._remoteStore.internalValue = value;
  }
  public resetRemoteStore() {
    this._remoteStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteStoreInput() {
    return this._remoteStore.internalValue;
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

  // search_backpressure - computed: false, optional: true, required: false
  private _searchBackpressure = new ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference(this, "search_backpressure");
  public get searchBackpressure() {
    return this._searchBackpressure;
  }
  public putSearchBackpressure(value: ManagedDatabaseOpensearchPropertiesSearchBackpressure) {
    this._searchBackpressure.internalValue = value;
  }
  public resetSearchBackpressure() {
    this._searchBackpressure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBackpressureInput() {
    return this._searchBackpressure.internalValue;
  }

  // search_insights_top_queries - computed: false, optional: true, required: false
  private _searchInsightsTopQueries = new ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference(this, "search_insights_top_queries");
  public get searchInsightsTopQueries() {
    return this._searchInsightsTopQueries;
  }
  public putSearchInsightsTopQueries(value: ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries) {
    this._searchInsightsTopQueries.internalValue = value;
  }
  public resetSearchInsightsTopQueries() {
    this._searchInsightsTopQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInsightsTopQueriesInput() {
    return this._searchInsightsTopQueries.internalValue;
  }

  // segrep - computed: false, optional: true, required: false
  private _segrep = new ManagedDatabaseOpensearchPropertiesSegrepOutputReference(this, "segrep");
  public get segrep() {
    return this._segrep;
  }
  public putSegrep(value: ManagedDatabaseOpensearchPropertiesSegrep) {
    this._segrep.internalValue = value;
  }
  public resetSegrep() {
    this._segrep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segrepInput() {
    return this._segrep.internalValue;
  }

  // shard_indexing_pressure - computed: false, optional: true, required: false
  private _shardIndexingPressure = new ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference(this, "shard_indexing_pressure");
  public get shardIndexingPressure() {
    return this._shardIndexingPressure;
  }
  public putShardIndexingPressure(value: ManagedDatabaseOpensearchPropertiesShardIndexingPressure) {
    this._shardIndexingPressure.internalValue = value;
  }
  public resetShardIndexingPressure() {
    this._shardIndexingPressure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardIndexingPressureInput() {
    return this._shardIndexingPressure.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch upcloud_managed_database_opensearch}
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
  * @param importFromId The id of the existing ManagedDatabaseOpensearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDatabaseOpensearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_database_opensearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/managed_database_opensearch upcloud_managed_database_opensearch} Resource
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
        providerVersion: '5.24.0',
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
    this._labels = config.labels;
    this._maintenanceWindowDow = config.maintenanceWindowDow;
    this._maintenanceWindowTime = config.maintenanceWindowTime;
    this._name = config.name;
    this._plan = config.plan;
    this._powered = config.powered;
    this._terminationProtection = config.terminationProtection;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // termination_protection - computed: false, optional: true, required: false
  private _terminationProtection?: boolean | cdktf.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktf.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
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
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      maintenance_window_dow: cdktf.stringToTerraform(this._maintenanceWindowDow),
      maintenance_window_time: cdktf.stringToTerraform(this._maintenanceWindowTime),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      powered: cdktf.booleanToTerraform(this._powered),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      termination_protection: {
        value: cdktf.booleanToHclTerraform(this._terminationProtection),
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
