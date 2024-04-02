// https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUpcloudManagedDatabasePostgresqlSessionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of entries to receive at most.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#limit DataUpcloudManagedDatabasePostgresqlSessions#limit}
  */
  readonly limit?: number;
  /**
  * Offset for retrieved results based on sort order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#offset DataUpcloudManagedDatabasePostgresqlSessions#offset}
  */
  readonly offset?: number;
  /**
  * Order by session field and sort retrieved results. Limited variables can be used for ordering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#order DataUpcloudManagedDatabasePostgresqlSessions#order}
  */
  readonly order?: string;
  /**
  * Service's UUID for which these sessions belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#service DataUpcloudManagedDatabasePostgresqlSessions#service}
  */
  readonly service: string;
  /**
  * sessions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#sessions DataUpcloudManagedDatabasePostgresqlSessions#sessions}
  */
  readonly sessions?: DataUpcloudManagedDatabasePostgresqlSessionsSessions[] | cdktf.IResolvable;
}
export interface DataUpcloudManagedDatabasePostgresqlSessionsSessions {
  /**
  * Top-level transaction identifier of this service, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#backend_xid DataUpcloudManagedDatabasePostgresqlSessions#backend_xid}
  */
  readonly backendXid?: number;
  /**
  * The current service's xmin horizon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#backend_xmin DataUpcloudManagedDatabasePostgresqlSessions#backend_xmin}
  */
  readonly backendXmin?: number;
  /**
  * Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#client_hostname DataUpcloudManagedDatabasePostgresqlSessions#client_hostname}
  */
  readonly clientHostname?: string;
  /**
  * Time when this process' current transaction was started, or null if no transaction is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#xact_start DataUpcloudManagedDatabasePostgresqlSessions#xact_start}
  */
  readonly xactStart?: string;
}

export function dataUpcloudManagedDatabasePostgresqlSessionsSessionsToTerraform(struct?: DataUpcloudManagedDatabasePostgresqlSessionsSessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_xid: cdktf.numberToTerraform(struct!.backendXid),
    backend_xmin: cdktf.numberToTerraform(struct!.backendXmin),
    client_hostname: cdktf.stringToTerraform(struct!.clientHostname),
    xact_start: cdktf.stringToTerraform(struct!.xactStart),
  }
}


export function dataUpcloudManagedDatabasePostgresqlSessionsSessionsToHclTerraform(struct?: DataUpcloudManagedDatabasePostgresqlSessionsSessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_xid: {
      value: cdktf.numberToHclTerraform(struct!.backendXid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backend_xmin: {
      value: cdktf.numberToHclTerraform(struct!.backendXmin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_hostname: {
      value: cdktf.stringToHclTerraform(struct!.clientHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xact_start: {
      value: cdktf.stringToHclTerraform(struct!.xactStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUpcloudManagedDatabasePostgresqlSessionsSessions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendXid !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendXid = this._backendXid;
    }
    if (this._backendXmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendXmin = this._backendXmin;
    }
    if (this._clientHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientHostname = this._clientHostname;
    }
    if (this._xactStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.xactStart = this._xactStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUpcloudManagedDatabasePostgresqlSessionsSessions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendXid = undefined;
      this._backendXmin = undefined;
      this._clientHostname = undefined;
      this._xactStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendXid = value.backendXid;
      this._backendXmin = value.backendXmin;
      this._clientHostname = value.clientHostname;
      this._xactStart = value.xactStart;
    }
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // backend_start - computed: true, optional: false, required: false
  public get backendStart() {
    return this.getStringAttribute('backend_start');
  }

  // backend_type - computed: true, optional: false, required: false
  public get backendType() {
    return this.getStringAttribute('backend_type');
  }

  // backend_xid - computed: true, optional: true, required: false
  private _backendXid?: number; 
  public get backendXid() {
    return this.getNumberAttribute('backend_xid');
  }
  public set backendXid(value: number) {
    this._backendXid = value;
  }
  public resetBackendXid() {
    this._backendXid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendXidInput() {
    return this._backendXid;
  }

  // backend_xmin - computed: true, optional: true, required: false
  private _backendXmin?: number; 
  public get backendXmin() {
    return this.getNumberAttribute('backend_xmin');
  }
  public set backendXmin(value: number) {
    this._backendXmin = value;
  }
  public resetBackendXmin() {
    this._backendXmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendXminInput() {
    return this._backendXmin;
  }

  // client_addr - computed: true, optional: false, required: false
  public get clientAddr() {
    return this.getStringAttribute('client_addr');
  }

  // client_hostname - computed: true, optional: true, required: false
  private _clientHostname?: string; 
  public get clientHostname() {
    return this.getStringAttribute('client_hostname');
  }
  public set clientHostname(value: string) {
    this._clientHostname = value;
  }
  public resetClientHostname() {
    this._clientHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientHostnameInput() {
    return this._clientHostname;
  }

  // client_port - computed: true, optional: false, required: false
  public get clientPort() {
    return this.getNumberAttribute('client_port');
  }

  // datid - computed: true, optional: false, required: false
  public get datid() {
    return this.getNumberAttribute('datid');
  }

  // datname - computed: true, optional: false, required: false
  public get datname() {
    return this.getStringAttribute('datname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // query_duration - computed: true, optional: false, required: false
  public get queryDuration() {
    return this.getStringAttribute('query_duration');
  }

  // query_start - computed: true, optional: false, required: false
  public get queryStart() {
    return this.getStringAttribute('query_start');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_change - computed: true, optional: false, required: false
  public get stateChange() {
    return this.getStringAttribute('state_change');
  }

  // usename - computed: true, optional: false, required: false
  public get usename() {
    return this.getStringAttribute('usename');
  }

  // usesysid - computed: true, optional: false, required: false
  public get usesysid() {
    return this.getNumberAttribute('usesysid');
  }

  // wait_event - computed: true, optional: false, required: false
  public get waitEvent() {
    return this.getStringAttribute('wait_event');
  }

  // wait_event_type - computed: true, optional: false, required: false
  public get waitEventType() {
    return this.getStringAttribute('wait_event_type');
  }

  // xact_start - computed: true, optional: true, required: false
  private _xactStart?: string; 
  public get xactStart() {
    return this.getStringAttribute('xact_start');
  }
  public set xactStart(value: string) {
    this._xactStart = value;
  }
  public resetXactStart() {
    this._xactStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xactStartInput() {
    return this._xactStart;
  }
}

export class DataUpcloudManagedDatabasePostgresqlSessionsSessionsList extends cdktf.ComplexList {
  public internalValue? : DataUpcloudManagedDatabasePostgresqlSessionsSessions[] | cdktf.IResolvable

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
  public get(index: number): DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference {
    return new DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions upcloud_managed_database_postgresql_sessions}
*/
export class DataUpcloudManagedDatabasePostgresqlSessions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_postgresql_sessions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUpcloudManagedDatabasePostgresqlSessions to import
  * @param importFromId The id of the existing DataUpcloudManagedDatabasePostgresqlSessions that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUpcloudManagedDatabasePostgresqlSessions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_database_postgresql_sessions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/data-sources/managed_database_postgresql_sessions upcloud_managed_database_postgresql_sessions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUpcloudManagedDatabasePostgresqlSessionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataUpcloudManagedDatabasePostgresqlSessionsConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_postgresql_sessions',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.2.1',
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
  private _sessions = new DataUpcloudManagedDatabasePostgresqlSessionsSessionsList(this, "sessions", true);
  public get sessions() {
    return this._sessions;
  }
  public putSessions(value: DataUpcloudManagedDatabasePostgresqlSessionsSessions[] | cdktf.IResolvable) {
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
      sessions: cdktf.listMapper(dataUpcloudManagedDatabasePostgresqlSessionsSessionsToTerraform, true)(this._sessions.internalValue),
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
        value: cdktf.listMapperHcl(dataUpcloudManagedDatabasePostgresqlSessionsSessionsToHclTerraform, true)(this._sessions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataUpcloudManagedDatabasePostgresqlSessionsSessionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
