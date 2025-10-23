/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_object_storage_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedObjectStorageCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Must be a subdomain and consist of 3 to 5 parts such as objects.example.com. Cannot be root-level domain e.g. example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_object_storage_custom_domain#domain_name ManagedObjectStorageCustomDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Managed Object Storage service UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_object_storage_custom_domain#service_uuid ManagedObjectStorageCustomDomain#service_uuid}
  */
  readonly serviceUuid: string;
  /**
  * At the moment only `public` is accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_object_storage_custom_domain#type ManagedObjectStorageCustomDomain#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_object_storage_custom_domain upcloud_managed_object_storage_custom_domain}
*/
export class ManagedObjectStorageCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_object_storage_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedObjectStorageCustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedObjectStorageCustomDomain to import
  * @param importFromId The id of the existing ManagedObjectStorageCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_object_storage_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedObjectStorageCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_object_storage_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.1/docs/resources/managed_object_storage_custom_domain upcloud_managed_object_storage_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedObjectStorageCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedObjectStorageCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_object_storage_custom_domain',
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
    this._domainName = config.domainName;
    this._serviceUuid = config.serviceUuid;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      service_uuid: cdktf.stringToTerraform(this._serviceUuid),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
