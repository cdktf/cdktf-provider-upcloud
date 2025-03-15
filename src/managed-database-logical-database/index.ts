/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_database_logical_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabaseLogicalDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default character set for the database (LC_CTYPE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_database_logical_database#character_set ManagedDatabaseLogicalDatabase#character_set}
  */
  readonly characterSet?: string;
  /**
  * Default collation for the database (LC_COLLATE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_database_logical_database#collation ManagedDatabaseLogicalDatabase#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_database_logical_database#id ManagedDatabaseLogicalDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the logical database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_database_logical_database#name ManagedDatabaseLogicalDatabase#name}
  */
  readonly name: string;
  /**
  * Service's UUID for which this user belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_database_logical_database#service ManagedDatabaseLogicalDatabase#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_database_logical_database upcloud_managed_database_logical_database}
*/
export class ManagedDatabaseLogicalDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_logical_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedDatabaseLogicalDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedDatabaseLogicalDatabase to import
  * @param importFromId The id of the existing ManagedDatabaseLogicalDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_database_logical_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDatabaseLogicalDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_database_logical_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/managed_database_logical_database upcloud_managed_database_logical_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDatabaseLogicalDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDatabaseLogicalDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_logical_database',
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
    this._characterSet = config.characterSet;
    this._collation = config.collation;
    this._id = config.id;
    this._name = config.name;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // collation - computed: true, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      character_set: cdktf.stringToTerraform(this._characterSet),
      collation: cdktf.stringToTerraform(this._collation),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.stringToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      character_set: {
        value: cdktf.stringToHclTerraform(this._characterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collation: {
        value: cdktf.stringToHclTerraform(this._collation),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
