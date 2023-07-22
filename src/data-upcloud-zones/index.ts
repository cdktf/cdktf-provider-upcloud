/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/data-sources/zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUpcloudZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/data-sources/zones#filter_type DataUpcloudZones#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/data-sources/zones#id DataUpcloudZones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/data-sources/zones upcloud_zones}
*/
export class DataUpcloudZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_zones";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/data-sources/zones upcloud_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUpcloudZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUpcloudZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'upcloud_zones',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.12.0',
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
    this._filterType = config.filterType;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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

  // zone_ids - computed: true, optional: false, required: false
  public get zoneIds() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_type: cdktf.stringToTerraform(this._filterType),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
