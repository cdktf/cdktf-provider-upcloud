/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/data-sources/managed_object_storage_regions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUpcloudManagedObjectStorageRegionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/data-sources/managed_object_storage_regions#regions DataUpcloudManagedObjectStorageRegions#regions}
  */
  readonly regions?: DataUpcloudManagedObjectStorageRegionsRegions[] | cdktf.IResolvable;
}
export interface DataUpcloudManagedObjectStorageRegionsRegions {
}

export function dataUpcloudManagedObjectStorageRegionsRegionsToTerraform(struct?: DataUpcloudManagedObjectStorageRegionsRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUpcloudManagedObjectStorageRegionsRegionsToHclTerraform(struct?: DataUpcloudManagedObjectStorageRegionsRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUpcloudManagedObjectStorageRegionsRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUpcloudManagedObjectStorageRegionsRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUpcloudManagedObjectStorageRegionsRegions | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_zone - computed: true, optional: false, required: false
  public get primaryZone() {
    return this.getStringAttribute('primary_zone');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
}

export class DataUpcloudManagedObjectStorageRegionsRegionsList extends cdktf.ComplexList {
  public internalValue? : DataUpcloudManagedObjectStorageRegionsRegions[] | cdktf.IResolvable

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
  public get(index: number): DataUpcloudManagedObjectStorageRegionsRegionsOutputReference {
    return new DataUpcloudManagedObjectStorageRegionsRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/data-sources/managed_object_storage_regions upcloud_managed_object_storage_regions}
*/
export class DataUpcloudManagedObjectStorageRegions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_object_storage_regions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUpcloudManagedObjectStorageRegions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUpcloudManagedObjectStorageRegions to import
  * @param importFromId The id of the existing DataUpcloudManagedObjectStorageRegions that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/data-sources/managed_object_storage_regions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUpcloudManagedObjectStorageRegions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_managed_object_storage_regions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/data-sources/managed_object_storage_regions upcloud_managed_object_storage_regions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUpcloudManagedObjectStorageRegionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUpcloudManagedObjectStorageRegionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_object_storage_regions',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.22.0',
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
    this._regions.internalValue = config.regions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // regions - computed: false, optional: true, required: false
  private _regions = new DataUpcloudManagedObjectStorageRegionsRegionsList(this, "regions", true);
  public get regions() {
    return this._regions;
  }
  public putRegions(value: DataUpcloudManagedObjectStorageRegionsRegions[] | cdktf.IResolvable) {
    this._regions.internalValue = value;
  }
  public resetRegions() {
    this._regions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      regions: cdktf.listMapper(dataUpcloudManagedObjectStorageRegionsRegionsToTerraform, true)(this._regions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      regions: {
        value: cdktf.listMapperHcl(dataUpcloudManagedObjectStorageRegionsRegionsToHclTerraform, true)(this._regions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataUpcloudManagedObjectStorageRegionsRegionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
