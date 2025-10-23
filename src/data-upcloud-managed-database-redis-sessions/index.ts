/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/data-sources/managed_database_redis_sessions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUpcloudManagedDatabaseRedisSessionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/data-sources/managed_database_redis_sessions#id DataUpcloudManagedDatabaseRedisSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of entries to receive at most.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/data-sources/managed_database_redis_sessions#limit DataUpcloudManagedDatabaseRedisSessions#limit}
  */
  readonly limit?: number;
  /**
  * Offset for retrieved results based on sort order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/data-sources/managed_database_redis_sessions#offset DataUpcloudManagedDatabaseRedisSessions#offset}
  */
  readonly offset?: number;
  /**
  * Order by session field and sort retrieved results. Limited variables can be used for ordering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/data-sources/managed_database_redis_sessions#order DataUpcloudManagedDatabaseRedisSessions#order}
  */
  readonly order?: string;
  /**
  * Service's UUID for which these sessions belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/data-sources/managed_database_redis_sessions#service DataUpcloudManagedDatabaseRedisSessions#service}
  */
  readonly service: string;
  /**
  * sessions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/data-sources/managed_database_redis_sessions#sessions DataUpcloudManagedDatabaseRedisSessions#sessions}
  */
  readonly sessions?: DataUpcloudManagedDatabaseRedisSessionsSessions[] | cdktf.IResolvable;
}
export interface DataUpcloudManagedDatabaseRedisSessionsSessions {
}

export function dataUpcloudManagedDatabaseRedisSessionsSessionsToTerraform(struct?: DataUpcloudManagedDatabaseRedisSessionsSessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUpcloudManagedDatabaseRedisSessionsSessionsToHclTerraform(struct?: DataUpcloudManagedDatabaseRedisSessionsSessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUpcloudManagedDatabaseRedisSessionsSessions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUpcloudManagedDatabaseRedisSessionsSessions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // active_channel_subscriptions - computed: true, optional: false, required: false
  public get activeChannelSubscriptions() {
    return this.getNumberAttribute('active_channel_subscriptions');
  }

  // active_database - computed: true, optional: false, required: false
  public get activeDatabase() {
    return this.getStringAttribute('active_database');
  }

  // active_pattern_matching_channel_subscriptions - computed: true, optional: false, required: false
  public get activePatternMatchingChannelSubscriptions() {
    return this.getNumberAttribute('active_pattern_matching_channel_subscriptions');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // client_addr - computed: true, optional: false, required: false
  public get clientAddr() {
    return this.getStringAttribute('client_addr');
  }

  // connection_age - computed: true, optional: false, required: false
  public get connectionAge() {
    return this.getNumberAttribute('connection_age');
  }

  // connection_idle - computed: true, optional: false, required: false
  public get connectionIdle() {
    return this.getNumberAttribute('connection_idle');
  }

  // flags - computed: true, optional: false, required: false
  public get flags() {
    return cdktf.Fn.tolist(this.getListAttribute('flags'));
  }

  // flags_raw - computed: true, optional: false, required: false
  public get flagsRaw() {
    return this.getStringAttribute('flags_raw');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_exec_commands - computed: true, optional: false, required: false
  public get multiExecCommands() {
    return this.getNumberAttribute('multi_exec_commands');
  }

  // output_buffer - computed: true, optional: false, required: false
  public get outputBuffer() {
    return this.getNumberAttribute('output_buffer');
  }

  // output_buffer_memory - computed: true, optional: false, required: false
  public get outputBufferMemory() {
    return this.getNumberAttribute('output_buffer_memory');
  }

  // output_list_length - computed: true, optional: false, required: false
  public get outputListLength() {
    return this.getNumberAttribute('output_list_length');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // query_buffer - computed: true, optional: false, required: false
  public get queryBuffer() {
    return this.getNumberAttribute('query_buffer');
  }

  // query_buffer_free - computed: true, optional: false, required: false
  public get queryBufferFree() {
    return this.getNumberAttribute('query_buffer_free');
  }
}

export class DataUpcloudManagedDatabaseRedisSessionsSessionsList extends cdktf.ComplexList {
  public internalValue? : DataUpcloudManagedDatabaseRedisSessionsSessions[] | cdktf.IResolvable

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
  public get(index: number): DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference {
    return new DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/data-sources/managed_database_redis_sessions upcloud_managed_database_redis_sessions}
*/
export class DataUpcloudManagedDatabaseRedisSessions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_redis_sessions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUpcloudManagedDatabaseRedisSessions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUpcloudManagedDatabaseRedisSessions to import
  * @param importFromId The id of the existing DataUpcloudManagedDatabaseRedisSessions that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/data-sources/managed_database_redis_sessions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUpcloudManagedDatabaseRedisSessions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_database_redis_sessions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/data-sources/managed_database_redis_sessions upcloud_managed_database_redis_sessions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUpcloudManagedDatabaseRedisSessionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataUpcloudManagedDatabaseRedisSessionsConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_redis_sessions',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.29.1',
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
    this._limit = config.limit;
    this._offset = config.offset;
    this._order = config.order;
    this._service = config.service;
    this._sessions.internalValue = config.sessions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
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

  // sessions - computed: false, optional: true, required: false
  private _sessions = new DataUpcloudManagedDatabaseRedisSessionsSessionsList(this, "sessions", true);
  public get sessions() {
    return this._sessions;
  }
  public putSessions(value: DataUpcloudManagedDatabaseRedisSessionsSessions[] | cdktf.IResolvable) {
    this._sessions.internalValue = value;
  }
  public resetSessions() {
    this._sessions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsInput() {
    return this._sessions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      order: cdktf.stringToTerraform(this._order),
      service: cdktf.stringToTerraform(this._service),
      sessions: cdktf.listMapper(dataUpcloudManagedDatabaseRedisSessionsSessionsToTerraform, true)(this._sessions.internalValue),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
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
      sessions: {
        value: cdktf.listMapperHcl(dataUpcloudManagedDatabaseRedisSessionsSessionsToHclTerraform, true)(this._sessions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataUpcloudManagedDatabaseRedisSessionsSessionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
