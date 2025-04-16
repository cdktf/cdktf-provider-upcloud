// https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabasePostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User defined key-value pairs to classify the managed database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#labels ManagedDatabasePostgresql#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#maintenance_window_dow ManagedDatabasePostgresql#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Maintenance window UTC time in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#maintenance_window_time ManagedDatabasePostgresql#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}
  */
  readonly name: string;
  /**
  * Service plan to use. This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#plan ManagedDatabasePostgresql#plan}
  */
  readonly plan: string;
  /**
  * The administrative power state of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#powered ManagedDatabasePostgresql#powered}
  */
  readonly powered?: boolean | cdktf.IResolvable;
  /**
  * If set to true, prevents the managed service from being powered off, or deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#termination_protection ManagedDatabasePostgresql#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * Title of a managed database instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#title ManagedDatabasePostgresql#title}
  */
  readonly title: string;
  /**
  * Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#zone ManagedDatabasePostgresql#zone}
  */
  readonly zone: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#network ManagedDatabasePostgresql#network}
  */
  readonly network?: ManagedDatabasePostgresqlNetwork[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#properties ManagedDatabasePostgresql#properties}
  */
  readonly properties?: ManagedDatabasePostgresqlProperties;
}
export interface ManagedDatabasePostgresqlComponents {
}

export function managedDatabasePostgresqlComponentsToTerraform(struct?: ManagedDatabasePostgresqlComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedDatabasePostgresqlComponentsToHclTerraform(struct?: ManagedDatabasePostgresqlComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedDatabasePostgresqlComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedDatabasePostgresqlComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlComponents | undefined) {
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

export class ManagedDatabasePostgresqlComponentsList extends cdktf.ComplexList {

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
  public get(index: number): ManagedDatabasePostgresqlComponentsOutputReference {
    return new ManagedDatabasePostgresqlComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabasePostgresqlNodeStates {
}

export function managedDatabasePostgresqlNodeStatesToTerraform(struct?: ManagedDatabasePostgresqlNodeStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedDatabasePostgresqlNodeStatesToHclTerraform(struct?: ManagedDatabasePostgresqlNodeStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedDatabasePostgresqlNodeStatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedDatabasePostgresqlNodeStates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlNodeStates | undefined) {
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

export class ManagedDatabasePostgresqlNodeStatesList extends cdktf.ComplexList {

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
  public get(index: number): ManagedDatabasePostgresqlNodeStatesOutputReference {
    return new ManagedDatabasePostgresqlNodeStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabasePostgresqlNetwork {
  /**
  * Network family. Currently only `IPv4` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#family ManagedDatabasePostgresql#family}
  */
  readonly family: string;
  /**
  * The name of the network. Must be unique within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}
  */
  readonly name: string;
  /**
  * The type of the network. Must be private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#type ManagedDatabasePostgresql#type}
  */
  readonly type: string;
  /**
  * Private network UUID. Must reside in the same zone as the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#uuid ManagedDatabasePostgresql#uuid}
  */
  readonly uuid: string;
}

export function managedDatabasePostgresqlNetworkToTerraform(struct?: ManagedDatabasePostgresqlNetwork | cdktf.IResolvable): any {
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


export function managedDatabasePostgresqlNetworkToHclTerraform(struct?: ManagedDatabasePostgresqlNetwork | cdktf.IResolvable): any {
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

export class ManagedDatabasePostgresqlNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedDatabasePostgresqlNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManagedDatabasePostgresqlNetwork | cdktf.IResolvable | undefined) {
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

export class ManagedDatabasePostgresqlNetworkList extends cdktf.ComplexList {
  public internalValue? : ManagedDatabasePostgresqlNetwork[] | cdktf.IResolvable

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
  public get(index: number): ManagedDatabasePostgresqlNetworkOutputReference {
    return new ManagedDatabasePostgresqlNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabasePostgresqlPropertiesMigration {
  /**
  * Database name for bootstrapping the initial connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#dbname ManagedDatabasePostgresql#dbname}
  */
  readonly dbname?: string;
  /**
  * Hostname or IP address of the server where to migrate data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#host ManagedDatabasePostgresql#host}
  */
  readonly host?: string;
  /**
  * Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#ignore_dbs ManagedDatabasePostgresql#ignore_dbs}
  */
  readonly ignoreDbs?: string;
  /**
  * Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#ignore_roles ManagedDatabasePostgresql#ignore_roles}
  */
  readonly ignoreRoles?: string;
  /**
  * The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#method ManagedDatabasePostgresql#method}
  */
  readonly method?: string;
  /**
  * Password for authentication with the server where to migrate data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#password ManagedDatabasePostgresql#password}
  */
  readonly password?: string;
  /**
  * Port number of the server where to migrate data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#port ManagedDatabasePostgresql#port}
  */
  readonly port?: number;
  /**
  * The server where to migrate data from is secured with SSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#ssl ManagedDatabasePostgresql#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * User name for authentication with the server where to migrate data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#username ManagedDatabasePostgresql#username}
  */
  readonly username?: string;
}

export function managedDatabasePostgresqlPropertiesMigrationToTerraform(struct?: ManagedDatabasePostgresqlPropertiesMigrationOutputReference | ManagedDatabasePostgresqlPropertiesMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbname: cdktf.stringToTerraform(struct!.dbname),
    host: cdktf.stringToTerraform(struct!.host),
    ignore_dbs: cdktf.stringToTerraform(struct!.ignoreDbs),
    ignore_roles: cdktf.stringToTerraform(struct!.ignoreRoles),
    method: cdktf.stringToTerraform(struct!.method),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function managedDatabasePostgresqlPropertiesMigrationToHclTerraform(struct?: ManagedDatabasePostgresqlPropertiesMigrationOutputReference | ManagedDatabasePostgresqlPropertiesMigration): any {
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
    ignore_roles: {
      value: cdktf.stringToHclTerraform(struct!.ignoreRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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

export class ManagedDatabasePostgresqlPropertiesMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlPropertiesMigration | undefined {
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
    if (this._ignoreRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreRoles = this._ignoreRoles;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
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

  public set internalValue(value: ManagedDatabasePostgresqlPropertiesMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbname = undefined;
      this._host = undefined;
      this._ignoreDbs = undefined;
      this._ignoreRoles = undefined;
      this._method = undefined;
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
      this._ignoreRoles = value.ignoreRoles;
      this._method = value.method;
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

  // ignore_roles - computed: true, optional: true, required: false
  private _ignoreRoles?: string; 
  public get ignoreRoles() {
    return this.getStringAttribute('ignore_roles');
  }
  public set ignoreRoles(value: string) {
    this._ignoreRoles = value;
  }
  public resetIgnoreRoles() {
    this._ignoreRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRolesInput() {
    return this._ignoreRoles;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // ssl - computed: true, optional: true, required: false
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
export interface ManagedDatabasePostgresqlPropertiesPgaudit {
  /**
  * Enable pgaudit extension. Enable pgaudit extension. When enabled, pgaudit extension will be automatically installed.Otherwise, extension will be uninstalled but auditing configurations will be preserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#feature_enabled ManagedDatabasePostgresql#feature_enabled}
  */
  readonly featureEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies which classes of statements will be logged by session audit logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log ManagedDatabasePostgresql#log}
  */
  readonly log?: string[];
  /**
  * Specifies that session logging should be enabled in the casewhere all relations in a statement are in pg_catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_catalog ManagedDatabasePostgresql#log_catalog}
  */
  readonly logCatalog?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether log messages will be visible to a client process such as psql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_client ManagedDatabasePostgresql#log_client}
  */
  readonly logClient?: boolean | cdktf.IResolvable;
  /**
  * Specifies the log level that will be used for log entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_level ManagedDatabasePostgresql#log_level}
  */
  readonly logLevel?: string;
  /**
  * Crop parameters representation and whole statements if they exceed this threshold. A (default) value of -1 disable the truncation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_max_string_length ManagedDatabasePostgresql#log_max_string_length}
  */
  readonly logMaxStringLength?: number;
  /**
  * This GUC allows to turn off logging nested statements, that is, statements that are executed as part of another ExecutorRun.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_nested_statements ManagedDatabasePostgresql#log_nested_statements}
  */
  readonly logNestedStatements?: boolean | cdktf.IResolvable;
  /**
  * Specifies that audit logging should include the parameters that were passed with the statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_parameter ManagedDatabasePostgresql#log_parameter}
  */
  readonly logParameter?: boolean | cdktf.IResolvable;
  /**
  * Specifies that parameter values longer than this setting (in bytes) should not be logged, but replaced with <long param suppressed>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_parameter_max_size ManagedDatabasePostgresql#log_parameter_max_size}
  */
  readonly logParameterMaxSize?: number;
  /**
  * Specifies whether session audit logging should create a separate log entry for each relation (TABLE, VIEW, etc.) referenced in a SELECT or DML statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_relation ManagedDatabasePostgresql#log_relation}
  */
  readonly logRelation?: boolean | cdktf.IResolvable;
  /**
  * Specifies that audit logging should include the rows retrieved or affected by a statement. When enabled the rows field will be included after the parameter field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_rows ManagedDatabasePostgresql#log_rows}
  */
  readonly logRows?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether logging will include the statement text and parameters (if enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_statement ManagedDatabasePostgresql#log_statement}
  */
  readonly logStatement?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether logging will include the statement text and parameters with the first log entry for a statement/substatement combination or with every entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_statement_once ManagedDatabasePostgresql#log_statement_once}
  */
  readonly logStatementOnce?: boolean | cdktf.IResolvable;
  /**
  * Specifies the master role to use for object audit logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#role ManagedDatabasePostgresql#role}
  */
  readonly role?: string;
}

export function managedDatabasePostgresqlPropertiesPgauditToTerraform(struct?: ManagedDatabasePostgresqlPropertiesPgauditOutputReference | ManagedDatabasePostgresqlPropertiesPgaudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_enabled: cdktf.booleanToTerraform(struct!.featureEnabled),
    log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.log),
    log_catalog: cdktf.booleanToTerraform(struct!.logCatalog),
    log_client: cdktf.booleanToTerraform(struct!.logClient),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    log_max_string_length: cdktf.numberToTerraform(struct!.logMaxStringLength),
    log_nested_statements: cdktf.booleanToTerraform(struct!.logNestedStatements),
    log_parameter: cdktf.booleanToTerraform(struct!.logParameter),
    log_parameter_max_size: cdktf.numberToTerraform(struct!.logParameterMaxSize),
    log_relation: cdktf.booleanToTerraform(struct!.logRelation),
    log_rows: cdktf.booleanToTerraform(struct!.logRows),
    log_statement: cdktf.booleanToTerraform(struct!.logStatement),
    log_statement_once: cdktf.booleanToTerraform(struct!.logStatementOnce),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function managedDatabasePostgresqlPropertiesPgauditToHclTerraform(struct?: ManagedDatabasePostgresqlPropertiesPgauditOutputReference | ManagedDatabasePostgresqlPropertiesPgaudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.featureEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.log),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.logCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_client: {
      value: cdktf.booleanToHclTerraform(struct!.logClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_max_string_length: {
      value: cdktf.numberToHclTerraform(struct!.logMaxStringLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_nested_statements: {
      value: cdktf.booleanToHclTerraform(struct!.logNestedStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.logParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_parameter_max_size: {
      value: cdktf.numberToHclTerraform(struct!.logParameterMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_relation: {
      value: cdktf.booleanToHclTerraform(struct!.logRelation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_rows: {
      value: cdktf.booleanToHclTerraform(struct!.logRows),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_statement: {
      value: cdktf.booleanToHclTerraform(struct!.logStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_statement_once: {
      value: cdktf.booleanToHclTerraform(struct!.logStatementOnce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabasePostgresqlPropertiesPgauditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlPropertiesPgaudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureEnabled = this._featureEnabled;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCatalog = this._logCatalog;
    }
    if (this._logClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.logClient = this._logClient;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._logMaxStringLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMaxStringLength = this._logMaxStringLength;
    }
    if (this._logNestedStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.logNestedStatements = this._logNestedStatements;
    }
    if (this._logParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.logParameter = this._logParameter;
    }
    if (this._logParameterMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.logParameterMaxSize = this._logParameterMaxSize;
    }
    if (this._logRelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRelation = this._logRelation;
    }
    if (this._logRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRows = this._logRows;
    }
    if (this._logStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStatement = this._logStatement;
    }
    if (this._logStatementOnce !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStatementOnce = this._logStatementOnce;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlPropertiesPgaudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._featureEnabled = undefined;
      this._log = undefined;
      this._logCatalog = undefined;
      this._logClient = undefined;
      this._logLevel = undefined;
      this._logMaxStringLength = undefined;
      this._logNestedStatements = undefined;
      this._logParameter = undefined;
      this._logParameterMaxSize = undefined;
      this._logRelation = undefined;
      this._logRows = undefined;
      this._logStatement = undefined;
      this._logStatementOnce = undefined;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._featureEnabled = value.featureEnabled;
      this._log = value.log;
      this._logCatalog = value.logCatalog;
      this._logClient = value.logClient;
      this._logLevel = value.logLevel;
      this._logMaxStringLength = value.logMaxStringLength;
      this._logNestedStatements = value.logNestedStatements;
      this._logParameter = value.logParameter;
      this._logParameterMaxSize = value.logParameterMaxSize;
      this._logRelation = value.logRelation;
      this._logRows = value.logRows;
      this._logStatement = value.logStatement;
      this._logStatementOnce = value.logStatementOnce;
      this._role = value.role;
    }
  }

  // feature_enabled - computed: true, optional: true, required: false
  private _featureEnabled?: boolean | cdktf.IResolvable; 
  public get featureEnabled() {
    return this.getBooleanAttribute('feature_enabled');
  }
  public set featureEnabled(value: boolean | cdktf.IResolvable) {
    this._featureEnabled = value;
  }
  public resetFeatureEnabled() {
    this._featureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureEnabledInput() {
    return this._featureEnabled;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string[]; 
  public get log() {
    return this.getListAttribute('log');
  }
  public set log(value: string[]) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_catalog - computed: true, optional: true, required: false
  private _logCatalog?: boolean | cdktf.IResolvable; 
  public get logCatalog() {
    return this.getBooleanAttribute('log_catalog');
  }
  public set logCatalog(value: boolean | cdktf.IResolvable) {
    this._logCatalog = value;
  }
  public resetLogCatalog() {
    this._logCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCatalogInput() {
    return this._logCatalog;
  }

  // log_client - computed: true, optional: true, required: false
  private _logClient?: boolean | cdktf.IResolvable; 
  public get logClient() {
    return this.getBooleanAttribute('log_client');
  }
  public set logClient(value: boolean | cdktf.IResolvable) {
    this._logClient = value;
  }
  public resetLogClient() {
    this._logClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logClientInput() {
    return this._logClient;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // log_max_string_length - computed: true, optional: true, required: false
  private _logMaxStringLength?: number; 
  public get logMaxStringLength() {
    return this.getNumberAttribute('log_max_string_length');
  }
  public set logMaxStringLength(value: number) {
    this._logMaxStringLength = value;
  }
  public resetLogMaxStringLength() {
    this._logMaxStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMaxStringLengthInput() {
    return this._logMaxStringLength;
  }

  // log_nested_statements - computed: true, optional: true, required: false
  private _logNestedStatements?: boolean | cdktf.IResolvable; 
  public get logNestedStatements() {
    return this.getBooleanAttribute('log_nested_statements');
  }
  public set logNestedStatements(value: boolean | cdktf.IResolvable) {
    this._logNestedStatements = value;
  }
  public resetLogNestedStatements() {
    this._logNestedStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNestedStatementsInput() {
    return this._logNestedStatements;
  }

  // log_parameter - computed: true, optional: true, required: false
  private _logParameter?: boolean | cdktf.IResolvable; 
  public get logParameter() {
    return this.getBooleanAttribute('log_parameter');
  }
  public set logParameter(value: boolean | cdktf.IResolvable) {
    this._logParameter = value;
  }
  public resetLogParameter() {
    this._logParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logParameterInput() {
    return this._logParameter;
  }

  // log_parameter_max_size - computed: true, optional: true, required: false
  private _logParameterMaxSize?: number; 
  public get logParameterMaxSize() {
    return this.getNumberAttribute('log_parameter_max_size');
  }
  public set logParameterMaxSize(value: number) {
    this._logParameterMaxSize = value;
  }
  public resetLogParameterMaxSize() {
    this._logParameterMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logParameterMaxSizeInput() {
    return this._logParameterMaxSize;
  }

  // log_relation - computed: true, optional: true, required: false
  private _logRelation?: boolean | cdktf.IResolvable; 
  public get logRelation() {
    return this.getBooleanAttribute('log_relation');
  }
  public set logRelation(value: boolean | cdktf.IResolvable) {
    this._logRelation = value;
  }
  public resetLogRelation() {
    this._logRelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRelationInput() {
    return this._logRelation;
  }

  // log_rows - computed: true, optional: true, required: false
  private _logRows?: boolean | cdktf.IResolvable; 
  public get logRows() {
    return this.getBooleanAttribute('log_rows');
  }
  public set logRows(value: boolean | cdktf.IResolvable) {
    this._logRows = value;
  }
  public resetLogRows() {
    this._logRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRowsInput() {
    return this._logRows;
  }

  // log_statement - computed: true, optional: true, required: false
  private _logStatement?: boolean | cdktf.IResolvable; 
  public get logStatement() {
    return this.getBooleanAttribute('log_statement');
  }
  public set logStatement(value: boolean | cdktf.IResolvable) {
    this._logStatement = value;
  }
  public resetLogStatement() {
    this._logStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStatementInput() {
    return this._logStatement;
  }

  // log_statement_once - computed: true, optional: true, required: false
  private _logStatementOnce?: boolean | cdktf.IResolvable; 
  public get logStatementOnce() {
    return this.getBooleanAttribute('log_statement_once');
  }
  public set logStatementOnce(value: boolean | cdktf.IResolvable) {
    this._logStatementOnce = value;
  }
  public resetLogStatementOnce() {
    this._logStatementOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStatementOnceInput() {
    return this._logStatementOnce;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface ManagedDatabasePostgresqlPropertiesPgbouncer {
  /**
  * If the automatically created database pools have been unused this many seconds, they are freed. If 0 then timeout is disabled. [seconds].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autodb_idle_timeout ManagedDatabasePostgresql#autodb_idle_timeout}
  */
  readonly autodbIdleTimeout?: number;
  /**
  * Do not allow more than this many server connections per database (regardless of user). Setting it to 0 means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autodb_max_db_connections ManagedDatabasePostgresql#autodb_max_db_connections}
  */
  readonly autodbMaxDbConnections?: number;
  /**
  * PGBouncer pool mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autodb_pool_mode ManagedDatabasePostgresql#autodb_pool_mode}
  */
  readonly autodbPoolMode?: string;
  /**
  * If non-zero then create automatically a pool of that size per user when a pool doesn't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autodb_pool_size ManagedDatabasePostgresql#autodb_pool_size}
  */
  readonly autodbPoolSize?: number;
  /**
  * List of parameters to ignore when given in startup packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#ignore_startup_parameters ManagedDatabasePostgresql#ignore_startup_parameters}
  */
  readonly ignoreStartupParameters?: string[];
  /**
  * PgBouncer tracks protocol-level named prepared statements related commands sent by the client in transaction and statement pooling modes when max_prepared_statements is set to a non-zero value. Setting it to 0 disables prepared statements. max_prepared_statements defaults to 100, and its maximum is 3000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_prepared_statements ManagedDatabasePostgresql#max_prepared_statements}
  */
  readonly maxPreparedStatements?: number;
  /**
  * Add more server connections to pool if below this number. Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#min_pool_size ManagedDatabasePostgresql#min_pool_size}
  */
  readonly minPoolSize?: number;
  /**
  * If a server connection has been idle more than this many seconds it will be dropped. If 0 then timeout is disabled. [seconds].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#server_idle_timeout ManagedDatabasePostgresql#server_idle_timeout}
  */
  readonly serverIdleTimeout?: number;
  /**
  * The pooler will close an unused server connection that has been connected longer than this. [seconds].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#server_lifetime ManagedDatabasePostgresql#server_lifetime}
  */
  readonly serverLifetime?: number;
  /**
  * Run server_reset_query (DISCARD ALL) in all pooling modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#server_reset_query_always ManagedDatabasePostgresql#server_reset_query_always}
  */
  readonly serverResetQueryAlways?: boolean | cdktf.IResolvable;
}

export function managedDatabasePostgresqlPropertiesPgbouncerToTerraform(struct?: ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference | ManagedDatabasePostgresqlPropertiesPgbouncer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autodb_idle_timeout: cdktf.numberToTerraform(struct!.autodbIdleTimeout),
    autodb_max_db_connections: cdktf.numberToTerraform(struct!.autodbMaxDbConnections),
    autodb_pool_mode: cdktf.stringToTerraform(struct!.autodbPoolMode),
    autodb_pool_size: cdktf.numberToTerraform(struct!.autodbPoolSize),
    ignore_startup_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreStartupParameters),
    max_prepared_statements: cdktf.numberToTerraform(struct!.maxPreparedStatements),
    min_pool_size: cdktf.numberToTerraform(struct!.minPoolSize),
    server_idle_timeout: cdktf.numberToTerraform(struct!.serverIdleTimeout),
    server_lifetime: cdktf.numberToTerraform(struct!.serverLifetime),
    server_reset_query_always: cdktf.booleanToTerraform(struct!.serverResetQueryAlways),
  }
}


export function managedDatabasePostgresqlPropertiesPgbouncerToHclTerraform(struct?: ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference | ManagedDatabasePostgresqlPropertiesPgbouncer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autodb_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.autodbIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autodb_max_db_connections: {
      value: cdktf.numberToHclTerraform(struct!.autodbMaxDbConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autodb_pool_mode: {
      value: cdktf.stringToHclTerraform(struct!.autodbPoolMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autodb_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.autodbPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_startup_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreStartupParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_prepared_statements: {
      value: cdktf.numberToHclTerraform(struct!.maxPreparedStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.minPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.serverIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.serverLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_reset_query_always: {
      value: cdktf.booleanToHclTerraform(struct!.serverResetQueryAlways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlPropertiesPgbouncer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autodbIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbIdleTimeout = this._autodbIdleTimeout;
    }
    if (this._autodbMaxDbConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbMaxDbConnections = this._autodbMaxDbConnections;
    }
    if (this._autodbPoolMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbPoolMode = this._autodbPoolMode;
    }
    if (this._autodbPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbPoolSize = this._autodbPoolSize;
    }
    if (this._ignoreStartupParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreStartupParameters = this._ignoreStartupParameters;
    }
    if (this._maxPreparedStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPreparedStatements = this._maxPreparedStatements;
    }
    if (this._minPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPoolSize = this._minPoolSize;
    }
    if (this._serverIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIdleTimeout = this._serverIdleTimeout;
    }
    if (this._serverLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverLifetime = this._serverLifetime;
    }
    if (this._serverResetQueryAlways !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResetQueryAlways = this._serverResetQueryAlways;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlPropertiesPgbouncer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autodbIdleTimeout = undefined;
      this._autodbMaxDbConnections = undefined;
      this._autodbPoolMode = undefined;
      this._autodbPoolSize = undefined;
      this._ignoreStartupParameters = undefined;
      this._maxPreparedStatements = undefined;
      this._minPoolSize = undefined;
      this._serverIdleTimeout = undefined;
      this._serverLifetime = undefined;
      this._serverResetQueryAlways = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autodbIdleTimeout = value.autodbIdleTimeout;
      this._autodbMaxDbConnections = value.autodbMaxDbConnections;
      this._autodbPoolMode = value.autodbPoolMode;
      this._autodbPoolSize = value.autodbPoolSize;
      this._ignoreStartupParameters = value.ignoreStartupParameters;
      this._maxPreparedStatements = value.maxPreparedStatements;
      this._minPoolSize = value.minPoolSize;
      this._serverIdleTimeout = value.serverIdleTimeout;
      this._serverLifetime = value.serverLifetime;
      this._serverResetQueryAlways = value.serverResetQueryAlways;
    }
  }

  // autodb_idle_timeout - computed: true, optional: true, required: false
  private _autodbIdleTimeout?: number; 
  public get autodbIdleTimeout() {
    return this.getNumberAttribute('autodb_idle_timeout');
  }
  public set autodbIdleTimeout(value: number) {
    this._autodbIdleTimeout = value;
  }
  public resetAutodbIdleTimeout() {
    this._autodbIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbIdleTimeoutInput() {
    return this._autodbIdleTimeout;
  }

  // autodb_max_db_connections - computed: true, optional: true, required: false
  private _autodbMaxDbConnections?: number; 
  public get autodbMaxDbConnections() {
    return this.getNumberAttribute('autodb_max_db_connections');
  }
  public set autodbMaxDbConnections(value: number) {
    this._autodbMaxDbConnections = value;
  }
  public resetAutodbMaxDbConnections() {
    this._autodbMaxDbConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbMaxDbConnectionsInput() {
    return this._autodbMaxDbConnections;
  }

  // autodb_pool_mode - computed: true, optional: true, required: false
  private _autodbPoolMode?: string; 
  public get autodbPoolMode() {
    return this.getStringAttribute('autodb_pool_mode');
  }
  public set autodbPoolMode(value: string) {
    this._autodbPoolMode = value;
  }
  public resetAutodbPoolMode() {
    this._autodbPoolMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbPoolModeInput() {
    return this._autodbPoolMode;
  }

  // autodb_pool_size - computed: true, optional: true, required: false
  private _autodbPoolSize?: number; 
  public get autodbPoolSize() {
    return this.getNumberAttribute('autodb_pool_size');
  }
  public set autodbPoolSize(value: number) {
    this._autodbPoolSize = value;
  }
  public resetAutodbPoolSize() {
    this._autodbPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbPoolSizeInput() {
    return this._autodbPoolSize;
  }

  // ignore_startup_parameters - computed: true, optional: true, required: false
  private _ignoreStartupParameters?: string[]; 
  public get ignoreStartupParameters() {
    return this.getListAttribute('ignore_startup_parameters');
  }
  public set ignoreStartupParameters(value: string[]) {
    this._ignoreStartupParameters = value;
  }
  public resetIgnoreStartupParameters() {
    this._ignoreStartupParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreStartupParametersInput() {
    return this._ignoreStartupParameters;
  }

  // max_prepared_statements - computed: true, optional: true, required: false
  private _maxPreparedStatements?: number; 
  public get maxPreparedStatements() {
    return this.getNumberAttribute('max_prepared_statements');
  }
  public set maxPreparedStatements(value: number) {
    this._maxPreparedStatements = value;
  }
  public resetMaxPreparedStatements() {
    this._maxPreparedStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreparedStatementsInput() {
    return this._maxPreparedStatements;
  }

  // min_pool_size - computed: true, optional: true, required: false
  private _minPoolSize?: number; 
  public get minPoolSize() {
    return this.getNumberAttribute('min_pool_size');
  }
  public set minPoolSize(value: number) {
    this._minPoolSize = value;
  }
  public resetMinPoolSize() {
    this._minPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPoolSizeInput() {
    return this._minPoolSize;
  }

  // server_idle_timeout - computed: true, optional: true, required: false
  private _serverIdleTimeout?: number; 
  public get serverIdleTimeout() {
    return this.getNumberAttribute('server_idle_timeout');
  }
  public set serverIdleTimeout(value: number) {
    this._serverIdleTimeout = value;
  }
  public resetServerIdleTimeout() {
    this._serverIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdleTimeoutInput() {
    return this._serverIdleTimeout;
  }

  // server_lifetime - computed: true, optional: true, required: false
  private _serverLifetime?: number; 
  public get serverLifetime() {
    return this.getNumberAttribute('server_lifetime');
  }
  public set serverLifetime(value: number) {
    this._serverLifetime = value;
  }
  public resetServerLifetime() {
    this._serverLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLifetimeInput() {
    return this._serverLifetime;
  }

  // server_reset_query_always - computed: true, optional: true, required: false
  private _serverResetQueryAlways?: boolean | cdktf.IResolvable; 
  public get serverResetQueryAlways() {
    return this.getBooleanAttribute('server_reset_query_always');
  }
  public set serverResetQueryAlways(value: boolean | cdktf.IResolvable) {
    this._serverResetQueryAlways = value;
  }
  public resetServerResetQueryAlways() {
    this._serverResetQueryAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResetQueryAlwaysInput() {
    return this._serverResetQueryAlways;
  }
}
export interface ManagedDatabasePostgresqlPropertiesPglookout {
  /**
  * Number of seconds of master unavailability before triggering database failover to standby.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_failover_replication_time_lag ManagedDatabasePostgresql#max_failover_replication_time_lag}
  */
  readonly maxFailoverReplicationTimeLag?: number;
}

export function managedDatabasePostgresqlPropertiesPglookoutToTerraform(struct?: ManagedDatabasePostgresqlPropertiesPglookoutOutputReference | ManagedDatabasePostgresqlPropertiesPglookout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_failover_replication_time_lag: cdktf.numberToTerraform(struct!.maxFailoverReplicationTimeLag),
  }
}


export function managedDatabasePostgresqlPropertiesPglookoutToHclTerraform(struct?: ManagedDatabasePostgresqlPropertiesPglookoutOutputReference | ManagedDatabasePostgresqlPropertiesPglookout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_failover_replication_time_lag: {
      value: cdktf.numberToHclTerraform(struct!.maxFailoverReplicationTimeLag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabasePostgresqlPropertiesPglookoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlPropertiesPglookout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFailoverReplicationTimeLag !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailoverReplicationTimeLag = this._maxFailoverReplicationTimeLag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlPropertiesPglookout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFailoverReplicationTimeLag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFailoverReplicationTimeLag = value.maxFailoverReplicationTimeLag;
    }
  }

  // max_failover_replication_time_lag - computed: true, optional: true, required: false
  private _maxFailoverReplicationTimeLag?: number; 
  public get maxFailoverReplicationTimeLag() {
    return this.getNumberAttribute('max_failover_replication_time_lag');
  }
  public set maxFailoverReplicationTimeLag(value: number) {
    this._maxFailoverReplicationTimeLag = value;
  }
  public resetMaxFailoverReplicationTimeLag() {
    this._maxFailoverReplicationTimeLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailoverReplicationTimeLagInput() {
    return this._maxFailoverReplicationTimeLag;
  }
}
export interface ManagedDatabasePostgresqlPropertiesTimescaledb {
  /**
  * The number of background workers for timescaledb operations. You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_background_workers ManagedDatabasePostgresql#max_background_workers}
  */
  readonly maxBackgroundWorkers?: number;
}

export function managedDatabasePostgresqlPropertiesTimescaledbToTerraform(struct?: ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference | ManagedDatabasePostgresqlPropertiesTimescaledb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_background_workers: cdktf.numberToTerraform(struct!.maxBackgroundWorkers),
  }
}


export function managedDatabasePostgresqlPropertiesTimescaledbToHclTerraform(struct?: ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference | ManagedDatabasePostgresqlPropertiesTimescaledb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_background_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxBackgroundWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlPropertiesTimescaledb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBackgroundWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackgroundWorkers = this._maxBackgroundWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlPropertiesTimescaledb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBackgroundWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBackgroundWorkers = value.maxBackgroundWorkers;
    }
  }

  // max_background_workers - computed: true, optional: true, required: false
  private _maxBackgroundWorkers?: number; 
  public get maxBackgroundWorkers() {
    return this.getNumberAttribute('max_background_workers');
  }
  public set maxBackgroundWorkers(value: number) {
    this._maxBackgroundWorkers = value;
  }
  public resetMaxBackgroundWorkers() {
    this._maxBackgroundWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackgroundWorkersInput() {
    return this._maxBackgroundWorkers;
  }
}
export interface ManagedDatabasePostgresqlProperties {
  /**
  * Custom password for admin user. Defaults to random string. This must be set only when a new service is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#admin_password ManagedDatabasePostgresql#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Custom username for admin user. This must be set only when a new service is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#admin_username ManagedDatabasePostgresql#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#automatic_utility_network_ip_filter ManagedDatabasePostgresql#automatic_utility_network_ip_filter}
  */
  readonly automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable;
  /**
  * Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. The default is 0.2 (20% of table size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autovacuum_analyze_scale_factor ManagedDatabasePostgresql#autovacuum_analyze_scale_factor}
  */
  readonly autovacuumAnalyzeScaleFactor?: number;
  /**
  * Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. The default is 50 tuples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autovacuum_analyze_threshold ManagedDatabasePostgresql#autovacuum_analyze_threshold}
  */
  readonly autovacuumAnalyzeThreshold?: number;
  /**
  * Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autovacuum_freeze_max_age ManagedDatabasePostgresql#autovacuum_freeze_max_age}
  */
  readonly autovacuumFreezeMaxAge?: number;
  /**
  * Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is three. This parameter can only be set at server start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autovacuum_max_workers ManagedDatabasePostgresql#autovacuum_max_workers}
  */
  readonly autovacuumMaxWorkers?: number;
  /**
  * Specifies the minimum delay between autovacuum runs on any given database. The delay is measured in seconds, and the default is one minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autovacuum_naptime ManagedDatabasePostgresql#autovacuum_naptime}
  */
  readonly autovacuumNaptime?: number;
  /**
  * Specifies the cost delay value that will be used in automatic VACUUM operations. If -1 is specified, the regular vacuum_cost_delay value will be used. The default value is 20 milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_delay ManagedDatabasePostgresql#autovacuum_vacuum_cost_delay}
  */
  readonly autovacuumVacuumCostDelay?: number;
  /**
  * Specifies the cost limit value that will be used in automatic VACUUM operations. If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_limit ManagedDatabasePostgresql#autovacuum_vacuum_cost_limit}
  */
  readonly autovacuumVacuumCostLimit?: number;
  /**
  * Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. The default is 0.2 (20% of table size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_scale_factor ManagedDatabasePostgresql#autovacuum_vacuum_scale_factor}
  */
  readonly autovacuumVacuumScaleFactor?: number;
  /**
  * Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is 50 tuples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_threshold ManagedDatabasePostgresql#autovacuum_vacuum_threshold}
  */
  readonly autovacuumVacuumThreshold?: number;
  /**
  * The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#backup_hour ManagedDatabasePostgresql#backup_hour}
  */
  readonly backupHour?: number;
  /**
  * The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#backup_minute ManagedDatabasePostgresql#backup_minute}
  */
  readonly backupMinute?: number;
  /**
  * Specifies the delay between activity rounds for the background writer in milliseconds. Default is 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#bgwriter_delay ManagedDatabasePostgresql#bgwriter_delay}
  */
  readonly bgwriterDelay?: number;
  /**
  * Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. Specified in kilobytes, default is 512. Setting of 0 disables forced writeback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#bgwriter_flush_after ManagedDatabasePostgresql#bgwriter_flush_after}
  */
  readonly bgwriterFlushAfter?: number;
  /**
  * In each round, no more than this many buffers will be written by the background writer. Setting this to zero disables background writing. Default is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#bgwriter_lru_maxpages ManagedDatabasePostgresql#bgwriter_lru_maxpages}
  */
  readonly bgwriterLruMaxpages?: number;
  /**
  * The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#bgwriter_lru_multiplier ManagedDatabasePostgresql#bgwriter_lru_multiplier}
  */
  readonly bgwriterLruMultiplier?: number;
  /**
  * This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#deadlock_timeout ManagedDatabasePostgresql#deadlock_timeout}
  */
  readonly deadlockTimeout?: number;
  /**
  * Specifies the default TOAST compression method for values of compressible columns (the default is lz4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#default_toast_compression ManagedDatabasePostgresql#default_toast_compression}
  */
  readonly defaultToastCompression?: string;
  /**
  * Time out sessions with open transactions after this number of milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#idle_in_transaction_session_timeout ManagedDatabasePostgresql#idle_in_transaction_session_timeout}
  */
  readonly idleInTransactionSessionTimeout?: number;
  /**
  * IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#ip_filter ManagedDatabasePostgresql#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Controls system-wide use of Just-in-Time Compilation (JIT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#jit ManagedDatabasePostgresql#jit}
  */
  readonly jit?: boolean | cdktf.IResolvable;
  /**
  * Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_autovacuum_min_duration ManagedDatabasePostgresql#log_autovacuum_min_duration}
  */
  readonly logAutovacuumMinDuration?: number;
  /**
  * Controls the amount of detail written in the server log for each message that is logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_error_verbosity ManagedDatabasePostgresql#log_error_verbosity}
  */
  readonly logErrorVerbosity?: string;
  /**
  * Choose from one of the available log formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_line_prefix ManagedDatabasePostgresql#log_line_prefix}
  */
  readonly logLinePrefix?: string;
  /**
  * Log statements that take more than this number of milliseconds to run, -1 disables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_min_duration_statement ManagedDatabasePostgresql#log_min_duration_statement}
  */
  readonly logMinDurationStatement?: number;
  /**
  * Log statements for each temporary file created larger than this number of kilobytes, -1 disables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#log_temp_files ManagedDatabasePostgresql#log_temp_files}
  */
  readonly logTempFiles?: number;
  /**
  * PostgreSQL maximum number of files that can be open per process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_files_per_process ManagedDatabasePostgresql#max_files_per_process}
  */
  readonly maxFilesPerProcess?: number;
  /**
  * PostgreSQL maximum locks per transaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_locks_per_transaction ManagedDatabasePostgresql#max_locks_per_transaction}
  */
  readonly maxLocksPerTransaction?: number;
  /**
  * PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_logical_replication_workers ManagedDatabasePostgresql#max_logical_replication_workers}
  */
  readonly maxLogicalReplicationWorkers?: number;
  /**
  * Sets the maximum number of workers that the system can support for parallel queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_parallel_workers ManagedDatabasePostgresql#max_parallel_workers}
  */
  readonly maxParallelWorkers?: number;
  /**
  * Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_parallel_workers_per_gather ManagedDatabasePostgresql#max_parallel_workers_per_gather}
  */
  readonly maxParallelWorkersPerGather?: number;
  /**
  * PostgreSQL maximum predicate locks per transaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_pred_locks_per_transaction ManagedDatabasePostgresql#max_pred_locks_per_transaction}
  */
  readonly maxPredLocksPerTransaction?: number;
  /**
  * PostgreSQL maximum prepared transactions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_prepared_transactions ManagedDatabasePostgresql#max_prepared_transactions}
  */
  readonly maxPreparedTransactions?: number;
  /**
  * PostgreSQL maximum replication slots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_replication_slots ManagedDatabasePostgresql#max_replication_slots}
  */
  readonly maxReplicationSlots?: number;
  /**
  * PostgreSQL maximum WAL size (MB) reserved for replication slots. Default is -1 (unlimited). wal_keep_size minimum WAL size setting takes precedence over this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_slot_wal_keep_size ManagedDatabasePostgresql#max_slot_wal_keep_size}
  */
  readonly maxSlotWalKeepSize?: number;
  /**
  * Maximum depth of the stack in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_stack_depth ManagedDatabasePostgresql#max_stack_depth}
  */
  readonly maxStackDepth?: number;
  /**
  * Max standby archive delay in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_standby_archive_delay ManagedDatabasePostgresql#max_standby_archive_delay}
  */
  readonly maxStandbyArchiveDelay?: number;
  /**
  * Max standby streaming delay in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_standby_streaming_delay ManagedDatabasePostgresql#max_standby_streaming_delay}
  */
  readonly maxStandbyStreamingDelay?: number;
  /**
  * PostgreSQL maximum WAL senders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_wal_senders ManagedDatabasePostgresql#max_wal_senders}
  */
  readonly maxWalSenders?: number;
  /**
  * Sets the maximum number of background processes that the system can support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#max_worker_processes ManagedDatabasePostgresql#max_worker_processes}
  */
  readonly maxWorkerProcesses?: number;
  /**
  * Chooses the algorithm for encrypting passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#password_encryption ManagedDatabasePostgresql#password_encryption}
  */
  readonly passwordEncryption?: string;
  /**
  * Sets the time interval to run pg_partman's scheduled tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#pg_partman_bgw_interval ManagedDatabasePostgresql#pg_partman_bgw_interval}
  */
  readonly pgPartmanBgwInterval?: number;
  /**
  * Controls which role to use for pg_partman's scheduled background tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#pg_partman_bgw_role ManagedDatabasePostgresql#pg_partman_bgw_role}
  */
  readonly pgPartmanBgwRole?: string;
  /**
  * Enable pg_stat_monitor extension if available for the current cluster. Enable the pg_stat_monitor extension. Enabling this extension will cause the cluster to be restarted.When this extension is enabled, pg_stat_statements results for utility commands are unreliable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#pg_stat_monitor_enable ManagedDatabasePostgresql#pg_stat_monitor_enable}
  */
  readonly pgStatMonitorEnable?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables query plan monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_enable_query_plan ManagedDatabasePostgresql#pg_stat_monitor_pgsm_enable_query_plan}
  */
  readonly pgStatMonitorPgsmEnableQueryPlan?: boolean | cdktf.IResolvable;
  /**
  * Sets the maximum number of buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_max_buckets ManagedDatabasePostgresql#pg_stat_monitor_pgsm_max_buckets}
  */
  readonly pgStatMonitorPgsmMaxBuckets?: number;
  /**
  * Controls which statements are counted. Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions), or none to disable statement statistics collection. The default value is top.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#pg_stat_statements_track ManagedDatabasePostgresql#pg_stat_statements_track}
  */
  readonly pgStatStatementsTrack?: string;
  /**
  * Public Access. Allow access to the service from the public Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#public_access ManagedDatabasePostgresql#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
  /**
  * Service logging. Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#service_log ManagedDatabasePostgresql#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Percentage of total RAM that the database server uses for shared memory buffers. Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#shared_buffers_percentage ManagedDatabasePostgresql#shared_buffers_percentage}
  */
  readonly sharedBuffersPercentage?: number;
  /**
  * Synchronous replication type. Note that the service plan also needs to support synchronous replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#synchronous_replication ManagedDatabasePostgresql#synchronous_replication}
  */
  readonly synchronousReplication?: string;
  /**
  * PostgreSQL temporary file limit in KiB, -1 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#temp_file_limit ManagedDatabasePostgresql#temp_file_limit}
  */
  readonly tempFileLimit?: number;
  /**
  * PostgreSQL service timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#timezone ManagedDatabasePostgresql#timezone}
  */
  readonly timezone?: string;
  /**
  * Specifies the number of bytes reserved to track the currently executing command for each active session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#track_activity_query_size ManagedDatabasePostgresql#track_activity_query_size}
  */
  readonly trackActivityQuerySize?: number;
  /**
  * Record commit time of transactions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#track_commit_timestamp ManagedDatabasePostgresql#track_commit_timestamp}
  */
  readonly trackCommitTimestamp?: string;
  /**
  * Enables tracking of function call counts and time used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#track_functions ManagedDatabasePostgresql#track_functions}
  */
  readonly trackFunctions?: string;
  /**
  * Enables timing of database I/O calls. This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#track_io_timing ManagedDatabasePostgresql#track_io_timing}
  */
  readonly trackIoTiming?: string;
  /**
  * Variant of the PostgreSQL service, may affect the features that are exposed by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#variant ManagedDatabasePostgresql#variant}
  */
  readonly variant?: string;
  /**
  * PostgreSQL major version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#version ManagedDatabasePostgresql#version}
  */
  readonly version?: string;
  /**
  * Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#wal_sender_timeout ManagedDatabasePostgresql#wal_sender_timeout}
  */
  readonly walSenderTimeout?: number;
  /**
  * WAL flush interval in milliseconds. Note that setting this value to lower than the default 200ms may negatively impact performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#wal_writer_delay ManagedDatabasePostgresql#wal_writer_delay}
  */
  readonly walWriterDelay?: number;
  /**
  * Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. Default is 1MB + 0.075% of total RAM (up to 32MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#work_mem ManagedDatabasePostgresql#work_mem}
  */
  readonly workMem?: number;
  /**
  * migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#migration ManagedDatabasePostgresql#migration}
  */
  readonly migration?: ManagedDatabasePostgresqlPropertiesMigration;
  /**
  * pgaudit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#pgaudit ManagedDatabasePostgresql#pgaudit}
  */
  readonly pgaudit?: ManagedDatabasePostgresqlPropertiesPgaudit;
  /**
  * pgbouncer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#pgbouncer ManagedDatabasePostgresql#pgbouncer}
  */
  readonly pgbouncer?: ManagedDatabasePostgresqlPropertiesPgbouncer;
  /**
  * pglookout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#pglookout ManagedDatabasePostgresql#pglookout}
  */
  readonly pglookout?: ManagedDatabasePostgresqlPropertiesPglookout;
  /**
  * timescaledb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#timescaledb ManagedDatabasePostgresql#timescaledb}
  */
  readonly timescaledb?: ManagedDatabasePostgresqlPropertiesTimescaledb;
}

export function managedDatabasePostgresqlPropertiesToTerraform(struct?: ManagedDatabasePostgresqlPropertiesOutputReference | ManagedDatabasePostgresqlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    automatic_utility_network_ip_filter: cdktf.booleanToTerraform(struct!.automaticUtilityNetworkIpFilter),
    autovacuum_analyze_scale_factor: cdktf.numberToTerraform(struct!.autovacuumAnalyzeScaleFactor),
    autovacuum_analyze_threshold: cdktf.numberToTerraform(struct!.autovacuumAnalyzeThreshold),
    autovacuum_freeze_max_age: cdktf.numberToTerraform(struct!.autovacuumFreezeMaxAge),
    autovacuum_max_workers: cdktf.numberToTerraform(struct!.autovacuumMaxWorkers),
    autovacuum_naptime: cdktf.numberToTerraform(struct!.autovacuumNaptime),
    autovacuum_vacuum_cost_delay: cdktf.numberToTerraform(struct!.autovacuumVacuumCostDelay),
    autovacuum_vacuum_cost_limit: cdktf.numberToTerraform(struct!.autovacuumVacuumCostLimit),
    autovacuum_vacuum_scale_factor: cdktf.numberToTerraform(struct!.autovacuumVacuumScaleFactor),
    autovacuum_vacuum_threshold: cdktf.numberToTerraform(struct!.autovacuumVacuumThreshold),
    backup_hour: cdktf.numberToTerraform(struct!.backupHour),
    backup_minute: cdktf.numberToTerraform(struct!.backupMinute),
    bgwriter_delay: cdktf.numberToTerraform(struct!.bgwriterDelay),
    bgwriter_flush_after: cdktf.numberToTerraform(struct!.bgwriterFlushAfter),
    bgwriter_lru_maxpages: cdktf.numberToTerraform(struct!.bgwriterLruMaxpages),
    bgwriter_lru_multiplier: cdktf.numberToTerraform(struct!.bgwriterLruMultiplier),
    deadlock_timeout: cdktf.numberToTerraform(struct!.deadlockTimeout),
    default_toast_compression: cdktf.stringToTerraform(struct!.defaultToastCompression),
    idle_in_transaction_session_timeout: cdktf.numberToTerraform(struct!.idleInTransactionSessionTimeout),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    jit: cdktf.booleanToTerraform(struct!.jit),
    log_autovacuum_min_duration: cdktf.numberToTerraform(struct!.logAutovacuumMinDuration),
    log_error_verbosity: cdktf.stringToTerraform(struct!.logErrorVerbosity),
    log_line_prefix: cdktf.stringToTerraform(struct!.logLinePrefix),
    log_min_duration_statement: cdktf.numberToTerraform(struct!.logMinDurationStatement),
    log_temp_files: cdktf.numberToTerraform(struct!.logTempFiles),
    max_files_per_process: cdktf.numberToTerraform(struct!.maxFilesPerProcess),
    max_locks_per_transaction: cdktf.numberToTerraform(struct!.maxLocksPerTransaction),
    max_logical_replication_workers: cdktf.numberToTerraform(struct!.maxLogicalReplicationWorkers),
    max_parallel_workers: cdktf.numberToTerraform(struct!.maxParallelWorkers),
    max_parallel_workers_per_gather: cdktf.numberToTerraform(struct!.maxParallelWorkersPerGather),
    max_pred_locks_per_transaction: cdktf.numberToTerraform(struct!.maxPredLocksPerTransaction),
    max_prepared_transactions: cdktf.numberToTerraform(struct!.maxPreparedTransactions),
    max_replication_slots: cdktf.numberToTerraform(struct!.maxReplicationSlots),
    max_slot_wal_keep_size: cdktf.numberToTerraform(struct!.maxSlotWalKeepSize),
    max_stack_depth: cdktf.numberToTerraform(struct!.maxStackDepth),
    max_standby_archive_delay: cdktf.numberToTerraform(struct!.maxStandbyArchiveDelay),
    max_standby_streaming_delay: cdktf.numberToTerraform(struct!.maxStandbyStreamingDelay),
    max_wal_senders: cdktf.numberToTerraform(struct!.maxWalSenders),
    max_worker_processes: cdktf.numberToTerraform(struct!.maxWorkerProcesses),
    password_encryption: cdktf.stringToTerraform(struct!.passwordEncryption),
    pg_partman_bgw_interval: cdktf.numberToTerraform(struct!.pgPartmanBgwInterval),
    pg_partman_bgw_role: cdktf.stringToTerraform(struct!.pgPartmanBgwRole),
    pg_stat_monitor_enable: cdktf.booleanToTerraform(struct!.pgStatMonitorEnable),
    pg_stat_monitor_pgsm_enable_query_plan: cdktf.booleanToTerraform(struct!.pgStatMonitorPgsmEnableQueryPlan),
    pg_stat_monitor_pgsm_max_buckets: cdktf.numberToTerraform(struct!.pgStatMonitorPgsmMaxBuckets),
    pg_stat_statements_track: cdktf.stringToTerraform(struct!.pgStatStatementsTrack),
    public_access: cdktf.booleanToTerraform(struct!.publicAccess),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    shared_buffers_percentage: cdktf.numberToTerraform(struct!.sharedBuffersPercentage),
    synchronous_replication: cdktf.stringToTerraform(struct!.synchronousReplication),
    temp_file_limit: cdktf.numberToTerraform(struct!.tempFileLimit),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    track_activity_query_size: cdktf.numberToTerraform(struct!.trackActivityQuerySize),
    track_commit_timestamp: cdktf.stringToTerraform(struct!.trackCommitTimestamp),
    track_functions: cdktf.stringToTerraform(struct!.trackFunctions),
    track_io_timing: cdktf.stringToTerraform(struct!.trackIoTiming),
    variant: cdktf.stringToTerraform(struct!.variant),
    version: cdktf.stringToTerraform(struct!.version),
    wal_sender_timeout: cdktf.numberToTerraform(struct!.walSenderTimeout),
    wal_writer_delay: cdktf.numberToTerraform(struct!.walWriterDelay),
    work_mem: cdktf.numberToTerraform(struct!.workMem),
    migration: managedDatabasePostgresqlPropertiesMigrationToTerraform(struct!.migration),
    pgaudit: managedDatabasePostgresqlPropertiesPgauditToTerraform(struct!.pgaudit),
    pgbouncer: managedDatabasePostgresqlPropertiesPgbouncerToTerraform(struct!.pgbouncer),
    pglookout: managedDatabasePostgresqlPropertiesPglookoutToTerraform(struct!.pglookout),
    timescaledb: managedDatabasePostgresqlPropertiesTimescaledbToTerraform(struct!.timescaledb),
  }
}


export function managedDatabasePostgresqlPropertiesToHclTerraform(struct?: ManagedDatabasePostgresqlPropertiesOutputReference | ManagedDatabasePostgresqlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automatic_utility_network_ip_filter: {
      value: cdktf.booleanToHclTerraform(struct!.automaticUtilityNetworkIpFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autovacuum_analyze_scale_factor: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumAnalyzeScaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_analyze_threshold: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumAnalyzeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_freeze_max_age: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumFreezeMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_max_workers: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumMaxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_naptime: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumNaptime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_vacuum_cost_delay: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumVacuumCostDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_vacuum_cost_limit: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumVacuumCostLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_vacuum_scale_factor: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumVacuumScaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_vacuum_threshold: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumVacuumThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_hour: {
      value: cdktf.numberToHclTerraform(struct!.backupHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_minute: {
      value: cdktf.numberToHclTerraform(struct!.backupMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgwriter_delay: {
      value: cdktf.numberToHclTerraform(struct!.bgwriterDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgwriter_flush_after: {
      value: cdktf.numberToHclTerraform(struct!.bgwriterFlushAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgwriter_lru_maxpages: {
      value: cdktf.numberToHclTerraform(struct!.bgwriterLruMaxpages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgwriter_lru_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bgwriterLruMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deadlock_timeout: {
      value: cdktf.numberToHclTerraform(struct!.deadlockTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_toast_compression: {
      value: cdktf.stringToHclTerraform(struct!.defaultToastCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_in_transaction_session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleInTransactionSessionTimeout),
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
    jit: {
      value: cdktf.booleanToHclTerraform(struct!.jit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_autovacuum_min_duration: {
      value: cdktf.numberToHclTerraform(struct!.logAutovacuumMinDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_error_verbosity: {
      value: cdktf.stringToHclTerraform(struct!.logErrorVerbosity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_line_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logLinePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_min_duration_statement: {
      value: cdktf.numberToHclTerraform(struct!.logMinDurationStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_temp_files: {
      value: cdktf.numberToHclTerraform(struct!.logTempFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_files_per_process: {
      value: cdktf.numberToHclTerraform(struct!.maxFilesPerProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_locks_per_transaction: {
      value: cdktf.numberToHclTerraform(struct!.maxLocksPerTransaction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_logical_replication_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxLogicalReplicationWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parallel_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxParallelWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parallel_workers_per_gather: {
      value: cdktf.numberToHclTerraform(struct!.maxParallelWorkersPerGather),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pred_locks_per_transaction: {
      value: cdktf.numberToHclTerraform(struct!.maxPredLocksPerTransaction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_prepared_transactions: {
      value: cdktf.numberToHclTerraform(struct!.maxPreparedTransactions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_replication_slots: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicationSlots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_slot_wal_keep_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSlotWalKeepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_stack_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxStackDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_standby_archive_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxStandbyArchiveDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_standby_streaming_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxStandbyStreamingDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wal_senders: {
      value: cdktf.numberToHclTerraform(struct!.maxWalSenders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_worker_processes: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkerProcesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_encryption: {
      value: cdktf.stringToHclTerraform(struct!.passwordEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pg_partman_bgw_interval: {
      value: cdktf.numberToHclTerraform(struct!.pgPartmanBgwInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pg_partman_bgw_role: {
      value: cdktf.stringToHclTerraform(struct!.pgPartmanBgwRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pg_stat_monitor_enable: {
      value: cdktf.booleanToHclTerraform(struct!.pgStatMonitorEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pg_stat_monitor_pgsm_enable_query_plan: {
      value: cdktf.booleanToHclTerraform(struct!.pgStatMonitorPgsmEnableQueryPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pg_stat_monitor_pgsm_max_buckets: {
      value: cdktf.numberToHclTerraform(struct!.pgStatMonitorPgsmMaxBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pg_stat_statements_track: {
      value: cdktf.stringToHclTerraform(struct!.pgStatStatementsTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_access: {
      value: cdktf.booleanToHclTerraform(struct!.publicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_log: {
      value: cdktf.booleanToHclTerraform(struct!.serviceLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shared_buffers_percentage: {
      value: cdktf.numberToHclTerraform(struct!.sharedBuffersPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synchronous_replication: {
      value: cdktf.stringToHclTerraform(struct!.synchronousReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_file_limit: {
      value: cdktf.numberToHclTerraform(struct!.tempFileLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_activity_query_size: {
      value: cdktf.numberToHclTerraform(struct!.trackActivityQuerySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_commit_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.trackCommitTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_functions: {
      value: cdktf.stringToHclTerraform(struct!.trackFunctions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_io_timing: {
      value: cdktf.stringToHclTerraform(struct!.trackIoTiming),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant: {
      value: cdktf.stringToHclTerraform(struct!.variant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wal_sender_timeout: {
      value: cdktf.numberToHclTerraform(struct!.walSenderTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wal_writer_delay: {
      value: cdktf.numberToHclTerraform(struct!.walWriterDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    work_mem: {
      value: cdktf.numberToHclTerraform(struct!.workMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    migration: {
      value: managedDatabasePostgresqlPropertiesMigrationToHclTerraform(struct!.migration),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabasePostgresqlPropertiesMigrationList",
    },
    pgaudit: {
      value: managedDatabasePostgresqlPropertiesPgauditToHclTerraform(struct!.pgaudit),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabasePostgresqlPropertiesPgauditList",
    },
    pgbouncer: {
      value: managedDatabasePostgresqlPropertiesPgbouncerToHclTerraform(struct!.pgbouncer),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabasePostgresqlPropertiesPgbouncerList",
    },
    pglookout: {
      value: managedDatabasePostgresqlPropertiesPglookoutToHclTerraform(struct!.pglookout),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabasePostgresqlPropertiesPglookoutList",
    },
    timescaledb: {
      value: managedDatabasePostgresqlPropertiesTimescaledbToHclTerraform(struct!.timescaledb),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabasePostgresqlPropertiesTimescaledbList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabasePostgresqlPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._automaticUtilityNetworkIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUtilityNetworkIpFilter = this._automaticUtilityNetworkIpFilter;
    }
    if (this._autovacuumAnalyzeScaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumAnalyzeScaleFactor = this._autovacuumAnalyzeScaleFactor;
    }
    if (this._autovacuumAnalyzeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumAnalyzeThreshold = this._autovacuumAnalyzeThreshold;
    }
    if (this._autovacuumFreezeMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumFreezeMaxAge = this._autovacuumFreezeMaxAge;
    }
    if (this._autovacuumMaxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumMaxWorkers = this._autovacuumMaxWorkers;
    }
    if (this._autovacuumNaptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumNaptime = this._autovacuumNaptime;
    }
    if (this._autovacuumVacuumCostDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumCostDelay = this._autovacuumVacuumCostDelay;
    }
    if (this._autovacuumVacuumCostLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumCostLimit = this._autovacuumVacuumCostLimit;
    }
    if (this._autovacuumVacuumScaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumScaleFactor = this._autovacuumVacuumScaleFactor;
    }
    if (this._autovacuumVacuumThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumThreshold = this._autovacuumVacuumThreshold;
    }
    if (this._backupHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupHour = this._backupHour;
    }
    if (this._backupMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMinute = this._backupMinute;
    }
    if (this._bgwriterDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterDelay = this._bgwriterDelay;
    }
    if (this._bgwriterFlushAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterFlushAfter = this._bgwriterFlushAfter;
    }
    if (this._bgwriterLruMaxpages !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterLruMaxpages = this._bgwriterLruMaxpages;
    }
    if (this._bgwriterLruMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterLruMultiplier = this._bgwriterLruMultiplier;
    }
    if (this._deadlockTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadlockTimeout = this._deadlockTimeout;
    }
    if (this._defaultToastCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultToastCompression = this._defaultToastCompression;
    }
    if (this._idleInTransactionSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleInTransactionSessionTimeout = this._idleInTransactionSessionTimeout;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._jit !== undefined) {
      hasAnyValues = true;
      internalValueResult.jit = this._jit;
    }
    if (this._logAutovacuumMinDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAutovacuumMinDuration = this._logAutovacuumMinDuration;
    }
    if (this._logErrorVerbosity !== undefined) {
      hasAnyValues = true;
      internalValueResult.logErrorVerbosity = this._logErrorVerbosity;
    }
    if (this._logLinePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLinePrefix = this._logLinePrefix;
    }
    if (this._logMinDurationStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMinDurationStatement = this._logMinDurationStatement;
    }
    if (this._logTempFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTempFiles = this._logTempFiles;
    }
    if (this._maxFilesPerProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFilesPerProcess = this._maxFilesPerProcess;
    }
    if (this._maxLocksPerTransaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLocksPerTransaction = this._maxLocksPerTransaction;
    }
    if (this._maxLogicalReplicationWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLogicalReplicationWorkers = this._maxLogicalReplicationWorkers;
    }
    if (this._maxParallelWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelWorkers = this._maxParallelWorkers;
    }
    if (this._maxParallelWorkersPerGather !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelWorkersPerGather = this._maxParallelWorkersPerGather;
    }
    if (this._maxPredLocksPerTransaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPredLocksPerTransaction = this._maxPredLocksPerTransaction;
    }
    if (this._maxPreparedTransactions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPreparedTransactions = this._maxPreparedTransactions;
    }
    if (this._maxReplicationSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicationSlots = this._maxReplicationSlots;
    }
    if (this._maxSlotWalKeepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSlotWalKeepSize = this._maxSlotWalKeepSize;
    }
    if (this._maxStackDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStackDepth = this._maxStackDepth;
    }
    if (this._maxStandbyArchiveDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStandbyArchiveDelay = this._maxStandbyArchiveDelay;
    }
    if (this._maxStandbyStreamingDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStandbyStreamingDelay = this._maxStandbyStreamingDelay;
    }
    if (this._maxWalSenders !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWalSenders = this._maxWalSenders;
    }
    if (this._maxWorkerProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkerProcesses = this._maxWorkerProcesses;
    }
    if (this._passwordEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordEncryption = this._passwordEncryption;
    }
    if (this._pgPartmanBgwInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgPartmanBgwInterval = this._pgPartmanBgwInterval;
    }
    if (this._pgPartmanBgwRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgPartmanBgwRole = this._pgPartmanBgwRole;
    }
    if (this._pgStatMonitorEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgStatMonitorEnable = this._pgStatMonitorEnable;
    }
    if (this._pgStatMonitorPgsmEnableQueryPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgStatMonitorPgsmEnableQueryPlan = this._pgStatMonitorPgsmEnableQueryPlan;
    }
    if (this._pgStatMonitorPgsmMaxBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgStatMonitorPgsmMaxBuckets = this._pgStatMonitorPgsmMaxBuckets;
    }
    if (this._pgStatStatementsTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgStatStatementsTrack = this._pgStatStatementsTrack;
    }
    if (this._publicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess;
    }
    if (this._serviceLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLog = this._serviceLog;
    }
    if (this._sharedBuffersPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedBuffersPercentage = this._sharedBuffersPercentage;
    }
    if (this._synchronousReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronousReplication = this._synchronousReplication;
    }
    if (this._tempFileLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempFileLimit = this._tempFileLimit;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._trackActivityQuerySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackActivityQuerySize = this._trackActivityQuerySize;
    }
    if (this._trackCommitTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackCommitTimestamp = this._trackCommitTimestamp;
    }
    if (this._trackFunctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackFunctions = this._trackFunctions;
    }
    if (this._trackIoTiming !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackIoTiming = this._trackIoTiming;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._walSenderTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.walSenderTimeout = this._walSenderTimeout;
    }
    if (this._walWriterDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.walWriterDelay = this._walWriterDelay;
    }
    if (this._workMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.workMem = this._workMem;
    }
    if (this._migration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migration = this._migration?.internalValue;
    }
    if (this._pgaudit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgaudit = this._pgaudit?.internalValue;
    }
    if (this._pgbouncer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgbouncer = this._pgbouncer?.internalValue;
    }
    if (this._pglookout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pglookout = this._pglookout?.internalValue;
    }
    if (this._timescaledb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timescaledb = this._timescaledb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._automaticUtilityNetworkIpFilter = undefined;
      this._autovacuumAnalyzeScaleFactor = undefined;
      this._autovacuumAnalyzeThreshold = undefined;
      this._autovacuumFreezeMaxAge = undefined;
      this._autovacuumMaxWorkers = undefined;
      this._autovacuumNaptime = undefined;
      this._autovacuumVacuumCostDelay = undefined;
      this._autovacuumVacuumCostLimit = undefined;
      this._autovacuumVacuumScaleFactor = undefined;
      this._autovacuumVacuumThreshold = undefined;
      this._backupHour = undefined;
      this._backupMinute = undefined;
      this._bgwriterDelay = undefined;
      this._bgwriterFlushAfter = undefined;
      this._bgwriterLruMaxpages = undefined;
      this._bgwriterLruMultiplier = undefined;
      this._deadlockTimeout = undefined;
      this._defaultToastCompression = undefined;
      this._idleInTransactionSessionTimeout = undefined;
      this._ipFilter = undefined;
      this._jit = undefined;
      this._logAutovacuumMinDuration = undefined;
      this._logErrorVerbosity = undefined;
      this._logLinePrefix = undefined;
      this._logMinDurationStatement = undefined;
      this._logTempFiles = undefined;
      this._maxFilesPerProcess = undefined;
      this._maxLocksPerTransaction = undefined;
      this._maxLogicalReplicationWorkers = undefined;
      this._maxParallelWorkers = undefined;
      this._maxParallelWorkersPerGather = undefined;
      this._maxPredLocksPerTransaction = undefined;
      this._maxPreparedTransactions = undefined;
      this._maxReplicationSlots = undefined;
      this._maxSlotWalKeepSize = undefined;
      this._maxStackDepth = undefined;
      this._maxStandbyArchiveDelay = undefined;
      this._maxStandbyStreamingDelay = undefined;
      this._maxWalSenders = undefined;
      this._maxWorkerProcesses = undefined;
      this._passwordEncryption = undefined;
      this._pgPartmanBgwInterval = undefined;
      this._pgPartmanBgwRole = undefined;
      this._pgStatMonitorEnable = undefined;
      this._pgStatMonitorPgsmEnableQueryPlan = undefined;
      this._pgStatMonitorPgsmMaxBuckets = undefined;
      this._pgStatStatementsTrack = undefined;
      this._publicAccess = undefined;
      this._serviceLog = undefined;
      this._sharedBuffersPercentage = undefined;
      this._synchronousReplication = undefined;
      this._tempFileLimit = undefined;
      this._timezone = undefined;
      this._trackActivityQuerySize = undefined;
      this._trackCommitTimestamp = undefined;
      this._trackFunctions = undefined;
      this._trackIoTiming = undefined;
      this._variant = undefined;
      this._version = undefined;
      this._walSenderTimeout = undefined;
      this._walWriterDelay = undefined;
      this._workMem = undefined;
      this._migration.internalValue = undefined;
      this._pgaudit.internalValue = undefined;
      this._pgbouncer.internalValue = undefined;
      this._pglookout.internalValue = undefined;
      this._timescaledb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._automaticUtilityNetworkIpFilter = value.automaticUtilityNetworkIpFilter;
      this._autovacuumAnalyzeScaleFactor = value.autovacuumAnalyzeScaleFactor;
      this._autovacuumAnalyzeThreshold = value.autovacuumAnalyzeThreshold;
      this._autovacuumFreezeMaxAge = value.autovacuumFreezeMaxAge;
      this._autovacuumMaxWorkers = value.autovacuumMaxWorkers;
      this._autovacuumNaptime = value.autovacuumNaptime;
      this._autovacuumVacuumCostDelay = value.autovacuumVacuumCostDelay;
      this._autovacuumVacuumCostLimit = value.autovacuumVacuumCostLimit;
      this._autovacuumVacuumScaleFactor = value.autovacuumVacuumScaleFactor;
      this._autovacuumVacuumThreshold = value.autovacuumVacuumThreshold;
      this._backupHour = value.backupHour;
      this._backupMinute = value.backupMinute;
      this._bgwriterDelay = value.bgwriterDelay;
      this._bgwriterFlushAfter = value.bgwriterFlushAfter;
      this._bgwriterLruMaxpages = value.bgwriterLruMaxpages;
      this._bgwriterLruMultiplier = value.bgwriterLruMultiplier;
      this._deadlockTimeout = value.deadlockTimeout;
      this._defaultToastCompression = value.defaultToastCompression;
      this._idleInTransactionSessionTimeout = value.idleInTransactionSessionTimeout;
      this._ipFilter = value.ipFilter;
      this._jit = value.jit;
      this._logAutovacuumMinDuration = value.logAutovacuumMinDuration;
      this._logErrorVerbosity = value.logErrorVerbosity;
      this._logLinePrefix = value.logLinePrefix;
      this._logMinDurationStatement = value.logMinDurationStatement;
      this._logTempFiles = value.logTempFiles;
      this._maxFilesPerProcess = value.maxFilesPerProcess;
      this._maxLocksPerTransaction = value.maxLocksPerTransaction;
      this._maxLogicalReplicationWorkers = value.maxLogicalReplicationWorkers;
      this._maxParallelWorkers = value.maxParallelWorkers;
      this._maxParallelWorkersPerGather = value.maxParallelWorkersPerGather;
      this._maxPredLocksPerTransaction = value.maxPredLocksPerTransaction;
      this._maxPreparedTransactions = value.maxPreparedTransactions;
      this._maxReplicationSlots = value.maxReplicationSlots;
      this._maxSlotWalKeepSize = value.maxSlotWalKeepSize;
      this._maxStackDepth = value.maxStackDepth;
      this._maxStandbyArchiveDelay = value.maxStandbyArchiveDelay;
      this._maxStandbyStreamingDelay = value.maxStandbyStreamingDelay;
      this._maxWalSenders = value.maxWalSenders;
      this._maxWorkerProcesses = value.maxWorkerProcesses;
      this._passwordEncryption = value.passwordEncryption;
      this._pgPartmanBgwInterval = value.pgPartmanBgwInterval;
      this._pgPartmanBgwRole = value.pgPartmanBgwRole;
      this._pgStatMonitorEnable = value.pgStatMonitorEnable;
      this._pgStatMonitorPgsmEnableQueryPlan = value.pgStatMonitorPgsmEnableQueryPlan;
      this._pgStatMonitorPgsmMaxBuckets = value.pgStatMonitorPgsmMaxBuckets;
      this._pgStatStatementsTrack = value.pgStatStatementsTrack;
      this._publicAccess = value.publicAccess;
      this._serviceLog = value.serviceLog;
      this._sharedBuffersPercentage = value.sharedBuffersPercentage;
      this._synchronousReplication = value.synchronousReplication;
      this._tempFileLimit = value.tempFileLimit;
      this._timezone = value.timezone;
      this._trackActivityQuerySize = value.trackActivityQuerySize;
      this._trackCommitTimestamp = value.trackCommitTimestamp;
      this._trackFunctions = value.trackFunctions;
      this._trackIoTiming = value.trackIoTiming;
      this._variant = value.variant;
      this._version = value.version;
      this._walSenderTimeout = value.walSenderTimeout;
      this._walWriterDelay = value.walWriterDelay;
      this._workMem = value.workMem;
      this._migration.internalValue = value.migration;
      this._pgaudit.internalValue = value.pgaudit;
      this._pgbouncer.internalValue = value.pgbouncer;
      this._pglookout.internalValue = value.pglookout;
      this._timescaledb.internalValue = value.timescaledb;
    }
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: true, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
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

  // autovacuum_analyze_scale_factor - computed: true, optional: true, required: false
  private _autovacuumAnalyzeScaleFactor?: number; 
  public get autovacuumAnalyzeScaleFactor() {
    return this.getNumberAttribute('autovacuum_analyze_scale_factor');
  }
  public set autovacuumAnalyzeScaleFactor(value: number) {
    this._autovacuumAnalyzeScaleFactor = value;
  }
  public resetAutovacuumAnalyzeScaleFactor() {
    this._autovacuumAnalyzeScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumAnalyzeScaleFactorInput() {
    return this._autovacuumAnalyzeScaleFactor;
  }

  // autovacuum_analyze_threshold - computed: true, optional: true, required: false
  private _autovacuumAnalyzeThreshold?: number; 
  public get autovacuumAnalyzeThreshold() {
    return this.getNumberAttribute('autovacuum_analyze_threshold');
  }
  public set autovacuumAnalyzeThreshold(value: number) {
    this._autovacuumAnalyzeThreshold = value;
  }
  public resetAutovacuumAnalyzeThreshold() {
    this._autovacuumAnalyzeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumAnalyzeThresholdInput() {
    return this._autovacuumAnalyzeThreshold;
  }

  // autovacuum_freeze_max_age - computed: true, optional: true, required: false
  private _autovacuumFreezeMaxAge?: number; 
  public get autovacuumFreezeMaxAge() {
    return this.getNumberAttribute('autovacuum_freeze_max_age');
  }
  public set autovacuumFreezeMaxAge(value: number) {
    this._autovacuumFreezeMaxAge = value;
  }
  public resetAutovacuumFreezeMaxAge() {
    this._autovacuumFreezeMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumFreezeMaxAgeInput() {
    return this._autovacuumFreezeMaxAge;
  }

  // autovacuum_max_workers - computed: true, optional: true, required: false
  private _autovacuumMaxWorkers?: number; 
  public get autovacuumMaxWorkers() {
    return this.getNumberAttribute('autovacuum_max_workers');
  }
  public set autovacuumMaxWorkers(value: number) {
    this._autovacuumMaxWorkers = value;
  }
  public resetAutovacuumMaxWorkers() {
    this._autovacuumMaxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumMaxWorkersInput() {
    return this._autovacuumMaxWorkers;
  }

  // autovacuum_naptime - computed: true, optional: true, required: false
  private _autovacuumNaptime?: number; 
  public get autovacuumNaptime() {
    return this.getNumberAttribute('autovacuum_naptime');
  }
  public set autovacuumNaptime(value: number) {
    this._autovacuumNaptime = value;
  }
  public resetAutovacuumNaptime() {
    this._autovacuumNaptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumNaptimeInput() {
    return this._autovacuumNaptime;
  }

  // autovacuum_vacuum_cost_delay - computed: true, optional: true, required: false
  private _autovacuumVacuumCostDelay?: number; 
  public get autovacuumVacuumCostDelay() {
    return this.getNumberAttribute('autovacuum_vacuum_cost_delay');
  }
  public set autovacuumVacuumCostDelay(value: number) {
    this._autovacuumVacuumCostDelay = value;
  }
  public resetAutovacuumVacuumCostDelay() {
    this._autovacuumVacuumCostDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumCostDelayInput() {
    return this._autovacuumVacuumCostDelay;
  }

  // autovacuum_vacuum_cost_limit - computed: true, optional: true, required: false
  private _autovacuumVacuumCostLimit?: number; 
  public get autovacuumVacuumCostLimit() {
    return this.getNumberAttribute('autovacuum_vacuum_cost_limit');
  }
  public set autovacuumVacuumCostLimit(value: number) {
    this._autovacuumVacuumCostLimit = value;
  }
  public resetAutovacuumVacuumCostLimit() {
    this._autovacuumVacuumCostLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumCostLimitInput() {
    return this._autovacuumVacuumCostLimit;
  }

  // autovacuum_vacuum_scale_factor - computed: true, optional: true, required: false
  private _autovacuumVacuumScaleFactor?: number; 
  public get autovacuumVacuumScaleFactor() {
    return this.getNumberAttribute('autovacuum_vacuum_scale_factor');
  }
  public set autovacuumVacuumScaleFactor(value: number) {
    this._autovacuumVacuumScaleFactor = value;
  }
  public resetAutovacuumVacuumScaleFactor() {
    this._autovacuumVacuumScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumScaleFactorInput() {
    return this._autovacuumVacuumScaleFactor;
  }

  // autovacuum_vacuum_threshold - computed: true, optional: true, required: false
  private _autovacuumVacuumThreshold?: number; 
  public get autovacuumVacuumThreshold() {
    return this.getNumberAttribute('autovacuum_vacuum_threshold');
  }
  public set autovacuumVacuumThreshold(value: number) {
    this._autovacuumVacuumThreshold = value;
  }
  public resetAutovacuumVacuumThreshold() {
    this._autovacuumVacuumThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumThresholdInput() {
    return this._autovacuumVacuumThreshold;
  }

  // backup_hour - computed: true, optional: true, required: false
  private _backupHour?: number; 
  public get backupHour() {
    return this.getNumberAttribute('backup_hour');
  }
  public set backupHour(value: number) {
    this._backupHour = value;
  }
  public resetBackupHour() {
    this._backupHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupHourInput() {
    return this._backupHour;
  }

  // backup_minute - computed: true, optional: true, required: false
  private _backupMinute?: number; 
  public get backupMinute() {
    return this.getNumberAttribute('backup_minute');
  }
  public set backupMinute(value: number) {
    this._backupMinute = value;
  }
  public resetBackupMinute() {
    this._backupMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMinuteInput() {
    return this._backupMinute;
  }

  // bgwriter_delay - computed: true, optional: true, required: false
  private _bgwriterDelay?: number; 
  public get bgwriterDelay() {
    return this.getNumberAttribute('bgwriter_delay');
  }
  public set bgwriterDelay(value: number) {
    this._bgwriterDelay = value;
  }
  public resetBgwriterDelay() {
    this._bgwriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterDelayInput() {
    return this._bgwriterDelay;
  }

  // bgwriter_flush_after - computed: true, optional: true, required: false
  private _bgwriterFlushAfter?: number; 
  public get bgwriterFlushAfter() {
    return this.getNumberAttribute('bgwriter_flush_after');
  }
  public set bgwriterFlushAfter(value: number) {
    this._bgwriterFlushAfter = value;
  }
  public resetBgwriterFlushAfter() {
    this._bgwriterFlushAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterFlushAfterInput() {
    return this._bgwriterFlushAfter;
  }

  // bgwriter_lru_maxpages - computed: true, optional: true, required: false
  private _bgwriterLruMaxpages?: number; 
  public get bgwriterLruMaxpages() {
    return this.getNumberAttribute('bgwriter_lru_maxpages');
  }
  public set bgwriterLruMaxpages(value: number) {
    this._bgwriterLruMaxpages = value;
  }
  public resetBgwriterLruMaxpages() {
    this._bgwriterLruMaxpages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterLruMaxpagesInput() {
    return this._bgwriterLruMaxpages;
  }

  // bgwriter_lru_multiplier - computed: true, optional: true, required: false
  private _bgwriterLruMultiplier?: number; 
  public get bgwriterLruMultiplier() {
    return this.getNumberAttribute('bgwriter_lru_multiplier');
  }
  public set bgwriterLruMultiplier(value: number) {
    this._bgwriterLruMultiplier = value;
  }
  public resetBgwriterLruMultiplier() {
    this._bgwriterLruMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterLruMultiplierInput() {
    return this._bgwriterLruMultiplier;
  }

  // deadlock_timeout - computed: true, optional: true, required: false
  private _deadlockTimeout?: number; 
  public get deadlockTimeout() {
    return this.getNumberAttribute('deadlock_timeout');
  }
  public set deadlockTimeout(value: number) {
    this._deadlockTimeout = value;
  }
  public resetDeadlockTimeout() {
    this._deadlockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadlockTimeoutInput() {
    return this._deadlockTimeout;
  }

  // default_toast_compression - computed: true, optional: true, required: false
  private _defaultToastCompression?: string; 
  public get defaultToastCompression() {
    return this.getStringAttribute('default_toast_compression');
  }
  public set defaultToastCompression(value: string) {
    this._defaultToastCompression = value;
  }
  public resetDefaultToastCompression() {
    this._defaultToastCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultToastCompressionInput() {
    return this._defaultToastCompression;
  }

  // idle_in_transaction_session_timeout - computed: true, optional: true, required: false
  private _idleInTransactionSessionTimeout?: number; 
  public get idleInTransactionSessionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_session_timeout');
  }
  public set idleInTransactionSessionTimeout(value: number) {
    this._idleInTransactionSessionTimeout = value;
  }
  public resetIdleInTransactionSessionTimeout() {
    this._idleInTransactionSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInTransactionSessionTimeoutInput() {
    return this._idleInTransactionSessionTimeout;
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

  // jit - computed: true, optional: true, required: false
  private _jit?: boolean | cdktf.IResolvable; 
  public get jit() {
    return this.getBooleanAttribute('jit');
  }
  public set jit(value: boolean | cdktf.IResolvable) {
    this._jit = value;
  }
  public resetJit() {
    this._jit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitInput() {
    return this._jit;
  }

  // log_autovacuum_min_duration - computed: true, optional: true, required: false
  private _logAutovacuumMinDuration?: number; 
  public get logAutovacuumMinDuration() {
    return this.getNumberAttribute('log_autovacuum_min_duration');
  }
  public set logAutovacuumMinDuration(value: number) {
    this._logAutovacuumMinDuration = value;
  }
  public resetLogAutovacuumMinDuration() {
    this._logAutovacuumMinDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAutovacuumMinDurationInput() {
    return this._logAutovacuumMinDuration;
  }

  // log_error_verbosity - computed: true, optional: true, required: false
  private _logErrorVerbosity?: string; 
  public get logErrorVerbosity() {
    return this.getStringAttribute('log_error_verbosity');
  }
  public set logErrorVerbosity(value: string) {
    this._logErrorVerbosity = value;
  }
  public resetLogErrorVerbosity() {
    this._logErrorVerbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logErrorVerbosityInput() {
    return this._logErrorVerbosity;
  }

  // log_line_prefix - computed: true, optional: true, required: false
  private _logLinePrefix?: string; 
  public get logLinePrefix() {
    return this.getStringAttribute('log_line_prefix');
  }
  public set logLinePrefix(value: string) {
    this._logLinePrefix = value;
  }
  public resetLogLinePrefix() {
    this._logLinePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLinePrefixInput() {
    return this._logLinePrefix;
  }

  // log_min_duration_statement - computed: true, optional: true, required: false
  private _logMinDurationStatement?: number; 
  public get logMinDurationStatement() {
    return this.getNumberAttribute('log_min_duration_statement');
  }
  public set logMinDurationStatement(value: number) {
    this._logMinDurationStatement = value;
  }
  public resetLogMinDurationStatement() {
    this._logMinDurationStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMinDurationStatementInput() {
    return this._logMinDurationStatement;
  }

  // log_temp_files - computed: true, optional: true, required: false
  private _logTempFiles?: number; 
  public get logTempFiles() {
    return this.getNumberAttribute('log_temp_files');
  }
  public set logTempFiles(value: number) {
    this._logTempFiles = value;
  }
  public resetLogTempFiles() {
    this._logTempFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTempFilesInput() {
    return this._logTempFiles;
  }

  // max_files_per_process - computed: true, optional: true, required: false
  private _maxFilesPerProcess?: number; 
  public get maxFilesPerProcess() {
    return this.getNumberAttribute('max_files_per_process');
  }
  public set maxFilesPerProcess(value: number) {
    this._maxFilesPerProcess = value;
  }
  public resetMaxFilesPerProcess() {
    this._maxFilesPerProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilesPerProcessInput() {
    return this._maxFilesPerProcess;
  }

  // max_locks_per_transaction - computed: true, optional: true, required: false
  private _maxLocksPerTransaction?: number; 
  public get maxLocksPerTransaction() {
    return this.getNumberAttribute('max_locks_per_transaction');
  }
  public set maxLocksPerTransaction(value: number) {
    this._maxLocksPerTransaction = value;
  }
  public resetMaxLocksPerTransaction() {
    this._maxLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLocksPerTransactionInput() {
    return this._maxLocksPerTransaction;
  }

  // max_logical_replication_workers - computed: true, optional: true, required: false
  private _maxLogicalReplicationWorkers?: number; 
  public get maxLogicalReplicationWorkers() {
    return this.getNumberAttribute('max_logical_replication_workers');
  }
  public set maxLogicalReplicationWorkers(value: number) {
    this._maxLogicalReplicationWorkers = value;
  }
  public resetMaxLogicalReplicationWorkers() {
    this._maxLogicalReplicationWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogicalReplicationWorkersInput() {
    return this._maxLogicalReplicationWorkers;
  }

  // max_parallel_workers - computed: true, optional: true, required: false
  private _maxParallelWorkers?: number; 
  public get maxParallelWorkers() {
    return this.getNumberAttribute('max_parallel_workers');
  }
  public set maxParallelWorkers(value: number) {
    this._maxParallelWorkers = value;
  }
  public resetMaxParallelWorkers() {
    this._maxParallelWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelWorkersInput() {
    return this._maxParallelWorkers;
  }

  // max_parallel_workers_per_gather - computed: true, optional: true, required: false
  private _maxParallelWorkersPerGather?: number; 
  public get maxParallelWorkersPerGather() {
    return this.getNumberAttribute('max_parallel_workers_per_gather');
  }
  public set maxParallelWorkersPerGather(value: number) {
    this._maxParallelWorkersPerGather = value;
  }
  public resetMaxParallelWorkersPerGather() {
    this._maxParallelWorkersPerGather = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelWorkersPerGatherInput() {
    return this._maxParallelWorkersPerGather;
  }

  // max_pred_locks_per_transaction - computed: true, optional: true, required: false
  private _maxPredLocksPerTransaction?: number; 
  public get maxPredLocksPerTransaction() {
    return this.getNumberAttribute('max_pred_locks_per_transaction');
  }
  public set maxPredLocksPerTransaction(value: number) {
    this._maxPredLocksPerTransaction = value;
  }
  public resetMaxPredLocksPerTransaction() {
    this._maxPredLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPredLocksPerTransactionInput() {
    return this._maxPredLocksPerTransaction;
  }

  // max_prepared_transactions - computed: true, optional: true, required: false
  private _maxPreparedTransactions?: number; 
  public get maxPreparedTransactions() {
    return this.getNumberAttribute('max_prepared_transactions');
  }
  public set maxPreparedTransactions(value: number) {
    this._maxPreparedTransactions = value;
  }
  public resetMaxPreparedTransactions() {
    this._maxPreparedTransactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreparedTransactionsInput() {
    return this._maxPreparedTransactions;
  }

  // max_replication_slots - computed: true, optional: true, required: false
  private _maxReplicationSlots?: number; 
  public get maxReplicationSlots() {
    return this.getNumberAttribute('max_replication_slots');
  }
  public set maxReplicationSlots(value: number) {
    this._maxReplicationSlots = value;
  }
  public resetMaxReplicationSlots() {
    this._maxReplicationSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicationSlotsInput() {
    return this._maxReplicationSlots;
  }

  // max_slot_wal_keep_size - computed: true, optional: true, required: false
  private _maxSlotWalKeepSize?: number; 
  public get maxSlotWalKeepSize() {
    return this.getNumberAttribute('max_slot_wal_keep_size');
  }
  public set maxSlotWalKeepSize(value: number) {
    this._maxSlotWalKeepSize = value;
  }
  public resetMaxSlotWalKeepSize() {
    this._maxSlotWalKeepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSlotWalKeepSizeInput() {
    return this._maxSlotWalKeepSize;
  }

  // max_stack_depth - computed: true, optional: true, required: false
  private _maxStackDepth?: number; 
  public get maxStackDepth() {
    return this.getNumberAttribute('max_stack_depth');
  }
  public set maxStackDepth(value: number) {
    this._maxStackDepth = value;
  }
  public resetMaxStackDepth() {
    this._maxStackDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStackDepthInput() {
    return this._maxStackDepth;
  }

  // max_standby_archive_delay - computed: true, optional: true, required: false
  private _maxStandbyArchiveDelay?: number; 
  public get maxStandbyArchiveDelay() {
    return this.getNumberAttribute('max_standby_archive_delay');
  }
  public set maxStandbyArchiveDelay(value: number) {
    this._maxStandbyArchiveDelay = value;
  }
  public resetMaxStandbyArchiveDelay() {
    this._maxStandbyArchiveDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyArchiveDelayInput() {
    return this._maxStandbyArchiveDelay;
  }

  // max_standby_streaming_delay - computed: true, optional: true, required: false
  private _maxStandbyStreamingDelay?: number; 
  public get maxStandbyStreamingDelay() {
    return this.getNumberAttribute('max_standby_streaming_delay');
  }
  public set maxStandbyStreamingDelay(value: number) {
    this._maxStandbyStreamingDelay = value;
  }
  public resetMaxStandbyStreamingDelay() {
    this._maxStandbyStreamingDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyStreamingDelayInput() {
    return this._maxStandbyStreamingDelay;
  }

  // max_wal_senders - computed: true, optional: true, required: false
  private _maxWalSenders?: number; 
  public get maxWalSenders() {
    return this.getNumberAttribute('max_wal_senders');
  }
  public set maxWalSenders(value: number) {
    this._maxWalSenders = value;
  }
  public resetMaxWalSenders() {
    this._maxWalSenders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWalSendersInput() {
    return this._maxWalSenders;
  }

  // max_worker_processes - computed: true, optional: true, required: false
  private _maxWorkerProcesses?: number; 
  public get maxWorkerProcesses() {
    return this.getNumberAttribute('max_worker_processes');
  }
  public set maxWorkerProcesses(value: number) {
    this._maxWorkerProcesses = value;
  }
  public resetMaxWorkerProcesses() {
    this._maxWorkerProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerProcessesInput() {
    return this._maxWorkerProcesses;
  }

  // password_encryption - computed: true, optional: true, required: false
  private _passwordEncryption?: string; 
  public get passwordEncryption() {
    return this.getStringAttribute('password_encryption');
  }
  public set passwordEncryption(value: string) {
    this._passwordEncryption = value;
  }
  public resetPasswordEncryption() {
    this._passwordEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordEncryptionInput() {
    return this._passwordEncryption;
  }

  // pg_partman_bgw_interval - computed: true, optional: true, required: false
  private _pgPartmanBgwInterval?: number; 
  public get pgPartmanBgwInterval() {
    return this.getNumberAttribute('pg_partman_bgw_interval');
  }
  public set pgPartmanBgwInterval(value: number) {
    this._pgPartmanBgwInterval = value;
  }
  public resetPgPartmanBgwInterval() {
    this._pgPartmanBgwInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgPartmanBgwIntervalInput() {
    return this._pgPartmanBgwInterval;
  }

  // pg_partman_bgw_role - computed: true, optional: true, required: false
  private _pgPartmanBgwRole?: string; 
  public get pgPartmanBgwRole() {
    return this.getStringAttribute('pg_partman_bgw_role');
  }
  public set pgPartmanBgwRole(value: string) {
    this._pgPartmanBgwRole = value;
  }
  public resetPgPartmanBgwRole() {
    this._pgPartmanBgwRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgPartmanBgwRoleInput() {
    return this._pgPartmanBgwRole;
  }

  // pg_stat_monitor_enable - computed: false, optional: true, required: false
  private _pgStatMonitorEnable?: boolean | cdktf.IResolvable; 
  public get pgStatMonitorEnable() {
    return this.getBooleanAttribute('pg_stat_monitor_enable');
  }
  public set pgStatMonitorEnable(value: boolean | cdktf.IResolvable) {
    this._pgStatMonitorEnable = value;
  }
  public resetPgStatMonitorEnable() {
    this._pgStatMonitorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgStatMonitorEnableInput() {
    return this._pgStatMonitorEnable;
  }

  // pg_stat_monitor_pgsm_enable_query_plan - computed: true, optional: true, required: false
  private _pgStatMonitorPgsmEnableQueryPlan?: boolean | cdktf.IResolvable; 
  public get pgStatMonitorPgsmEnableQueryPlan() {
    return this.getBooleanAttribute('pg_stat_monitor_pgsm_enable_query_plan');
  }
  public set pgStatMonitorPgsmEnableQueryPlan(value: boolean | cdktf.IResolvable) {
    this._pgStatMonitorPgsmEnableQueryPlan = value;
  }
  public resetPgStatMonitorPgsmEnableQueryPlan() {
    this._pgStatMonitorPgsmEnableQueryPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgStatMonitorPgsmEnableQueryPlanInput() {
    return this._pgStatMonitorPgsmEnableQueryPlan;
  }

  // pg_stat_monitor_pgsm_max_buckets - computed: true, optional: true, required: false
  private _pgStatMonitorPgsmMaxBuckets?: number; 
  public get pgStatMonitorPgsmMaxBuckets() {
    return this.getNumberAttribute('pg_stat_monitor_pgsm_max_buckets');
  }
  public set pgStatMonitorPgsmMaxBuckets(value: number) {
    this._pgStatMonitorPgsmMaxBuckets = value;
  }
  public resetPgStatMonitorPgsmMaxBuckets() {
    this._pgStatMonitorPgsmMaxBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgStatMonitorPgsmMaxBucketsInput() {
    return this._pgStatMonitorPgsmMaxBuckets;
  }

  // pg_stat_statements_track - computed: true, optional: true, required: false
  private _pgStatStatementsTrack?: string; 
  public get pgStatStatementsTrack() {
    return this.getStringAttribute('pg_stat_statements_track');
  }
  public set pgStatStatementsTrack(value: string) {
    this._pgStatStatementsTrack = value;
  }
  public resetPgStatStatementsTrack() {
    this._pgStatStatementsTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgStatStatementsTrackInput() {
    return this._pgStatStatementsTrack;
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

  // shared_buffers_percentage - computed: true, optional: true, required: false
  private _sharedBuffersPercentage?: number; 
  public get sharedBuffersPercentage() {
    return this.getNumberAttribute('shared_buffers_percentage');
  }
  public set sharedBuffersPercentage(value: number) {
    this._sharedBuffersPercentage = value;
  }
  public resetSharedBuffersPercentage() {
    this._sharedBuffersPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedBuffersPercentageInput() {
    return this._sharedBuffersPercentage;
  }

  // synchronous_replication - computed: true, optional: true, required: false
  private _synchronousReplication?: string; 
  public get synchronousReplication() {
    return this.getStringAttribute('synchronous_replication');
  }
  public set synchronousReplication(value: string) {
    this._synchronousReplication = value;
  }
  public resetSynchronousReplication() {
    this._synchronousReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousReplicationInput() {
    return this._synchronousReplication;
  }

  // temp_file_limit - computed: true, optional: true, required: false
  private _tempFileLimit?: number; 
  public get tempFileLimit() {
    return this.getNumberAttribute('temp_file_limit');
  }
  public set tempFileLimit(value: number) {
    this._tempFileLimit = value;
  }
  public resetTempFileLimit() {
    this._tempFileLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempFileLimitInput() {
    return this._tempFileLimit;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // track_activity_query_size - computed: true, optional: true, required: false
  private _trackActivityQuerySize?: number; 
  public get trackActivityQuerySize() {
    return this.getNumberAttribute('track_activity_query_size');
  }
  public set trackActivityQuerySize(value: number) {
    this._trackActivityQuerySize = value;
  }
  public resetTrackActivityQuerySize() {
    this._trackActivityQuerySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackActivityQuerySizeInput() {
    return this._trackActivityQuerySize;
  }

  // track_commit_timestamp - computed: true, optional: true, required: false
  private _trackCommitTimestamp?: string; 
  public get trackCommitTimestamp() {
    return this.getStringAttribute('track_commit_timestamp');
  }
  public set trackCommitTimestamp(value: string) {
    this._trackCommitTimestamp = value;
  }
  public resetTrackCommitTimestamp() {
    this._trackCommitTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackCommitTimestampInput() {
    return this._trackCommitTimestamp;
  }

  // track_functions - computed: true, optional: true, required: false
  private _trackFunctions?: string; 
  public get trackFunctions() {
    return this.getStringAttribute('track_functions');
  }
  public set trackFunctions(value: string) {
    this._trackFunctions = value;
  }
  public resetTrackFunctions() {
    this._trackFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackFunctionsInput() {
    return this._trackFunctions;
  }

  // track_io_timing - computed: true, optional: true, required: false
  private _trackIoTiming?: string; 
  public get trackIoTiming() {
    return this.getStringAttribute('track_io_timing');
  }
  public set trackIoTiming(value: string) {
    this._trackIoTiming = value;
  }
  public resetTrackIoTiming() {
    this._trackIoTiming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackIoTimingInput() {
    return this._trackIoTiming;
  }

  // variant - computed: true, optional: true, required: false
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  public resetVariant() {
    this._variant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
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

  // wal_sender_timeout - computed: true, optional: true, required: false
  private _walSenderTimeout?: number; 
  public get walSenderTimeout() {
    return this.getNumberAttribute('wal_sender_timeout');
  }
  public set walSenderTimeout(value: number) {
    this._walSenderTimeout = value;
  }
  public resetWalSenderTimeout() {
    this._walSenderTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walSenderTimeoutInput() {
    return this._walSenderTimeout;
  }

  // wal_writer_delay - computed: true, optional: true, required: false
  private _walWriterDelay?: number; 
  public get walWriterDelay() {
    return this.getNumberAttribute('wal_writer_delay');
  }
  public set walWriterDelay(value: number) {
    this._walWriterDelay = value;
  }
  public resetWalWriterDelay() {
    this._walWriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walWriterDelayInput() {
    return this._walWriterDelay;
  }

  // work_mem - computed: true, optional: true, required: false
  private _workMem?: number; 
  public get workMem() {
    return this.getNumberAttribute('work_mem');
  }
  public set workMem(value: number) {
    this._workMem = value;
  }
  public resetWorkMem() {
    this._workMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workMemInput() {
    return this._workMem;
  }

  // migration - computed: false, optional: true, required: false
  private _migration = new ManagedDatabasePostgresqlPropertiesMigrationOutputReference(this, "migration");
  public get migration() {
    return this._migration;
  }
  public putMigration(value: ManagedDatabasePostgresqlPropertiesMigration) {
    this._migration.internalValue = value;
  }
  public resetMigration() {
    this._migration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationInput() {
    return this._migration.internalValue;
  }

  // pgaudit - computed: false, optional: true, required: false
  private _pgaudit = new ManagedDatabasePostgresqlPropertiesPgauditOutputReference(this, "pgaudit");
  public get pgaudit() {
    return this._pgaudit;
  }
  public putPgaudit(value: ManagedDatabasePostgresqlPropertiesPgaudit) {
    this._pgaudit.internalValue = value;
  }
  public resetPgaudit() {
    this._pgaudit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgauditInput() {
    return this._pgaudit.internalValue;
  }

  // pgbouncer - computed: false, optional: true, required: false
  private _pgbouncer = new ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference(this, "pgbouncer");
  public get pgbouncer() {
    return this._pgbouncer;
  }
  public putPgbouncer(value: ManagedDatabasePostgresqlPropertiesPgbouncer) {
    this._pgbouncer.internalValue = value;
  }
  public resetPgbouncer() {
    this._pgbouncer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgbouncerInput() {
    return this._pgbouncer.internalValue;
  }

  // pglookout - computed: false, optional: true, required: false
  private _pglookout = new ManagedDatabasePostgresqlPropertiesPglookoutOutputReference(this, "pglookout");
  public get pglookout() {
    return this._pglookout;
  }
  public putPglookout(value: ManagedDatabasePostgresqlPropertiesPglookout) {
    this._pglookout.internalValue = value;
  }
  public resetPglookout() {
    this._pglookout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pglookoutInput() {
    return this._pglookout.internalValue;
  }

  // timescaledb - computed: false, optional: true, required: false
  private _timescaledb = new ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference(this, "timescaledb");
  public get timescaledb() {
    return this._timescaledb;
  }
  public putTimescaledb(value: ManagedDatabasePostgresqlPropertiesTimescaledb) {
    this._timescaledb.internalValue = value;
  }
  public resetTimescaledb() {
    this._timescaledb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timescaledbInput() {
    return this._timescaledb.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql upcloud_managed_database_postgresql}
*/
export class ManagedDatabasePostgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_postgresql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedDatabasePostgresql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedDatabasePostgresql to import
  * @param importFromId The id of the existing ManagedDatabasePostgresql that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDatabasePostgresql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_database_postgresql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/managed_database_postgresql upcloud_managed_database_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDatabasePostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDatabasePostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_postgresql',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.21.0',
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

  // components - computed: true, optional: false, required: false
  private _components = new ManagedDatabasePostgresqlComponentsList(this, "components", false);
  public get components() {
    return this._components;
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
  private _nodeStates = new ManagedDatabasePostgresqlNodeStatesList(this, "node_states", false);
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

  // sslmode - computed: true, optional: false, required: false
  public get sslmode() {
    return this.getStringAttribute('sslmode');
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
  private _network = new ManagedDatabasePostgresqlNetworkList(this, "network", true);
  public get network() {
    return this._network;
  }
  public putNetwork(value: ManagedDatabasePostgresqlNetwork[] | cdktf.IResolvable) {
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
  private _properties = new ManagedDatabasePostgresqlPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ManagedDatabasePostgresqlProperties) {
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
      network: cdktf.listMapper(managedDatabasePostgresqlNetworkToTerraform, true)(this._network.internalValue),
      properties: managedDatabasePostgresqlPropertiesToTerraform(this._properties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
        value: cdktf.listMapperHcl(managedDatabasePostgresqlNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedDatabasePostgresqlNetworkList",
      },
      properties: {
        value: managedDatabasePostgresqlPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDatabasePostgresqlPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
