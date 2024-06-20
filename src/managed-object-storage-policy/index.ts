/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_object_storage_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedObjectStoragePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_object_storage_policy#description ManagedObjectStoragePolicy#description}
  */
  readonly description?: string;
  /**
  * Policy document, URL-encoded compliant with RFC 3986.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_object_storage_policy#document ManagedObjectStoragePolicy#document}
  */
  readonly document: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_object_storage_policy#id ManagedObjectStoragePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_object_storage_policy#name ManagedObjectStoragePolicy#name}
  */
  readonly name: string;
  /**
  * Managed Object Storage service UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_object_storage_policy#service_uuid ManagedObjectStoragePolicy#service_uuid}
  */
  readonly serviceUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_object_storage_policy upcloud_managed_object_storage_policy}
*/
export class ManagedObjectStoragePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_object_storage_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedObjectStoragePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedObjectStoragePolicy to import
  * @param importFromId The id of the existing ManagedObjectStoragePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_object_storage_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedObjectStoragePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_object_storage_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.6.0/docs/resources/managed_object_storage_policy upcloud_managed_object_storage_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedObjectStoragePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedObjectStoragePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_object_storage_policy',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.6.0',
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
    this._description = config.description;
    this._document = config.document;
    this._id = config.id;
    this._name = config.name;
    this._serviceUuid = config.serviceUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attachment_count - computed: true, optional: false, required: false
  public get attachmentCount() {
    return this.getNumberAttribute('attachment_count');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_version_id - computed: true, optional: false, required: false
  public get defaultVersionId() {
    return this.getStringAttribute('default_version_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // document - computed: false, optional: false, required: true
  private _document?: string; 
  public get document() {
    return this.getStringAttribute('document');
  }
  public set document(value: string) {
    this._document = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document;
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

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      document: cdktf.stringToTerraform(this._document),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_uuid: cdktf.stringToTerraform(this._serviceUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document: {
        value: cdktf.stringToHclTerraform(this._document),
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
