// https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUpcloudManagedDatabaseOpensearchIndicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service's UUID for which these indices belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices#service DataUpcloudManagedDatabaseOpensearchIndices#service}
  */
  readonly service: string;
  /**
  * indices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices#indices DataUpcloudManagedDatabaseOpensearchIndices#indices}
  */
  readonly indices?: DataUpcloudManagedDatabaseOpensearchIndicesIndices[] | cdktf.IResolvable;
}
export interface DataUpcloudManagedDatabaseOpensearchIndicesIndices {
}

export function dataUpcloudManagedDatabaseOpensearchIndicesIndicesToTerraform(struct?: DataUpcloudManagedDatabaseOpensearchIndicesIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUpcloudManagedDatabaseOpensearchIndicesIndicesToHclTerraform(struct?: DataUpcloudManagedDatabaseOpensearchIndicesIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUpcloudManagedDatabaseOpensearchIndicesIndices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUpcloudManagedDatabaseOpensearchIndicesIndices | cdktf.IResolvable | undefined) {
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // docs - computed: true, optional: false, required: false
  public get docs() {
    return this.getNumberAttribute('docs');
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // number_of_replicas - computed: true, optional: false, required: false
  public get numberOfReplicas() {
    return this.getNumberAttribute('number_of_replicas');
  }

  // number_of_shards - computed: true, optional: false, required: false
  public get numberOfShards() {
    return this.getNumberAttribute('number_of_shards');
  }

  // read_only_allow_delete - computed: true, optional: false, required: false
  public get readOnlyAllowDelete() {
    return this.getBooleanAttribute('read_only_allow_delete');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataUpcloudManagedDatabaseOpensearchIndicesIndicesList extends cdktf.ComplexList {
  public internalValue? : DataUpcloudManagedDatabaseOpensearchIndicesIndices[] | cdktf.IResolvable

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
  public get(index: number): DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference {
    return new DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices upcloud_managed_database_opensearch_indices}
*/
export class DataUpcloudManagedDatabaseOpensearchIndices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_opensearch_indices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUpcloudManagedDatabaseOpensearchIndices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUpcloudManagedDatabaseOpensearchIndices to import
  * @param importFromId The id of the existing DataUpcloudManagedDatabaseOpensearchIndices that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUpcloudManagedDatabaseOpensearchIndices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_database_opensearch_indices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices upcloud_managed_database_opensearch_indices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUpcloudManagedDatabaseOpensearchIndicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataUpcloudManagedDatabaseOpensearchIndicesConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_opensearch_indices',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.11.0',
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
    this._service = config.service;
    this._indices.internalValue = config.indices;
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

  // indices - computed: false, optional: true, required: false
  private _indices = new DataUpcloudManagedDatabaseOpensearchIndicesIndicesList(this, "indices", true);
  public get indices() {
    return this._indices;
  }
  public putIndices(value: DataUpcloudManagedDatabaseOpensearchIndicesIndices[] | cdktf.IResolvable) {
    this._indices.internalValue = value;
  }
  public resetIndices() {
    this._indices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service: cdktf.stringToTerraform(this._service),
      indices: cdktf.listMapper(dataUpcloudManagedDatabaseOpensearchIndicesIndicesToTerraform, true)(this._indices.internalValue),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indices: {
        value: cdktf.listMapperHcl(dataUpcloudManagedDatabaseOpensearchIndicesIndicesToHclTerraform, true)(this._indices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataUpcloudManagedDatabaseOpensearchIndicesIndicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
