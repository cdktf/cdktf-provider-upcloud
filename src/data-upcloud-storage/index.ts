// https://www.terraform.io/docs/providers/upcloud/d/storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUpcloudStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Storage access type (public, private)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#access_type DataUpcloudStorage#access_type}
  */
  readonly accessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#id DataUpcloudStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If more than one result is returned, use the most recent storage. This is only useful with private storages. Public storages might give unpredictable results.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#most_recent DataUpcloudStorage#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Exact name of the storage (same as title)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#name DataUpcloudStorage#name}
  */
  readonly name?: string;
  /**
  * Use regular expression to match storage name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#name_regex DataUpcloudStorage#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Storage type (normal, backup, cdrom, template). Use 'favorite' as type to filter storages on the list of favorites.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#type DataUpcloudStorage#type}
  */
  readonly type: string;
  /**
  * The zone in which the storage resides
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/storage#zone DataUpcloudStorage#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/d/storage upcloud_storage}
*/
export class DataUpcloudStorage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_storage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/d/storage upcloud_storage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUpcloudStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DataUpcloudStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_storage',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.9.0',
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
    this._accessType = config.accessType;
    this._id = config.id;
    this._mostRecent = config.mostRecent;
    this._name = config.name;
    this._nameRegex = config.nameRegex;
    this._type = config.type;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
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

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      id: cdktf.stringToTerraform(this._id),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      name: cdktf.stringToTerraform(this._name),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }
}
