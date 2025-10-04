/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/storage_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * User defined key-value pairs to classify the storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/storage_backup#labels StorageBackup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The UUID of the storage to back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/storage_backup#source_storage StorageBackup#source_storage}
  */
  readonly sourceStorage: string;
  /**
  * Title of the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/storage_backup#title StorageBackup#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/storage_backup upcloud_storage_backup}
*/
export class StorageBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_storage_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageBackup to import
  * @param importFromId The id of the existing StorageBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/storage_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_storage_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/storage_backup upcloud_storage_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBackupConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_storage_backup',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.28.0',
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
    this._labels = config.labels;
    this._sourceStorage = config.sourceStorage;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // encrypt - computed: true, optional: false, required: false
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // source_storage - computed: false, optional: false, required: true
  private _sourceStorage?: string; 
  public get sourceStorage() {
    return this.getStringAttribute('source_storage');
  }
  public set sourceStorage(value: string) {
    this._sourceStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStorageInput() {
    return this._sourceStorage;
  }

  // system_labels - computed: true, optional: false, required: false
  private _systemLabels = new cdktf.StringMap(this, "system_labels");
  public get systemLabels() {
    return this._systemLabels;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      source_storage: cdktf.stringToTerraform(this._sourceStorage),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      source_storage: {
        value: cdktf.stringToHclTerraform(this._sourceStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
