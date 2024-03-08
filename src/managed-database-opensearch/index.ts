/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabaseOpensearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables users access control for OpenSearch service. User access control rules will only be enforced if this attribute is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#access_control ManagedDatabaseOpensearch#access_control}
  */
  readonly accessControl?: boolean | cdktf.IResolvable;
  /**
  * Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs. Users are limited to perform operations on indices based on the user-specific access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#extended_access_control ManagedDatabaseOpensearch#extended_access_control}
  */
  readonly extendedAccessControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#maintenance_window_dow ManagedDatabaseOpensearch#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Maintenance window UTC time in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#maintenance_window_time ManagedDatabaseOpensearch#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}
  */
  readonly name: string;
  /**
  * Service plan to use. This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#plan ManagedDatabaseOpensearch#plan}
  */
  readonly plan: string;
  /**
  * The administrative power state of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#powered ManagedDatabaseOpensearch#powered}
  */
  readonly powered?: boolean | cdktf.IResolvable;
  /**
  * Title of a managed database instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#title ManagedDatabaseOpensearch#title}
  */
  readonly title: string;
  /**
  * Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#zone ManagedDatabaseOpensearch#zone}
  */
  readonly zone: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#network ManagedDatabaseOpensearch#network}
  */
  readonly network?: ManagedDatabaseOpensearchNetwork[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#properties ManagedDatabaseOpensearch#properties}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#family ManagedDatabaseOpensearch#family}
  */
  readonly family: string;
  /**
  * The name of the network. Must be unique within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}
  */
  readonly name: string;
  /**
  * The type of the network. Must be private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}
  */
  readonly type: string;
  /**
  * Private network UUID. Must reside in the same zone as the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#uuid ManagedDatabaseOpensearch#uuid}
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
export interface ManagedDatabaseOpensearchPropertiesMigration {
  /**
  * Database name for bootstrapping the initial connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#dbname ManagedDatabaseOpensearch#dbname}
  */
  readonly dbname?: string;
  /**
  * Hostname or IP address of the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#host ManagedDatabaseOpensearch#host}
  */
  readonly host?: string;
  /**
  * Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#ignore_dbs ManagedDatabaseOpensearch#ignore_dbs}
  */
  readonly ignoreDbs?: string;
  /**
  * Password for authentication with the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#password ManagedDatabaseOpensearch#password}
  */
  readonly password?: string;
  /**
  * Port number of the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#port ManagedDatabaseOpensearch#port}
  */
  readonly port?: number;
  /**
  * The server where to migrate data from is secured with SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#ssl ManagedDatabaseOpensearch#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * User name for authentication with the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#username ManagedDatabaseOpensearch#username}
  */
  readonly username?: string;
}

export function managedDatabaseOpensearchPropertiesMigrationToTerraform(struct?: ManagedDatabaseOpensearchPropertiesMigrationOutputReference | ManagedDatabaseOpensearchPropertiesMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbname: cdktf.stringToTerraform(struct!.dbname),
    host: cdktf.stringToTerraform(struct!.host),
    ignore_dbs: cdktf.stringToTerraform(struct!.ignoreDbs),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function managedDatabaseOpensearchPropertiesMigrationToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesMigrationOutputReference | ManagedDatabaseOpensearchPropertiesMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbname: {
      value: cdktf.stringToHclTerraform(struct!.dbname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_dbs: {
      value: cdktf.stringToHclTerraform(struct!.ignoreDbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseOpensearchPropertiesMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseOpensearchPropertiesMigration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbname = this._dbname;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ignoreDbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDbs = this._ignoreDbs;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchPropertiesMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbname = undefined;
      this._host = undefined;
      this._ignoreDbs = undefined;
      this._password = undefined;
      this._port = undefined;
      this._ssl = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbname = value.dbname;
      this._host = value.host;
      this._ignoreDbs = value.ignoreDbs;
      this._password = value.password;
      this._port = value.port;
      this._ssl = value.ssl;
      this._username = value.username;
    }
  }

  // dbname - computed: true, optional: true, required: false
  private _dbname?: string; 
  public get dbname() {
    return this.getStringAttribute('dbname');
  }
  public set dbname(value: string) {
    this._dbname = value;
  }
  public resetDbname() {
    this._dbname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbnameInput() {
    return this._dbname;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ignore_dbs - computed: true, optional: true, required: false
  private _ignoreDbs?: string; 
  public get ignoreDbs() {
    return this.getStringAttribute('ignore_dbs');
  }
  public set ignoreDbs(value: string) {
    this._ignoreDbs = value;
  }
  public resetIgnoreDbs() {
    this._ignoreDbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDbsInput() {
    return this._ignoreDbs;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ManagedDatabaseOpensearchProperties {
  /**
  * Automatic utility network IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#automatic_utility_network_ip_filter ManagedDatabaseOpensearch#automatic_utility_network_ip_filter}
  */
  readonly automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable;
  /**
  * IP filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#ip_filter ManagedDatabaseOpensearch#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Public access allows connections to your Managed Database services via the public internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#public_access ManagedDatabaseOpensearch#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
  /**
  * OpenSearch major version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#version ManagedDatabaseOpensearch#version}
  */
  readonly version?: string;
  /**
  * migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#migration ManagedDatabaseOpensearch#migration}
  */
  readonly migration?: ManagedDatabaseOpensearchPropertiesMigration;
}

export function managedDatabaseOpensearchPropertiesToTerraform(struct?: ManagedDatabaseOpensearchPropertiesOutputReference | ManagedDatabaseOpensearchProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_utility_network_ip_filter: cdktf.booleanToTerraform(struct!.automaticUtilityNetworkIpFilter),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    public_access: cdktf.booleanToTerraform(struct!.publicAccess),
    version: cdktf.stringToTerraform(struct!.version),
    migration: managedDatabaseOpensearchPropertiesMigrationToTerraform(struct!.migration),
  }
}


export function managedDatabaseOpensearchPropertiesToHclTerraform(struct?: ManagedDatabaseOpensearchPropertiesOutputReference | ManagedDatabaseOpensearchProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_utility_network_ip_filter: {
      value: cdktf.booleanToHclTerraform(struct!.automaticUtilityNetworkIpFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    public_access: {
      value: cdktf.booleanToHclTerraform(struct!.publicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migration: {
      value: managedDatabaseOpensearchPropertiesMigrationToHclTerraform(struct!.migration),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseOpensearchPropertiesMigrationList",
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
    if (this._automaticUtilityNetworkIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUtilityNetworkIpFilter = this._automaticUtilityNetworkIpFilter;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._publicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._migration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migration = this._migration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseOpensearchProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticUtilityNetworkIpFilter = undefined;
      this._ipFilter = undefined;
      this._publicAccess = undefined;
      this._version = undefined;
      this._migration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticUtilityNetworkIpFilter = value.automaticUtilityNetworkIpFilter;
      this._ipFilter = value.ipFilter;
      this._publicAccess = value.publicAccess;
      this._version = value.version;
      this._migration.internalValue = value.migration;
    }
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

  // migration - computed: false, optional: true, required: false
  private _migration = new ManagedDatabaseOpensearchPropertiesMigrationOutputReference(this, "migration");
  public get migration() {
    return this._migration;
  }
  public putMigration(value: ManagedDatabaseOpensearchPropertiesMigration) {
    this._migration.internalValue = value;
  }
  public resetMigration() {
    this._migration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationInput() {
    return this._migration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch upcloud_managed_database_opensearch}
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
  * @param importFromId The id of the existing ManagedDatabaseOpensearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDatabaseOpensearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_database_opensearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.0/docs/resources/managed_database_opensearch upcloud_managed_database_opensearch} Resource
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
        providerVersion: '5.1.0',
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
