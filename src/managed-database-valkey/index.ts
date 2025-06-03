// https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabaseValkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User defined key-value pairs to classify the managed database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#labels ManagedDatabaseValkey#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#maintenance_window_dow ManagedDatabaseValkey#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Maintenance window UTC time in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#maintenance_window_time ManagedDatabaseValkey#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}
  */
  readonly name: string;
  /**
  * Service plan to use. This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#plan ManagedDatabaseValkey#plan}
  */
  readonly plan: string;
  /**
  * The administrative power state of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#powered ManagedDatabaseValkey#powered}
  */
  readonly powered?: boolean | cdktf.IResolvable;
  /**
  * If set to true, prevents the managed service from being powered off, or deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#termination_protection ManagedDatabaseValkey#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * Title of a managed database instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#title ManagedDatabaseValkey#title}
  */
  readonly title: string;
  /**
  * Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#zone ManagedDatabaseValkey#zone}
  */
  readonly zone: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#network ManagedDatabaseValkey#network}
  */
  readonly network?: ManagedDatabaseValkeyNetwork[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#properties ManagedDatabaseValkey#properties}
  */
  readonly properties?: ManagedDatabaseValkeyProperties;
}
export interface ManagedDatabaseValkeyComponents {
}

export function managedDatabaseValkeyComponentsToTerraform(struct?: ManagedDatabaseValkeyComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedDatabaseValkeyComponentsToHclTerraform(struct?: ManagedDatabaseValkeyComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedDatabaseValkeyComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedDatabaseValkeyComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseValkeyComponents | undefined) {
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

export class ManagedDatabaseValkeyComponentsList extends cdktf.ComplexList {

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
  public get(index: number): ManagedDatabaseValkeyComponentsOutputReference {
    return new ManagedDatabaseValkeyComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseValkeyNodeStates {
}

export function managedDatabaseValkeyNodeStatesToTerraform(struct?: ManagedDatabaseValkeyNodeStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedDatabaseValkeyNodeStatesToHclTerraform(struct?: ManagedDatabaseValkeyNodeStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedDatabaseValkeyNodeStatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedDatabaseValkeyNodeStates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseValkeyNodeStates | undefined) {
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

export class ManagedDatabaseValkeyNodeStatesList extends cdktf.ComplexList {

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
  public get(index: number): ManagedDatabaseValkeyNodeStatesOutputReference {
    return new ManagedDatabaseValkeyNodeStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseValkeyNetwork {
  /**
  * Network family. Currently only `IPv4` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#family ManagedDatabaseValkey#family}
  */
  readonly family: string;
  /**
  * The name of the network. Must be unique within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}
  */
  readonly name: string;
  /**
  * The type of the network. Must be private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#type ManagedDatabaseValkey#type}
  */
  readonly type: string;
  /**
  * Private network UUID. Must reside in the same zone as the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#uuid ManagedDatabaseValkey#uuid}
  */
  readonly uuid: string;
}

export function managedDatabaseValkeyNetworkToTerraform(struct?: ManagedDatabaseValkeyNetwork | cdktf.IResolvable): any {
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


export function managedDatabaseValkeyNetworkToHclTerraform(struct?: ManagedDatabaseValkeyNetwork | cdktf.IResolvable): any {
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

export class ManagedDatabaseValkeyNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedDatabaseValkeyNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManagedDatabaseValkeyNetwork | cdktf.IResolvable | undefined) {
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

export class ManagedDatabaseValkeyNetworkList extends cdktf.ComplexList {
  public internalValue? : ManagedDatabaseValkeyNetwork[] | cdktf.IResolvable

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
  public get(index: number): ManagedDatabaseValkeyNetworkOutputReference {
    return new ManagedDatabaseValkeyNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseValkeyPropertiesMigration {
  /**
  * Database name for bootstrapping the initial connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#dbname ManagedDatabaseValkey#dbname}
  */
  readonly dbname?: string;
  /**
  * Hostname or IP address of the server where to migrate data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#host ManagedDatabaseValkey#host}
  */
  readonly host?: string;
  /**
  * Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#ignore_dbs ManagedDatabaseValkey#ignore_dbs}
  */
  readonly ignoreDbs?: string;
  /**
  * Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#ignore_roles ManagedDatabaseValkey#ignore_roles}
  */
  readonly ignoreRoles?: string;
  /**
  * The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#method ManagedDatabaseValkey#method}
  */
  readonly method?: string;
  /**
  * Password for authentication with the server where to migrate data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#password ManagedDatabaseValkey#password}
  */
  readonly password?: string;
  /**
  * Port number of the server where to migrate data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#port ManagedDatabaseValkey#port}
  */
  readonly port?: number;
  /**
  * The server where to migrate data from is secured with SSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#ssl ManagedDatabaseValkey#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * User name for authentication with the server where to migrate data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#username ManagedDatabaseValkey#username}
  */
  readonly username?: string;
}

export function managedDatabaseValkeyPropertiesMigrationToTerraform(struct?: ManagedDatabaseValkeyPropertiesMigrationOutputReference | ManagedDatabaseValkeyPropertiesMigration): any {
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


export function managedDatabaseValkeyPropertiesMigrationToHclTerraform(struct?: ManagedDatabaseValkeyPropertiesMigrationOutputReference | ManagedDatabaseValkeyPropertiesMigration): any {
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

export class ManagedDatabaseValkeyPropertiesMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseValkeyPropertiesMigration | undefined {
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

  public set internalValue(value: ManagedDatabaseValkeyPropertiesMigration | undefined) {
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
export interface ManagedDatabaseValkeyProperties {
  /**
  * Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#automatic_utility_network_ip_filter ManagedDatabaseValkey#automatic_utility_network_ip_filter}
  */
  readonly automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable;
  /**
  * The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#backup_hour ManagedDatabaseValkey#backup_hour}
  */
  readonly backupHour?: number;
  /**
  * The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#backup_minute ManagedDatabaseValkey#backup_minute}
  */
  readonly backupMinute?: number;
  /**
  * Frequent RDB snapshots. When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when `valkey_persistence` is set to `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#frequent_snapshots ManagedDatabaseValkey#frequent_snapshots}
  */
  readonly frequentSnapshots?: boolean | cdktf.IResolvable;
  /**
  * IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#ip_filter ManagedDatabaseValkey#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Public Access. Allow access to the service from the public Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#public_access ManagedDatabaseValkey#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
  /**
  * Service logging. Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#service_log ManagedDatabaseValkey#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Default ACL for pub/sub channels used when a Valkey user is created. Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_acl_channels_default ManagedDatabaseValkey#valkey_acl_channels_default}
  */
  readonly valkeyAclChannelsDefault?: string;
  /**
  * Active expire effort. Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_active_expire_effort ManagedDatabaseValkey#valkey_active_expire_effort}
  */
  readonly valkeyActiveExpireEffort?: number;
  /**
  * Valkey IO thread count. Set Valkey IO thread count. Changing this will cause a restart of the Valkey service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_io_threads ManagedDatabaseValkey#valkey_io_threads}
  */
  readonly valkeyIoThreads?: number;
  /**
  * LFU maxmemory-policy counter decay time in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_lfu_decay_time ManagedDatabaseValkey#valkey_lfu_decay_time}
  */
  readonly valkeyLfuDecayTime?: number;
  /**
  * Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_lfu_log_factor ManagedDatabaseValkey#valkey_lfu_log_factor}
  */
  readonly valkeyLfuLogFactor?: number;
  /**
  * Valkey maxmemory-policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_maxmemory_policy ManagedDatabaseValkey#valkey_maxmemory_policy}
  */
  readonly valkeyMaxmemoryPolicy?: string;
  /**
  * Set notify-keyspace-events option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_notify_keyspace_events ManagedDatabaseValkey#valkey_notify_keyspace_events}
  */
  readonly valkeyNotifyKeyspaceEvents?: string;
  /**
  * Number of Valkey databases. Set number of Valkey databases. Changing this will cause a restart of the Valkey service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_number_of_databases ManagedDatabaseValkey#valkey_number_of_databases}
  */
  readonly valkeyNumberOfDatabases?: number;
  /**
  * Valkey persistence. When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_persistence ManagedDatabaseValkey#valkey_persistence}
  */
  readonly valkeyPersistence?: string;
  /**
  * Pub/sub client output buffer hard limit in MB. Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_pubsub_client_output_buffer_limit ManagedDatabaseValkey#valkey_pubsub_client_output_buffer_limit}
  */
  readonly valkeyPubsubClientOutputBufferLimit?: number;
  /**
  * Require SSL to access Valkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_ssl ManagedDatabaseValkey#valkey_ssl}
  */
  readonly valkeySsl?: boolean | cdktf.IResolvable;
  /**
  * Valkey idle connection timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_timeout ManagedDatabaseValkey#valkey_timeout}
  */
  readonly valkeyTimeout?: number;
  /**
  * migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#migration ManagedDatabaseValkey#migration}
  */
  readonly migration?: ManagedDatabaseValkeyPropertiesMigration;
}

export function managedDatabaseValkeyPropertiesToTerraform(struct?: ManagedDatabaseValkeyPropertiesOutputReference | ManagedDatabaseValkeyProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_utility_network_ip_filter: cdktf.booleanToTerraform(struct!.automaticUtilityNetworkIpFilter),
    backup_hour: cdktf.numberToTerraform(struct!.backupHour),
    backup_minute: cdktf.numberToTerraform(struct!.backupMinute),
    frequent_snapshots: cdktf.booleanToTerraform(struct!.frequentSnapshots),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    public_access: cdktf.booleanToTerraform(struct!.publicAccess),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    valkey_acl_channels_default: cdktf.stringToTerraform(struct!.valkeyAclChannelsDefault),
    valkey_active_expire_effort: cdktf.numberToTerraform(struct!.valkeyActiveExpireEffort),
    valkey_io_threads: cdktf.numberToTerraform(struct!.valkeyIoThreads),
    valkey_lfu_decay_time: cdktf.numberToTerraform(struct!.valkeyLfuDecayTime),
    valkey_lfu_log_factor: cdktf.numberToTerraform(struct!.valkeyLfuLogFactor),
    valkey_maxmemory_policy: cdktf.stringToTerraform(struct!.valkeyMaxmemoryPolicy),
    valkey_notify_keyspace_events: cdktf.stringToTerraform(struct!.valkeyNotifyKeyspaceEvents),
    valkey_number_of_databases: cdktf.numberToTerraform(struct!.valkeyNumberOfDatabases),
    valkey_persistence: cdktf.stringToTerraform(struct!.valkeyPersistence),
    valkey_pubsub_client_output_buffer_limit: cdktf.numberToTerraform(struct!.valkeyPubsubClientOutputBufferLimit),
    valkey_ssl: cdktf.booleanToTerraform(struct!.valkeySsl),
    valkey_timeout: cdktf.numberToTerraform(struct!.valkeyTimeout),
    migration: managedDatabaseValkeyPropertiesMigrationToTerraform(struct!.migration),
  }
}


export function managedDatabaseValkeyPropertiesToHclTerraform(struct?: ManagedDatabaseValkeyPropertiesOutputReference | ManagedDatabaseValkeyProperties): any {
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
    frequent_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.frequentSnapshots),
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
    service_log: {
      value: cdktf.booleanToHclTerraform(struct!.serviceLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valkey_acl_channels_default: {
      value: cdktf.stringToHclTerraform(struct!.valkeyAclChannelsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valkey_active_expire_effort: {
      value: cdktf.numberToHclTerraform(struct!.valkeyActiveExpireEffort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valkey_io_threads: {
      value: cdktf.numberToHclTerraform(struct!.valkeyIoThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valkey_lfu_decay_time: {
      value: cdktf.numberToHclTerraform(struct!.valkeyLfuDecayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valkey_lfu_log_factor: {
      value: cdktf.numberToHclTerraform(struct!.valkeyLfuLogFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valkey_maxmemory_policy: {
      value: cdktf.stringToHclTerraform(struct!.valkeyMaxmemoryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valkey_notify_keyspace_events: {
      value: cdktf.stringToHclTerraform(struct!.valkeyNotifyKeyspaceEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valkey_number_of_databases: {
      value: cdktf.numberToHclTerraform(struct!.valkeyNumberOfDatabases),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valkey_persistence: {
      value: cdktf.stringToHclTerraform(struct!.valkeyPersistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valkey_pubsub_client_output_buffer_limit: {
      value: cdktf.numberToHclTerraform(struct!.valkeyPubsubClientOutputBufferLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valkey_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.valkeySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valkey_timeout: {
      value: cdktf.numberToHclTerraform(struct!.valkeyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    migration: {
      value: managedDatabaseValkeyPropertiesMigrationToHclTerraform(struct!.migration),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseValkeyPropertiesMigrationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseValkeyPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseValkeyProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticUtilityNetworkIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUtilityNetworkIpFilter = this._automaticUtilityNetworkIpFilter;
    }
    if (this._backupHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupHour = this._backupHour;
    }
    if (this._backupMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMinute = this._backupMinute;
    }
    if (this._frequentSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequentSnapshots = this._frequentSnapshots;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._publicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess;
    }
    if (this._serviceLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLog = this._serviceLog;
    }
    if (this._valkeyAclChannelsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyAclChannelsDefault = this._valkeyAclChannelsDefault;
    }
    if (this._valkeyActiveExpireEffort !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyActiveExpireEffort = this._valkeyActiveExpireEffort;
    }
    if (this._valkeyIoThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyIoThreads = this._valkeyIoThreads;
    }
    if (this._valkeyLfuDecayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyLfuDecayTime = this._valkeyLfuDecayTime;
    }
    if (this._valkeyLfuLogFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyLfuLogFactor = this._valkeyLfuLogFactor;
    }
    if (this._valkeyMaxmemoryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyMaxmemoryPolicy = this._valkeyMaxmemoryPolicy;
    }
    if (this._valkeyNotifyKeyspaceEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyNotifyKeyspaceEvents = this._valkeyNotifyKeyspaceEvents;
    }
    if (this._valkeyNumberOfDatabases !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyNumberOfDatabases = this._valkeyNumberOfDatabases;
    }
    if (this._valkeyPersistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyPersistence = this._valkeyPersistence;
    }
    if (this._valkeyPubsubClientOutputBufferLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyPubsubClientOutputBufferLimit = this._valkeyPubsubClientOutputBufferLimit;
    }
    if (this._valkeySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeySsl = this._valkeySsl;
    }
    if (this._valkeyTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyTimeout = this._valkeyTimeout;
    }
    if (this._migration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migration = this._migration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseValkeyProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticUtilityNetworkIpFilter = undefined;
      this._backupHour = undefined;
      this._backupMinute = undefined;
      this._frequentSnapshots = undefined;
      this._ipFilter = undefined;
      this._publicAccess = undefined;
      this._serviceLog = undefined;
      this._valkeyAclChannelsDefault = undefined;
      this._valkeyActiveExpireEffort = undefined;
      this._valkeyIoThreads = undefined;
      this._valkeyLfuDecayTime = undefined;
      this._valkeyLfuLogFactor = undefined;
      this._valkeyMaxmemoryPolicy = undefined;
      this._valkeyNotifyKeyspaceEvents = undefined;
      this._valkeyNumberOfDatabases = undefined;
      this._valkeyPersistence = undefined;
      this._valkeyPubsubClientOutputBufferLimit = undefined;
      this._valkeySsl = undefined;
      this._valkeyTimeout = undefined;
      this._migration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticUtilityNetworkIpFilter = value.automaticUtilityNetworkIpFilter;
      this._backupHour = value.backupHour;
      this._backupMinute = value.backupMinute;
      this._frequentSnapshots = value.frequentSnapshots;
      this._ipFilter = value.ipFilter;
      this._publicAccess = value.publicAccess;
      this._serviceLog = value.serviceLog;
      this._valkeyAclChannelsDefault = value.valkeyAclChannelsDefault;
      this._valkeyActiveExpireEffort = value.valkeyActiveExpireEffort;
      this._valkeyIoThreads = value.valkeyIoThreads;
      this._valkeyLfuDecayTime = value.valkeyLfuDecayTime;
      this._valkeyLfuLogFactor = value.valkeyLfuLogFactor;
      this._valkeyMaxmemoryPolicy = value.valkeyMaxmemoryPolicy;
      this._valkeyNotifyKeyspaceEvents = value.valkeyNotifyKeyspaceEvents;
      this._valkeyNumberOfDatabases = value.valkeyNumberOfDatabases;
      this._valkeyPersistence = value.valkeyPersistence;
      this._valkeyPubsubClientOutputBufferLimit = value.valkeyPubsubClientOutputBufferLimit;
      this._valkeySsl = value.valkeySsl;
      this._valkeyTimeout = value.valkeyTimeout;
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

  // frequent_snapshots - computed: false, optional: true, required: false
  private _frequentSnapshots?: boolean | cdktf.IResolvable; 
  public get frequentSnapshots() {
    return this.getBooleanAttribute('frequent_snapshots');
  }
  public set frequentSnapshots(value: boolean | cdktf.IResolvable) {
    this._frequentSnapshots = value;
  }
  public resetFrequentSnapshots() {
    this._frequentSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequentSnapshotsInput() {
    return this._frequentSnapshots;
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

  // valkey_acl_channels_default - computed: true, optional: true, required: false
  private _valkeyAclChannelsDefault?: string; 
  public get valkeyAclChannelsDefault() {
    return this.getStringAttribute('valkey_acl_channels_default');
  }
  public set valkeyAclChannelsDefault(value: string) {
    this._valkeyAclChannelsDefault = value;
  }
  public resetValkeyAclChannelsDefault() {
    this._valkeyAclChannelsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyAclChannelsDefaultInput() {
    return this._valkeyAclChannelsDefault;
  }

  // valkey_active_expire_effort - computed: true, optional: true, required: false
  private _valkeyActiveExpireEffort?: number; 
  public get valkeyActiveExpireEffort() {
    return this.getNumberAttribute('valkey_active_expire_effort');
  }
  public set valkeyActiveExpireEffort(value: number) {
    this._valkeyActiveExpireEffort = value;
  }
  public resetValkeyActiveExpireEffort() {
    this._valkeyActiveExpireEffort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyActiveExpireEffortInput() {
    return this._valkeyActiveExpireEffort;
  }

  // valkey_io_threads - computed: true, optional: true, required: false
  private _valkeyIoThreads?: number; 
  public get valkeyIoThreads() {
    return this.getNumberAttribute('valkey_io_threads');
  }
  public set valkeyIoThreads(value: number) {
    this._valkeyIoThreads = value;
  }
  public resetValkeyIoThreads() {
    this._valkeyIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyIoThreadsInput() {
    return this._valkeyIoThreads;
  }

  // valkey_lfu_decay_time - computed: true, optional: true, required: false
  private _valkeyLfuDecayTime?: number; 
  public get valkeyLfuDecayTime() {
    return this.getNumberAttribute('valkey_lfu_decay_time');
  }
  public set valkeyLfuDecayTime(value: number) {
    this._valkeyLfuDecayTime = value;
  }
  public resetValkeyLfuDecayTime() {
    this._valkeyLfuDecayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyLfuDecayTimeInput() {
    return this._valkeyLfuDecayTime;
  }

  // valkey_lfu_log_factor - computed: true, optional: true, required: false
  private _valkeyLfuLogFactor?: number; 
  public get valkeyLfuLogFactor() {
    return this.getNumberAttribute('valkey_lfu_log_factor');
  }
  public set valkeyLfuLogFactor(value: number) {
    this._valkeyLfuLogFactor = value;
  }
  public resetValkeyLfuLogFactor() {
    this._valkeyLfuLogFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyLfuLogFactorInput() {
    return this._valkeyLfuLogFactor;
  }

  // valkey_maxmemory_policy - computed: true, optional: true, required: false
  private _valkeyMaxmemoryPolicy?: string; 
  public get valkeyMaxmemoryPolicy() {
    return this.getStringAttribute('valkey_maxmemory_policy');
  }
  public set valkeyMaxmemoryPolicy(value: string) {
    this._valkeyMaxmemoryPolicy = value;
  }
  public resetValkeyMaxmemoryPolicy() {
    this._valkeyMaxmemoryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyMaxmemoryPolicyInput() {
    return this._valkeyMaxmemoryPolicy;
  }

  // valkey_notify_keyspace_events - computed: false, optional: true, required: false
  private _valkeyNotifyKeyspaceEvents?: string; 
  public get valkeyNotifyKeyspaceEvents() {
    return this.getStringAttribute('valkey_notify_keyspace_events');
  }
  public set valkeyNotifyKeyspaceEvents(value: string) {
    this._valkeyNotifyKeyspaceEvents = value;
  }
  public resetValkeyNotifyKeyspaceEvents() {
    this._valkeyNotifyKeyspaceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyNotifyKeyspaceEventsInput() {
    return this._valkeyNotifyKeyspaceEvents;
  }

  // valkey_number_of_databases - computed: true, optional: true, required: false
  private _valkeyNumberOfDatabases?: number; 
  public get valkeyNumberOfDatabases() {
    return this.getNumberAttribute('valkey_number_of_databases');
  }
  public set valkeyNumberOfDatabases(value: number) {
    this._valkeyNumberOfDatabases = value;
  }
  public resetValkeyNumberOfDatabases() {
    this._valkeyNumberOfDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyNumberOfDatabasesInput() {
    return this._valkeyNumberOfDatabases;
  }

  // valkey_persistence - computed: true, optional: true, required: false
  private _valkeyPersistence?: string; 
  public get valkeyPersistence() {
    return this.getStringAttribute('valkey_persistence');
  }
  public set valkeyPersistence(value: string) {
    this._valkeyPersistence = value;
  }
  public resetValkeyPersistence() {
    this._valkeyPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyPersistenceInput() {
    return this._valkeyPersistence;
  }

  // valkey_pubsub_client_output_buffer_limit - computed: true, optional: true, required: false
  private _valkeyPubsubClientOutputBufferLimit?: number; 
  public get valkeyPubsubClientOutputBufferLimit() {
    return this.getNumberAttribute('valkey_pubsub_client_output_buffer_limit');
  }
  public set valkeyPubsubClientOutputBufferLimit(value: number) {
    this._valkeyPubsubClientOutputBufferLimit = value;
  }
  public resetValkeyPubsubClientOutputBufferLimit() {
    this._valkeyPubsubClientOutputBufferLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyPubsubClientOutputBufferLimitInput() {
    return this._valkeyPubsubClientOutputBufferLimit;
  }

  // valkey_ssl - computed: false, optional: true, required: false
  private _valkeySsl?: boolean | cdktf.IResolvable; 
  public get valkeySsl() {
    return this.getBooleanAttribute('valkey_ssl');
  }
  public set valkeySsl(value: boolean | cdktf.IResolvable) {
    this._valkeySsl = value;
  }
  public resetValkeySsl() {
    this._valkeySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeySslInput() {
    return this._valkeySsl;
  }

  // valkey_timeout - computed: true, optional: true, required: false
  private _valkeyTimeout?: number; 
  public get valkeyTimeout() {
    return this.getNumberAttribute('valkey_timeout');
  }
  public set valkeyTimeout(value: number) {
    this._valkeyTimeout = value;
  }
  public resetValkeyTimeout() {
    this._valkeyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyTimeoutInput() {
    return this._valkeyTimeout;
  }

  // migration - computed: false, optional: true, required: false
  private _migration = new ManagedDatabaseValkeyPropertiesMigrationOutputReference(this, "migration");
  public get migration() {
    return this._migration;
  }
  public putMigration(value: ManagedDatabaseValkeyPropertiesMigration) {
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
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey upcloud_managed_database_valkey}
*/
export class ManagedDatabaseValkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_valkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedDatabaseValkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedDatabaseValkey to import
  * @param importFromId The id of the existing ManagedDatabaseValkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDatabaseValkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_database_valkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey upcloud_managed_database_valkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDatabaseValkeyConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDatabaseValkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_valkey',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.22.0',
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
  private _components = new ManagedDatabaseValkeyComponentsList(this, "components", false);
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
  private _nodeStates = new ManagedDatabaseValkeyNodeStatesList(this, "node_states", false);
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
  private _network = new ManagedDatabaseValkeyNetworkList(this, "network", true);
  public get network() {
    return this._network;
  }
  public putNetwork(value: ManagedDatabaseValkeyNetwork[] | cdktf.IResolvable) {
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
  private _properties = new ManagedDatabaseValkeyPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ManagedDatabaseValkeyProperties) {
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
      network: cdktf.listMapper(managedDatabaseValkeyNetworkToTerraform, true)(this._network.internalValue),
      properties: managedDatabaseValkeyPropertiesToTerraform(this._properties.internalValue),
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
        value: cdktf.listMapperHcl(managedDatabaseValkeyNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedDatabaseValkeyNetworkList",
      },
      properties: {
        value: managedDatabaseValkeyPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDatabaseValkeyPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
