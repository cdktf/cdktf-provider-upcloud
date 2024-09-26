/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.1/docs/resources/managed_object_storage_user_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedObjectStorageUserPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.1/docs/resources/managed_object_storage_user_policy#id ManagedObjectStorageUserPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.1/docs/resources/managed_object_storage_user_policy#name ManagedObjectStorageUserPolicy#name}
  */
  readonly name: string;
  /**
  * Managed Object Storage service UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.1/docs/resources/managed_object_storage_user_policy#service_uuid ManagedObjectStorageUserPolicy#service_uuid}
  */
  readonly serviceUuid: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.1/docs/resources/managed_object_storage_user_policy#username ManagedObjectStorageUserPolicy#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.1/docs/resources/managed_object_storage_user_policy upcloud_managed_object_storage_user_policy}
*/
export class ManagedObjectStorageUserPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_object_storage_user_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedObjectStorageUserPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedObjectStorageUserPolicy to import
  * @param importFromId The id of the existing ManagedObjectStorageUserPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.1/docs/resources/managed_object_storage_user_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedObjectStorageUserPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_object_storage_user_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.1/docs/resources/managed_object_storage_user_policy upcloud_managed_object_storage_user_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedObjectStorageUserPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedObjectStorageUserPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_object_storage_user_policy',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.11.1',
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
    this._name = config.name;
    this._serviceUuid = config.serviceUuid;
    this._username = config.username;
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
      name: cdktf.stringToTerraform(this._name),
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
