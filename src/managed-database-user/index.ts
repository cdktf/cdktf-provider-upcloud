/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabaseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * MySQL only, authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#authentication ManagedDatabaseUser#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#id ManagedDatabaseUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password for the database user. Defaults to a random value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#password ManagedDatabaseUser#password}
  */
  readonly password?: string;
  /**
  * Service's UUID for which this user belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#service ManagedDatabaseUser#service}
  */
  readonly service: string;
  /**
  * Name of the database user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#username ManagedDatabaseUser#username}
  */
  readonly username: string;
  /**
  * opensearch_access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#opensearch_access_control ManagedDatabaseUser#opensearch_access_control}
  */
  readonly opensearchAccessControl?: ManagedDatabaseUserOpensearchAccessControl;
  /**
  * pg_access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#pg_access_control ManagedDatabaseUser#pg_access_control}
  */
  readonly pgAccessControl?: ManagedDatabaseUserPgAccessControl;
  /**
  * redis_access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#redis_access_control ManagedDatabaseUser#redis_access_control}
  */
  readonly redisAccessControl?: ManagedDatabaseUserRedisAccessControl;
  /**
  * valkey_access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#valkey_access_control ManagedDatabaseUser#valkey_access_control}
  */
  readonly valkeyAccessControl?: ManagedDatabaseUserValkeyAccessControl;
}
export interface ManagedDatabaseUserOpensearchAccessControlRules {
  /**
  * Set index name, pattern or top level API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#index ManagedDatabaseUser#index}
  */
  readonly index: string;
  /**
  * Set permission access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#permission ManagedDatabaseUser#permission}
  */
  readonly permission: string;
}

export function managedDatabaseUserOpensearchAccessControlRulesToTerraform(struct?: ManagedDatabaseUserOpensearchAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function managedDatabaseUserOpensearchAccessControlRulesToHclTerraform(struct?: ManagedDatabaseUserOpensearchAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseUserOpensearchAccessControlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedDatabaseUserOpensearchAccessControlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseUserOpensearchAccessControlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._permission = value.permission;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class ManagedDatabaseUserOpensearchAccessControlRulesList extends cdktf.ComplexList {
  public internalValue? : ManagedDatabaseUserOpensearchAccessControlRules[] | cdktf.IResolvable

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
  public get(index: number): ManagedDatabaseUserOpensearchAccessControlRulesOutputReference {
    return new ManagedDatabaseUserOpensearchAccessControlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseUserOpensearchAccessControl {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#rules ManagedDatabaseUser#rules}
  */
  readonly rules: ManagedDatabaseUserOpensearchAccessControlRules[] | cdktf.IResolvable;
}

export function managedDatabaseUserOpensearchAccessControlToTerraform(struct?: ManagedDatabaseUserOpensearchAccessControlOutputReference | ManagedDatabaseUserOpensearchAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(managedDatabaseUserOpensearchAccessControlRulesToTerraform, true)(struct!.rules),
  }
}


export function managedDatabaseUserOpensearchAccessControlToHclTerraform(struct?: ManagedDatabaseUserOpensearchAccessControlOutputReference | ManagedDatabaseUserOpensearchAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(managedDatabaseUserOpensearchAccessControlRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDatabaseUserOpensearchAccessControlRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseUserOpensearchAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseUserOpensearchAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseUserOpensearchAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new ManagedDatabaseUserOpensearchAccessControlRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ManagedDatabaseUserOpensearchAccessControlRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface ManagedDatabaseUserPgAccessControl {
  /**
  * Grant replication privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#allow_replication ManagedDatabaseUser#allow_replication}
  */
  readonly allowReplication?: boolean | cdktf.IResolvable;
}

export function managedDatabaseUserPgAccessControlToTerraform(struct?: ManagedDatabaseUserPgAccessControlOutputReference | ManagedDatabaseUserPgAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_replication: cdktf.booleanToTerraform(struct!.allowReplication),
  }
}


export function managedDatabaseUserPgAccessControlToHclTerraform(struct?: ManagedDatabaseUserPgAccessControlOutputReference | ManagedDatabaseUserPgAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_replication: {
      value: cdktf.booleanToHclTerraform(struct!.allowReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseUserPgAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseUserPgAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowReplication = this._allowReplication;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseUserPgAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowReplication = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowReplication = value.allowReplication;
    }
  }

  // allow_replication - computed: false, optional: true, required: false
  private _allowReplication?: boolean | cdktf.IResolvable; 
  public get allowReplication() {
    return this.getBooleanAttribute('allow_replication');
  }
  public set allowReplication(value: boolean | cdktf.IResolvable) {
    this._allowReplication = value;
  }
  public resetAllowReplication() {
    this._allowReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReplicationInput() {
    return this._allowReplication;
  }
}
export interface ManagedDatabaseUserRedisAccessControl {
  /**
  * Set access control to all commands in specified categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#categories ManagedDatabaseUser#categories}
  */
  readonly categories?: string[];
  /**
  * Set access control to Pub/Sub channels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#channels ManagedDatabaseUser#channels}
  */
  readonly channels?: string[];
  /**
  * Set access control to commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#commands ManagedDatabaseUser#commands}
  */
  readonly commands?: string[];
  /**
  * Set access control to keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#keys ManagedDatabaseUser#keys}
  */
  readonly keys?: string[];
}

export function managedDatabaseUserRedisAccessControlToTerraform(struct?: ManagedDatabaseUserRedisAccessControlOutputReference | ManagedDatabaseUserRedisAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function managedDatabaseUserRedisAccessControlToHclTerraform(struct?: ManagedDatabaseUserRedisAccessControlOutputReference | ManagedDatabaseUserRedisAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseUserRedisAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseUserRedisAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseUserRedisAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categories = undefined;
      this._channels = undefined;
      this._commands = undefined;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categories = value.categories;
      this._channels = value.channels;
      this._commands = value.commands;
      this._keys = value.keys;
    }
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}
export interface ManagedDatabaseUserValkeyAccessControl {
  /**
  * Set access control to all commands in specified categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#categories ManagedDatabaseUser#categories}
  */
  readonly categories?: string[];
  /**
  * Set access control to Pub/Sub channels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#channels ManagedDatabaseUser#channels}
  */
  readonly channels?: string[];
  /**
  * Set access control to commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#commands ManagedDatabaseUser#commands}
  */
  readonly commands?: string[];
  /**
  * Set access control to keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#keys ManagedDatabaseUser#keys}
  */
  readonly keys?: string[];
}

export function managedDatabaseUserValkeyAccessControlToTerraform(struct?: ManagedDatabaseUserValkeyAccessControlOutputReference | ManagedDatabaseUserValkeyAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function managedDatabaseUserValkeyAccessControlToHclTerraform(struct?: ManagedDatabaseUserValkeyAccessControlOutputReference | ManagedDatabaseUserValkeyAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDatabaseUserValkeyAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseUserValkeyAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseUserValkeyAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categories = undefined;
      this._channels = undefined;
      this._commands = undefined;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categories = value.categories;
      this._channels = value.channels;
      this._commands = value.commands;
      this._keys = value.keys;
    }
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user upcloud_managed_database_user}
*/
export class ManagedDatabaseUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedDatabaseUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedDatabaseUser to import
  * @param importFromId The id of the existing ManagedDatabaseUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDatabaseUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_database_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/resources/managed_database_user upcloud_managed_database_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDatabaseUserConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDatabaseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_user',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.29.0',
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
    this._authentication = config.authentication;
    this._id = config.id;
    this._password = config.password;
    this._service = config.service;
    this._username = config.username;
    this._opensearchAccessControl.internalValue = config.opensearchAccessControl;
    this._pgAccessControl.internalValue = config.pgAccessControl;
    this._redisAccessControl.internalValue = config.redisAccessControl;
    this._valkeyAccessControl.internalValue = config.valkeyAccessControl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // opensearch_access_control - computed: false, optional: true, required: false
  private _opensearchAccessControl = new ManagedDatabaseUserOpensearchAccessControlOutputReference(this, "opensearch_access_control");
  public get opensearchAccessControl() {
    return this._opensearchAccessControl;
  }
  public putOpensearchAccessControl(value: ManagedDatabaseUserOpensearchAccessControl) {
    this._opensearchAccessControl.internalValue = value;
  }
  public resetOpensearchAccessControl() {
    this._opensearchAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchAccessControlInput() {
    return this._opensearchAccessControl.internalValue;
  }

  // pg_access_control - computed: false, optional: true, required: false
  private _pgAccessControl = new ManagedDatabaseUserPgAccessControlOutputReference(this, "pg_access_control");
  public get pgAccessControl() {
    return this._pgAccessControl;
  }
  public putPgAccessControl(value: ManagedDatabaseUserPgAccessControl) {
    this._pgAccessControl.internalValue = value;
  }
  public resetPgAccessControl() {
    this._pgAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgAccessControlInput() {
    return this._pgAccessControl.internalValue;
  }

  // redis_access_control - computed: false, optional: true, required: false
  private _redisAccessControl = new ManagedDatabaseUserRedisAccessControlOutputReference(this, "redis_access_control");
  public get redisAccessControl() {
    return this._redisAccessControl;
  }
  public putRedisAccessControl(value: ManagedDatabaseUserRedisAccessControl) {
    this._redisAccessControl.internalValue = value;
  }
  public resetRedisAccessControl() {
    this._redisAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisAccessControlInput() {
    return this._redisAccessControl.internalValue;
  }

  // valkey_access_control - computed: false, optional: true, required: false
  private _valkeyAccessControl = new ManagedDatabaseUserValkeyAccessControlOutputReference(this, "valkey_access_control");
  public get valkeyAccessControl() {
    return this._valkeyAccessControl;
  }
  public putValkeyAccessControl(value: ManagedDatabaseUserValkeyAccessControl) {
    this._valkeyAccessControl.internalValue = value;
  }
  public resetValkeyAccessControl() {
    this._valkeyAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyAccessControlInput() {
    return this._valkeyAccessControl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.stringToTerraform(this._authentication),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      service: cdktf.stringToTerraform(this._service),
      username: cdktf.stringToTerraform(this._username),
      opensearch_access_control: managedDatabaseUserOpensearchAccessControlToTerraform(this._opensearchAccessControl.internalValue),
      pg_access_control: managedDatabaseUserPgAccessControlToTerraform(this._pgAccessControl.internalValue),
      redis_access_control: managedDatabaseUserRedisAccessControlToTerraform(this._redisAccessControl.internalValue),
      valkey_access_control: managedDatabaseUserValkeyAccessControlToTerraform(this._valkeyAccessControl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opensearch_access_control: {
        value: managedDatabaseUserOpensearchAccessControlToHclTerraform(this._opensearchAccessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDatabaseUserOpensearchAccessControlList",
      },
      pg_access_control: {
        value: managedDatabaseUserPgAccessControlToHclTerraform(this._pgAccessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDatabaseUserPgAccessControlList",
      },
      redis_access_control: {
        value: managedDatabaseUserRedisAccessControlToHclTerraform(this._redisAccessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDatabaseUserRedisAccessControlList",
      },
      valkey_access_control: {
        value: managedDatabaseUserValkeyAccessControlToHclTerraform(this._valkeyAccessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDatabaseUserValkeyAccessControlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
