// https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_object_storage_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedObjectStorageBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_object_storage_bucket#name ManagedObjectStorageBucket#name}
  */
  readonly name: string;
  /**
  * Managed Object Storage service UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_object_storage_bucket#service_uuid ManagedObjectStorageBucket#service_uuid}
  */
  readonly serviceUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_object_storage_bucket upcloud_managed_object_storage_bucket}
*/
export class ManagedObjectStorageBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_object_storage_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedObjectStorageBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedObjectStorageBucket to import
  * @param importFromId The id of the existing ManagedObjectStorageBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_object_storage_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedObjectStorageBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_object_storage_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_object_storage_bucket upcloud_managed_object_storage_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedObjectStorageBucketConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedObjectStorageBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_object_storage_bucket',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.20.4',
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
    this._name = config.name;
    this._serviceUuid = config.serviceUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service_uuid - computed: false, optional: false, required: true
  private _serviceUuid?: string; 
  public get serviceUuid() {
    return this.getStringAttribute('service_uuid');
  }
  public set serviceUuid(value: string) {
    this._serviceUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUuidInput() {
    return this._serviceUuid;
  }

  // total_objects - computed: true, optional: false, required: false
  public get totalObjects() {
    return this.getNumberAttribute('total_objects');
  }

  // total_size_bytes - computed: true, optional: false, required: false
  public get totalSizeBytes() {
    return this.getNumberAttribute('total_size_bytes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      service_uuid: cdktf.stringToTerraform(this._serviceUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_uuid: {
        value: cdktf.stringToHclTerraform(this._serviceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
