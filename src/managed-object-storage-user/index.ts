/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/managed_object_storage_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedObjectStorageUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/managed_object_storage_user#id ManagedObjectStorageUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Managed Object Storage service UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/managed_object_storage_user#service_uuid ManagedObjectStorageUser#service_uuid}
  */
  readonly serviceUuid: string;
  /**
  * Custom usernames for accessing the object storage. No relation to UpCloud API accounts. See `upcloud_managed_object_storage_user_access_key` for managing access keys and `upcloud_managed_object_storage_user_policy` for managing policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/managed_object_storage_user#username ManagedObjectStorageUser#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/managed_object_storage_user upcloud_managed_object_storage_user}
*/
export class ManagedObjectStorageUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_object_storage_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedObjectStorageUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedObjectStorageUser to import
  * @param importFromId The id of the existing ManagedObjectStorageUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/managed_object_storage_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedObjectStorageUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_object_storage_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/managed_object_storage_user upcloud_managed_object_storage_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedObjectStorageUserConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedObjectStorageUserConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_object_storage_user',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.11.2',
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
    this._serviceUuid = config.serviceUuid;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_uuid: cdktf.stringToTerraform(this._serviceUuid),
      username: cdktf.stringToTerraform(this._username),
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
      service_uuid: {
        value: cdktf.stringToHclTerraform(this._serviceUuid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
