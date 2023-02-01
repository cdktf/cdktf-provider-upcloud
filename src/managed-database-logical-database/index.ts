// https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabaseLogicalDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default character set for the database (LC_CTYPE)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#character_set ManagedDatabaseLogicalDatabase#character_set}
  */
  readonly characterSet?: string;
  /**
  * Default collation for the database (LC_COLLATE)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#collation ManagedDatabaseLogicalDatabase#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#id ManagedDatabaseLogicalDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the logical database
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#name ManagedDatabaseLogicalDatabase#name}
  */
  readonly name: string;
  /**
  * Service's UUID for which this user belongs to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database#service ManagedDatabaseLogicalDatabase#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database upcloud_managed_database_logical_database}
*/
export class ManagedDatabaseLogicalDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_logical_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_logical_database upcloud_managed_database_logical_database} Resource
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
        providerVersion: '2.8.3',
        providerVersionConstraint: '~> 2.4'
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
}
